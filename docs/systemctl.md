# Systemctl

Control the systemd system and service manager

!!! info "Show only a given value from one of the `show` keys. In this example, the"
    value for the `ActiveState` key for the UFW service will be shown, and only
    it; ideal for scripting.
    
    Using the `--value` flag causes only the value to be displayed.

    ```bash
    systemctl show -p ActiveState --value ufw
    ```

!!! info "Start, stop, or restart a given service(s)"
    ```bash
    systemctl (start|stop|restart) <service>
    ```

!!! info "Check if a given service(s) is active. If it is, 'active' will display. An"
    exit status of 0 will be given if it's active, and non-zero otherwise. Use
    the `-q` or `--quiet` flag to rely only on the exit status.

    ```bash
    systemctl is-active ufw
    ```

!!! info "Check if a given service(s) has failed. If it is, 'failed' will display. An"
    exit status of 0 will be given if it has failed, and non-zero otherwise. Use
    the `-q` or `--quiet` flag to rely only on the exit status.

    ```bash
    systemctl is-active ufw
    ```

!!! info "Check if a given service(s) is enabled. If it is, 'enabled' will display. An"
    exit status of 0 will be given if it's enabled, and non-zero otherwise. Use
    the `-q` or `--quiet` flag to rely only on the exit status.

    ```bash
    systemctl is-enabled ufw
    ```

!!! info "List all failed services"
    ```bash
    systemctl --failed
    ```

!!! info "Shut the system down. Use `suspend` to suspend, `halt` to halt, and `reboot`"
    to instead of reboot the machine.

    ```bash
    systemctl poweroff
    ```

!!! info "Enable or disable a given service(s)"
    ```bash
    systemctl (enable|disable) <service>
    ```

!!! info "Show the current status of a given service(s)"
    ```bash
    systemctl status <service>
    ```

!!! info "Reload the daemon"
    ```bash
    systemctl daemon-reload
    ```
