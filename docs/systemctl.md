---
tags:
  - app
  - system
---

# systemctl

Control the systemd system and service manager (https://www.freedesktop.org/software/systemd/man/latest/systemctl.html)

!!! info "To check systemctl version"
    ```bash
    systemctl --version
    ```

!!! info "To check the status of a service"
    ```bash
    systemctl status <service>
    ```

!!! info "To start, stop, or restart a service"
    ```bash
    systemctl start <service>
    systemctl stop <service>
    systemctl restart <service>
    ```

!!! info "To reload a service's configuration (without restarting)"
    ```bash
    systemctl reload <service>
    ```

!!! info "To enable or disable a service to startup on boot"
    ```bash
    systemctl enable <service>
    systemctl disable <service>
    ```

!!! info "To edit a service's configuration override file"
    ```bash
    systemctl edit <service>
    ```

!!! info "To check if a service is active (returns exit code 0 if active)"
    ```bash
    systemctl is-active <service>
    ```

!!! info "To check if a service has failed (returns exit code 0 if failed)"
    ```bash
    systemctl is-failed <service>
    ```

!!! info "To check if a service is enabled to run on boot"
    ```bash
    systemctl is-enabled <service>
    ```

!!! info "To show only a specific property value of a service (ideal for scripting)"
    ```bash
    systemctl show -p <property> --value <service>
    ```

!!! info "Example: systemctl show -p ActiveState --value ufw"
    To list all failed services:

    ```bash
    systemctl --failed
    ```

!!! info "To list active loaded services"
    ```bash
    systemctl list-units --type=service
    ```

!!! info "To list all loaded service files and their enablement status"
    ```bash
    systemctl list-unit-files --type=service
    ```

!!! info "To reload systemd manager configuration (after changing unit files)"
    ```bash
    systemctl daemon-reload
    ```

!!! info "To list currently loaded targets"
    ```bash
    systemctl list-units --type=target
    ```

!!! info "To change current system target (e.g. multi-user or graphical)"
    ```bash
    systemctl isolate <target>
    ```

!!! info "To set the default boot target"
    ```bash
    systemctl set-default <target>
    ```

!!! info "To manage user-specific services"
    ```bash
    systemctl --user <start|stop|restart|status> <service>
    ```

!!! info "To show dependencies of a service"
    ```bash
    systemctl list-dependencies <service>
    ```

!!! info "To shut down or reboot the system"
    ```bash
    systemctl poweroff
    systemctl reboot
    ```
