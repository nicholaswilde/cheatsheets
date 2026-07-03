# Product Guidelines - Personal Cheatsheets

These guidelines ensure consistency, readability, and utility across all cheatsheets in this repository.

## 1. File Format & Metadata
*   **Extension:** File names should match the command/tool name with no extension (e.g., `git`, `docker`, not `git.txt` or `docker.sh`).
*   **Front Matter:** Every cheatsheet must begin with an optional YAML front matter block containing:
    *   `syntax`: Highlighting syntax (e.g., `bash`, `yaml`, `python`).
    *   `tags`: Category tags for filtering.

Example front matter:
```yaml
---
syntax: bash
tags:
  - vcs
  - development
---
```

## 2. Prose and Descriptions
*   **Tone:** Clear, direct, and imperative (e.g., "To commit staged changes:" instead of "How to commit your staged changes").
*   **Brevity:** Keep descriptions short and focused. A cheatsheet is a quick reference, not a tutorial.
*   **Comments:** Prefix description lines with a hash `#` to separate them from the commands.

## 3. Command Syntax & Placeholders
*   **Docopt Compliance:** Use docopt-style placeholders for variables/parameters (e.g., `<file>`, `<message>`).
*   **Edge Cases:** In cases where docopt might be ambiguous, use standard fallback values (e.g., `foo.txt`, `example.com`).

Example command formatting:
```sh
# To clone a repository:
git clone <repository_url> <directory>
```

## 4. Repository Structure
*   **Flat Structure:** All cheatsheet files must reside in the `./sheets/` directory for compatibility with `cheat` CLI paths.
*   **Hidden Directories:** Configuration and CI files should reside in dot directories (e.g., `.github/`).
