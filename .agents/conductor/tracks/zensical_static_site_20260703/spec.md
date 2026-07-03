# Specification - Zensical Static Site Implementation

## 1. Overview
The goal of this track is to implement the Zensical static site generator in this repository. Zensical will be installed and run locally using `uv`. The site configuration will be stored in `zensical.toml` at the repository root and will replicate the features (plugins, css, javascript) of `nicholaswilde/recipes` while excluding project-specific navigation.

## 2. Structural & Tooling Requirements
*   **uv Integration**:
    *   Initialize python project configuration with `pyproject.toml` (if not present) and configure dependencies.
    *   Install `zensical` locally.
    *   Store virtual environment in `.venv/` and lock dependencies in `uv.lock`.
    *   Add `.venv/` to `.gitignore`.
*   **Zensical Configuration (`zensical.toml`)**:
    *   Store in the repository root.
    *   Configure `[project]` fields for `site_name` ("Cheatsheets"), description, author, etc.
    *   Exclude the recipes-specific navigation, instead establishing a basic index navigation.
    *   Include identical feature options: plugins (tags, search, minify), extra_css, extra_javascript.
*   **Site Content**:
    *   Ensure `./docs/` contains a basic homepage `index.md` so that the build succeeds.

## 3. Automation and Commands
*   Integrate Zensical build commands with `go-task` (Taskfile.yml).
    *   `task site:build` - Build the static site using `uv run zensical build`.
    *   `task site:serve` - Serve the static site locally using `uv run zensical serve`.

## 4. Acceptance Criteria
*   `pyproject.toml` and `uv.lock` exist.
*   `zensical` is installed and executable via `uv run zensical`.
*   `.venv` is ignored in `.gitignore`.
*   `zensical.toml` exists at root and has correct project configuration and plugins/assets.
*   `docs/index.md` exists and contains introductory content.
*   `task site:build` builds the site successfully without error.
