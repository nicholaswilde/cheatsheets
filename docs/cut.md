---
tags:
  - app
  - terminal
---

# cut

Remove sections from each line of files (https://www.gnu.org/software/coreutils/manual/html_node/cut-invocation.html)

!!! info "To check cut version"
    ```bash
    cut --version
    ```

!!! info "To cut a specific field index using a custom delimiter"
    ```bash
    cut -d '<delimiter>' -f <field_index> <file>
    ```

!!! info "To cut a range of fields"
    ```bash
    cut -d '<delimiter>' -f <start_index>-<end_index> <file>
    ```

!!! info "To cut from a specific field index to the end of the line"
    ```bash
    cut -d '<delimiter>' -f <start_index>- <file>
    ```

!!! info "To cut specific character positions (by index or range)"
    ```bash
    cut -c <character_positions> <file>
    ```

!!! info "To cut specific byte positions"
    ```bash
    cut -b <byte_positions> <file>
    ```
