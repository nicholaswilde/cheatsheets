---
tags:
  - app
  - terminal
  - search
---

# fd

Simple, fast and user-friendly alternative to find (https://github.com/sharkdp/fd)

!!! info "--- Basic Search ---"
    To search for files matching a pattern (regex by default):

    ```bash
    fd <pattern>
    ```

!!! info "To search in a specific directory"
    ```bash
    fd <pattern> <directory>
    ```

!!! info "To search for a specific file extension"
    ```bash
    fd -e <extension>
    ```

!!! info "To search using a glob pattern"
    ```bash
    fd -g <glob_pattern>
    ```

!!! info "--- Hidden & Ignored Files ---"
    To include hidden files:

    ```bash
    fd -H <pattern>
    ```

!!! info "To include files listed in .gitignore"
    ```bash
    fd -I <pattern>
    ```

!!! info "To include both hidden and ignored files"
    ```bash
    fd -HI <pattern>
    ```

!!! info "--- Filtering ---"
    To search only for files:

    ```bash
    fd -t f <pattern>
    ```

!!! info "To search only for directories"
    ```bash
    fd -t d <pattern>
    ```

!!! info "To search only for symlinks"
    ```bash
    fd -t l <pattern>
    ```

!!! info "To exclude specific files or directories"
    ```bash
    fd -E <exclude_pattern> <pattern>
    ```

!!! info "To filter by file size (e.g. larger than 1MB)"
    ```bash
    fd --size +1m <pattern>
    ```

!!! info "To filter by modification time (e.g. modified in last 7 days)"
    ```bash
    fd --changed-within 7d <pattern>
    ```

!!! info "--- Output ---"
    To print absolute paths:

    ```bash
    fd --absolute-path <pattern>
    ```

!!! info "To limit search depth"
    ```bash
    fd --max-depth <n> <pattern>
    ```

!!! info "To list all files recursively (no pattern)"
    ```bash
    fd
    ```

!!! info "--- Executing Commands ---"
    To run a command on each result:

    ```bash
    fd <pattern> -x <command> {}
    ```

!!! info "To run a command on all results at once"
    ```bash
    fd <pattern> -X <command> {}
    ```

!!! info "To delete all matching files (use with caution)"
    ```bash
    fd <pattern> -x rm {}
    ```
