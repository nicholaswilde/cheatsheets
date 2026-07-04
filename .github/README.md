# :magic_wand: cheatsheets :clipboard:

[![ci](https://img.shields.io/github/actions/workflow/status/nicholaswilde/cheatsheets/ci.yml?label=ci&style=for-the-badge&branch=main&logo=githubactions&logoColor=white)](https://github.com/nicholaswilde/cheatsheets/actions/workflows/ci.yml)
[![convert](https://img.shields.io/github/actions/workflow/status/nicholaswilde/cheatsheets/convert.yml?label=convert&style=for-the-badge&branch=main&logo=bun&logoColor=white)](https://github.com/nicholaswilde/cheatsheets/actions/workflows/convert.yml)
[![publish](https://img.shields.io/github/actions/workflow/status/nicholaswilde/cheatsheets/publish.yml?label=publish&style=for-the-badge&branch=main&logo=github&logoColor=white)](https://github.com/nicholaswilde/cheatsheets/actions/workflows/publish.yml)
[![task](https://img.shields.io/badge/task-enabled-brightgreen?logo=task&logoColor=white&style=for-the-badge)](https://taskfile.dev/)

My personal cheatsheets

---

## :framed_picture: Background

This repository contains my personal cheatsheets to be used with
[cheat][1] and similar applications.

This repository supplements the [community-sourced cheatsheets][4] and [cheat.sheets][9].

A [static site][10] is automatically generated from the cheatsheets using [Zensical][11] and published to GitHub Pages.

---

## :hammer_and_wrench: Installation

I am using `cheat` in my homelab and want access to the cheat sheets from all Proxmox containers. To do so, all containers have my NFS share mounted to `/mnt/storage/cheat/cheatsheets/personal`.

Clone the repo.

```shell
mkdir -p /mnt/storage/cheat/cheatsheets
cd /mnt/storage/cheat/cheatsheets
git clone https://github.com/nicholaswilde/cheatsheets.git personal
# or
git clone git@github.com:nicholaswilde/cheatsheets.git personal
```

---

## :gear: Config

Ensure that [cheatpaths][5] are configured in `cheat`.

```yaml
# conf.yml
cheatpaths:
  - name: personal
    path: /mnt/storage/cheat/cheatsheets/personal/sheets  # path points to sheets directory
    tags: [ personal ]
    readonly: false        
```

`git` can be used to backup new or updated sheets to a remote repo.

Add `personal` path to a `$CHEAT_PERSONAL_PATH` environmental variable in [`.bashrc`][6].

```ini
# .bashrc
export CHEAT_PERSONAL_PATH=/mnt/storage/cheat/cheatsheets/personal
```

Add a [bash function][7] to `~/.bashrc` to make it easier to run git commands from any directory.

```bash
# ~/.bashrc
function cgit() { ## Run git commands in the cheatsheets repo from any directory
  git -C "${CHEAT_PERSONAL_PATH}" "$@"
}
```

Reload `.bashrc`.

```shell
source ~/.bashrc
```

>[!TIP]
>The push and pull commands may also be added to bash script files located in `/use/local/bin` to make it easier to run from a cronjob.

---

## :pencil: Usage

New sheets can be added or updated using `cheat`.

```shell
cheat -e tar     # opens the "tar" cheatsheet for editing, or creates it if it does not exist
cheat -e foo/bar # nested cheatsheets are accessed like this
```

Push or pull sheets to a remote repo.

```shell
cgit pull
cgit push
cgit status
```

---

## :page_facing_up: Format

Cheatsheets are plain-text files that begin with an optional "front matter"
header in YAML format. The header may be used to assign "tags" to a sheet, and
to specify the sheet's syntax (`bash`, `python`, `go`, etc).

When possible, cheatsheets should conform to this format:

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

As a guideline, it is preferred to use [docopt][3] syntax when specifying
parameter placeholders. In edge-cases where that syntax may cause confusion, it
is permissible to use placeholder values (`foo.txt`, `example.com`, etc.) as
necessary.

---

## :globe_with_meridians: Static Site

The cheatsheets are published as a static site at [nicholaswilde.io/cheatsheets][10] using [Zensical][11].

Install [uv][12] and install dependencies.

```shell
uv sync
```

Run common site tasks using [Task][13].

```shell
task site:convert   # convert cheatsheets to Zensical markdown pages
task site:build     # build the static site
task site:serve     # serve the site locally at http://localhost:8000
task site:check     # check Zensical version
task site:update    # update Zensical to the latest version
```

---

## :arrows_counterclockwise: CI Workflows

| Workflow | Trigger | Description |
|----------|---------|-------------|
| **Convert Cheatsheets** | Push to `sheets/**`, `scripts/convert_cheatsheets.ts`, or `Taskfile.yml` | Converts cheatsheets to Zensical markdown pages and commits back to `main`. |
| **Publish Zensical Site** | Push to `main`, manual dispatch, or after **Convert Cheatsheets** completes | Builds the Zensical static site and deploys it to GitHub Pages. |

---

## :test_tube: Development

Run validation and tests using [Task][13].

```shell
task          # list all available tasks
task all      # run validation and tests
task validate # validate cheatsheet format
task test     # run unit tests
```

Check for broken links.

```shell
task linkcheck              # check all links
task linkcheck-offline      # check local links only
task linkcheck-file FILE=sheets/git  # check a single file
```

---

## :clipboard: ToDo

- [ ] Transfer useful commands from [notes][8] to this repo.
- [ ] Document crontab to pull from community and apprise communications.

---

## :balance_scale: License

[Apache License 2.0](./LICENSE)

---

## :pencil: Author

This project was started in 2025 by [Nicholas Wilde][2].

[1]: <https://github.com/cheat/cheat>
[2]: <https://github.com/nicholaswilde/>
[3]: <http://docopt.org>
[4]: <https://github.com/cheat/cheatsheets>
[5]: <https://github.com/cheat/cheat?tab=readme-ov-file#cheatpaths>
[6]: <https://www.digitalocean.com/community/tutorials/bashrc-file-in-linux>
[7]: <https://www.gnu.org/software/bash/manual/bash.html#Shell-Functions>
[8]: <https://nicholaswilde.io/notes>
[9]: <https://github.com/chubin/cheat.sheets>
[10]: <https://nicholaswilde.io/cheatsheets>
[11]: <https://zensical.org>
[12]: <https://docs.astral.sh/uv/>
[13]: <https://taskfile.dev>