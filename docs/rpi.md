---
tags:
  - rpi
---

# rpi

Raspberry Pi commands and configuration.

!!! info "--- All Models ---"
    To change settings:

    ```bash
    sudo raspi-config
    ```

!!! info "To update firmware"
    ```bash
    sudo rpi-update
    ```

!!! info "To expand filesystem"
    ```bash
    sudo raspi-config --expand-rootfs
    ```

!!! info "To generate user:hash for userconf.txt before first boot"
    ```bash
    echo "<username>:$(openssl passwd -6 <password>)" | sudo tee /boot/userconf.txt
    ```

!!! info "To enable SSH before first boot"
    ```bash
    touch /boot/ssh
    ```

!!! info "To set kernel page size fix in /boot/firmware/config.txt"
    ```bash
    kernel=kernel8.img
    ```

!!! info "--- Raspberry Pi 4 ---"
    To install Argon Fan Hat (review script before running):

    ```bash
    curl https://download.argon40.com/argonfanhat.sh | bash
    ```

!!! info "To uninstall Argon Fan Hat"
    ```bash
    argonone-uninstall
    ```

!!! info "To configure Argon Fan Hat"
    ```bash
    argonone-config
    ```

!!! info "--- Raspberry Pi 5 ---"
    To update EEPROM bootloader:

    ```bash
    sudo rpi-eeprom-update -a
    ```

!!! info "To enable PCIe Gen 3 (faster NVMe) in /boot/firmware/config.txt"
    ```bash
    dtparam=pciex1_gen=3
    ```
