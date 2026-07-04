---
tags:
  - cli
  - homelab
  - networking
  - filesystem
---

# nfs

Network File System — share directories between Linux hosts

!!! info "--- Server Setup (Debian/Ubuntu) ---"
    To install the NFS server:

    ```bash
    sudo apt install nfs-kernel-server
    ```

!!! info "To start and enable the NFS server"
    ```bash
    sudo systemctl enable --now nfs-kernel-server
    ```

!!! info "To check server status"
    ```bash
    sudo systemctl status nfs-kernel-server
    ```

!!! info "Exports config file"
    /etc/exports
    Example export entry:
    /mnt/storage/cheat  *(rw,sync,no_subtree_check,no_root_squash)
    /mnt/data           192.168.1.0/24(rw,sync,no_subtree_check)
    To apply changes to /etc/exports without restarting:

    ```bash
    sudo exportfs -ra
    ```

!!! info "To list currently exported shares"
    ```bash
    sudo exportfs -v
    ```

!!! info "To reload NFS exports"
    ```bash
    sudo systemctl reload nfs-kernel-server
    ```

!!! info "--- Client Setup (Debian/Ubuntu) ---"
    To install NFS client tools:

    ```bash
    sudo apt install nfs-common
    ```

!!! info "To mount an NFS share manually"
    ```bash
    sudo mount -t nfs <server-ip>:<remote-path> <local-mountpoint>
    ```

!!! info "To mount with specific options"
    ```bash
    sudo mount -t nfs -o rw,soft,timeo=30 <server-ip>:<remote-path> <local-mountpoint>
    ```

!!! info "To unmount an NFS share"
    ```bash
    sudo umount <local-mountpoint>
    ```

!!! info "To list NFS shares exported by a server"
    ```bash
    showmount -e <server-ip>
    ```

!!! info "--- Persistent Mounts (fstab) ---"
    To add a persistent NFS mount in /etc/fstab:
    <server-ip>:<remote-path>  <local-mountpoint>  nfs  rw,sync,hard,intr,timeo=30  0  0
    Example for homelab cheat path:
    192.168.1.10:/mnt/storage/cheat  /mnt/storage/cheat  nfs  rw,sync,no_subtree_check  0  0
    To mount all fstab entries without rebooting:

    ```bash
    sudo mount -a
    ```

!!! info "--- Diagnostics ---"
    To check NFS server RPC services:

    ```bash
    rpcinfo -p <server-ip>
    ```

!!! info "To view NFS statistics"
    ```bash
    nfsstat
    ```

!!! info "To check mounted NFS filesystems"
    ```bash
    mount | grep nfs
    ```

!!! info "To check open NFS connections"
    ```bash
    ss -tn | grep 2049
    ```

!!! info "NFS uses port 2049 (TCP/UDP) — ensure firewall allows it"
    To allow NFS through ufw:

    ```bash
    sudo ufw allow from <client-ip> to any port nfs
    ```

--- Common NFS Export Options ---
rw              — allow read/write
ro              — read-only
sync            — write to disk before replying
no_subtree_check — improves reliability for exports of subdirs
no_root_squash  — allow remote root to have root access (use carefully)
root_squash     — map remote root to anonymous user (default, safer)
all_squash      — map all users to anonymous
