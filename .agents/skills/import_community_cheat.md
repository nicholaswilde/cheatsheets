---
name: import-community-cheat
description: Protocol to search, copy, evaluate, and integrate community cheatsheets into the personal cheatsheets collection.
---

# Import and Evaluate Community Cheatsheets

## Description

This skill defines the workflow to fetch a cheatsheet from the local community store (`/mnt/storage/cheat/cheatsheets/community`), analyze it for formatting standards (docopt placeholders), append missing basic commands, and rebuild the static site.

## Protocol

1. **Run Import Task**:
   Import the target community sheet:
   ```bash
   task site:import-community APP=<app_name>
   ```
   This copies the file to `sheets/<app_name>` with default YAML front matter and prints an initial evaluation/recommendation list.

2. **Analyze and Refine**:
   Open `sheets/<app_name>` and:
   - Convert all non-docopt placeholders (e.g. `[path]` or `{path}`) to `<path>`.
   - Implement recommended commands (like `-v` / `--version` or `-h` / `--help`).
   - Clean up comment structures.

3. **Compile static docs**:
   Convert the sheets and update Zensical navigation:
   ```bash
   task site:convert
   ```

4. **Verify**:
   Run `task all` to verify that validation and link checking pass successfully.

## Examples

### Example: Importing community `curl` cheatsheet
1. Run import:
   ```bash
   task site:import-community APP=curl
   ```
2. Open `sheets/curl` to ensure placeholder standard compliance:
   - Change `curl -o [output] [url]` to `curl -o <output> <url>`
3. Rebuild and check:
   ```bash
   task site:convert
   task all
   ```
