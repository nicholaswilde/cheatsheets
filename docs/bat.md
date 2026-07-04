---
tags:
  - app
  - terminal
---

# bat

A cat clone with syntax highlighting and Git integration (https://github.com/sharkdp/bat)

!!! info "--- Viewing Files ---"
    To display a file with syntax highlighting:

    ```bash
    bat <file>
    ```

!!! info "To display multiple files"
    ```bash
    bat <file1> <file2>
    ```

!!! info "To display a file with line numbers (default)"
    ```bash
    bat -n <file>
    ```

!!! info "To display a file without line numbers"
    ```bash
    bat --style=plain <file>
    ```

!!! info "To display a file without any decorations (plain output)"
    ```bash
    bat -p <file>
    ```

!!! info "To show non-printable characters"
    ```bash
    bat -A <file>
    ```

!!! info "To show only a specific line range"
    ```bash
    bat -r <start>:<end> <file>
    ```

!!! info "--- Syntax & Themes ---"
    To list all supported syntax languages:

    ```bash
    bat --list-languages
    ```

!!! info "To set the syntax language explicitly"
    ```bash
    bat --language <language> <file>
    ```

!!! info "To list all available color themes"
    ```bash
    bat --list-themes
    ```

!!! info "To display a file using a specific theme"
    ```bash
    bat --theme <theme_name> <file>
    ```

!!! info "To preview all themes on a file"
    ```bash
    bat --list-themes | xargs -I{} sh -c 'echo "Theme: {}"; bat --theme={} <file>'
    ```

!!! info "--- Paging & Integration ---"
    To disable the pager:

    ```bash
    bat --pager=never <file>
    ```

!!! info "To use bat as a colorizing pager for man pages (add to .bashrc)"
    ```bash
    export MANPAGER="sh -c 'col -bx | bat -l man -p'"
    ```

!!! info "To use bat with tail -f for live log viewing"
    ```bash
    tail -f <logfile> | bat --paging=never -l log
    ```

!!! info "To use bat as a drop-in cat replacement (add to .bashrc)"
    ```bash
    alias cat='bat -p'
    ```

!!! info "--- Reading from Stdin ---"
    To pipe input to bat with explicit language:

    ```bash
    <command> | bat --language <language>
    ```

!!! info "To show git diff output with syntax highlighting"
    ```bash
    git diff | bat --language diff
    ```
