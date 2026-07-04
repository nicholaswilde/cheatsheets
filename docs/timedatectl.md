---
tags:
  - app
  - system
---

# timedatectl

Control the system time and date (https://www.freedesktop.org/software/systemd/man/latest/timedatectl.html)

!!! info "To check current time, date, and time zone status"
    ```bash
    timedatectl status
    ```

!!! info "To list all available time zones"
    ```bash
    timedatectl list-timezones
    ```

!!! info "To set the system time zone"
    ```bash
    timedatectl set-timezone <timezone>
    ```

!!! info "To set the system date and time manually"
    ```bash
    timedatectl set-time "<yyyy-MM-dd hh:mm:ss>"
    ```

!!! info "To enable or disable network time synchronization (NTP)"
    ```bash
    timedatectl set-ntp <yes|no>
    ```

!!! info "To control whether the RTC is in local time or UTC"
    ```bash
    timedatectl set-local-rtc <yes|no>
    ```
