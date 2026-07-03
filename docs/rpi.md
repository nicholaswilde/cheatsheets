---
tags:
  - rpi
---

# Rpi

!!! info "Raspberry Pi OS"
    Change settings

    ```bash
    sudo raspi-config
    ```

!!! info "Update firmware"
    ```bash
    sudo rpi-update
    ```

!!! info "Expand filesystem"
    ```bash
    sudo raspi-config --expand-rootfs
    ```

!!! info "Generate User Before Boot"
    ```bash
    echo 'mypassword' | openssl passwd -6 -stdin | sudo tee -a /boot/userconf.txt
    ```

!!! info "or"
    ```bash
    echo 'nicholas:' "$(openssl passwd -6)" | sed 's/ //g' | sudo tee -a userconf.txt
    ```

!!! info "Enable ssh"
    ```bash
    touch /boot/ssh
    ```

!!! info "Kernal page size /boot/firmware/config.txt"
    ```bash
    kernel=kernel8.img # to end of line
    ```
