---
tags:
  - cli
  - homelab
  - virtualization
  - containers
---

# lxc

Linux Containers — userspace tools for managing LXC containers (https://linuxcontainers.org)

!!! info "--- Container Lifecycle ---"
    To list all containers:

    ```bash
    lxc-ls --fancy
    ```

!!! info "To create a container from a template"
    ```bash
    lxc-create -n <name> -t <template>
    ```

!!! info "To start a container"
    ```bash
    lxc-start -n <name>
    ```

!!! info "To start in foreground (see console output)"
    ```bash
    lxc-start -n <name> -F
    ```

!!! info "To stop a container"
    ```bash
    lxc-stop -n <name>
    ```

!!! info "To restart a container"
    ```bash
    lxc-stop -n <name> && lxc-start -n <name>
    ```

!!! info "To destroy a container"
    ```bash
    lxc-destroy -n <name>
    ```

!!! info "To clone a container"
    ```bash
    lxc-copy -n <source> -N <dest>
    ```

!!! info "--- Attaching & Console ---"
    To attach to a running container (get a shell):

    ```bash
    lxc-attach -n <name>
    ```

!!! info "To run a single command inside a container"
    ```bash
    lxc-attach -n <name> -- <command>
    ```

!!! info "To open the container console"
    ```bash
    lxc-console -n <name>
    ```

!!! info "To detach from console"
    Press Ctrl+a then q
    --- Status & Info ---
    To check container state:

    ```bash
    lxc-info -n <name>
    ```

!!! info "To show container IP address"
    ```bash
    lxc-info -n <name> -iH
    ```

!!! info "To monitor container state changes"
    ```bash
    lxc-monitor -n <name>
    ```

!!! info "To view container statistics"
    ```bash
    lxc-top
    ```

!!! info "--- Configuration ---"
    Container config file location:
    /var/lib/lxc/<name>/config
    To set a config option (e.g. memory limit):
    lxc.cgroup2.memory.max = 512M
    To set a network interface in config:
    lxc.net.0.type = veth
    lxc.net.0.link = lxcbr0
    lxc.net.0.flags = up
    To view running container's cgroup info:

    ```bash
    lxc-cgroup -n <name> memory.usage_in_bytes
    ```

!!! info "--- Snapshots ---"
    To take a snapshot (requires overlay or btrfs):

    ```bash
    lxc-snapshot -n <name>
    ```

!!! info "To list snapshots"
    ```bash
    lxc-snapshot -n <name> -L
    ```

!!! info "To restore a snapshot"
    ```bash
    lxc-snapshot -n <name> -r <snap-name>
    ```

!!! info "To destroy a snapshot"
    ```bash
    lxc-snapshot -n <name> -d <snap-name>
    ```

!!! info "--- Networking ---"
    To list default bridge (lxcbr0) DHCP leases:

    ```bash
    cat /var/lib/misc/dnsmasq.lxcbr0.leases
    ```

!!! info "To check if lxcbr0 bridge is up"
    ```bash
    ip link show lxcbr0
    ```

--- Proxmox Note ---
On Proxmox VE, use `pct` (pve container toolkit) which wraps LXC.
See: cheat proxmox
