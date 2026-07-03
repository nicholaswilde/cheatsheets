# Specification - Cheatsheet Validation and Linting

## Overview
As a cheatsheet repository, maintaining structural and formatting consistency is vital for integration with tools like `cheat`. This specification defines a validation utility to automatically lint all cheatsheet files in the repository.

## Requirements

### 1. File Selection & Exclusions
*   Identify all files in the root directory.
*   Exclude hidden files/directories (starting with `.`) and files/directories registered in `conductor/`.

### 2. Validation Checks

#### A. Front Matter Check
*   The cheatsheet may optionally begin with a YAML front matter block (delimited by `---`).
*   If front matter is present, it must contain:
    *   `syntax`: A string field specifying highlighting (e.g., `bash`, `python`, `go`).
    *   `tags`: A list of strings.

#### B. Structure Check
*   Descriptions of commands must be comments starting with `# ` (e.g., `# To stage all changes:`).
*   Commands must immediately follow the description comment line.
*   No empty/uncommented lines without commands or headings.

#### C. Placeholders Check
*   Ensure that parameter placeholders are formatted using docopt-style angle brackets (e.g., `<file_name>`, `<message>`).

## Deliverables
1.  **Validator Script (`validate_cheatsheets.py`):** A command-line Python utility.
2.  **Test Suite (`test_validate_cheatsheets.py`):** A pytest-based unit test suite.
3.  **Local Check/Task Command:** Integration into a task runner or local script for easy execution.
