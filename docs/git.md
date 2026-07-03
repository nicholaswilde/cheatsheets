# Git

!!! info "Set your identity"
    ```bash
    git config --global user.name "John Doe"
    git config --global user.email johndoe@example.com
    ```

!!! info "Set your editor"
    ```bash
    git config --global core.editor emacs
    ```

!!! info "Enable color support for commands like `git diff`. Disable with `never` or"
    partially disable -- unless otherwise applied -- with `false`.

    ```bash
    git config --global color.ui true
    ```

!!! info "Stage all changes for commit"
    ```bash
    git add [--all|-A]
    ```

!!! info "Stash changes locally. This will keep the changes in a separate changelist, -"
    called 'stash', and the working directory is cleaned. You can apply changes
    from the stash at any time.

    ```bash
    git stash
    ```

!!! info "Stash changes with a message"
    ```bash
    git stash save "message"
    ```

!!! info "List all the stashed changes"
    ```bash
    git stash list
    ```

!!! info "Apply the most recent change and remove the stash from the stash list"
    ```bash
    git stash pop
    ```

!!! info "Apply stash from the stash list, but does not remove the stash from the list"
    ```bash
    git stash apply stash@{6}
    ```

!!! info "Commit staged changes"
    ```bash
    git commit -m "Your commit message"
    ```

!!! info "Edit previous commit message"
    ```bash
    git commit --amend
    ```

!!! info "Commit in the past. Newer versions of Git allow `--date="2 days ago"` usage"
    ```bash
    git commit --date="`date --date='2 day ago'`"
    git commit --date="Jun 13 18:30:25 IST 2015"
    ```

!!! info "Change the date of an existing commit"
    ```bash
    git filter-branch --env-filter \
        'if [ $GIT_COMMIT = 119f9ecf58069b265ab22f1f97d2b648faf932e0 ]
         then
             export GIT_AUTHOR_DATE="Fri Jan 2 21:38:53 2009 -0800"
             export GIT_COMMITTER_DATE="Sat May 19 01:01:01 2007 -0700"
         fi'
    ```

!!! info "Remove staged and working directory changes"
    ```bash
    git reset --hard
    ```

!!! info "Go 2 commits back"
    ```bash
    git reset --hard HEAD~2
    ```

!!! info "Remove untracked files"
    ```bash
    git clean -f -d
    ```

!!! info "Remove untracked and ignored files"
    ```bash
    git clean -f -d -x
    ```

!!! info "Push to the tracked master branch"
    ```bash
    git push origin master
    ```

!!! info "Push to a specified repository"
    ```bash
    git push git@github.com:<username>/<repository>.git
    ```

!!! info "Delete the branch "branch_name""
    ```bash
    git branch -D <branch>
    ```

!!! info "Make an existing branch track a remote branch"
    ```bash
    git branch -u upstream/foo
    ```

!!! info "List all local and remote branches"
    ```bash
    git branch -a
    ```

!!! info "See who committed which line in a file"
    ```bash
    git blame <file>
    ```

!!! info "Sync a fork with the master repo"
    ```bash
    git remote add upstream git@github.com:name/repo.git # <-- Set a new repo.
    git remote -v # <-- Confirm new remote repo.
    git fetch upstream # <-- Get branches.
    git branch -va # <-- List local - remote branches.
    git checkout master # <-- Checkout local master branch.
    git checkout -b new_branch # <-- Create and checkout a new branch.
    git merge upstream/master # <-- Merge remote into local repo.
    git show 83fb499 # <-- Show what a commit did.
    git show 83fb499:path/to/file.ext # <-- Show the file as it was in 83fb499.
    git diff branch_1 branch_2 # <-- Check difference between branches.
    git log # <-- Show all of the commits.
    git status # <-- Show the changes from the last commit.
    ```

!!! info "Display the commit history of a set of files"
    ```bash
    git log --pretty=email --patch-with-stat --reverse --full-index -- Admin\*.py > Sripts.patch
    ```

