import * as fs from 'fs';
import * as path from 'path';

// Files to exclude from migration (e.g. non-app commands or specific templates)
const EXCLUDED_FILES = new Set([
    'esphome.md',
    'readme.md',
    'index.md'
]);

function getCheatsheets(): Set<string> {
    const sheetsDir = path.join(process.cwd(), 'sheets');
    if (!fs.existsSync(sheetsDir)) {
        return new Set();
    }
    const files = fs.readdirSync(sheetsDir);
    return new Set(files.map(f => f.toLowerCase().trim()));
}

export function listCandidates(notesDir: string): string[] {
    const appsDir = path.join(notesDir, 'docs', 'apps');
    const fallbackDocsDir = path.join(notesDir, 'docs');
    
    let targetDir = '';
    if (fs.existsSync(appsDir)) {
        targetDir = appsDir;
    } else if (fs.existsSync(fallbackDocsDir)) {
        targetDir = fallbackDocsDir;
    } else {
        console.error(`Could not locate documentation directory in: ${notesDir}`);
        return [];
    }
    
    const existingSheets = getCheatsheets();
    const files = fs.readdirSync(targetDir);
    
    const candidates: string[] = [];
    
    for (const file of files) {
        const lowerFile = file.toLowerCase();
        if (lowerFile.endsWith('.md')) {
            if (EXCLUDED_FILES.has(lowerFile)) {
                continue;
            }
            
            const name = file.substring(0, file.length - 3).toLowerCase();
            if (!existingSheets.has(name)) {
                candidates.push(path.join(targetDir, file));
            }
        }
    }
    
    return candidates;
}

function main() {
    const args = process.argv.slice(2);
    const notesDir = args[0];
    
    if (!notesDir) {
        console.error('Usage: bun run scripts/list_notes_to_migrate.ts <path_to_notes_repository>');
        process.exit(1);
    }
    
    if (!fs.existsSync(notesDir)) {
        console.error(`Notes directory does not exist: ${notesDir}`);
        process.exit(1);
    }
    
    console.log(`Scanning Notes repository at: ${notesDir} ...`);
    const candidates = listCandidates(notesDir);
    
    if (candidates.length === 0) {
        console.log('No new candidate notes found for migration.');
        return;
    }
    
    console.log('\nCandidates for Migration:');
    console.log('=========================');
    for (const c of candidates) {
        const relPath = path.relative(process.cwd(), c);
        const name = path.basename(c, '.md');
        console.log(`- ${name} (Path: ${relPath})`);
    }
    console.log(`\nFound ${candidates.length} candidate(s).`);
}

if (import.meta.main || (process.argv[1] && (process.argv[1].endsWith('list_notes_to_migrate.ts') || process.argv[1].endsWith('list_notes_to_migrate.js')))) {
    main();
}
