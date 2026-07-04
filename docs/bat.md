---
tags:
  - app
  - terminal
---

# bat

A cat clone with syntax highlighting and Git integration (https://github.com/sharkdp/bat)

!!! info "To check bat version"
    ```bash
    bat --version
    ```

!!! info "To display a single file with syntax highlighting"
    ```bash
    bat <file>
    ```

!!! info "To display multiple files sequentially"
    ```bash
    bat <file1> <file2>
    ```

!!! info "To show and highlight non-printable characters"
    ```bash
    bat -A <file>
    ```

!!! info "To list all supported syntax languages"
    ```bash
    bat --list-languages
    ```

!!! info "To set the language for syntax highlighting explicitly"
    ```bash
    bat --language <language> <file>
    ```

!!! info "To list all available color themes"
    ```bash
    bat --list-themes
    ```

!!! info "To display a file using a specific color theme"
    ```bash
    bat --theme <theme_name> <file>
    ```
