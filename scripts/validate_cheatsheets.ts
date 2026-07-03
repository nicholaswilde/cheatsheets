import * as fs from 'fs';
import * as path from 'path';

export const INVALID_PLACEHOLDER_REGEX = /(?:\{\{[a-zA-Z_][a-zA-Z0-9_-]*\}\}|\{[a-zA-Z_][a-zA-Z0-9_-]*\}|\[[a-zA-Z_][a-zA-Z0-9_-]*\])/g;

export function validateContent(content: string): string[] {
    const errors: string[] = [];
    const lines = content.split(/\r?\n/);
    if (lines.length === 0 || (lines.length === 1 && lines[0].trim() === '')) {
        return errors;
    }
    
    let endIdx = -1;
    if (lines[0].trim() === '---') {
        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim() === '---') {
                endIdx = i;
                break;
            }
        }
        if (endIdx === -1) {
            errors.push("Malformed front matter: missing closing '---'");
            return errors;
        }
        
        const frontMatterLines = lines.slice(1, endIdx);
        const parsed: Record<string, any> = {};
        let currentKey: string | null = null;
        
        for (const line of frontMatterLines) {
            const stripped = line.trim();
            if (!stripped || stripped.startsWith('#')) {
                continue;
            }
            
            if (line.startsWith('  - ') || line.startsWith('    - ')) {
                const val = line.substring(line.indexOf('-') + 1).trim();
                if (currentKey) {
                    if (!Array.isArray(parsed[currentKey])) {
                        if (parsed[currentKey] === undefined || parsed[currentKey] === null || parsed[currentKey] === '') {
                            parsed[currentKey] = [];
                        } else {
                            parsed[currentKey] = [parsed[currentKey]];
                        }
                    }
                    parsed[currentKey].push(val);
                } else {
                    errors.push("YAML Syntax Error: list item without a key");
                }
            } else if (line.includes(':')) {
                const parts = line.split(':');
                const key = parts[0].trim();
                const val = parts.slice(1).join(':').trim();
                currentKey = key;
                
                if ((val.startsWith('[') && !val.endsWith(']')) || (val.startsWith('{') && !val.endsWith('}'))) {
                    errors.push(`YAML Syntax Error: unclosed flow collection '${val}'`);
                    parsed[key] = val;
                } else if (!val) {
                    parsed[key] = null;
                } else {
                    parsed[key] = val;
                }
            } else {
                errors.push(`YAML Syntax Error: invalid line '${line}'`);
            }
        }
        
        if (!('syntax' in parsed)) {
            errors.push("Missing 'syntax' field in front matter");
        } else if (!parsed.syntax) {
            errors.push("'syntax' field cannot be empty");
        }
        
        if (!('tags' in parsed)) {
            errors.push("Missing 'tags' field in front matter");
        } else {
            const tagsVal = parsed.tags;
            if (!Array.isArray(tagsVal)) {
                errors.push("'tags' must be a list");
            }
        }
    }
    
    // Structure and layout checks
    const scanStart = endIdx + 1;
    let lastType: 'heading' | 'description' | 'comment' | 'command' | null = null;
    
    for (let i = scanStart; i < lines.length; i++) {
        const line = lines[i];
        const stripped = line.trim();
        if (!stripped) {
            continue;
        }
        
        if (line.startsWith('##')) {
            lastType = 'heading';
        } else if (line.startsWith('# ')) {
            lastType = 'description';
        } else if (line.startsWith('#')) {
            lastType = 'comment';
        } else {
            // It's a command
            if (lastType !== 'description' && lastType !== 'command') {
                errors.push(`Line ${i + 1}: Command without description: '${stripped}'`);
            }
            
            const invalidMatches = stripped.match(INVALID_PLACEHOLDER_REGEX);
            if (invalidMatches) {
                errors.push(`Line ${i + 1}: Use of non-docopt placeholder style: ${invalidMatches.join(', ')}. Prefer '<placeholder_name>'.`);
            }
            
            lastType = 'command';
        }
    }
    
    return errors;
}

export function getCheatsheetsDir(): string {
    const scriptDir = path.dirname(path.resolve(import.meta.path || __filename));
    const rootDir = path.dirname(scriptDir);
    return path.join(rootDir, 'sheets');
}

export function main() {
    const sheetsDir = getCheatsheetsDir();
    if (!fs.existsSync(sheetsDir)) {
        console.error(`Sheets directory does not exist: ${sheetsDir}`);
        process.exit(1);
    }
    
    const files = fs.readdirSync(sheetsDir);
    const filesToCheck = files.filter(name => {
        if (name.startsWith('.')) return false;
        if (['README.md', 'LICENSE'].includes(name)) return false;
        return fs.statSync(path.join(sheetsDir, name)).isFile();
    });
    
    let totalErrors = 0;
    const totalFiles = filesToCheck.length;
    let validFiles = 0;
    
    console.log(`Scanning ${totalFiles} cheatsheets...`);
    for (const filename of filesToCheck.sort()) {
        const filepath = path.join(sheetsDir, filename);
        try {
            const content = fs.readFileSync(filepath, 'utf-8');
            const errors = validateContent(content);
            if (errors.length > 0) {
                console.log(`[FAIL] ${filename}:`);
                for (const err of errors) {
                    console.log(`  - ${err}`);
                }
                totalErrors += errors.length;
            } else {
                validFiles++;
            }
        } catch (e) {
            console.log(`[ERROR] Failed to read ${filename}: ${e}`);
            totalErrors++;
        }
    }
    
    console.log(`\nSummary: ${validFiles}/${totalFiles} files passed. ${totalErrors} total errors.`);
    if (totalErrors > 0) {
        process.exit(1);
    } else {
        process.exit(0);
    }
}

if (import.meta.main) {
    main();
}
