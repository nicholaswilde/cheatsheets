# Lpass

Command-line interface for the LastPass password manager.

More information: <https://github.com/lastpass/lastpass-cli>.

!!! info "Log in to your LastPass account, by entering your master password when prompted"
    ```bash
    mkdir -p ~/.local/share/lpass
    lpass login username
    ```

!!! info "Show login status"
    ```bash
    lpass status
    ```

!!! info "List all sites grouped by category"
    ```bash
    lpass ls
    ```

!!! info "Generate a new password for gmail.com with the identifier `myinbox` and add to LastPass"
    ```bash
    lpass generate --username username --url gmail.com myinbox password_length
    ```

!!! info "Show password for a specified entry"
    ```bash
    lpass show myinbox --password
    ```

!!! info "Show attachment"
    ```bash
    lpass show ssh --attach=<attachment id>
    ```

!!! info "Rename item"
    ```bash
    echo "${new_name}" | lpass edit --non-interactive --name "${id}"
    ```

!!! info "Export as json"
    ```bash
    lpass show --expand-multi --basic-regexp '.*' --json
    ```
