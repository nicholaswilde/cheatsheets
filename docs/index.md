# Cheatsheets

[![ci](https://img.shields.io/github/actions/workflow/status/nicholaswilde/cheatsheets/ci.yml?label=ci&style=for-the-badge&branch=main&logo=githubactions&logoColor=white)](https://github.com/nicholaswilde/cheatsheets/actions/workflows/ci.yml)
[![convert](https://img.shields.io/github/actions/workflow/status/nicholaswilde/cheatsheets/convert.yml?label=convert&style=for-the-badge&branch=main&logo=bun&logoColor=white)](https://github.com/nicholaswilde/cheatsheets/actions/workflows/convert.yml)
[![publish](https://img.shields.io/github/actions/workflow/status/nicholaswilde/cheatsheets/publish.yml?label=publish&style=for-the-badge&branch=main&logo=githubpages&logoColor=white)](https://github.com/nicholaswilde/cheatsheets/actions/workflows/publish.yml)
[![task](https://img.shields.io/badge/task-enabled-brightgreen?logo=task&logoColor=white&style=for-the-badge)](https://taskfile.dev/)

Nicholas Wilde's personal cheatsheets — a central reference for commands and configurations used in homelab administration, software development, and system management.

---

## About

This collection is designed to be used with [cheat](https://github.com/cheat/cheat), a command-line tool for managing and searching cheatsheets. It supplements the [community-sourced cheatsheets](https://github.com/cheat/cheatsheets) and [cheat.sheets](https://github.com/chubin/cheat.sheets).

Browse individual cheatsheets using the navigation on the left, or use the search bar above to find a specific command.

---

## Format

Cheatsheets are plain-text files with an optional YAML front matter header used to assign tags and specify syntax highlighting.

```sh
---
syntax: bash
tags:
  - vcs
  - development
---
# To stage all changes in the current directory:
git add --all

# To commit staged changes:
git commit -m <message>
```

Parameter placeholders follow [docopt](http://docopt.org) syntax where possible.

---

## Installation

Clone the repository and mount it via NFS or a local path.

```shell
git clone https://github.com/nicholaswilde/cheatsheets.git personal
```

Configure [cheatpaths](https://github.com/cheat/cheat?tab=readme-ov-file#cheatpaths) in `cheat`:

```yaml
# conf.yml
cheatpaths:
  - name: personal
    path: /path/to/cheatsheets/sheets
    tags: [ personal ]
    readonly: false
```

---

## Usage

```shell
cheat -e git        # open or create the "git" cheatsheet
cheat git           # view the "git" cheatsheet
cheat -t homelab    # list all cheatsheets tagged "homelab"
cheat -s <keyword>  # search across all cheatsheets
```

Use shell aliases to sync with the remote repo:

```shell
cheats-pull   # pull latest changes
cheats-push   # stage, commit, and push all changes
```

---

## Source

Source code and full documentation is available on [GitHub](https://github.com/nicholaswilde/cheatsheets).
