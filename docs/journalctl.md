---
tags:
  - journalctl
  - logging
  - systemd
---

# journalctl

!!! info "To actively follow log (like tail -f)"
    ```bash
    journalctl -f
    ```

!!! info "To display all errors since last boot"
    ```bash
    journalctl -b -p err
    ```

!!! info "To filter by time period"
    ```bash
    journalctl --since=2012-10-15 --until="2011-10-16 23:59:59"
    ```

!!! info "To show list of systemd units logged in journal"
    ```bash
    journalctl -F _SYSTEMD_UNIT
    ```

!!! info "To filter by specific unit"
    ```bash
    journalctl -u dbus
    ```

!!! info "To filter by executable name"
    ```bash
    journalctl /usr/bin/dbus-daemon
    ```

!!! info "To filter by PID"
    ```bash
    journalctl _PID=123
    ```

!!! info "To filter by Command, e.g., sshd"
    ```bash
    journalctl _COMM=sshd
    ```

!!! info "To filter by Command and time period"
    ```bash
    journalctl _COMM=crond --since '10:00' --until '11:00'
    ```

!!! info "To list all available boots"
    ```bash
    journalctl --list-boots
    ```

!!! info "To filter by specific User ID e.g., user id 1000"
    ```bash
    journalctl _UID=1000
    ```

!!! info "To filter by specific SYSLOG_INDENTIFIER"
    ```bash
    journalctl -t systemd-resolved
    ```
