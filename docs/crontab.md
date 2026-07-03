---
tags:
  - job
  - scheduler
  - periodic
---

# Crontab

!!! info "set a shell"
    ```bash
    SHELL=/bin/bash
    ```

!!! info "set a PATH"
    ```bash
    PATH=/usr/bin:/usr/sbin:/usr/local/bin
    ```

!!! info "incorrect way of seeting PATH"
    ```bash
    PATH=$PATH:/do/not/do/this
    ```

!!! info "crontab format"
    ```bash
    * * * * *  command_to_execute
    - - - - -
    | | | | |
    | | | | +- day of week (0 - 7) (where sunday is 0 and 7)
    | | | +--- month (1 - 12)
    | | +----- day (1 - 31)
    | +------- hour (0 - 23)
    +--------- minute (0 - 59)
    ```

!!! info "example entries"
    every 15 min

    ```bash
    */15 * * * * /home/user/command.sh
    ```

!!! info "every midnight"
    ```bash
    0 0 * * * /home/user/command.sh
    ```

!!! info "every Saturday at 8:05 AM"
    ```bash
    5 8 * * 6 /home/user/command.sh
    ```

!!! info "compute your crontab periodicity format online"
    ```bash
    https://crontab.guru/
    ```

!!! info "be careful with % sign (percent), it has special meaning, see https://crontab.guru/ for explanation"
    ```bash
    % signs must be escaped such as \%
    ```

!!! info "view log"
    ```bash
    journalctl | grep CRON
     tldr:crontab 
    ```

!!! info "crontab"
    Schedule cron jobs to run on a time interval for the current user.
    More information: <https://crontab.guru/>.
    Edit the crontab file for the current user:

    ```bash
    crontab -e
    ```

!!! info "Edit the crontab file for a specific user"
    ```bash
    sudo crontab -e -u user
    ```

!!! info "Replace the current crontab with the contents of the given file"
    ```bash
    crontab path/to/file
    ```

!!! info "View a list of existing cron jobs for current user"
    ```bash
    crontab -l
    ```

!!! info "Remove all cron jobs for the current user"
    ```bash
    crontab -r
    ```

!!! info "Sample job which runs at 10:00 every day (* means any value)"
    ```bash
    0 10 * * * command_to_execute
    ```

!!! info "Sample crontab entry, which runs a command every 10 minutes"
    ```bash
    */10 * * * * command_to_execute
    ```

!!! info "Sample crontab entry, which runs a certain script at 02:30 every Friday"
    ```bash
    30 2 * * Fri /absolute/path/to/script.sh
    ```

!!! info "Append a file to existing cron"
    ```bash
    (crontab -l 2>/dev/null; cat crontab.tmpl) | crontab -
    ```
