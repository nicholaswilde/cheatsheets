# yubikey

!!! info "https://github.com/drduh/YubiKey-Guide"
    ```bash
    sudo apt -y install \
      wget gnupg2 gnupg-agent dirmngr \
      cryptsetup scdaemon pcscd \
      yubikey-personalization yubikey-manager
    ```

!!! info "https://support.yubico.com/hc/en-us/articles/360013790259-Using-Your-YubiKey-with-OpenPGP"
    ```bash
    gpg --expert --edit-key 1234ABC
      keytocard
    gpg --card-status
    gpg --card-edit
      admin
      passwd
    ```
