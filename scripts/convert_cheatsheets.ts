import * as fs from 'fs';
import * as path from 'path';

export function parseCheatsheet(filename: string, bodyLines: string[], syntax: string): { title: string, description: string, markdown: string } {
    let title = filename;
    let description = '';
    
    let i = 0;
    
    // Skip leading empty lines
    while (i < bodyLines.length && !bodyLines[i].trim()) {
        i++;
    }
    
    if (i < bodyLines.length) {
        const line = bodyLines[i];
        if (line.startsWith('#') && !line.startsWith('##')) {
            const cleanComment = line.substring(line.startsWith('# ') ? 2 : 1).trim();
            if (cleanComment.toLowerCase() === filename.toLowerCase()) {
                title = cleanComment; // Use the case from the file comment, or default to filename
                i++; // consume title comment
                
                // Try to consume page description comments up to the first empty line
                const descComments: string[] = [];
                let hasEmptyLine = false;
                let j = i;
                
                while (j < bodyLines.length) {
                    const nextLine = bodyLines[j];
                    const nextStripped = nextLine.trim();
                    if (!nextStripped) {
                        hasEmptyLine = true;
                        break;
                    }
                    if (nextLine.startsWith('#') && !nextLine.startsWith('##')) {
                        descComments.push(nextLine.substring(nextLine.startsWith('# ') ? 2 : 1).trim());
                        j++;
                    } else {
                        // Hit a command or heading before an empty line
                        break;
                    }
                }
                
                if (hasEmptyLine) {
                    description = descComments.join('\n\n');
                    i = j + 1; // skip past description and the empty line
                }
            }
        }
    }
    
    const outputLines: string[] = [];
    let currentDescLines: string[] = [];
    let currentCommandLines: string[] = [];
    
    const flushAdmonition = () => {
        if (currentCommandLines.length === 0) {
            if (currentDescLines.length > 0) {
                for (const desc of currentDescLines) {
                    outputLines.push(desc);
                }
                outputLines.push('');
                currentDescLines = [];
            }
            return;
        }
        
        let admonitionTitle = 'Usage';
        let extraNotes: string[] = [];
        
        if (currentDescLines.length > 0) {
            admonitionTitle = currentDescLines[0];
            if (admonitionTitle.endsWith(':') || admonitionTitle.endsWith('.')) {
                admonitionTitle = admonitionTitle.substring(0, admonitionTitle.length - 1);
            }
            extraNotes = currentDescLines.slice(1);
        }
        
        outputLines.push(`!!! info "${admonitionTitle}"`);
        for (const note of extraNotes) {
            outputLines.push(`    ${note}`);
        }
        if (extraNotes.length > 0) {
            outputLines.push('');
        }
        outputLines.push(`    \`\`\`${syntax}`);
        for (const cmd of currentCommandLines) {
            outputLines.push(`    ${cmd}`);
        }
        outputLines.push('    ```');
        outputLines.push('');
        
        currentDescLines = [];
        currentCommandLines = [];
    };
    
    while (i < bodyLines.length) {
        const line = bodyLines[i];
        const stripped = line.trim();
        
        if (!stripped) {
            i++;
            continue;
        }
        
        if (line.startsWith('##')) {
            flushAdmonition();
            outputLines.push(line);
            outputLines.push('');
            i++;
        } else if (line.startsWith('#')) {
            if (currentCommandLines.length > 0) {
                flushAdmonition();
            }
            const cleanComment = line.substring(line.startsWith('# ') ? 2 : 1).trim();
            currentDescLines.push(cleanComment);
            i++;
        } else {
            currentCommandLines.push(line);
            i++;
        }
    }
    
    flushAdmonition();
    
    return {
        title,
        description,
        markdown: outputLines.join('\n').trim()
    };
}

