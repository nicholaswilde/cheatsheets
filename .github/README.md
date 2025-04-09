# :magic_wand: cheatsheets :clipboard:

My personal cheatsheets

---

## :framed_picture: Background

This repository contains my personal cheatsheets to be used with
[cheat][1] and similar applications.

---

## :gear: Config

WIP

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
