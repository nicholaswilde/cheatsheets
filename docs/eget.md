---
tags:
  - app
  - installer
---

# eget

Easily install pre-compiled binaries from GitHub releases (https://github.com/zyedidia/eget)

!!! info "To check eget version"
    ```bash
    eget --version
    ```

!!! info "To download and install a binary from a GitHub repository"
    ```bash
    eget <owner>/<repo>
    ```

!!! info "To download a binary and place it in a specific directory"
    ```bash
    eget --to <destination_directory> <owner>/<repo>
    ```

!!! info "To download a specific tagged release version"
    ```bash
    eget <owner>/<repo>@<tag>
    ```

!!! info "To download an asset matching a specific filename pattern"
    ```bash
    eget --file <filename_pattern> <owner>/<repo>
    ```

!!! info "To download the release asset directly without extracting it"
    ```bash
    eget --download-only <owner>/<repo>
    ```

!!! info "To upgrade all binaries installed via eget"
    ```bash
    eget --upgrade
    ```
