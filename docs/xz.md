# xz

Compress or decompress .xz and .lzma files.

More information: <https://tukaani.org/xz/format.html>.

!!! info "Compress a file to the xz file format"
    ```bash
    xz path/to/file
    ```

!!! info "Decompress a xz file"
    ```bash
    xz -d file.xz
    ```

!!! info "Compress a file to the LZMA file format"
    ```bash
    xz --format=lzma path/to/file
    ```

!!! info "Decompress an LZMA file"
    ```bash
    xz -d --format=lzma file.lzma
    ```

!!! info "Decompress a file and write to `stdout`"
    ```bash
    xz -dc file.xz
    ```

!!! info "Compress a file, but don't delete the original"
    ```bash
    xz -k path/to/file
    ```

!!! info "Compress a file using the fastest compression"
    ```bash
    xz -0 path/to/file
    ```

!!! info "Compress a file using the best compression"
    ```bash
    xz -9 path/to/file
    ```
