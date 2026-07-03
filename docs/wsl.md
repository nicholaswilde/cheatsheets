# Wsl

Manage the Windows Subsystem for Linux from the command-line.

More information: <https://learn.microsoft.com/windows/wsl/reference>.

!!! info "Start a Linux shell (in the default distribution)"
    ```bash
    wsl shell_command
    ```

!!! info "Run a Linux command without using a shell"
    ```bash
    wsl --exec command command_arguments
    ```

!!! info "Specify a particular distribution"
    ```bash
    wsl --distribution distribution shell_command
    ```

!!! info "List available distributions"
    ```bash
    wsl --list
    ```

!!! info "List all available distributions, including online"
    ```bash
    wsl --list -o
    ```

!!! info "Export a distribution to a `.tar` file"
    ```bash
    wsl --export distribution path\to\distro_file.tar
    ```

!!! info "Import a distribution from a `.tar` file"
    ```bash
    wsl --import distribution path\to\install_location path/to/distro_file.tar
    ```

!!! info "Change the version of wsl used for the specified distribution"
    ```bash
    wsl --set-version distribution version
    ```

!!! info "Shut down Windows Subsystem for Linux"
    ```bash
    wsl --shutdown
    ```
