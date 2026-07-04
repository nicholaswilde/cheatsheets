---
tags:
  - app
  - parser
---

# yq

Portable command-line YAML processor (https://github.com/mikefarah/yq)

!!! info "To read a specific key path from a YAML file"
    ```bash
    yq '.<key_path>' <file>.yaml
    ```

!!! info "To edit a YAML file in-place"
    ```bash
    yq -i '.<key_path> = "<value>"' <file>.yaml
    ```

!!! info "To process front matter in a Markdown file"
    ```bash
    yq --front-matter="process" '.<key_path> = "<value>"' <file>.md
    ```

!!! info "To sort all keys alphabetically in-place"
    ```bash
    yq -i 'sort_keys(.)' <file>.yaml
    ```

!!! info "To filter out null values or empty lists"
    ```bash
    yq '.foo | select(length > 0)' <file>.yaml
    ```

!!! info "To convert a YAML file to JSON"
    ```bash
    yq -o=json <file>.yaml
    ```
