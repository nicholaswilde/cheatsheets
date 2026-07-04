---
tags:
  - app
  - terminal
  - ai
---

# agy

Google Antigravity (AGY) CLI interface (https://antigravity.google)

!!! info "To launch the Antigravity interactive CLI"
    ```bash
    agy
    ```

!!! info "To show command-line flags and help options"
    ```bash
    agy --help
    ```

!!! info "To run a single prompt directly from the shell"
    ```bash
    agy --prompt "<your_request>"
    ```

!!! info "To configure the CLI settings"
    ```bash
    nano ~/.gemini/antigravity-cli/settings.json
    ```

To list available interactive slash commands (within agy TUI):
Type /help in the TUI chat input
To set a long-running, autonomous goal (within agy TUI):
Type /goal <goal_description>
To start an interactive interview to align on design decisions (within agy TUI):
Type /grill-me
To teach the agent new workflows/instructions persistently (within agy TUI):
Type /learn
To schedule a recurring task or cron timer (within agy TUI):
Type /schedule
To exit the TUI session:
Type /exit or /quit, or press Ctrl+D twice
