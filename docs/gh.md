---
tags:
  - app
  - github
  - vcs
---

# gh

GitHub CLI — interact with GitHub from the command line (https://cli.github.com)

!!! info "To authenticate with GitHub"
    ```bash
    gh auth login
    ```

!!! info "To check authentication status"
    ```bash
    gh auth status
    ```

!!! info "--- Workflow Runs ---"
    To list recent workflow runs (pipe to cat to bypass pager):

    ```bash
    gh run list --limit 10 | cat
    ```

!!! info "To view details of a specific run"
    ```bash
    gh run view <run-id> | cat
    ```

!!! info "To view full logs for a failed job"
    ```bash
    gh run view --log --job=<job-id> | cat
    ```

!!! info "To watch a run in real time"
    ```bash
    gh run watch <run-id>
    ```

!!! info "To re-run a failed workflow"
    ```bash
    gh run rerun <run-id>
    ```

!!! info "To re-run only failed jobs"
    ```bash
    gh run rerun <run-id> --failed-only
    ```

!!! info "To trigger a workflow_dispatch manually"
    ```bash
    gh workflow run <workflow-name>
    ```

!!! info "To list all workflows"
    ```bash
    gh workflow list | cat
    ```

!!! info "--- Issues ---"
    To list open issues:

    ```bash
    gh issue list | cat
    ```

!!! info "To view an issue"
    ```bash
    gh issue view <number>
    ```

!!! info "To create an issue"
    ```bash
    gh issue create --title "Title" --body "Body"
    ```

!!! info "To close an issue"
    ```bash
    gh issue close <number>
    ```

!!! info "To reopen an issue"
    ```bash
    gh issue reopen <number>
    ```

!!! info "To list issues with a label"
    ```bash
    gh issue list --label <label>
    ```

!!! info "--- Pull Requests ---"
    To list open pull requests:

    ```bash
    gh pr list | cat
    ```

!!! info "To view a pull request"
    ```bash
    gh pr view <number>
    ```

!!! info "To checkout a PR locally"
    ```bash
    gh pr checkout <number>
    ```

!!! info "To create a pull request"
    ```bash
    gh pr create --title "Title" --body "Body" --base main
    ```

!!! info "To merge a pull request"
    ```bash
    gh pr merge <number> --squash
    ```

!!! info "To check PR status (CI checks)"
    ```bash
    gh pr checks <number> | cat
    ```

!!! info "--- Repos ---"
    To clone a repo:

    ```bash
    gh repo clone <owner>/<repo>
    ```

!!! info "To view repo info"
    ```bash
    gh repo view <owner>/<repo>
    ```

!!! info "To fork a repo"
    ```bash
    gh repo fork <owner>/<repo>
    ```

!!! info "To create a new repo"
    ```bash
    gh repo create <name> --public --clone
    ```

!!! info "--- Releases ---"
    To list releases:

    ```bash
    gh release list | cat
    ```

!!! info "To view a release"
    ```bash
    gh release view <tag>
    ```

!!! info "To create a release"
    ```bash
    gh release create <tag> --title "Title" --notes "Notes"
    ```

!!! info "To download release assets"
    ```bash
    gh release download <tag>
    ```

!!! info "--- Secrets ---"
    To list repository secrets:

    ```bash
    gh secret list | cat
    ```

!!! info "To set a secret"
    ```bash
    gh secret set <name>
    ```

!!! info "--- Gists ---"
    To create a gist from a file:

    ```bash
    gh gist create <file> --public
    ```

!!! info "To list your gists"
    ```bash
    gh gist list | cat
    ```
