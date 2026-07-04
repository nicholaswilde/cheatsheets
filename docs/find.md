---
tags:
  - find
  - community
---

# find

Search for files in a directory hierarchy (https://www.gnu.org/software/findutils/)

!!! info "To find files following symlinks (otherwise the symlinks are not followed)"
    ```bash
    find -L . -type f
    ```

!!! info "To find files by case-insensitive extension (ex: .jpg, .JPG, .jpG)"
    ```bash
    find . -iname "*.jpg"
    ```

!!! info "To find directories"
    ```bash
    find . -type d
    ```

!!! info "To find files"
    ```bash
    find . -type f
    ```

!!! info "To find files by octal permission"
    ```bash
    find . -type f -perm 777
    ```

!!! info "To find files with setuid bit set"
    ```bash
    find . -xdev \( -perm -4000 \) -type f -print0 | xargs -0 ls -l
    ```

!!! info "To find files newer than 1 day old and copy elsewhere (remove -p flag in xargs to not be asked)"
    ```bash
    find . -type f -ctime -1 -print0 | xargs -0 -p cp -t <dir>
    ```

!!! info "or"
    ```bash
    find . -type f -ctime -1 -print0 | xargs -0 -p -J % cp % <dir>
    ```

!!! info "To find files with extension '.txt' and remove them"
    ```bash
    find ./path/ -name '*.txt' -delete
    ```

!!! info "To find files with tilde as postfix and remove them"
    ```bash
    find ./path/ -name '*~' -delete
    ```

!!! info "To find files with extension '.txt' and dump their contents"
    ```bash
    find ./path/ -name '*.txt' -exec cat '{}' \;
    ```

!!! info "To find files with extension '.txt' and look for a string into them"
    ```bash
    find ./path/ -name '*.txt' | xargs grep 'string'
    ```

!!! info "To find files with size bigger than 5 Mebibyte and sort them by size"
    ```bash
    find . -size +5M -type f -print0 | xargs -0 ls -Ssh | sort -z
    ```

!!! info "To find files bigger than 2 Megabyte and list them"
    ```bash
    find . -type f -size +200000000c -exec ls -lh {} \; | awk '{ print $9 ": " $5 }'
    ```

!!! info "To find files modified more than 7 days ago and list file information"
    ```bash
    find . -type f -mtime +7d -ls
    ```

!!! info "To find symlinks owned by a user and list file information"
    ```bash
    find . -type l -user <username-or-userid> -ls
    ```

!!! info "To search for and delete empty directories"
    ```bash
    find . -type d -empty -exec rmdir {} \;
    ```

!!! info "To search for directories named build at a max depth of 2 directories"
    ```bash
    find . -maxdepth 2 -name build -type d
    ```

!!! info "To search all files who are not in .git directory"
    ```bash
    find . ! -iwholename '*.git*' -type f
    ```

!!! info "To find all files that have the same node (hard link) as MY_FILE_HERE"
    ```bash
    find . -type f -samefile MY_FILE_HERE 2>/dev/null
    ```

!!! info "To find all files in the current directory and modify their permissions"
    ```bash
    find . -type f -exec chmod 644 {} \;
    ```

!!! info "To find all files changed in last 2 days"
    ```bash
    find . -type f -ctime -48h
    find . -type f -ctime -2
    ```

!!! info "Or created in last 2 days"
    ```bash
    find . -type f -Btime -2
    ```

!!! info "Or accessed in last 2 days"
    ```bash
    find . -type f -atime -2
    ```

!!! info "To find and rename (imperfect) all files and dirs that have a comma in the"
    name (dry-run):

    ```bash
    find . -name '*,*' | while read f; do echo mv "$f" "${f//,/}"; done
    ```

!!! info "To find all broken links. Note -L returns a file unless it is a broken link"
    ```bash
    find -L /usr/ports/packages -type l
    ```

!!! info "To find and run multiple shell commands (without multiple execs)"
    See: https://stackoverflow.com/questions/5119946/find-exec-with-multiple-commands

    ```bash
    find . -type f -exec sh -c "echo '{}'; cat '{}';" \;
    ```

!!! info "To find files that are newer than a file"
    ```bash
    find <path> -newer <target-file>
    ```
