# Technology Stack - Personal Cheatsheets

This document details the technologies, formats, and tools utilized in this cheatsheet project.

## 1. Cheatsheet File Format
*   **Plain Text:** Content is stored as plain-text files to guarantee high speed, portability, and readability in terminal environments.
*   **YAML Front Matter:** Used for metadata. Declares sheet settings, specifically:
    *   `syntax`: Highlighting syntax (e.g., `bash`, `python`, `go`).
    *   `tags`: Category classification.

## 2. CLI Integration
*   **Cheat Utility:** The primary frontend tool to search, view, and edit cheatsheets.
*   **Cheatpaths:** Configured path matching the location of this repository.

## 3. Storage and Synchronization
*   **NFS Mounts:** Storage directory `/mnt/storage/cheat/cheatsheets/personal` is mounted via NFS to provide central access across all Proxmox LXC containers.
*   **Git:** Version control is used to track changes, backup sheets to GitHub, and handle synchronization.
*   **Shell Aliases:** Preconfigured shell aliases (`cheats-pull` and `cheats-push`) simplify git workflows from any container terminal.

## 4. Validation and Testing
*   **Language:** Python 3 (version 3.13+)
*   **Testing Framework:** pytest (for running unit tests on the validator utility)
*   **Validator Script:** `validate_cheatsheets.py` scans cheatsheets locally for proper layout, front matter tags, and docopt compliant placeholders.
