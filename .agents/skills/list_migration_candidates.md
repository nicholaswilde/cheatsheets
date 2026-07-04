---
name: list-migration-candidates
description: Protocol to list candidate application markdown note pages from the nicholaswilde/notes repository eligible for cheatsheet migration.
---

# List Notes Migration Candidates

## Description

This skill defines the workflow to scan the `nicholaswilde/notes` repository, compare its pages against existing cheatsheets, filter out excluded files (like config templates and esphome), and present a list of eligible candidates for migration.

## Protocol

1. **Locate Notes Directory**:
   Confirm the location of the `nicholaswilde/notes` repository clone.

2. **Execute Listing Task**:
   Run the task to scan for candidates:
   ```bash
   task site:list-migration-candidates NOTES_DIR=/path/to/notes
   ```
   This automatically filters out already-migrated sheets and files defined in the exclusion list.

3. **Present Candidates**:
   Output the list of eligible candidates, showing their target sheet name and source path.

## Examples

### Example: Listing candidate pages
Run:
```bash
task site:list-migration-candidates NOTES_DIR=../notes
```
Output:
```
Candidates for Migration:
=========================
- logward (Path: ../notes/docs/apps/logward.md)
- trilium (Path: ../notes/docs/apps/trilium.md)

Found 2 candidate(s).
```
