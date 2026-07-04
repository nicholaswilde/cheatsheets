---
tags:
  - app
  - compression
---

# xz

Compress or decompress .xz and .lzma files (https://tukaani.org/xz/format.html)

!!! info "To check xz version"
    ```bash
    xz --version
    ```

!!! info "To compress a file to the xz format"
    ```bash
    xz <file>
    ```

!!! info "To decompress a .xz file"
    ```bash
    xz -d <file.xz>
    ```

!!! info "To compress a file keeping the original file intact"
    ```bash
    xz -k <file>
    ```

!!! info "To decompress a file and output to stdout"
    ```bash
    xz -dc <file.xz>
    ```

!!! info "To compress a file to the LZMA format"
    ```bash
    xz --format=lzma <file>
    ```

!!! info "To decompress a .lzma file"
    ```bash
    xz -d --format=lzma <file.lzma>
    ```

!!! info "To compress using the fastest speed (lower compression)"
    ```bash
    xz -0 <file>
    ```

!!! info "To compress using the best compression (slower speed)"
    ```bash
    xz -9 <file>
    ```
