---
tags:
  - app
  - terminal
---

# awk

Pattern scanning and processing language (https://www.gnu.org/software/gawk/)

!!! info "To check awk version"
    ```bash
    awk --version
    ```

!!! info "To print the first column/field of a file"
    ```bash
    awk '{print $1}' <file>
    ```

!!! info "To sum integers from a file or stdin (one integer per line)"
    ```bash
    printf '1\n2\n3\n' | awk '{ sum += $1} END {print sum}'
    ```

!!! info "To use a specific character as field separator"
    ```bash
    printf '1:2:3' | awk -F ":" '{print $1+$2+$3}'
    ```

!!! info "To specify an output field separator (OFS) character"
    ```bash
    printf '1 2 3' | awk 'BEGIN {OFS=":"}; {print $1,$2,$3}'
    ```

!!! info "To print lines matching a specific condition"
    ```bash
    printf "george jetson\nolive oyl\nbeetle bailey" | awk '$2=="bailey"{print $0}'
    ```

!!! info "To print lines matching a regular expression"
    ```bash
    printf "george jetson\nolive oyl\nbeetle bailey" | awk '/ley$/{print $0}'
    ```
