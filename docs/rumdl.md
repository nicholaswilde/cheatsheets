---
tags:
  - app
  - linting
  - markdown
---

# rumdl

Rust-based markdown linter — fast drop-in for markdownlint-cli (https://github.com/rvben/rumdl)

!!! info "To install rumdl"
    ```bash
    cargo install rumdl
    ```

!!! info "Or via binstall"
    ```bash
    cargo binstall rumdl
    ```

!!! info "To check all markdown files in the current directory"
    ```bash
    rumdl check .
    ```

!!! info "To check a specific file"
    ```bash
    rumdl check <file>.md
    ```

!!! info "To auto-fix fixable issues"
    ```bash
    rumdl check --fix .
    ```

!!! info "To fix a specific file"
    ```bash
    rumdl check --fix <file>.md
    ```

!!! info "To list all available rules"
    ```bash
    rumdl rules
    ```

!!! info "To check with a specific config file"
    ```bash
    rumdl check --config .markdownlint.yaml .
    ```

!!! info "To disable a specific rule inline in markdown"
    <!-- rumdl-disable MD013 -->
    long line here...
    <!-- rumdl-enable MD013 -->
    Canonical .markdownlint.yaml config:
    MD007:
    indent: 4
    MD013:
    line_length: 120
    code_blocks: false
    tables: false
    MD024:
    allow_different_nesting: true
    siblings_only: true
    MD046: false
    To run via go-task:

    ```bash
    task markdownlint        # check
    task markdownlint-fix    # auto-fix
    ```
