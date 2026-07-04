---
tags:
  - cli
  - text-processing
---

# sed

Stream editor for filtering and transforming text (https://www.gnu.org/software/sed/)

!!! info "To substitute the first occurrence of a pattern on each line"
    ```bash
    sed 's/<pattern>/<replacement>/' <file>
    ```

!!! info "To substitute all occurrences on each line (global)"
    ```bash
    sed 's/<pattern>/<replacement>/g' <file>
    ```

!!! info "To edit a file in-place"
    ```bash
    sed -i 's/<pattern>/<replacement>/g' <file>
    ```

!!! info "To edit in-place with a backup"
    ```bash
    sed -i.bak 's/<pattern>/<replacement>/g' <file>
    ```

!!! info "To substitute only on lines matching a pattern"
    ```bash
    sed '/<line-pattern>/s/<pattern>/<replacement>/g' <file>
    ```

!!! info "To delete lines matching a pattern"
    ```bash
    sed '/<pattern>/d' <file>
    ```

!!! info "To delete blank lines"
    ```bash
    sed '/^$/d' <file>
    ```

!!! info "To delete a specific line number"
    ```bash
    sed '5d' <file>
    ```

!!! info "To delete a range of lines"
    ```bash
    sed '3,7d' <file>
    ```

!!! info "To print only lines matching a pattern (like grep)"
    ```bash
    sed -n '/<pattern>/p' <file>
    ```

!!! info "To print a specific line number"
    ```bash
    sed -n '5p' <file>
    ```

!!! info "To print a range of lines"
    ```bash
    sed -n '3,7p' <file>
    ```

!!! info "To insert a line before a matching line"
    ```bash
    sed '/<pattern>/i\<new line>' <file>
    ```

!!! info "To append a line after a matching line"
    ```bash
    sed '/<pattern>/a\<new line>' <file>
    ```

!!! info "To replace an entire matching line"
    ```bash
    sed 's/.*<pattern>.*/<replacement>/' <file>
    ```

!!! info "To strip leading whitespace"
    ```bash
    sed 's/^[[:space:]]*//' <file>
    ```

!!! info "To strip trailing whitespace"
    ```bash
    sed 's/[[:space:]]*$//' <file>
    ```

!!! info "To strip both leading and trailing whitespace"
    ```bash
    sed 's/^[[:space:]]*//;s/[[:space:]]*$//' <file>
    ```

!!! info "To replace tabs with spaces"
    ```bash
    sed 's/\t/  /g' <file>
    ```

!!! info "To add a prefix to every line"
    ```bash
    sed 's/^/PREFIX: /' <file>
    ```

!!! info "To remove a prefix from every line"
    ```bash
    sed 's/^PREFIX: //' <file>
    ```

!!! info "To number lines"
    ```bash
    sed '=' <file> | sed 'N;s/\n/\t/'
    ```

!!! info "To use extended regex (ERE)"
    ```bash
    sed -E 's/<ere-pattern>/<replacement>/g' <file>
    ```

!!! info "To apply multiple expressions"
    ```bash
    sed -e 's/foo/bar/g' -e 's/baz/qux/g' <file>
    ```

!!! info "To read replacement from a file"
    ```bash
    sed 's/<pattern>/<replacement>/g' <file> > <output>
    ```

!!! info "To use & to refer to the matched text"
    ```bash
    sed 's/<pattern>/[&]/' <file>
    ```

!!! info "To use capture groups (back-references)"
    ```bash
    sed 's/\(foo\)\(bar\)/\2\1/' <file>
    ```

!!! info "With extended regex"
    ```bash
    sed -E 's/(foo)(bar)/\2\1/' <file>
    ```

!!! info "To uncomment a line (remove leading #)"
    ```bash
    sed 's/^#//' <file>
    ```

!!! info "To comment out a line (add leading #)"
    ```bash
    sed 's/^/#/' <file>
    ```

!!! info "To update a key=value config line in-place"
    ```bash
    sed -i 's/^key=.*/key=newvalue/' <file>
    ```
