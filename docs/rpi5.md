---
tags:
  - rpi
---

# rpi5

Raspberry Pi 5.

!!! info "Change settings"
    ```bash
    sudo raspi-config
    ```

!!! info "Update firmware"
    ```bash
    sudo rpi-update
    ```

!!! info "Update EEPROM bootloader"
    ```bash
    sudo rpi-eeprom-update -a
    ```

!!! info "Kernel page size fix /boot/firmware/config.txt"
    Required on some distros when using a 16k page-size kernel:

    ```bash
    kernel=kernel8.img
    ```

!!! info "Enable PCIe Gen 3 (faster NVMe) /boot/firmware/config.txt"
    ```bash
    dtparam=pciex1_gen=3
    ```

!!! info "Enable ssh before first boot"
    ```bash
    touch /boot/ssh
    ```
