---
name: run-task-all
description: Runs the repository-wide validation, testing, and link checking suite (`task all`) and automatically fixes any encountered errors (validation errors, test failures, or broken links).
---

# Run Task All and Fix Issues

## Description

This skill automates running the repository's verification suite via `task all` (which performs cheatsheet validation, runs unit tests, and checks links) and provides a structured protocol to diagnose and fix any failures.

## Protocol

1. **Execute Verification Suite**:
   Run the command `task all` to execute all checks in parallel/sequence.
   
2. **Handle Validation Failures (`task validate`)**:
   If the validator script `scripts/validate_cheatsheets.ts` reports errors:
   - Check the printed error message to identify the target file and line.
   - For **malformed YAML front matter**: Fix the YAML syntax in the sheets file (ensure proper `syntax:` and `tags:` list).
   - For **invalid tags**: Ensure tags are formatted as a YAML list of strings (not a single string).
   - For **invalid docopt placeholders**: Check the docopt brackets. Placeholders should be in `<uppercase>` or `<lowercase>` without mismatched brackets/braces (e.g. `<placeholder}` or `{placeholder>`).
   
3. **Handle Unit Test Failures (`task test`)**:
   If Bun unit tests fail:
   - View the test failures in the console output.
   - If the failure is in the validator script implementation, debug and correct `scripts/validate_cheatsheets.ts`.
   - If the failure is in the test assertions, verify if the test case is obsolete or needs adjustment, and edit `tests/validate_cheatsheets.test.ts`.

4. **Handle Link Check Failures (`task linkcheck`)**:
   If `lychee` reports broken links:
   - Identify the file and URL that failed.
   - If the URL returned a temporary error (like 429 rate limit or 403 forbidden) but is valid: Make sure the URL domain is allowed/accepted under `--accept` in `Taskfile.yml`.
   - If the URL returned a redirect: Update the link in the source sheet (and regenerate site pages) to use the resolved direct URL.
   - If the URL is actually broken or changed: Search for the updated documentation URL and replace it.

5. **Regenerate Site Pages**:
   If any cheatsheet under `sheets/` was modified during the fix phase, run `task site:convert` to ensure the generated markdown files under `docs/` and `zensical.toml` are correctly rebuilt and in sync.

6. **Re-Verify**:
   Re-run `task all` to ensure all checks pass (0 errors).

## Examples

### Example 1: Fixing a malformed tag formatting error in a cheatsheet
If `task all` fails with:
```
[ERROR] sheets/git: tags must be a YAML list
```
Protocol action:
Edit `sheets/git` to correct the front matter format:
```yaml
---
syntax: bash
tags:
  - git
  - vcs
---
```
Then run:
```bash
task site:convert
task all
```

### Example 2: Fixing a redirect link check error
If `task all` fails with:
```
[docs/bash.md]:
[301] https://gnu.org/software/bash/ -> https://www.gnu.org/software/bash/
```
Protocol action:
Edit `sheets/bash` to replace `https://gnu.org/software/bash/` with the resolved `https://www.gnu.org/software/bash/`.
Then run:
```bash
task site:convert
task all
```
