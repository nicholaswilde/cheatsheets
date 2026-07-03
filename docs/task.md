# Task

!!! info "Install"
    ```bash
    brew install go-task
    ```

!!! info "Create your first Taskfile"
    ```bash
    task --init
    ```

!!! info "Create Taskfile in subdirectory"
    ```bash
    task --init ./subdirectory
    ```

!!! info "Taskfile to have a specific name"
    ```bash
    task --init Custom.yml
    ```

!!! info "Calling a task in a subdirectory"
    ```bash
    task --dir ./subdirectory
    ```

!!! info "List tasks"
    ```bash
    task -l
    ```

!!! info "Reading a Taskfile from stdin"
    ```bash
    task -t - <(cat ./Taskfile.yml)
    ```

!!! info "OR"
    ```bash
    cat ./Taskfile.yml | task -t -
    ```

!!! info "Sending parameters with environment variables"
    ```bash
    TASK_VARIABLE=a-value task do-something
    ```
