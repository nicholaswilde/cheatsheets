# Specification - Repository Reorganization

## 1. Overview
The goal of this track is to reorganize the repository structure to improve organization and separate concerns. We will move cheatsheet files, scripts, tests, and documentation into dedicated directories.

## 2. Structural Requirements
*   **Cheatsheets:** All cheatsheet files (e.g. `bash`, `git`, `docker`, etc.) currently located in the root directory must be moved to a new `./sheets/` directory.
*   **Scripts:** The validation utility (`validate_cheatsheets.py`) must be moved to a new `./scripts/` directory.
*   **Tests:** The unit tests (`test_validate_cheatsheets.py`) must be moved to a new `./tests/` directory.
*   **Docs:** A new `./docs/` directory must be created for future documentation. Conductor-related documents will remain in `./conductor/`.

## 3. Code & Configuration Updates
*   **Validator Update:** Update the validator (`validate_cheatsheets.py`) to scan the `./sheets/` directory instead of the repository root.
*   **Test Suite Update:** Adjust the test suite imports to match the new location of the validator, and ensure `pytest` runs correctly.
*   **README.md Update:** Update the `README.md` to reflect the new `./sheets/` path (e.g., path in instructions, `cheatpaths` configuration).

## 4. Acceptance Criteria
*   The root directory contains no cheatsheet files, scripts, or tests.
*   All 32 cheatsheet files reside in `./sheets/`.
*   The validator script resides in `./scripts/` and successfully scans `./sheets/`.
*   The test suite resides in `./tests/` and passes completely.
*   The directory `./docs/` is created.
*   The `README.md` and other Conductor documents match the new file structure.
