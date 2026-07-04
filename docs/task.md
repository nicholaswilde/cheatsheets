---
tags:
  - app
  - build-tool
---

# task

Taskrunner / build tool alternative to GNU Make (https://taskfile.dev)

!!! info "To check task version"
    ```bash
    task --version
    ```

!!! info "To initialize a new Taskfile.yml in the current directory"
    ```bash
    task --init
    ```

!!! info "To initialize a new Taskfile.yml in a specific directory"
    ```bash
    task --init <directory>
    ```

!!! info "To initialize a taskfile with a custom filename"
    ```bash
    task --init <filename>
    ```

!!! info "To execute a task in a specific directory"
    ```bash
    task --dir <directory> <task_name>
    ```

!!! info "To list all public tasks"
    ```bash
    task --list
    ```

!!! info "To read a Taskfile from stdin"
    ```bash
    task -t - < <taskfile_path>
    ```

!!! info "To pass variables to a task via environment variables"
    ```bash
    <variable_name>=<value> task <task_name>
    ```
