# Fzf

!!! info "To fuzzy find files in current directory"
    ```bash
    fzf
    ```

!!! info "To fuzzy find a file and cat it"
    ```bash
    cat $(fzf)
    ```

!!! info "Case sensitive search"
    ```bash
    fzf +i
    ```

!!! info "Case insensitve search"
    ```bash
    fzf -i
    ```

!!! info "Select multiple files (TAB to select, Shift+TAB to un-select) to delete"
    ```bash
    rm -rf $(fzf --multi)
    ```

!!! info "Run a preview command with fzf, specifiy a command inside the double quotes"
    ```bash
    fzf --preview "file {}"
    ```

!!! info "Find files from find command and preview it with fzf"
    ```bash
    find . -type f -name "*.txt" | fzf --preview "head {}"
    ```

!!! info "Display border around fzf output"
    ```bash
    fzf --border sharp
    ```

!!! info "Output only selected files and pipe it to a file"
    ```bash
    find . -type f "*.txt" | fzf --multi > output.txt
    ```

!!! info "Bash completions"
    ```bash
    eval "$(fzf --bash)"
    ```

!!! info "Search history once bash completions are enabled"
    ```bash
    Ctrl+R 
    ```

!!! info "Fast directory navigation"
    ```bash
    Alt+C
    ```

!!! info "Quick file search and selection"
    ```bash
    Ctrl+T
    ```

!!! info "Easy process termination"
    ```bash
    kill -9 **<TAB>
    ```

!!! info "SSH"
    ```bash
    ssh **<TAB>
    ```

!!! info "Environment Variables"
    ```bash
    env | fzf
    ```

!!! info "Quickly unset an environment variable"
    ```bash
    unset **<TAB>
    ```

!!! info "Systemd show you the status of any service"
    ```bash
    fuzzy-sys --status
    ```
