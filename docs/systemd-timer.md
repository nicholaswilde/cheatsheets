---
tags:
  - app
  - system
  - scheduling
---

# systemd-timer

Schedule recurring tasks using systemd timer units (https://www.freedesktop.org/software/systemd/man/latest/systemd.timer.html)

!!! info "--- Managing Timers ---"
    To list all active timers (with next/last run times):

    ```bash
    systemctl list-timers
    ```

!!! info "To list all timers including inactive ones"
    ```bash
    systemctl list-timers --all
    ```

!!! info "To start a timer"
    ```bash
    systemctl start <name>.timer
    ```

!!! info "To stop a timer"
    ```bash
    systemctl stop <name>.timer
    ```

!!! info "To check timer status"
    ```bash
    systemctl status <name>.timer
    ```

!!! info "To enable a timer to start on boot"
    ```bash
    systemctl enable --now <name>.timer
    ```

!!! info "To disable a timer"
    ```bash
    systemctl disable --now <name>.timer
    ```

!!! info "To trigger the associated service immediately"
    ```bash
    systemctl start <name>.service
    ```

!!! info "To reload systemd after creating or editing unit files"
    ```bash
    systemctl daemon-reload
    ```

!!! info "--- Timer Unit File: /etc/systemd/system/<name>.timer ---"
    [Unit]
    Description=Run backup daily at 2am
    
    [Timer]
    OnCalendar=*-*-* 02:00:00
    Persistent=true
    
    [Install]
    WantedBy=timers.target
    --- Service Unit File: /etc/systemd/system/<name>.service ---
    [Unit]
    Description=Backup service
    
    [Service]
    Type=oneshot
    ExecStart=/usr/local/bin/backup.sh
    --- OnCalendar expressions ---
    daily at midnight:

    ```bash
    OnCalendar=daily
    ```

!!! info "daily at 02:30"
    ```bash
    OnCalendar=*-*-* 02:30:00
    ```

!!! info "weekdays at 09:00"
    ```bash
    OnCalendar=Mon..Fri *-*-* 09:00
    ```

!!! info "every hour"
    ```bash
    OnCalendar=hourly
    ```

!!! info "--- Other Timer Directives ---"
    Run once 15 minutes after boot:

    ```bash
    OnBootSec=15min
    ```

!!! info "Run every hour after last activation"
    ```bash
    OnUnitActiveSec=1h
    ```

!!! info "Add random jitter (avoid thundering herd)"
    ```bash
    RandomizedDelaySec=5min
    ```

!!! info "Catch up missed runs after downtime"
    ```bash
    Persistent=true
    ```

!!! info "--- Debugging ---"
    To verify a calendar expression:

    ```bash
    systemd-analyze calendar "<expression>"
    ```

!!! info "To check the next 5 elapse times"
    ```bash
    systemd-analyze calendar --iterations=5 "<expression>"
    ```

!!! info "To view timer logs"
    ```bash
    journalctl -u <name>.timer
    journalctl -u <name>.service
    ```
