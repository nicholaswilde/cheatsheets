---
tags:
  - app
  - homelab
  - proxmox
  - virtualization
---

# proxmox

Proxmox Virtual Environment — LXC and VM management (https://www.proxmox.com)

!!! info "--- LXC Containers (pct) ---"
    To list all containers:

    ```bash
    pct list
    ```

!!! info "To start a container"
    ```bash
    pct start <vmid>
    ```

!!! info "To stop a container"
    ```bash
    pct stop <vmid>
    ```

!!! info "To restart a container"
    ```bash
    pct restart <vmid>
    ```

!!! info "To enter a container shell"
    ```bash
    pct enter <vmid>
    ```

!!! info "Or via lxc-attach"
    ```bash
    lxc-attach -n <vmid>
    ```

!!! info "To create a new unprivileged LXC container"
    ```bash
    pct create <vmid> <template> \
      --hostname <name> \
      --unprivileged 0 \
      --net0 name=eth0,bridge=vmbr0,ip=dhcp,ip6=slaac \
      --features nesting=1 \
      --password $(pass show default-lxc-password)
    ```

!!! info "To list available templates"
    ```bash
    pveam list local
    ```

!!! info "To download a template"
    ```bash
    pveam download local <template-name>
    ```

!!! info "To clone a container"
    ```bash
    pct clone <vmid> <new-vmid> --hostname <new-name>
    ```

!!! info "To destroy a container"
    ```bash
    pct destroy <vmid>
    ```

!!! info "To get container status"
    ```bash
    pct status <vmid>
    ```

!!! info "To view container config"
    ```bash
    pct config <vmid>
    ```

!!! info "To set container config option"
    ```bash
    pct set <vmid> --<option> <value>
    ```

!!! info "To resize a container disk"
    ```bash
    pct resize <vmid> rootfs +<size>G
    ```

!!! info "To take a snapshot"
    ```bash
    pct snapshot <vmid> <snapname>
    ```

!!! info "To restore a snapshot"
    ```bash
    pct rollback <vmid> <snapname>
    ```

!!! info "--- Virtual Machines (qm) ---"
    To list all VMs:

    ```bash
    qm list
    ```

!!! info "To start a VM"
    ```bash
    qm start <vmid>
    ```

!!! info "To stop a VM"
    ```bash
    qm stop <vmid>
    ```

!!! info "To get VM status"
    ```bash
    qm status <vmid>
    ```

!!! info "To take a VM snapshot"
    ```bash
    qm snapshot <vmid> <snapname>
    ```

!!! info "--- Nodes & Cluster ---"
    To check node status:

    ```bash
    pvesh get /nodes/<node>/status
    ```

!!! info "To list cluster nodes"
    ```bash
    pvecm nodes
    ```

!!! info "To check storage status"
    ```bash
    pvesm status
    ```

!!! info "--- Post-Setup LXC Convention ---"
    After container creation, always run:

    ```bash
    apt update && apt install -y openssh-server syncthing
    systemctl enable --now syncthing@root
    sed -i 's/#PermitRootLogin.*/PermitRootLogin yes/' /etc/ssh/sshd_config
    systemctl restart ssh
    apt purge -y cloud-init
    ```

--- Networking ---
Add Traefik conf: pve/traefik/conf.d/<app>.yml
Add AdGuard DNS rewrite for <app>.home
Run: /homepage update && /traefik update && /gatus update
