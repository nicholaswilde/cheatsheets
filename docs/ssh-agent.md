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

!!! note
    Depending on your environment, you may need to use root access by running
    `sudo -s -H` before starting the agent, or use `exec ssh-agent bash` /
    `exec ssh-agent zsh` to run the agent in a new shell.
