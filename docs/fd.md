---
tags:
  - app
  - terminal
---

# fd

Simple, fast and user-friendly alternative to find (https://github.com/sharkdp/fd)

!!! info "To check fd version"
    ```bash
    fd --version
    ```

!!! info "To search for files matching a pattern"
    ```bash
    fd <pattern>
    ```

!!! info "To search in a specific directory"
    ```bash
    fd <pattern> <directory>
    ```

!!! info "To search for a specific file extension"
    ```bash
    fd -e <extension> <pattern>
    ```

!!! info "To search using a glob pattern"
    ```bash
    fd -g <glob_pattern>
    ```

!!! info "To search including hidden and gitignored files"
    ```bash
    fd -H <pattern>
    ```

!!! info "To exclude specific files or directories from search"
    ```bash
    fd -E <exclude_pattern> <pattern>
    ```
