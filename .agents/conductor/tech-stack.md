# Technology Stack - Personal Cheatsheets

This document details the technologies, formats, and tools utilized in this cheatsheet project.

## 1. Cheatsheet File Format
*   **Storage Directory:** `./sheets/` (flat directory structure).
*   **Plain Text:** Content is stored as plain-text files to guarantee high speed, portability, and readability in terminal environments.
*   **YAML Front Matter:** Used for metadata. Declares sheet settings, specifically:
    *   `syntax`: Highlighting syntax (e.g., `bash`, `python`, `go`).
    *   `tags`: Category classification.

## 2. CLI Integration
*   **Cheat Utility:** The primary frontend tool to search, view, and edit cheatsheets.
*   **Cheatpaths:** Configured path pointing to `./sheets/` inside the repository.

## 3. Storage and Synchronization
*   **NFS Mounts:** Storage directory `/mnt/storage/cheat/cheatsheets/personal/sheets` is mounted via NFS to provide central access across all Proxmox LXC containers.
*   **Git:** Version control is used in the repository root (`/mnt/storage/cheat/cheatsheets/personal`) to track changes, backup sheets to GitHub, and handle synchronization.
*   **Shell Aliases:** Preconfigured shell aliases (`cheats-pull` and `cheats-push`) simplify git workflows from any container terminal.

## 4. Validation and Testing
*   **Language:** Bun & TypeScript (with Bash as a secondary scripting language)
*   **Testing Framework:** Bun Test (for running unit tests on the validator utility)
*   **Validator Script:** `scripts/validate_cheatsheets.ts` scans cheatsheets locally for proper layout, front matter tags, and docopt compliant placeholders.
*   **Task Runner:** `go-task` (Taskfile.yml) is used to automate validation, testing, and other repository development workflows.
*   **Link Checker:** `lychee` is used to verify external and internal hyperlinks across sheets and documentation.

## 5. Static Site Generation
*   **Static Site Generator:** Zensical (Python-based, Rust-powered static site generator)
*   **Package Management:** `uv` (for local dependency installation, virtual environment, and execution)
*   **Asset Management:** Custom CSS (`neoteroi-mkdocs.css`, `extra.css`) and JavaScript (`mathjax.js`) for rendering formulas and timeline features
*   **Conversion Utility:** A custom TypeScript script (`scripts/convert_cheatsheets.ts`) converts flat sheets into Zensical markdown pages and automatically updates the site's navigation menu.

