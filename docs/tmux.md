---
tags:
  - app
  - terminal
---

# tmux

Terminal multiplexer (https://github.com/tmux/tmux)

!!! info "To install tmux"
    ```bash
    sudo apt install tmux
    ```

!!! info "To start a new session"
    ```bash
    tmux new -s <session_name>
    ```

!!! info "To list active sessions"
    ```bash
    tmux ls
    ```

!!! info "To attach to the last session or a specific one"
    ```bash
    tmux a
    ```

!!! info "Or"
    ```bash
    tmux attach -t <session_name>
    ```

!!! info "To detach from the current session"
    Press Prefix (Ctrl+b) followed by d
    To automatically attach/create an SSH tmux session on login (add to ~/.bashrc):

    ```bash
    if [[ $- =~ i ]] && [[ -z "$TMUX" ]] && [[ -n "$SSH_TTY" ]]; then
      tmux attach-session -t ssh_tmux || tmux new-session -s ssh_tmux
    fi
    ```

!!! info "To bypass shell profiles when logging in via SSH (in case autostart locks you out)"
    ```bash
    ssh -t <user>@<host> bash --norc
    ```

!!! info "Or"
    ```bash
    ssh -t <user>@<host> sh
    ```

!!! info "To install Tmux Plugin Manager (TPM)"
    ```bash
    mkdir -p ~/.tmux/plugins
    git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
    ```

!!! info "Add to ~/.tmux.conf: run '~/.tmux/plugins/tpm/tpm'"
    Reload tmux config, then press Prefix (Ctrl+b) followed by Shift+i to install plugins
    To enable pass-through escape sequences (e.g., for OSC52 clipboard or notifications):
    Add to ~/.tmux.conf

    ```bash
    set -g allow-passthrough on
    ```
