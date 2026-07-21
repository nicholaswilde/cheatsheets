---
tags:
  - ai
  - cli
  - proxy
  - rust
---

# rtk

Rust Token Killer (RTK) - A token-optimized CLI proxy that compresses command outputs.

!!! info "Install in a project"
    ```bash
    rtk init --agent antigravity
    ```

!!! info "Show token savings analytics"
    ```bash
    rtk gain
    ```

!!! info "Show command usage history with savings"
    ```bash
    rtk gain --history
    ```

!!! info "Analyze Claude Code history for missed opportunities"
    ```bash
    rtk discover
    ```

!!! info "Execute raw command without filtering (for debugging)"
    ```bash
    rtk proxy <command>
    ```

!!! info "Check hook and configuration integrity"
    ```bash
    rtk verify
    ```

!!! info "Initialize global hook"
    ```bash
    rtk init -g
    ```

!!! info "Analyze CLI log for parser errors at startup"
    ```bash
    grep -E "hooks.go|hooks_manager.go" ~/.gemini/antigravity-cli/cli.log
    ```
