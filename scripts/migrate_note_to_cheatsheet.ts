import * as fs from 'fs';
import * as path from 'path';

function cleanDescription(desc: string): string {
    return desc
        .replace(/^#+\s+/, '') // remove md heading symbols
        .replace(/:\s*$/, '')   // remove trailing colons
        .trim();
}

export function migrateContent(markdownContent: string, filename: string): string {
    const lines = markdownContent.split(/\r?\n/);
    let inFrontMatter = false;
    let frontMatterLines: string[] = [];
    let contentLines: string[] = [];
    let bodyStartIdx = 0;
    
    // Split front matter
    if (lines[0]?.trim() === '---') {
        inFrontMatter = true;
        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim() === '---') {
                bodyStartIdx = i + 1;
                inFrontMatter = false;
                break;
            }
            frontMatterLines.push(lines[i]);
        }
    }
    
    const bodyLines = bodyStartIdx > 0 ? lines.slice(bodyStartIdx) : lines;
    
    const cheatsheetSections: { description: string; command: string }[] = [];
    let currentDescription = 'Run command';
    let inCodeBlock = false;
    let codeBlockLanguage = '';
    let currentCodeLines: string[] = [];
    
    for (let i = 0; i < bodyLines.length; i++) {
        const line = bodyLines[i];
        const trimmed = line.trim();
        
        if (trimmed.startsWith('```')) {
            if (inCodeBlock) {
                // End of code block
                inCodeBlock = false;
                
                // Only keep short code blocks or command-like blocks
                const isCommandLang = ['bash', 'sh', 'shell', ''].includes(codeBlockLanguage.toLowerCase());
                const blockContent = currentCodeLines.join('\n').trim();
                const isShort = currentCodeLines.length <= 15;
                const looksLikeCommand = /^(docker|git|systemctl|service|apt|npm|yarn|pip|uv|cargo|gh|curl|wget|ssh|cat|grep|sed|awk|find|tar|zip|unzip|chmod|chown)\b/i.test(blockContent);
                
                if (blockContent && (isCommandLang || isShort || looksLikeCommand)) {
                    cheatsheetSections.push({
                        description: currentDescription,
                        command: blockContent
                    });
                }
                currentCodeLines = [];
            } else {
                // Start of code block
                inCodeBlock = true;
                codeBlockLanguage = trimmed.substring(3).trim();
            }
            continue;
        }
        
        if (inCodeBlock) {
            currentCodeLines.push(line);
        } else {
            // Parse non-code lines
            if (trimmed.startsWith('#')) {
                // Heading can be used as command description
                currentDescription = cleanDescription(trimmed);
            } else if (trimmed && !trimmed.startsWith('!') && !trimmed.startsWith('>')) {
                // Non-empty paragraph line can be used as description if it's short
                if (trimmed.length < 150 && trimmed.endsWith(':')) {
                    currentDescription = cleanDescription(trimmed);
                }
            }
        }
    }
    
    // Build cheatsheet content
    const output: string[] = [];
    output.push('---');
    output.push('syntax: bash');
    output.push('tags:');
    output.push('  - app');
    output.push('  - migration');
    output.push('---');
    output.push(`# ${filename}`);
    output.push(`# Cheatsheet migrated from personal notes.`);
    output.push('');
    
    for (const section of cheatsheetSections) {
        output.push(`# To ${section.description.toLowerCase()}:`);
        
        // Prefix command lines with proper formatting
        const cmdLines = section.command.split('\n');
        for (const cmdLine of cmdLines) {
            output.push(cmdLine);
        }
        output.push('');
    }
    
    return output.join('\n').trim() + '\n';
}

function main() {
    const args = process.argv.slice(2);
    const srcPath = args[0];
    
    if (!srcPath) {
        console.error('Usage: bun run scripts/migrate_note_to_cheatsheet.ts <path_to_markdown_file>');
        process.exit(1);
    }
    
    if (!fs.existsSync(srcPath)) {
        console.error(`Source file does not exist: ${srcPath}`);
        process.exit(1);
    }
    
    const baseName = path.basename(srcPath, '.md').toLowerCase();
    const destPath = path.join(process.cwd(), 'sheets', baseName);
    
    console.log(`Migrating ${srcPath} -> sheets/${baseName}...`);
    const content = fs.readFileSync(srcPath, 'utf-8');
    const migrated = migrateContent(content, baseName);
    
    fs.writeFileSync(destPath, migrated, 'utf-8');
    console.log(`Successfully migrated note to cheatsheet at: ${destPath}`);
    console.log('You can now run "task site:convert" to regenerate static site files.');
}

if (import.meta.main || (process.argv[1] && (process.argv[1].endsWith('migrate_note_to_cheatsheet.ts') || process.argv[1].endsWith('migrate_note_to_cheatsheet.js')))) {
    main();
}
