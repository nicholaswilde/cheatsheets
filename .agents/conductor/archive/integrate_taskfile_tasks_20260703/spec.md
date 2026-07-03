# Specification - Taskfile Tasks Integration

## 1. Overview
The goal of this track is to integrate Zensical configuration validation, dependency management, and link checking tasks into `Taskfile.yml` from `nicholaswilde/recipes`.

## 2. Requirements
*   **Zensical Dependency & Version Tasks**:
    *   `site:deps`: Run `uv sync` to install dependencies.
    *   `site:check`: Run `uv run zensical --version` to check version.
    *   `site:update`: Run `uv add zensical@latest` to update Zensical.
*   **Zensical TOML Syntax Validation Task**:
    *   `site:validate-toml`: Run `uv run python -c "import tomllib..."` to syntax check `zensical.toml`.
*   **Link Checking Tasks**:
    *   `linkcheck`: Run `lychee docs/ sheets/` to check for dead links.
    *   `linkcheck-offline`: Run `lychee --offline docs/ sheets/` to check local files/images offline.
    *   `linkcheck-file`: Run `lychee {{shellQuote .FILE}}` to check links in a single file.

## 3. Acceptance Criteria
*   `Taskfile.yml` contains the new tasks.
*   `task site:validate-toml` passes.
*   `task linkcheck` or `task linkcheck-offline` can be invoked.
