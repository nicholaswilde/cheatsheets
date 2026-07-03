# Implementation Plan - Cheatsheet Validation and Linting

This plan defines the steps to implement the cheatsheet validation script.

## Phase 1: Validator Core and Front Matter Parsing

- [x] Task: Project setup and testing harness (9aca86b)
    - [x] Create pytest testing boilerplate `test_validate_cheatsheets.py`
    - [x] Run test suite to verify testing framework functionality
- [ ] Task: Validate YAML Front Matter parsing
    - [ ] Write failing test cases for valid and invalid YAML front matter headers in `test_validate_cheatsheets.py` (Red Phase)
    - [ ] Implement front matter extraction and YAML validation in `validate_cheatsheets.py` to make the tests pass (Green Phase)
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Validator Core and Front Matter Parsing' (Protocol in workflow.md)

## Phase 2: Structure and Formatting Rules

- [ ] Task: Validate description and command layout
    - [ ] Write failing test cases for correct mapping of descriptions (comments starting with `# `) and command lines (Red Phase)
    - [ ] Implement checks for sequential description-command layout in `validate_cheatsheets.py` (Green Phase)
- [ ] Task: Validate placeholder docopt compliance
    - [ ] Write failing test cases to check for docopt syntax placeholders (e.g. `<message>`) in command lines (Red Phase)
    - [ ] Implement regex-based placeholder checking in `validate_cheatsheets.py` (Green Phase)
- [ ] Task: Run validator on existing cheatsheets
    - [ ] Run validator tool on all sheets in the root directory to log issues and report status
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Structure and Formatting Rules' (Protocol in workflow.md)
