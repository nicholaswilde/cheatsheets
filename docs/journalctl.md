---
tags:
  - journalctl
  - logging
  - systemd
---

# journalctl

Query and display logs from the systemd journal (https://www.freedesktop.org/software/systemd/man/latest/journalctl.html)

## Following & Output

!!! info "To follow logs in real time (like tail -f)"
    ```bash
    journalctl -f
    ```

!!! info "To show the last N lines"
    ```bash
    journalctl -n <number>
    ```

!!! info "To show output in short format (default)"
    ```bash
    journalctl -o short
    ```

!!! info "To show output in JSON format (one object per line)"
    ```bash
    journalctl -o json-pretty
    ```

!!! info "To show logs without a pager"
    ```bash
    journalctl --no-pager
    ```

## Filtering by Unit

!!! info "To filter by a specific systemd unit"
    ```bash
    journalctl -u <unit>
    ```

!!! info "To follow logs for a specific unit"
    ```bash
    journalctl -fu <unit>
    ```

!!! info "To filter by multiple units"
    ```bash
    journalctl -u <unit1> -u <unit2>
    ```

!!! info "To show list of all units logged in the journal"
    ```bash
    journalctl -F _SYSTEMD_UNIT
    ```

## Filtering by Priority

Priority levels: `emerg(0)` `alert(1)` `crit(2)` `err(3)` `warning(4)` `notice(5)` `info(6)` `debug(7)`

!!! info "To show logs at a specific priority level and above"
    ```bash
    journalctl -p <level>
    ```

!!! info "To show all errors and above since last boot"
    ```bash
    journalctl -b -p err
    ```

!!! info "To show only warning messages"
    ```bash
    journalctl -p warning..warning
    ```

## Filtering by Time

!!! info "To filter by time range"
    ```bash
    journalctl --since="<YYYY-MM-DD HH:MM:SS>" --until="<YYYY-MM-DD HH:MM:SS>"
    ```

!!! info "To show logs since yesterday"
    ```bash
    journalctl --since=yesterday
    ```

!!! info "To show logs from the last hour"
    ```bash
    journalctl --since="1 hour ago"
    ```

!!! info "To show logs from today"
    ```bash
    journalctl --since=today
    ```

## Filtering by Boot

!!! info "To list all available boots"
    ```bash
    journalctl --list-boots
    ```

!!! info "To show logs from the current boot"
    ```bash
    journalctl -b
    ```

!!! info "To show logs from the previous boot"
    ```bash
    journalctl -b -1
    ```

!!! info "To show logs from a specific boot by ID"
    ```bash
    journalctl -b <boot-id>
    ```

## Filtering by Process / User

!!! info "To filter by executable path"
    ```bash
    journalctl /usr/bin/<executable>
    ```

!!! info "To filter by PID"
    ```bash
    journalctl _PID=<pid>
    ```

!!! info "To filter by command name"
    ```bash
    journalctl _COMM=<name>
    ```

!!! info "To filter by user ID"
    ```bash
    journalctl _UID=<uid>
    ```

!!! info "To filter by syslog identifier"
    ```bash
    journalctl -t <identifier>
    ```

## Kernel Logs

!!! info "To show only kernel messages (like dmesg)"
    ```bash
    journalctl -k
    ```

!!! info "To show kernel messages from the previous boot"
    ```bash
    journalctl -k -b -1
    ```

## Disk Usage & Maintenance

!!! info "To show journal disk usage"
    ```bash
    journalctl --disk-usage
    ```

!!! info "To vacuum logs older than a given time"
    ```bash
    journalctl --vacuum-time=2weeks
    ```

!!! info "To vacuum logs to keep only a maximum size"
    ```bash
    journalctl --vacuum-size=500M
    ```

!!! info "To vacuum logs to keep only N files"
    ```bash
    journalctl --vacuum-files=5
    ```
