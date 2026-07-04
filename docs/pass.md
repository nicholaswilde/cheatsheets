---
tags:
  - app
  - security
---

# pass

Standard Unix password manager (https://www.passwordstore.org)

!!! info "To install pass"
    Ubuntu/Debian

    ```bash
    sudo apt install pass
    ```

!!! info "macOS"
    ```bash
    brew install pass
    ```

!!! info "To reconnect an existing git password store repository"
    ```bash
    git clone git@github.com:nicholaswilde/pass.git ~/.password-store
    ```

!!! info "To check git remote origin"
    ```bash
    pass git remote -v
    ```

!!! info "To push local password history"
    ```bash
    pass git push -u --all
    ```

!!! info "To initialize or update GPG encryption key"
    ```bash
    pass init <gpg_key_id>
    ```

!!! info "To insert an encrypted multiline file"
    ```bash
    pass insert -fm gpg/revoke < file.txt
    ```

!!! info "Or"
    ```bash
    pass insert -m sensitive/secret_answers < secret_answers.txt
    ```

!!! info "To install pass-import extension"
    Debian/Ubuntu (using sudo)

    ```bash
    curl -fsSL https://pkg.pujol.io/debian/gpgkey | sudo tee /etc/apt/keyrings/pass-extension-import.gpg
    echo 'deb [arch=amd64] https://pkg.pujol.io/debian/repo all main' | sudo tee /etc/apt/sources.list.d/pkg.pujol.io.list
    sudo apt update && sudo apt install pass-extension-import -y
    ```

!!! info "To copy a password to clipboard over SSH (using OSC52 wrapper)"
    Step 1: Remove xclip if installed

    ```bash
    sudo apt remove xclip
    ```

!!! info "Step 2: Create a dummy xclip script at ~/.local/bin/xclip and paste"
    #!/bin/bash
    if [[ "$*" == *"-o"* ]]; then exit 0; fi
    cat | copy
    Step 3: Make executable

    ```bash
    chmod +x ~/.local/bin/xclip
    ```

!!! info "Step 4: Bypass DISPLAY checks by setting a dummy DISPLAY (add to ~/.bashrc)"
    ```bash
    export DISPLAY=:0
    ```

!!! info "Step 5: Copy password"
    ```bash
    pass -c <path>
    ```
