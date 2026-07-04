---
tags:
  - app
  - homelab
  - sync
---

# syncthing

Continuous file synchronization program (https://syncthing.net)

!!! info "To install syncthing on Debian/Ubuntu"
    ```bash
    sudo apt install syncthing
    ```

!!! info "To start syncthing as a service for a user (e.g. root)"
    ```bash
    sudo systemctl enable syncthing@root
    sudo systemctl start syncthing@root
    ```

!!! info "To check syncthing service status"
    ```bash
    sudo systemctl status syncthing@root
    ```

!!! info "To view syncthing logs"
    ```bash
    journalctl -u syncthing@root -f
    ```

!!! info "To open the web UI (default port 8384)"
    http://localhost:8384
    To start syncthing manually (foreground):

    ```bash
    syncthing
    ```

!!! info "To generate a device ID"
    ```bash
    syncthing --generate=~/.config/syncthing
    ```

!!! info "To check syncthing version"
    ```bash
    syncthing --version
    ```

!!! info "Config file location"
    ~/.config/syncthing/config.xml
    To back up syncthing config:

    ```bash
    cp -r ~/.config/syncthing ~/.config/syncthing.bak
    ```

!!! info "To allow remote GUI access (edit config.xml)"
    Change <address>127.0.0.1:8384</address>
    to     <address>0.0.0.0:8384</address>
    To set GUI credentials via config.xml:
    <gui enabled="true" tls="false">
    <address>0.0.0.0:8384</address>
    <user>admin</user>
    <password>bcrypt-hashed-password</password>
    </gui>
    Proxmox LXC post-setup convention:
    Always install syncthing and enable syncthing@root after container creation.

    ```bash
    sudo apt install -y syncthing
    sudo systemctl enable --now syncthing@root
    ```
