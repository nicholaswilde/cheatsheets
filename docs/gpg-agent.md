---
tags:
  - gpg
  - security
---

# gpg-agent

GPG agent for managing GPG key passphrases and SSH keys.

!!! info "~/.gnupg/gpg-agent.conf"
    ```bash
      default-cache-ttl 34560000
      max-cache-ttl 34560000
    ```

!!! info "End the session by restarting gpg-agent"
    ```bash
    gpgconf --kill gpg-agent
    gpg-agent --daemon
    ```
