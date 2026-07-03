# Implementation Plan - Repository Reorganization

This plan details the phases and tasks required to reorganize the cheatsheets repository.

## Phase 1: Directory Reorganization and File Migration

- [x] Task: Create new target directories (f7e696d)
    - [x] Create `./scripts/`, `./tests/`, `./sheets/`, and `./docs/` directories
- [~] Task: Migrate existing files
    - [ ] Move the 32 cheatsheet files from the root to `./sheets/`
    - [ ] Move `validate_cheatsheets.py` to `./scripts/`
    - [ ] Move `test_validate_cheatsheets.py` to `./tests/`
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Directory Reorganization and File Migration' (Protocol in workflow.md)

## Phase 2: Code Updates and Documentation

- [ ] Task: Update validator and test imports
    - [ ] Write failing test cases in `./tests/test_validate_cheatsheets.py` that verify the validator scans the `./sheets/` path (Red Phase)
    - [ ] Modify `./scripts/validate_cheatsheets.py` to scan `./sheets/` and ensure all tests pass (Green Phase)
- [ ] Task: Update project documentation references
    - [ ] Update [README.md](file:///home/nicholas/git/nicholaswilde/cheatsheets/.github/README.md) to reference `./sheets/` instead of the root
    - [ ] Update [tech-stack.md](file:///home/nicholas/git/nicholaswilde/cheatsheets/conductor/tech-stack.md) to reference the new structure
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Code Updates and Documentation' (Protocol in workflow.md)
