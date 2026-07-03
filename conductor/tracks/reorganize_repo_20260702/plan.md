# Implementation Plan - Repository Reorganization

This plan details the phases and tasks required to reorganize the cheatsheets repository.

## Phase 1: Directory Reorganization and File Migration [checkpoint: 2bca76b]

- [x] Task: Create new target directories (f7e696d)
    - [x] Create `./scripts/`, `./tests/`, `./sheets/`, and `./docs/` directories
- [x] Task: Migrate existing files (9dfe0a8)
    - [x] Move the 32 cheatsheet files from the root to `./sheets/`
    - [x] Move `validate_cheatsheets.py` to `./scripts/`
    - [x] Move `test_validate_cheatsheets.py` to `./tests/`
- [x] Task: Conductor - User Manual Verification 'Phase 1: Directory Reorganization and File Migration' (Protocol in workflow.md) (2bca76b)

## Phase 2: Code Updates and Documentation

- [x] Task: Update validator and test imports (f721ba7)
    - [x] Write failing test cases in `./tests/test_validate_cheatsheets.py` that verify the validator scans the `./sheets/` path (Red Phase)
    - [x] Modify `./scripts/validate_cheatsheets.py` to scan `./sheets/` and ensure all tests pass (Green Phase)
- [ ] Task: Update project documentation references
    - [ ] Update [README.md](file:///home/nicholas/git/nicholaswilde/cheatsheets/.github/README.md) to reference `./sheets/` instead of the root
    - [ ] Update [tech-stack.md](file:///home/nicholas/git/nicholaswilde/cheatsheets/conductor/tech-stack.md) to reference the new structure
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Code Updates and Documentation' (Protocol in workflow.md)
