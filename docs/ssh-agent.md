---
tags:
  - ssh
---

# ssh-agent

SSH authentication agent for managing SSH keys and passphrases.

!!! info "Start the ssh-agent in the background"
    ```bash
    eval "$(ssh-agent -s)"
    ```

!!! info "Depending on your environment, you may need root access (sudo -s -H) or"
    ```bash
    exec ssh-agent bash
    exec ssh-agent zsh
    ```
