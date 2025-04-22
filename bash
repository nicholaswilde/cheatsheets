# bash
# To implement a for loop:
for WORD in LIST; do
  COMMANDS
done

# For example:
for CurDay in Monday Tuesday Wednesday Thursday Friday Saturday Sunday; do
  printf "%s\n" "$CurDay"
done

# To implement a case statement:
case $1 in
    0)
        echo "Found a '0'." ;;
    1)
        echo "Found a '1'." ;;
    2)
        echo "Found a '2'." ;;
    3*)
        echo "Something beginning with '3' found." ;;
    '')
        echo "Nothing (null) found." ;;
    *)
        echo "Anything else found." ;;
esac

# Turn on built-in Bash debugging output:
set -x
# Turn the above off again:
set +x

# Retrieve N-th piped command exit status
printf 'foo' | grep -F 'foo' | sed 's/foo/bar/'
echo ${PIPESTATUS[0]}  # replace 0 with N

# Lock file:
( set -o noclobber; echo > my.lock ) || echo 'Failed to create lock file'

# Fork bomb. Do not run this! Has the potential to wreak havoc. It repeatedly
# and quickly spawns a lot of processes until the system eventually locks up.
:(){ :|:& };:
# An alternative, easier-to-understand version without the obfuscation:
func(){ func | func & }; func

# Unix Roulette, courtesy of Bigown's answer in the joke thread.
#
#   DANGER! Don't execute!
#
# Luckily, most modern setups have `--preserve-root` on by default, so this
# will be null and void, but even so, not even remotely worth the risk!
[ $[ $RANDOM % 6 ] == 0 ] && rm -rf /* || echo Click #Roulette

# A for loop one-liner.
for CurIter in {1..4}; do echo "$CurIter"; done
# Alternative, slightly-cleaner syntax:
for CurIter in {1..4}; { echo "$CurIter"; }

# Test for a variable being equal to (`-eq`) an integer (`0`).
if [ $var -eq 0 ]; then
  printf "Variable '\$var' is equal to '0'.\n"
fi

# Test for a `PATH` executable existing as a file, but note that aliases and
# functions will also output and result in a `0` exit status.
command -v ${program} >/dev/null 2>&1 || error "${program} not installed"
# However, that is a solution commonly found in a script using the Bourne
# shell, so in this case, an alternative, Bash-like, and more accurate version
# could be:
if ! type -fP bash > /dev/null 2>&1; then
  printf "ERROR: Dependency 'bash' not met." >&2
  exit 1
fi

# Send both STDOUT and STDERR from COMMAND to FILE.
COMMAND > FILE 2>&1
# Send STDOUT and STDERR from COMMAND to `/dev/null`, where data goes to die.
COMMAND > /dev/null 2>&1
# Pipe the STDOUT and STDERR from COMMAND_1 to COMMAND_2.
COMMAND_1 |& COMMAND_2

# Verbosely convert whitespaces (` `) to underscores (`_`) in file names.
for name in *\ *; do mv -vn "$name" "${name// /_}"; done

# Expand a regular variable.
$Var
# Some people like to cuddle the variable name with braces ('{' and '}') but
# this is usually superfluous and wasted keystrokes, unless you need to protect
# the variable name from having other characters included, as in the below
# example, or you're using one of the many features of parameter expansion.
"${Var}some text"

# Access a given index in an array. In this example, you don't technically
# need to specify the element, because by default the first element is used.
# As with many other languages, note that indices are 0-first, so 1 is the 2nd.
${Var[0]}
# You can use arithmetic between '[' and ']' as well.
${Var[2+3]}

# Expand variable to the length of that to which the variable would expand.
${#Var}

# Expand array variable to the number of elements/indices. You may find that
# `[*]` works as well as `[@]`, in this case.
${#Var[@]}

# Expand variable to a substring. In this case, imagine `Var` is equal to the
# string 'thing', but the offset is 2 and the length is 1, giving us an 'i'.
${Var:2:1}

# Expand variable to a substring by removing the matched glob pattern from left
# to right. To make this global (IE: greedy) use two '#' characters. So, in
# this example, everything, from left to right, up to and including a 'T' or
# 't', will be removed, but it would only happen once.
${Var#*[Tt]}
# As above, but from right to left. Use two '%' characters for a greedy match.
${Var%[Tt]*}

# Change how the variable expands by using pattern substitution. This uses glob
# pattern matching, not REGEX. If the first '/' is instead '//', a greedy match
# is performed.
${Var/PATTERN/REPLACEMENT/}
# A good example of the above, which will list directories in PATH which exist
# and are directories. It works because all instances of ':' are replaced with
# a whitespace, causing find(1) to see multiple directories (fields) in which
# to search.
find ${PATH//:/ } -type d

# Expand the variable to the string between `:-` and the closing `}`, if that
# variable doesn't already have a value. This can be useful to set a default.
${Var:-Default Value}

# This is a way of displaying an error message if the contents of the variable
# is empty. It will also immediately exit with an exit status of 1.
${Var:?This is an error message.}

# Indirect expansion exists in a couple of ways in BASH. If `Var` is equal to
# `OtherVar`, and that `OtherVar` is equal to `true`, the below example would
# expand to `true`.
${!Var}

# Expand variable so that the first letter is uppercase. Use two '^' (carets)
# if you want the entire contents of the variable to change to uppercase.
${Var^}
# As above, but convert to lowercase. Use two ',' characters to transform the
# entire string to which `Var` expands.
${Var,}

# cheat:bash 
# To implement a for loop:
for file in *; do 
  echo $file found;
done

# To implement a case command:
case "$1"
in
    0) echo "zero found";;
    1) echo "one found";;
    2) echo "two found";;
    3*) echo "something beginning with 3 found";;
esac

# To turn on debugging:
set -x

# To turn off debugging:
set +x

# Retrieve N-th piped command exit status:
printf 'foo' | fgrep 'foo' | sed 's/foo/bar/'
echo ${PIPESTATUS[0]}  # replace 0 with N

# To create a lockfile:
( set -o noclobber; echo > my.lock ) || echo 'Failed to create lock file'

# tldr:bash 
# bash
# Bourne-Again SHell, an `sh`-compatible command-line interpreter.
# See also: `zsh`, `histexpand` (history expansion).
# More information: <https://gnu.org/software/bash/>.

# Start an interactive shell session:
bash

# Start an interactive shell session without loading startup configs:
bash --norc

# Execute specific [c]ommands:
bash -c "echo 'bash is executed'"

# Execute a specific script:
bash path/to/script.sh

# Execute a specific script while printing each command before executing it:
bash -x path/to/script.sh

# Execute a specific script and stop at the first [e]rror:
bash -e path/to/script.sh

# Execute specific commands from `stdin`:
echo "echo 'bash is executed'" | bash

# Execute remote script
bash -c "$(curl -fsSL https://example.com/script.sh)"

# Get directory path
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"