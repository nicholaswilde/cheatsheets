---
name: migrate-notes-apps
description: Protocol to migrate technical notes from the nicholaswilde/notes repository to cheatsheets using the custom migration helper.
---

# Migrate Notes Apps to Cheatsheets

## Description

This skill defines the workflow to locate, convert, clean up, and integrate application command notes from the `nicholaswilde/notes` repository into the personal cheatsheets collection.

## Protocol

1. **Locate Source files**:
   Find the path to the clone of the `nicholaswilde/notes` repository. App notes reside in the `docs/apps/` directory (e.g., `docs/apps/docker.md`, `docs/apps/syncthing.md`). Only migrate pages focusing on command lines and operations (ignore configuration templates like `esphome` or raw compose YAML configs).

2. **Run Migration Task**:
   Run the migration script via the task runner:
   ```bash
   task site:migrate-note FILE=/path/to/notes/docs/apps/<name>.md
   ```
   This generates a raw cheatsheet under `sheets/<name>` (lowercase).

3. **Verify and Format Cheatsheet**:
   Open `sheets/<name>` and verify:
   - Command descriptions are formatted as `# To <do something>:`
   - Parameters follow [docopt](http://docopt.org) syntax (`<parameter>` instead of `{parameter}` or `[parameter]`).
   - Remove any extraneous non-command lines or large configuration templates.

4. **Regenerate Site Pages**:
   Run the static site converter task:
   ```bash
   task site:convert
   ```
   This compiles the cheatsheets into Zensical markdown docs under `docs/` and updates the navigation blocks.

5. **Verify Suite**:
   Run `task all` to execute cheatsheet validation, tests, and link checks on the workspace. Fix any errors that occur.

## Examples

### Example: Migrating a Gitea note
1. Run migration:
   ```bash
   task site:migrate-note FILE=../notes/docs/apps/gitea.md
   ```
2. Inspect `sheets/gitea` and ensure docopt compliance:
   ```yaml
   ---
   syntax: bash
   tags:
     - app
     - migration
   ---
   # gitea
   # Cheatsheet migrated from personal notes.

   # To restart gitea service:
   systemctl restart gitea
   ```
3. Convert and verify:
   ```bash
   task site:convert
   task all
   ```