function convertFile(filename: string, srcPath: string, destPath: string): { title: string, filename: string } {
    const content = fs.readFileSync(srcPath, 'utf-8');
    const lines = content.split(/\r?\n/);
    
    let syntax = 'bash';
    let tags: string[] = [];
    let endIdx = -1;
    
    // Parse YAML front matter
    if (lines[0]?.trim() === '---') {
        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim() === '---') {
                endIdx = i;
                break;
            }
        }
        if (endIdx !== -1) {
            const fmLines = lines.slice(1, endIdx);
            let currentKey = '';
            for (const line of fmLines) {
                const stripped = line.trim();
                if (!stripped || stripped.startsWith('#')) continue;
                if (line.startsWith('  - ') || line.startsWith('    - ')) {
                    const val = line.substring(line.indexOf('-') + 1).trim();
                    if (currentKey === 'tags') {
                        tags.push(val);
                    }
                } else if (line.includes(':')) {
                    const parts = line.split(':');
                    const key = parts[0].trim();
                    const val = parts.slice(1).join(':').trim();
                    currentKey = key;
                    if (key === 'syntax') {
                        syntax = val;
                    }
                }
            }
        }
    }
    
    const bodyLines = endIdx !== -1 ? lines.slice(endIdx + 1) : lines;
    const { title, description, markdown } = parseCheatsheet(filename, bodyLines, syntax);
    
    const outputLines: string[] = [];
    
    // Write out new front matter with tags
    if (tags.length > 0) {
        outputLines.push('---');
        outputLines.push('tags:');
        for (const t of tags) {
            outputLines.push(`  - ${t}`);
        }
        outputLines.push('---');
        outputLines.push('');
    }
    
    // Always use the lowercase/exact filename as the main title if instructed by user
    // e.g. jq -> jq
    outputLines.push(`# ${filename}`);
    outputLines.push('');
    if (description) {
        outputLines.push(description);
        outputLines.push('');
    }
    
    if (markdown) {
        outputLines.push(markdown);
    }
    
    fs.writeFileSync(destPath, outputLines.join('\n').trim() + '\n', 'utf-8');
    
    return { title: filename, filename };
}

export function main() {
    const scriptDir = path.dirname(path.resolve(import.meta.path || __filename));
    const rootDir = path.dirname(scriptDir);
    const sheetsDir = path.join(rootDir, 'sheets');
    const docsDir = path.join(rootDir, 'docs');
    const tomlPath = path.join(rootDir, 'zensical.toml');
    
    if (!fs.existsSync(sheetsDir)) {
        console.error(`Source sheets directory does not exist: ${sheetsDir}`);
        process.exit(1);
    }
    
    if (!fs.existsSync(docsDir)) {
        fs.mkdirSync(docsDir, { recursive: true });
    }
    
    const files = fs.readdirSync(sheetsDir);
    const filesToConvert = files.filter(name => {
        if (name.startsWith('.')) return false;
        if (['README.md', 'LICENSE'].includes(name)) return false;
        return fs.statSync(path.join(sheetsDir, name)).isFile();
    });
    
    console.log(`Converting ${filesToConvert.length} cheatsheets to Zensical pages...`);
    const convertedSheets: { title: string, filename: string }[] = [];
    
    for (const filename of filesToConvert) {
        const srcPath = path.join(sheetsDir, filename);
        const destPath = path.join(docsDir, `${filename}.md`);
        const result = convertFile(filename, srcPath, destPath);
        convertedSheets.push(result);
    }
    
    // Sort converted sheets alphabetically by title
    convertedSheets.sort((a, b) => a.title.localeCompare(b.title));
    
    // Update zensical.toml nav block
    if (fs.existsSync(tomlPath)) {
        console.log('Updating zensical.toml navigation...');
        let tomlContent = fs.readFileSync(tomlPath, 'utf-8');
        
        const navLines: string[] = [];
        navLines.push('[[project.nav]]');
        navLines.push('Home = "index.md"');
        navLines.push('');
        navLines.push('[[project.nav]]');
        navLines.push('Cheatsheets = [');
        for (let k = 0; k < convertedSheets.length; k++) {
            const { title, filename } = convertedSheets[k];
            const key = title.includes(' ') || title.includes('-') || title.includes('/') ? `"${title}"` : title;
            const comma = k === convertedSheets.length - 1 ? '' : ',';
            navLines.push(`  { ${key} = "${filename}.md" }${comma}`);
        }
        navLines.push(']');
        
        const newNavBlock = navLines.join('\n');
        
        // Match from [[project.nav]] to the next section [project.extra]
        const navRegex = /\[\[project\.nav\]\][\s\S]*?(?=\n\n?\[project\.extra\])/;
        if (navRegex.test(tomlContent)) {
            tomlContent = tomlContent.replace(navRegex, newNavBlock);
            fs.writeFileSync(tomlPath, tomlContent, 'utf-8');
            console.log('zensical.toml navigation updated successfully!');
        } else {
            console.warn('Could not locate project.nav or project.extra in zensical.toml. Navigation was not updated.');
        }
    }
    
    console.log('Conversion complete!');
}

if (import.meta.main || (process.argv[1] && (process.argv[1].endsWith('convert_cheatsheets.ts') || process.argv[1].endsWith('convert_cheatsheets.js')))) {
    main();
}
