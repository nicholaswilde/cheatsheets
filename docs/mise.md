---
tags:
  - app
  - version-manager
---

# mise

Polyglot tool version manager and environment manager (https://github.com/jdx/mise)

!!! info "To check mise version"
    ```bash
    mise --version
    ```

!!! info "To install a tool"
    ```bash
    mise install <tool>@<version>
    ```

!!! info "To set the active version of a tool globally"
    ```bash
    mise global <tool>@<version>
    ```

!!! info "To set the active version of a tool locally (saves to .mise.toml)"
    ```bash
    mise local <tool>@<version>
    ```

!!! info "To list all installed tools and their active versions"
    ```bash
    mise list
    ```

!!! info "To list all available remote versions of a tool"
    ```bash
    mise ls-remote <tool>
    ```

!!! info "To run a command using tools managed by mise"
    ```bash
    mise exec -- <command>
    ```

!!! info "To uninstall a specific tool version"
    ```bash
    mise uninstall <tool>@<version>
    ```

!!! info "To check the status and health of mise"
    ```bash
    mise doctor
    ```
