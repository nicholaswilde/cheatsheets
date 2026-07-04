---
name: check-and-fix-workflows
description: Systematic process to check recent GitHub Actions workflow runs for failures, fetch and analyze logs, apply required fixes, and verify them.
---

# Check and Fix Failed Workflows

## Description

This skill automates and structures the process of detecting, diagnosing, and repairing failures in the repository's GitHub Actions workflow runs using local tools and helper scripts.

## Protocol

1. **List Failed Runs**:
   Run `task ci:failed` to fetch recent workflow runs that ended in failure.
   
2. **View Logs for Specific Failures**:
   For the most recent or relevant failed run ID, run:
   ```bash
   task ci:failed-view RUN_ID=<database_id>
   ```
   Inspect the output to find the exact step and error message.

3. **Common Failure Resolutions**:
   - **`error: Bun could not find a package.json file to install from`**:
     If a workflow runs `bun install` but the repository has no `package.json`, remove both the `bun install` step and the `Cache Bun dependencies` step from the `.github/workflows/` YAML file.
   - **`task: command not found`**:
     If a step fails calling `task` because it was not added to the path, replace the manual curl installation with the `arduino/setup-task@v2` action.
   - **`docs/ not found as file and not a valid URL` (or missing repo folders in lychee)**:
     Ensure the workflow's dependency installation step does not run a cleanup command (e.g. `rm -rf docs/` or similar) that inadvertently deletes repository folders. If needed, perform the download and extraction in a temp directory (like `/tmp/lychee`).
   - **Link Check / Lychee Timeouts or Rate Limits**:
     If a workflow fails on connection timeouts (e.g., `gnu.org`), add the domain to the `exclude` list in `lychee.toml`.

4. **Verify Locally**:
   Run `task all` locally to make sure validation, tests, and link checks succeed on the local workspace.

5. **Commit and Push**:
   Add the modified files, commit using the Conventional Commits format (e.g., `fix(ci): fix lychee setup in ci.yml`), and push to `main`.

6. **Verify the Push Run**:
   Run `task ci:failed` again after a couple of minutes to monitor the status of the new run.

## Examples

### Example: Fixing a "task: command not found" error in a workflow
1. Detect the failure:
   ```bash
   task ci:failed
   ```
   Output:
   ```
   ID: 28688512911
   Name: Convert Cheatsheets
   Branch: main
   ```
2. View the log:
   ```bash
   task ci:failed-view RUN_ID=28688512911
   ```
   Output:
   ```
   convert	Run conversion	task: command not found
   ```
3. Action:
   Update the workflow YAML file to use `arduino/setup-task@v2`.
4. Push:
   ```bash
   git add .github/workflows/convert.yml
   git commit -m "fix(ci): use setup-task action in convert workflow"
   git push origin main
   ```
