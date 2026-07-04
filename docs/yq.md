---
tags:
  - app
  - parser
  - yaml
---

# yq

Portable command-line YAML/JSON/TOML processor (https://github.com/mikefarah/yq)

!!! info "--- Reading ---"
    To read a specific key from a YAML file:

    ```bash
    yq '.<key>' <file>.yaml
    ```

!!! info "To read a nested key"
    ```bash
    yq '.parent.child' <file>.yaml
    ```

!!! info "To read an array element by index"
    ```bash
    yq '.list[0]' <file>.yaml
    ```

!!! info "To read all array elements"
    ```bash
    yq '.list[]' <file>.yaml
    ```

!!! info "To read multiple keys"
    ```bash
    yq '.foo, .bar' <file>.yaml
    ```

!!! info "--- Writing ---"
    To set a key value in-place:

    ```bash
    yq -i '.<key> = "<value>"' <file>.yaml
    ```

!!! info "To set a nested key in-place"
    ```bash
    yq -i '.parent.child = "<value>"' <file>.yaml
    ```

!!! info "To append to an array in-place"
    ```bash
    yq -i '.list += ["<value>"]' <file>.yaml
    ```

!!! info "To delete a key in-place"
    ```bash
    yq -i 'del(.<key>)' <file>.yaml
    ```

!!! info "--- Filtering ---"
    To filter out null or empty values:

    ```bash
    yq '.foo | select(length > 0)' <file>.yaml
    ```

!!! info "To select array items matching a condition"
    ```bash
    yq '.list[] | select(.name == "<value>")' <file>.yaml
    ```

!!! info "To sort all keys alphabetically"
    ```bash
    yq -i 'sort_keys(.)' <file>.yaml
    ```

!!! info "--- Format Conversion ---"
    To convert YAML to JSON:

    ```bash
    yq -o=json <file>.yaml
    ```

!!! info "To convert JSON to YAML"
    ```bash
    yq -p=json -o=yaml <file>.json
    ```

!!! info "To convert YAML to TOML"
    ```bash
    yq -o=toml <file>.yaml
    ```

!!! info "--- Merging ---"
    To merge two YAML files (second overrides first):

    ```bash
    yq '. * load("<other>.yaml")' <file>.yaml
    ```

!!! info "--- Markdown Front Matter ---"
    To read a front matter key from a Markdown file:

    ```bash
    yq --front-matter="extract" '.<key>' <file>.md
    ```

!!! info "To set a front matter key in a Markdown file"
    ```bash
    yq --front-matter="process" -i '.<key> = "<value>"' <file>.md
    ```
