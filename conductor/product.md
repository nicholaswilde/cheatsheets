# Product Guide - Personal Cheatsheets

## 1. Product Vision
The goal of this project is to maintain a central, highly accessible, and standardized repository of personal command-line cheatsheets. These cheatsheets supplement community-sourced guides and serve as a reliable reference for homelab administration, software development, and system configuration.

## 2. Target Audience & Environment
*   **Target User:** System Administrator / Developer (Nicholas Wilde).
*   **Environment:** Access from multiple Proxmox LXC containers via an NFS-mounted directory (`/mnt/storage/cheat/cheatsheets/personal`).

## 3. Key Features & Workflows
*   **CLI Integration:** Direct usage with the `cheat` command-line utility for viewing and editing.
*   **Cross-Container Sync:** Centralized NFS storage combined with simple shell aliases (`cheats-pull`, `cheats-push`) to pull and push updates to the remote Git repository.
*   **Standardized Front Matter:** YAML-based front matter block declaring the sheet syntax (for syntax highlighting) and tags (for classification).
*   **Docopt-compliant Syntax:** Use of docopt syntax for command placeholders to maintain clarity and standard formatting.

## 4. Scope and Success Criteria
*   High consistency across all cheatsheets (metadata syntax, formatting).
*   Frictionless workflow for creating, editing, and syncing cheatsheets.
*   Comprehensive coverage of homelab tools (e.g., Ansible, Proxmox, YubiKey, Docker, GPG).
