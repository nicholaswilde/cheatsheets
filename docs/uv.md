---
tags:
  - app
  - package-manager
  - python
---

# uv

Fast Python package installer and resolver (https://github.com/astral-sh/uv)

!!! info "--- Installation ---"
    To install via installer script:

    ```bash
    curl -LsSf https://astral.sh/uv/install.sh | sh
    ```

!!! info "To install via pip"
    ```bash
    pip install uv
    ```

!!! info "To update uv itself"
    ```bash
    uv self update
    ```

!!! info "--- Projects ---"
    To initialize a new project:

    ```bash
    uv init <project_name>
    ```

!!! info "To sync environment dependencies from pyproject.toml"
    ```bash
    uv sync
    ```

!!! info "To add a dependency to the project"
    ```bash
    uv add <package>
    ```

!!! info "To add a dev dependency"
    ```bash
    uv add --dev <package>
    ```

!!! info "To remove a dependency"
    ```bash
    uv remove <package>
    ```

!!! info "To upgrade all dependencies"
    ```bash
    uv lock --upgrade
    ```

!!! info "--- Running ---"
    To run a Python script in the project environment:

    ```bash
    uv run <script>.py
    ```

!!! info "To run a script with extra packages"
    ```bash
    uv run --with <package> <script>.py
    ```

!!! info "To run a tool without installing it (like pipx run)"
    ```bash
    uvx <tool>
    ```

!!! info "--- Virtual Environments ---"
    To create a virtual environment:

    ```bash
    uv venv
    ```

!!! info "To create a virtual environment with a specific Python version"
    ```bash
    uv venv --python <version>
    ```

!!! info "--- Python Management ---"
    To install a specific Python version:

    ```bash
    uv python install <version>
    ```

!!! info "To list available Python versions"
    ```bash
    uv python list
    ```

!!! info "To pin the project's Python version"
    ```bash
    uv python pin <version>
    ```

!!! info "--- Package Installation (pip mode) ---"
    To install packages into the current environment:

    ```bash
    uv pip install <package>
    ```

!!! info "To install from requirements.txt"
    ```bash
    uv pip install -r requirements.txt
    ```

!!! info "To list installed packages"
    ```bash
    uv pip list
    ```

!!! info "To show info about an installed package"
    ```bash
    uv pip show <package>
    ```
