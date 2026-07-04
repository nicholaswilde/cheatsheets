---
tags:
  - app
  - docs
  - static-site
---

# zensical

MkDocs/Material static site generator wrapper (https://github.com/nicholaswilde/zensical)

!!! info "To install zensical via uv"
    ```bash
    uv pip install zensical
    ```

!!! info "To upgrade zensical"
    ```bash
    uv pip install --upgrade zensical
    ```

!!! info "To build the static site"
    ```bash
    uvx zensical build
    ```

!!! info "To serve the site locally"
    ```bash
    uvx zensical serve --dev-addr 0.0.0.0:8000
    ```

!!! info "To check the installed version"
    ```bash
    uvx zensical --version
    ```

!!! info "To run via go-task (project conventions)"
    ```bash
    task site:build     # build the static site
    task site:serve     # serve locally at http://localhost:8000
    task site:convert   # convert cheatsheets to zensical markdown pages
    task site:check     # check zensical version
    task site:update    # update zensical to latest version
    ```

!!! info "Config file: zensical.toml (replaces mkdocs.yml)"
    Nav is declared as [[project.nav]] TOML array-of-tables.
    Do NOT hand-edit nav blocks for bulk changes — use the auto-generator:

    ```bash
    task generate-docs-nav
    ```

Script: uv run python scripts/generate_mkdocs_nav.py
Canonical zensical.toml keys:
[project]
site_name = "My Site"
site_url  = "https://example.com"
repo_url  = "https://github.com/owner/repo"

[project.theme]
name     = "material"
features = ["navigation.tabs"]

[project.plugins]
search = {}
tags   = {}

[[project.nav]]
Home = "index.md"
CI deployment via GitHub Actions:
- uses: actions/deploy-pages@v4  (on push to main/master)