!!! info "Import commits from another repo"
    ```bash
    git --git-dir=../some_other_repo/.git format-patch -k -1 --stdout <commit SHA> | git am -3 -k
    ```

!!! info "View commits which would be pushed"
    ```bash
    git log @{u}..
    ```

!!! info "View changes which are new on a feature branch"
    ```bash
    git log -p feature --not master
    git diff master...feature
    ```

!!! info "Interactive rebase for the last 7 commits"
    ```bash
    git rebase -i @~7
    ```

!!! info "Show changes to files WITHOUT considering them a part of git. This can be"
    used to diff files which are not part of a git repo!

    ```bash
    git diff --no-index path/to/file/A path/to/file/B
    ```

!!! info "Pull changes, while overwriting any local commits"
    ```bash
    git fetch --all
    git reset --hard origin/master
    ```

!!! info "Update all submodules"
    ```bash
    git submodule update --init --recursive
    ```

!!! info "Perform a shallow clone, to only get the latest commits, which helps to save"
    data (good for limited data connections) when cloning large repos.

    ```bash
    git clone --depth 1 <remote-url>
    ```

!!! info "Unshallow a clone"
    ```bash
    git pull --unshallow
    ```

!!! info "Create a bare branch; without any commits"
    ```bash
    git checkout --orphan branch_name
    ```

!!! info "Checkout a new branch from a different starting point"
    ```bash
    git checkout -b master upstream/master
    ```

!!! info "Reset local branch to upstream branch, then checkout it"
    ```bash
    git checkout -B master upstream/master
    ```

!!! info "Remove all stale branches; ones that have been deleted on remote. So if you"
    have a lot of useless branches, delete them on GitHub and then run this.

    ```bash
    git remote prune origin
    ```

!!! info "Prune all remotes at once"
    ```bash
    git remote prune $(git remote | tr '\n' ' ')
    ```

!!! info "Revisions can also be identified with `:/text`. So, this will show the first"
    commit that has the string "cool" in its message body.

    ```bash
    git show :/cool
    ```

!!! info "Undo parts of the last commit in a specific file"
    ```bash
    git checkout -p HEAD^ -- /path/to/file
    ```

!!! info "Revert a commit, but keep the history of the event as a separate commit"
    ```bash
    git revert <commit SHA>
    ```

!!! info "Apply only the changes made within a given commit. This is different to the"
    `merge` command, as it would otherwise apply all commits from a branch.

    ```bash
    git cherry-pick <commit-sha>
    ```

!!! info "Undo last commit. If you want to nuke commit C to never see it again"
    (F)
    A-B-C
    ↑
    master

    ```bash
    git reset --hard HEAD~1
    ```

!!! info "Undo last commit. If you want to undo the commit, but keep your changes"
    (F)
    A-B-C
    ↑
    master

    ```bash
    git reset HEAD~1
    ```

!!! info "List files changed in a given commit"
    ```bash
    git diff-tree --no-commit-id --name-only -r <commit-sha>
    ```

!!! info "Porcelain-ly List files changed in a given commit; user-facing approach"
    ```bash
    git show --pretty="" --name-only bd61ad98
    ```

!!! info "See everything you have done, across branches, in a glance, then go to the"
    place right before you broke everything.

    ```bash
    git reflog
    git reset HEAD@{hash}
    ```

!!! info "Move your most recent commit from one branch, to stage it on [BRANCH]"
    ```bash
    git reset HEAD~ --soft
    git stash
    git checkout <branch>
    git stash pop
    git add .
    (
      git config --global user.email "ncwilde43@gmail.com"
      git config --global user.name "nιcнolaѕ wιlde"
      git config --global init.defaultBranch main
      git config --global user.signingkey 78E2E084522FB8A14C0D9AED800C8DB8B299A622
      git config --global commit.gpgsign true
      git config --global pull.rebase false
    )
    ```
