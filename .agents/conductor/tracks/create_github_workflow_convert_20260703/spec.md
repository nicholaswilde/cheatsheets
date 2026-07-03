# Specification - Cheatsheets Conversion GitHub Workflow

## 1. Overview
The goal of this track is to create a GitHub Actions workflow file `.github/workflows/convert.yml` that automatically runs the cheatsheets-to-zensical conversion script and commits back any changes (e.g. generated `.md` docs and updated navigation in `zensical.toml`).

## 2. Requirements
*   **Trigger Condition**: On push to `main` when files under `sheets/` or the conversion script `scripts/convert_cheatsheets.ts` are modified.
*   **Environment**: `ubuntu-latest`
*   **Steps**:
    1.  Checkout the repository.
    2.  Set up Bun.
    3.  Set up Task.
    4.  Run `task site:convert` to convert cheatsheets and update `zensical.toml`.
    5.  Check for changes. If there are changes, commit and push them back to the repository using a git user configured as `github-actions[bot]`.
*   **Permissions**: Must declare `permissions: contents: write` to allow the token to write back commits to the repository.

## 3. Acceptance Criteria
*   The workflow file `.github/workflows/convert.yml` is created and correctly formatted.
*   The GHA schema is valid.
