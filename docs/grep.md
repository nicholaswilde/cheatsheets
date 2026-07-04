---
tags:
  - cli
  - terminal
  - search
---

# grep

Search for patterns in files using regular expressions (https://www.gnu.org/software/grep/)

!!! info "To search for a pattern in a file"
    ```bash
    grep <pattern> <file>
    ```

!!! info "To search recursively in a directory"
    ```bash
    grep -r <pattern> <directory>
    ```

!!! info "To search case-insensitively"
    ```bash
    grep -i <pattern> <file>
    ```

!!! info "To show line numbers with matches"
    ```bash
    grep -n <pattern> <file>
    ```

!!! info "To list only filenames that contain matches"
    ```bash
    grep -l <pattern> <files>
    ```

!!! info "To count the number of matching lines"
    ```bash
    grep -c <pattern> <file>
    ```

!!! info "To show lines that do not match"
    ```bash
    grep -v <pattern> <file>
    ```

!!! info "To match whole words only"
    ```bash
    grep -w <pattern> <file>
    ```

!!! info "To use extended regular expressions (ere)"
    ```bash
    grep -E <pattern> <file>
    ```

!!! info "To match a literal string (no regex)"
    ```bash
    grep -F <pattern> <file>
    ```

!!! info "To show num lines after each match"
    ```bash
    grep -A <num> <pattern> <file>
    ```

!!! info "To show num lines before each match"
    ```bash
    grep -B <num> <pattern> <file>
    ```

!!! info "To show num lines of context around each match"
    ```bash
    grep -C <num> <pattern> <file>
    ```

!!! info "To search only files matching a glob"
    ```bash
    grep --include='<glob>' -r <pattern> <directory>
    ```

!!! info "To print only the matching part of each line"
    ```bash
    grep -o <pattern> <file>
    ```
