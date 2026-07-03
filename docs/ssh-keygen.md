---
tags:
  - ssh
---

# ssh-keygen

!!! info "To generate an SSH key"
    ```bash
    ssh-keygen -t rsa
    ```

!!! info "To generate a 4096-bit SSH key"
    ```bash
    ssh-keygen -t rsa -b 4096
    ```

!!! info "To generate a FIDO/U2F token-backed key"
    ```bash
    ssh-keygen -t ed25519-sk
    ```

!!! info "To generate a FIDO2 resident key"
    ```bash
    ssh-keygen -t ed25519-sk -O resident
    ```

!!! info "To update a passphrase on a key"
    ```bash
    ssh-keygen -p -P <old-passphrase> -N <new-passphrase> -f <keyfile>
    ```

!!! info "To remove a passphrase on a key"
    ```bash
    ssh-keygen -p -P <old-passphrase> -N '' -f <keyfile>
    ```

!!! info "To generate a 4096 bit RSA key with a passphase and comment containing the user and hostname"
    ```bash
    ssh-keygen -t rsa -b 4096 -C "$USER@$HOSTNAME" -P <passphrase>
    ```

!!! info "To print the fingerprint of a public key"
    ```bash
    ssh-keygen -lf <keyfile>
    ```

!!! info "To print the Github-style (MD5) fingerprint of a public key"
    ```bash
    ssh-keygen -E md5 -lf <keyfile>
    ```

!!! info "To download resident keys from a FIDO2 authenticator to the current directory"
    ```bash
    ssh-keygen -K
    ```

!!! info "To view the public key associated with a private key"
    ```bash
    ssh-keygen -y -f <private-key-file> > <public-key-file>
    ssh-keygen -y -f ~/.ssh/private-key > ~/.ssh/public-key.pub
     tldr:ssh-keygen 
    ```

!!! info "ssh-keygen"
    Generate ssh keys used for authentication, password-less logins, and other things.
    More information: <https://man.openbsd.org/ssh-keygen>.
    Generate a key interactively:

    ```bash
    ssh-keygen
    ```

!!! info "Specify file in which to save the key"
    ```bash
    ssh-keygen -f ~/.ssh/filename
    ```

!!! info "Generate an ed25519 key with 100 key derivation function rounds"
    ```bash
    ssh-keygen -t ed25519 -a 100
    ```

!!! info "Generate an RSA 4096-bit key with email as a comment"
    ```bash
    ssh-keygen -t dsa|ecdsa|ed25519|rsa -b 4096 -C "comment|email"
    ```

!!! info "Remove the keys of a host from the known_hosts file (useful when a known host has a new key)"
    ```bash
    ssh-keygen -R remote_host
    ```

!!! info "Retrieve the fingerprint of a key in MD5 Hex"
    ```bash
    ssh-keygen -l -E md5 -f ~/.ssh/filename
    ```

!!! info "Change the password of a key"
    ```bash
    ssh-keygen -p -f ~/.ssh/filename
    ```

!!! info "Change the type of the key format (for example from OPENSSH format to PEM), the file will be rewritten in-place"
    ```bash
    ssh-keygen -p -N "" -m PEM -f ~/.ssh/OpenSSH_private_key
    ```

!!! info "Generate ssh service key to change identity"
    ```bash
    ssh-keygen -t ed25519 -f /etc/ssh/ssh_host_ed25519_key -N "" && sudo systemctl restart ssh && sudo systemctl restart sshd
    ```
