---
tags:
  - app
  - security
  - secrets
---

# sops

Secrets OPerationS — tool for managing encrypted secrets (https://github.com/getsops/sops)

!!! info "Encrypt a file"
    ```bash
    sops -e path/to/myfile.json > path/to/myfile.enc.json
    ```

!!! info "Decrypt a file to the standard output"
    ```bash
    sops -d path/to/myfile.enc.json
    ```

!!! info "Rotate data keys for a sops file"
    ```bash
    sops -r path/to/myfile.enc.yaml
    ```

!!! info "Change the extension of the file once encrypted"
    ```bash
    sops -d --input-type json path/to/myfile.enc.json
    ```

!!! info "Extract keys by naming them, and array elements by numbering them"
    ```bash
    sops -d --extract '["an_array"][1]' path/to/myfile.enc.json
    ```

!!! info "Show the difference between two sops files"
    ```bash
    diff <(sops -d path/to/secret1.enc.yaml) <(sops -d path/to/secret2.enc.yaml)
    ```
