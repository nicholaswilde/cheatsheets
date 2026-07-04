import * as fs from 'fs';
import * as path from 'path';

function main() {
    const args = process.argv.slice(2);
    const appName = args[0];
    const command = args[1];
    let description = args[2] || 'execute command';
    
    if (!appName || !command) {
        console.error('Usage: bun run scripts/add_command_to_cheatsheet.ts <app_name> <command> [description]');
        process.exit(1);
    }
    
    const filePath = path.join(process.cwd(), 'sheets', appName.toLowerCase().trim());
    
    if (!fs.existsSync(filePath)) {
        console.error(`Cheatsheet file sheets/${appName} does not exist.`);
        process.exit(1);
    }
    
    // Clean up description
    description = description.trim();
    if (description.toLowerCase().startsWith('to ')) {
        description = description.substring(3).trim();
    }
    if (description.endsWith(':')) {
        description = description.substring(0, description.length - 1).trim();
    }
    
    const block = [
        '',
        `# To ${description.toLowerCase()}:`,
        command.trim()
    ].join('\n');
    
    console.log(`Adding command to sheets/${appName}...`);
    fs.appendFileSync(filePath, block + '\n', 'utf-8');
    console.log('Successfully added command!');
    console.log(`\nAdded content:`);
    console.log(block);
    console.log('\nNext steps:');
    console.log('1. Run "task site:convert" to update the static site.');
    console.log('2. Run "task all" to verify formatting and validate links.');
}

if (import.meta.main || (process.argv[1] && (process.argv[1].endsWith('add_command_to_cheatsheet.ts') || process.argv[1].endsWith('add_command_to_cheatsheet.js')))) {
    main();
}
