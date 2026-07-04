---
tags:
  - cli
  - terminal
---

# column

Format standard input or a file into multiple columns (https://manned.org/column)

!!! info "To format output into a table with auto-aligned columns"
    ```bash
    printf "header1 header2\nbar foo\n" | column --table
    ```

!!! info "To specify a delimiter for the --table option"
    ```bash
    printf "header1,header2\nbar,foo\n" | column --table --separator ,
    ```

!!! info "To specify the output column separator"
    ```bash
    printf "header1,header2\nbar,foo\n" | column --table --separator , --output-separator ' | '
    ```

!!! info "To format output for a specific display width"
    ```bash
    printf "header1 header2\nbar foo\n" | column --output-width 30
    ```

!!! info "To fill rows before filling columns"
    ```bash
    printf "header1\nbar\nfoobar\n" | column --output-width 30 --fillrows
    ```

!!! info "To suppress empty lines in output"
    ```bash
    printf "a\n\nb\n" | column --table --separator , --empty-lines
    ```

!!! info "To hide a specific column from output (0-indexed)"
    ```bash
    printf "a,b,c\n1,2,3\n" | column --table --separator , --hide 1
    ```

!!! info "To make a column right-aligned"
    ```bash
    printf "name,size\nfile,1024\n" | column --table --separator , --right 1
    ```

!!! info "To format /etc/passwd into a readable table"
    ```bash
    column --table --separator : /etc/passwd
    ```
