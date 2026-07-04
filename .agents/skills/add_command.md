---
name: add-command-to-cheatsheet
description: Protocol to append new operations/commands and their descriptions to existing cheatsheets in the repository.
---

# Add Command to Existing Cheatsheet

## Description

This skill defines the workflow for adding a command to an existing cheatsheet file under `sheets/`. It enforces docopt compliance, ensures standard comment formatting (`# To <action>:`), and rebuilds the static site files.

## Protocol

1. **Locate Target Cheatsheet**:
   Ensure `sheets/<app_name>` exists.

2. **Execute Append Task**:
   Run the append task supplying the app name, command, and description:
   ```bash
   task site:add-command APP=<app_name> CMD="<command_string>" DESC="<description_text>"
   ```
   *Note: If the description begins with "To ", it will be automatically cleaned up and formatted.*

3. **Compile static docs**:
   Convert the sheets and update Zensical navigation:
   ```bash
   task site:convert
   ```

4. **Verify**:
   Run `task all` to verify that validation and link checking pass successfully.

## Examples

### Example: Adding version check to `jq`
Run:
```bash
task site:add-command APP=jq CMD="jq --version" DESC="Show jq version info"
```
Output appended to `sheets/jq`:
```
# To show jq version info:
jq --version
```
Rebuild and check:
```bash
task site:convert
task all
```
