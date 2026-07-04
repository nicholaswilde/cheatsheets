---
tags:
  - app
  - terminal
---

# rg

Ripgrep is a fast, recursive line-oriented CLI search tool (https://github.com/BurntSushi/ripgrep)

!!! info "To search for a regular expression pattern recursively in the current directory"
    ```bash
    rg <pattern>
    ```

!!! info "To search for a pattern including hidden files (but respecting .gitignore)"
    ```bash
    rg --hidden <pattern>
    ```

!!! info "Or"
    ```bash
    rg -. <pattern>
    ```

!!! info "To search for a pattern in ignored files (but skipping hidden files)"
    ```bash
    rg -u <pattern>
    ```

!!! info "To search for a pattern in both ignored and hidden files"
    ```bash
    rg -uu <pattern>
    ```

!!! info "To search all files including binary files"
    ```bash
    rg -uuu <pattern>
    ```

!!! info "To search for a pattern including hidden files and files listed in .gitignore"
    ```bash
    rg --no-ignore --hidden <pattern>
    ```

!!! info "To search for a pattern only in specific directories"
    ```bash
    rg <pattern> <directory>
    ```

!!! info "To search for a pattern in files matching a glob pattern (e.g. *.md)"
    ```bash
    rg <pattern> --glob <glob_pattern>
    ```

!!! info "To search for filenames that match a pattern"
    ```bash
    rg --files | rg <pattern>
    ```

!!! info "To list only the names of files that contain matches"
    ```bash
    rg --files-with-matches <pattern>
    ```

!!! info "To show lines that do not match the given pattern"
    ```bash
    rg --invert-match <pattern>
    ```

!!! info "To search for a literal string pattern"
    ```bash
    rg --fixed-strings -- <literal_string>
    ```
