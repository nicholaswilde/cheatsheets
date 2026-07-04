---
tags:
  - app
  - linting
  - spellcheck
---

# typos

Fast source code spellchecker written in Rust (https://github.com/crate-ci/typos)

!!! info "To install typos"
    ```bash
    cargo install typos-cli
    ```

!!! info "Or via binstall"
    ```bash
    cargo binstall typos-cli
    ```

!!! info "To check for typos in the current directory"
    ```bash
    typos
    ```

!!! info "To check a specific file"
    ```bash
    typos <file>
    ```

!!! info "To check a specific directory"
    ```bash
    typos <directory>
    ```

!!! info "To auto-fix typos"
    ```bash
    typos --write-changes
    ```

!!! info "To list typos without fixing"
    ```bash
    typos --diff
    ```

!!! info "To check and output in JSON format"
    ```bash
    typos --format json
    ```

!!! info "To use a custom config file"
    ```bash
    typos --config _typos.toml
    ```

!!! info "To add a word to the custom dictionary (dictionary.txt, one word per line)"
    ```bash
    echo "myword" >> dictionary.txt
    ```

!!! info "To sort the dictionary after additions"
    ```bash
    sort dictionary.txt -u -o dictionary.txt
    ```

!!! info "To regenerate _typos.toml from dictionary.txt (project convention)"
    ```bash
    python3 scripts/generate_typos_config.py && typos
    ```

!!! info "To run a focused check on a single file (project convention)"
    ```bash
    task spellcheck-file FILE=path/to/file
    ```

Canonical _typos.toml structure (auto-generated — do NOT hand-edit):
[default.extend-words]
"myword" = "myword"
GitHub Actions CI integration:
- uses: crate-ci/typos@v1
