---
tags:
  - encryption
---

# age

A simple, modern and secure file encryption tool.

More information: <https://github.com/FiloSottile/age>.

!!! info "Generate an encrypted file that can be decrypted with a passphrase"
    ```bash
    age --passphrase --output path/to/encrypted_file path/to/unencrypted_file
    ```

!!! info "Generate a key pair, saving the private key to an unencrypted file and printing the public key to `stdout`"
    ```bash
    age-keygen --output path/to/file
    ```

!!! info "Encrypt a file with one or more public keys that are entered as literals"
    ```bash
    age --recipient public_key_1 --recipient public_key_2 path/to/unencrypted_file --output path/to/encrypted_file
    ```

!!! info "Encrypt a file with one or more public keys that are specified in a recipients file"
    ```bash
    age --recipients-file path/to/recipients_file path/to/unencrypted_file --output path/to/encrypted_file
    ```

!!! info "Decrypt a file with a passphrase"
    ```bash
    age --decrypt --output path/to/decrypted_file path/to/encrypted_file
    ```

!!! info "Decrypt a file with a private key file"
    ```bash
    age --decrypt --identity path/to/private_key_file --output path/to/decrypted_file path/to/encrypted_file
    ```

!!! info "Example"
    ```bash
    age-keygen -o key.txt
    Public key: age1ql3z7hjy54pw3hyww5ayyfg7zqgvc7w3j2elw8zmrj2kg5sfn9aqmcac8p
    tar cvz ~/data | age -r age1ql3z7hjy54pw3hyww5ayyfg7zqgvc7w3j2elw8zmrj2kg5sfn9aqmcac8p > data.tar.gz.age
    age --decrypt -i key.txt -o data.tar.gz data.tar.gz.age
    ```
