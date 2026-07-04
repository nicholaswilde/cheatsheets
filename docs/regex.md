---
tags:
  - cli
  - text-processing
  - reference
---

# regex

Regular expressions — pattern syntax reference for grep, sed, awk, rg, and more

!!! info "--- Anchors ---"
    ^        Start of line/string
    $        End of line/string
    \b       Word boundary
    \B       Non-word boundary
    --- Character Classes ---
    .        Any character except newline
    \d       Digit [0-9]
    \D       Non-digit
    \w       Word character [a-zA-Z0-9_]
    \W       Non-word character
    \s       Whitespace (space, tab, newline)
    \S       Non-whitespace
    [abc]    Any of a, b, or c
    [^abc]   Any character NOT in a, b, c
    [a-z]    Character range
    [a-zA-Z0-9] Alphanumeric
    POSIX classes (for grep, sed without -E):
    [[:alpha:]]  Letters
    [[:digit:]]  Digits
    [[:alnum:]]  Letters and digits
    [[:space:]]  Whitespace
    [[:upper:]]  Uppercase letters
    [[:lower:]]  Lowercase letters
    [[:punct:]]  Punctuation
    --- Quantifiers ---
    *        0 or more
    +        1 or more (ERE/PCRE only; use \+ in BRE)
    ?        0 or 1   (ERE/PCRE only; use \? in BRE)
    {n}      Exactly n
    {n,}     n or more
    {n,m}    Between n and m (inclusive)
    *?       Non-greedy 0 or more (PCRE only)
    +?       Non-greedy 1 or more (PCRE only)
    --- Groups & Alternation ---
    (abc)    Capture group
    (?:abc)  Non-capture group (PCRE)
    a|b      Alternation (a or b)
    \1       Back-reference to group 1
    --- Lookahead / Lookbehind (PCRE only) ---
    (?=...)  Positive lookahead
    (?!...)  Negative lookahead
    (?<=...) Positive lookbehind
    (?<!...) Negative lookbehind
    --- Common Patterns ---
    Email address:
    [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
    IPv4 address:
    \b([0-9]{1,3}\.){3}[0-9]{1,3}\b
    URL:
    https?://[^\s/$.?#].[^\s]*
    Semantic version (semver):
    v?[0-9]+\.[0-9]+\.[0-9]+
    Hex color:
    #([0-9a-fA-F]{3}|[0-9a-fA-F]{6})
    ISO date (YYYY-MM-DD):
    [0-9]{4}-[0-9]{2}-[0-9]{2}
    UUID:
    [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}
    YAML front matter block:
    ^---\n[\s\S]*?\n---
    --- Tool Usage ---
    grep (BRE by default, -E for ERE, -P for PCRE):

    ```bash
    grep '<pattern>' <file>
    grep -E '<ere-pattern>' <file>
    grep -P '<pcre-pattern>' <file>
    ```

!!! info "rg (ripgrep, PCRE2 by default)"
    ```bash
    rg '<pattern>' <path>
    rg -P '<pcre-pattern>' <path>       # explicit PCRE2
    rg '<pattern>' --type py <path>     # filter by file type
    ```

!!! info "sed (BRE by default, -E for ERE)"
    ```bash
    sed 's/<pattern>/<replacement>/' <file>
    sed -E 's/<ere-pattern>/<replacement>/' <file>
    ```

!!! info "awk"
    ```bash
    awk '/<pattern>/ { print $0 }' <file>
    ```

!!! info "To test a regex interactively (requires perl)"
    ```bash
    echo "test string" | perl -ne 'print if /<pattern>/'
    ```
