---
tags:
  - app
  - checker
---

# lychee

Fast, async link checker (https://github.com/lycheeverse/lychee)

!!! info "To check all links in the current directory recursively"
    ```bash
    lychee .
    ```

!!! info "To check links in specific files or directories"
    ```bash
    lychee <path>
    ```

!!! info "To run a link check offline (skipping external URLs)"
    ```bash
    lychee --offline <path>
    ```

!!! info "To accept specific status codes (e.g. 200, 429, 520) as successful"
    ```bash
    lychee --accept <status_codes> <path>
    ```

!!! info "To check links using a specific configuration file"
    ```bash
    lychee --config <config_file> <path>
    ```
