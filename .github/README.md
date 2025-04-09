# :magic_wand: cheatsheets :clipboard:

My personal cheatsheets

---

## :framed_picture: Background

This repository contains my personal cheatsheets to be used with
[cheat][1] and similar applications.

This repository supplements the [community-sourced cheatsheets][4].

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
    path: /mnt/storage/cheat/cheatsheets/personal  # this is a separate directory and repository than above
    tags: [ personal ]
    readonly: false        
```

`git` can be used to backup new or updated sheets to a remote repo.

Add `personal` path to a `$CHEAT_PERSONAL_PATH` environmental variable in [`.bashrc`][6].

```ini
# .bashrc
export CHEAT_PERSONAL_PATH=/mnt/storage/cheat/cheatsheets/personal
```

Add aliases to make it easier to pull and push updates.

```ini
# .bash_aliases

alias cheats-pull='git -C ${CHEAT_PERSONAL_PATH} pull origin'

alias cheats-push='git -C ${CHEAT_PERSONAL_PATH} add ${CHEAT_PERSONAL_PATH}/* && git -C ${CHEAT_PERSONAL_PATH} commit --allow-empty-message -a -m ""; git -C ${CHEAT_PERSONAL_PATH} push origin'
```

Reload `.bashrc`.

```shell
source ~/.bashrc
```

---

## :pencil: Usage

New sheets can be added or updated using `cheat`.

```shell
cheat -e tar     # opens the "tar" cheatsheet for editing, or creates it if it does not exist
cheat -e foo/bar # nested cheatsheets are accessed like this
```

Push or pull sheets to a remote repo.

```shell
cheats-pull
cheats-push
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