---
tags:
  - rpi
---

# rpi

Raspberry Pi commands and configuration.

## All Models

!!! info "Change settings"
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

!!! info "Generate user:hash for userconf.txt before first boot"
    ```bash
    echo "<username>:$(openssl passwd -6 <password>)" | sudo tee /boot/userconf.txt
    ```

!!! info "Enable SSH before first boot"
    ```bash
    touch /boot/ssh
    ```

!!! info "Kernel page size fix - add to /boot/firmware/config.txt"
    Required on some distros when using a 16k page-size kernel:

    ```bash
    kernel=kernel8.img
    ```

## Raspberry Pi 4

!!! info "Install Argon Fan Hat"
    !!! warning
        This runs a remote script directly. Review the script before running.

    ```bash
    curl https://download.argon40.com/argonfanhat.sh | bash
    ```

!!! info "Uninstall Argon Fan Hat"
    ```bash
    argonone-uninstall
    ```

!!! info "Configure Argon Fan Hat"
    ```bash
    argonone-config
    ```

## Raspberry Pi 5

!!! info "Update EEPROM bootloader"
    ```bash
    sudo rpi-eeprom-update -a
    ```

!!! info "Enable PCIe Gen 3 (faster NVMe) - add to /boot/firmware/config.txt"
    ```bash
    dtparam=pciex1_gen=3
    ```
