---
tags:
  - app
  - system
---

# ps

Report a snapshot of the current processes (https://man7.org/linux/man-pages/man1/ps.1.html)

!!! info "To check ps version"
    ```bash
    ps --version
    ```

!!! info "To list every process on the system"
    ```bash
    ps aux
    ```

!!! info "To list a process tree"
    ```bash
    ps axjf
    ```

!!! info "To list every process owned by a specific user"
    ```bash
    ps -u <user>
    ```

!!! info "To list every process with a user-defined custom format"
    ```bash
    ps -eo pid,user,command
    ```

!!! info "To search for processes matching a name without including grep in the output"
    ```bash
    ps aux | grep '[<first_char>]<remaining_chars>'
    ```

!!! info "To list processes sorted by CPU usage"
    ```bash
    ps aux --sort=-%cpu
    ```

!!! info "To list processes sorted by memory usage"
    ```bash
    ps aux --sort=-%mem
    ```

!!! info "To show top 10 CPU-consuming processes"
    ```bash
    ps aux --sort=-%cpu | head -n 11
    ```

!!! info "To find processes by name"
    ```bash
    ps -fC <process_name>
    ```

!!! info "To show threads of a specific process"
    ```bash
    ps -T -p <pid>
    ```
