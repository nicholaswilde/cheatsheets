# Rg

Ripgrep is a recursive line-oriented CLI search tool.

Aims to be a faster alternative to `grep`.

More information: <https://github.com/BurntSushi/ripgrep>.

!!! info "Search hidden files but respect .gitignore"
    ```bash
    rg --hidden "search_term"
    ```

!!! info "OR"
    ```bash
    rg -. "search_term"
    ```

!!! info "Unrestricted level 1 - Searches files ignored by .gitignore, but skips hidden files"
    ```bash
    rg -u "search_term"
    ```

!!! info "Unrestricted level 2 - Searches ignored files AND hidden files"
    ```bash
    rg -u "search_term"
    ```

!!! info "Unrestricted level 3 - Searches everything, including binary files"
    ```bash
    rg -uuu "search_term"
    ```

!!! info "Recursively search the current directory for a regular expression"
    ```bash
    rg regular_expression
    ```

!!! info "Search for regular expressions recursively in the current directory, including hidden files and files listed in `.gitignore`"
    ```bash
    rg --no-ignore --hidden regular_expression
    ```

!!! info "Search for a regular expression only in a subset of directories"
    ```bash
    rg regular_expression set_of_subdirs
    ```

!!! info "Search for a regular expression in files matching a glob (e.g. `README.*`)"
    ```bash
    rg regular_expression --glob glob
    ```

!!! info "Search for filenames that match a regular expression"
    ```bash
    rg --files | rg regular_expression
    ```

!!! info "Only list matched files (useful when piping to other commands)"
    ```bash
    rg --files-with-matches regular_expression
    ```

!!! info "Show lines that do not match the given regular expression"
    ```bash
    rg --invert-match regular_expression
    ```

!!! info "Search a literal string pattern"
    ```bash
    rg --fixed-strings -- string
    rg -n --color=always "\.apt" .
    ```
