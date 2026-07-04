import { spawnSync } from 'child_process';

interface WorkflowRun {
    databaseId: number;
    name: string;
    headBranch: string;
    headSha: string;
    event: string;
    status: string;
    conclusion: string;
    createdAt: string;
    url: string;
}

export function getFailedRuns(limit: number = 5): WorkflowRun[] {
    const proc = spawnSync('gh', [
        'run',
        'list',
        '--limit',
        String(limit),
        '--status',
        'failure',
        '--json',
        'databaseId,name,headBranch,headSha,event,status,conclusion,createdAt,url'
    ], {
        encoding: 'utf-8'
    });
    
    if (proc.status !== 0) {
        console.error('Failed to execute gh run list:', proc.stderr);
        return [];
    }
    
    try {
        return JSON.parse(proc.stdout) as WorkflowRun[];
    } catch (e) {
        console.error('Failed to parse gh run list output:', e);
        return [];
    }
}

export function getFailedLog(runId: number): string {
    const proc = spawnSync('gh', [
        'run',
        'view',
        String(runId),
        '--log-failed'
    ], {
        encoding: 'utf-8'
    });
    
    if (proc.status !== 0) {
        console.error(`Failed to execute gh run view for run ${runId}:`, proc.stderr);
        return '';
    }
    
    return proc.stdout;
}

function main() {
    const args = process.argv.slice(2);
    const mode = args[0] || 'list';
    
    if (mode === 'list') {
        console.log('Fetching recent failed GitHub Actions workflow runs...');
        const runs = getFailedRuns(5);
        if (runs.length === 0) {
            console.log('No failed runs found!');
            return;
        }
        
        console.log('\nRecent Failed Runs:');
        console.log('==================');
        for (const run of runs) {
            console.log(`ID: ${run.databaseId}`);
            console.log(`Name: ${run.name}`);
            console.log(`Branch: ${run.headBranch}`);
            console.log(`Created: ${run.createdAt}`);
            console.log(`URL: ${run.url}`);
            console.log('------------------');
        }
    } else if (mode === 'view') {
        const runIdStr = args[1];
        if (!runIdStr) {
            console.error('Please specify a run ID: bun run scripts/check_failed_workflows.ts view <run_id>');
            process.exit(1);
        }
        
        const runId = parseInt(runIdStr, 10);
        console.log(`Fetching logs for failed run ${runId}...`);
        const log = getFailedLog(runId);
        if (!log) {
            console.log('No failed logs found or error reading logs.');
            return;
        }
        
        console.log('\nFailed Logs:');
        console.log('============');
        console.log(log);
    } else {
        console.log('Unknown mode. Usage:');
        console.log('  bun run scripts/check_failed_workflows.ts list');
        console.log('  bun run scripts/check_failed_workflows.ts view <run_id>');
    }
}

if (import.meta.main || (process.argv[1] && (process.argv[1].endsWith('check_failed_workflows.ts') || process.argv[1].endsWith('check_failed_workflows.js')))) {
    main();
}
