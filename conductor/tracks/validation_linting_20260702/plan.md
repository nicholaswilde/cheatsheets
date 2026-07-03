# Implementation Plan - Cheatsheet Validation and Linting

This plan defines the steps to implement the cheatsheet validation script.

## Phase 1: Validator Core and Front Matter Parsing [checkpoint: d46a593]

- [x] Task: Project setup and testing harness (9aca86b)
    - [x] Create pytest testing boilerplate `test_validate_cheatsheets.py`
    - [x] Run test suite to verify testing framework functionality
- [x] Task: Validate YAML Front Matter parsing (db02dfc)
    - [x] Write failing test cases for valid and invalid YAML front matter headers in `test_validate_cheatsheets.py` (Red Phase)
    - [x] Implement front matter extraction and YAML validation in `validate_cheatsheets.py` to make the tests pass (Green Phase)
- [x] Task: Conductor - User Manual Verification 'Phase 1: Validator Core and Front Matter Parsing' (Protocol in workflow.md) (d46a593)

## Phase 2: Structure and Formatting Rules

- [x] Task: Validate description and command layout (8664535)
    - [x] Write failing test cases for correct mapping of descriptions (comments starting with `# `) and command lines (Red Phase)
    - [x] Implement checks for sequential description-command layout in `validate_cheatsheets.py` (Green Phase)
- [x] Task: Validate placeholder docopt compliance (fdfeff3)
    - [x] Write failing test cases to check for docopt syntax placeholders (e.g. `<message>`) in command lines (Red Phase)
    - [x] Implement regex-based placeholder checking in `validate_cheatsheets.py` (Green Phase)
- [x] Task: Run validator on existing cheatsheets (0104ebe)
    - [x] Run validator tool on all sheets in the root directory to log issues and report status
- [~] Task: Conductor - User Manual Verification 'Phase 2: Structure and Formatting Rules' (Protocol in workflow.md)
