# column

Format standard input or a file into multiple columns.

Columns are filled before rows; the default separator is a whitespace.

More information: <https://manned.org/column>.

!!! info "Format the output of a command for a 30 characters wide display"
    ```bash
    printf "header1 header2\nbar foo\n" | column --output-width 30
    ```

!!! info "Split columns automatically and auto-align them in a tabular format"
    ```bash
    printf "header1 header2\nbar foo\n" | column --table
    ```

!!! info "Specify the column delimiter character for the `--table` option (e.g. "," for CSV) (defaults to whitespace)"
    ```bash
    printf "header1,header2\nbar,foo\n" | column --table --separator ,
    ```

!!! info "Fill rows before filling columns"
    ```bash
    printf "header1\nbar\nfoobar\n" | column --output-width 30 --fillrows
    ```
