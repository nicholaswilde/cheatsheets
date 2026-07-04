---
tags:
  - app
  - compression
---

# tar

Archiving utility (https://www.gnu.org/software/tar/)

!!! info "To check tar version"
    ```bash
    tar --version
    ```

!!! info "To extract an uncompressed archive"
    ```bash
    tar -xvf <archive.tar>
    ```

!!! info "To extract an archive into a specific destination directory"
    ```bash
    tar -xvf <archive.tar> -C <destination_directory>
    ```

!!! info "To create an uncompressed archive"
    ```bash
    tar -cvf <archive.tar> <source_directory>
    ```

!!! info "To extract a gzip compressed archive (.tar.gz or .tgz)"
    ```bash
    tar -xzvf <archive.tar.gz>
    ```

!!! info "To create a gzip compressed archive (.tar.gz or .tgz)"
    ```bash
    tar -czvf <archive.tar.gz> <source_directory>
    ```

!!! info "To list the contents of a gzip compressed archive"
    ```bash
    tar -tzvf <archive.tar.gz>
    ```

!!! info "To extract a bzip2 compressed archive (.tar.bz2)"
    ```bash
    tar -xjvf <archive.tar.bz2>
    ```

!!! info "To create a bzip2 compressed archive (.tar.bz2)"
    ```bash
    tar -cjvf <archive.tar.bz2> <source_directory>
    ```

!!! info "To list the contents of a bzip2 compressed archive"
    ```bash
    tar -tjvf <archive.tar.bz2>
    ```

!!! info "To create a gzip archive excluding specific extensions"
    ```bash
    tar -czvf <archive.tar.gz> --exclude=\*.{jpg,gif,png,zip} <source_directory>
    ```

!!! info "To use multi-threaded compression algorithms (via pigz, pbzip2, pixz)"
    ```bash
    tar -Ipigz -cvf <archive.tar.gz> <source_directory>
    tar -Ipbzip2 -cvf <archive.tar.bz2> <source_directory>
    tar -Ipixz -cvf <archive.tar.xz> <source_directory>
    ```

!!! info "To append a new file to an existing uncompressed tar archive"
    ```bash
    tar -rf <archive.tar> <file_to_append>
    ```
