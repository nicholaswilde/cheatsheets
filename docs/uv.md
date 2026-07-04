---
tags:
  - app
  - package-manager
---

# uv

Fast Python package installer and resolver (https://github.com/astral-sh/uv)

!!! info "To install uv"
    Via installer script

    ```bash
    curl -LsSf https://astral.sh/uv/install.sh | sh
    ```

!!! info "Via apt (Debian/Ubuntu)"
    ```bash
    sudo mkdir -p /etc/apt/keyrings
    curl -LsSf https://astral.sh/uv/packaging/key.asc | sudo gpg --dearmor -o /etc/apt/keyrings/astral.gpg
    echo "deb [signed-by=/etc/apt/keyrings/astral.gpg] https://astral.sh/uv/packaging/debian stable main" | sudo tee /etc/apt/sources.list.d/astral.list
    sudo apt update && sudo apt install uv -y
    ```

!!! info "To initialize a new project"
    ```bash
    uv init <project_name>
    ```

!!! info "To run a Python script with packages in a virtual environment"
    ```bash
    uv run --with <package> <script_name>.py
    ```

!!! info "To sync environment dependencies"
    ```bash
    uv sync
    ```
