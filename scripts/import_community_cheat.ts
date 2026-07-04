import * as fs from 'fs';
import * as path from 'path';

const COMMUNITY_DIR = '/mnt/storage/cheat/cheatsheets/community';

export function importAndEvaluate(appName: string): void {
    const srcPath = path.join(COMMUNITY_DIR, appName);
    const destPath = path.join(process.cwd(), 'sheets', appName);
    
    if (!fs.existsSync(srcPath)) {
        console.error(`Community cheatsheet for '${appName}' not found in: ${COMMUNITY_DIR}`);
        process.exit(1);
    }
    
    console.log(`Found community cheatsheet for '${appName}'.`);
    const content = fs.readFileSync(srcPath, 'utf-8');
    
    // Add YAML front matter if not present
    let finalContent = content;
    if (!content.trim().startsWith('---')) {
        const frontMatter = [
            '---',
            'syntax: bash',
            'tags:',
            `  - ${appName}`,
            '  - community',
            '---',
            ''
        ].join('\n');
        finalContent = frontMatter + content;
    }
    
    fs.writeFileSync(destPath, finalContent, 'utf-8');
    console.log(`Successfully imported community cheatsheet to: sheets/${appName}`);
    
    // Evaluate and make recommendations
    console.log('\n=========================================');
    console.log(`Evaluation & Recommendations for '${appName}'`);
    console.log('=========================================');
    
    const lines = content.split(/\r?\n/);
    let hasMismatchedPlaceholders = false;
    let placeholderCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check for non-docopt placeholders like [value] or <value} or {value}
        if (/\[[a-zA-Z0-9_\-]+\]|\{[a-zA-Z0-9_\-]+\}/.test(line) && !line.trim().startsWith('#')) {
            hasMismatchedPlaceholders = true;
            console.log(`Line ${i + 1}: Non-docopt compliant placeholder found: "${line.trim()}"`);
        }
        
        if (/<[a-zA-Z0-9_\-]+>/.test(line)) {
            placeholderCount++;
        }
    }
    
    if (hasMismatchedPlaceholders) {
        console.log('\n[RECOMMENDATION] Placeholders should be formatted as <parameter> (docopt style).');
    } else {
        console.log('\n[OK] Placeholders seem to follow docopt standards.');
    }
    
    // Check if the sheets file has standard sections
    const hasVersionCheck = /--version\b|-v\b/i.test(content);
    const hasHelpCheck = /--help\b|-h\b/i.test(content);
    
    if (!hasVersionCheck) {
        console.log(`[RECOMMENDATION] Consider adding a command to check the version of ${appName} (e.g., \`${appName} --version\`).`);
    }
    if (!hasHelpCheck) {
        console.log(`[RECOMMENDATION] Consider adding a command to show the help documentation for ${appName} (e.g., \`${appName} --help\`).`);
    }
    
    console.log('\nNext steps:');
    console.log(`1. Edit sheets/${appName} to refine and apply recommendations.`);
    console.log('2. Run "task site:convert" to update the static site.');
    console.log('3. Run "task all" to verify formatting and validate links.');
}

function main() {
    const args = process.argv.slice(2);
    const appName = args[0];
    
    if (!appName) {
        console.error('Usage: bun run scripts/import_community_cheat.ts <app_name>');
        process.exit(1);
    }
    
    importAndEvaluate(appName);
}

if (import.meta.main || (process.argv[1] && (process.argv[1].endsWith('import_community_cheat.ts') || process.argv[1].endsWith('import_community_cheat.js')))) {
    main();
}
