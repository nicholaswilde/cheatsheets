---
tags:
  - security
  - yubikey
  - gpg
---

# yubikey

YubiKey hardware security key management.

Guide: https://github.com/drduh/YubiKey-Guide

OpenPGP: https://support.yubico.com/hc/en-us/articles/360013790259-Using-Your-YubiKey-with-OpenPGP

!!! info "--- Setup ---"
    To install required packages (Debian/Ubuntu):

    ```bash
    sudo apt -y install \
      wget gnupg2 gnupg-agent dirmngr \
      cryptsetup scdaemon pcscd \
      yubikey-personalization yubikey-manager
    ```

!!! info "--- Card Status & Info ---"
    To show YubiKey card status:

    ```bash
    gpg --card-status
    ```

!!! info "To edit card settings (PINs, name, URL)"
    ```bash
    gpg --card-edit
    ```

!!! info "Inside card-edit: enter admin mode"
    ```bash
      admin
    ```

!!! info "Inside card-edit: change PINs"
    ```bash
      passwd
    ```

!!! info "To check YubiKey firmware and serial number"
    ```bash
    ykman info
    ```

!!! info "--- GPG Key Management ---"
    To move a GPG key to the YubiKey card:

    ```bash
    gpg --expert --edit-key <key-id>
      keytocard
    ```

!!! info "To list GPG keys"
    ```bash
    gpg --list-keys
    gpg --list-secret-keys
    ```

!!! info "To import a GPG public key"
    ```bash
    gpg --import <keyfile.gpg>
    ```

!!! info "--- FIDO2 / SSH ---"
    To list FIDO2 credentials stored on the key:

    ```bash
    ykman fido credentials list
    ```

!!! info "To generate a resident SSH key backed by the YubiKey"
    ```bash
    ssh-keygen -t ed25519-sk -O resident -O verify-required
    ```

!!! info "To load resident SSH keys from the YubiKey"
    ```bash
    ssh-keygen -K
    ```

!!! info "--- OTP ---"
    To list OTP slots:

    ```bash
    ykman otp info
    ```

!!! info "To program a static password in slot 2"
    ```bash
    ykman otp static --generate 2
    ```

!!! info "--- PIV ---"
    To list PIV certificates:

    ```bash
    ykman piv certificates list
    ```

!!! info "To reset the PIV applet"
    ```bash
    ykman piv reset
    ```

!!! info "--- Lock & Reset ---"
    To lock the YubiKey OTP applet:

    ```bash
    ykman otp delete 1
    ```

!!! info "To factory reset all applets"
    ```bash
    ykman config reset
    ```
