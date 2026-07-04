---
tags:
  - app
  - linting
  - bash
---

# shuck

Bash script linter enforcing strict conventions (https://github.com/ewhauser/shuck)

!!! info "To install shuck"
    ```bash
    cargo install shuck
    ```

!!! info "Or via binstall"
    ```bash
    cargo binstall shuck
    ```

!!! info "To lint a single script"
    ```bash
    shuck <script>.sh
    ```

!!! info "To lint all scripts in a directory"
    ```bash
    shuck scripts/*.sh
    ```

!!! info "To lint and treat warnings as errors"
    ```bash
    shuck --deny-warnings <script>.sh
    ```

!!! info "Canonical bash script header block (required by shuck)"
    #!/usr/bin/env bash
    # Name:        script.sh
    # Description: Brief description of what this script does.
    # Author:      Nicholas Wilde <ncwilde43@gmail.com>
    # Date:        YYYY-MM-DD
    # Version:     0.1.0
    Required error handling at top of every script:

    ```bash
    set -e
    set -o pipefail
    ```

!!! info "Naming conventions"
    - Constants: `UPPER_CASE`
    - Functions: `snake_case`
    - Indentation: 2 spaces

!!! info "Required main wrapper pattern"
    ```bash
    main() {
      # logic here
    }
    main "$@"
    ```

!!! info "Logging with Catppuccin Mocha ANSI colors convention"
    ```bash
    log() {
      local level="$1"; shift
      echo "[${level}] $*"
    }
    ```

!!! info "To run via go-task (project convention)"
    ```bash
    task lint       # runs shuck scripts/*.sh
    ```
