# restic

Backups done right!

!!! info "To get started with a local repository, first define some environment variables"
    ```bash
    export RESTIC_REPOSITORY=/srv/restic-repo
    export RESTIC_PASSWORD=some-strong-password
    ```

!!! info "Initialize the repository (first time only)"
    ```bash
    restic init
    ```

!!! info "Create your first backup"
    ```bash
    restic backup ~/work
    ```

!!! info "Backup individual file"
    ```bash
    restic -r /srv/restic-repo backup ~/work.txt
    ```

!!! info "You can list all the snapshots you created with"
    ```bash
    restic snapshots
    ID        Date                 Host    Tags   Directory        Size
    -------------------------------------------------------------------------
    40dc1520  2015-05-08 21:38:30  kasimir        /home/user/work  20.643GiB
    79766175  2015-05-08 21:40:19  kasimir        /home/user/work  20.645GiB
    bdbd3439  2015-05-08 21:45:17  luigi          /home/art        3.141GiB
    590c8fc8  2015-05-08 21:47:38  kazik          /srv             580.200MiB
    9f0bc19e  2015-05-08 21:46:11  luigi          /srv             572.180MiB
    ```

!!! info "You can filter the listing by directory path"
    ```bash
    restic -r /srv/restic-repo snapshots --path="/srv"
    ```

!!! info "Or filter by host"
    ```bash
    restic -r /srv/restic-repo snapshots --host luigi
    ```

!!! info "List files in a snapshot"
    ```bash
    restic ls 073a90db
    ```

!!! info "List the latest snapshot"
    ```bash
    restic ls --host kasimir latest
    ```

!!! info "List a specific directory"
    ```bash
    restic ls latest /home
    ```

!!! info "List recursively"
    ```bash
    restic ls --recursive latest /home
    ```

!!! info "List more details about a snapshot"
    ```bash
    restic ls --long latest
    ```

!!! info "Dry run with list of changes"
    ```bash
    restic -r /srv/restic-repo backup ~/work --dry-run -vv | grep "added"
    ```

!!! info "Copy snapshots between repos"
    ```bash
    restic -r /srv/restic-repo-copy copy --from-repo /srv/restic-repo --verbose
    ```

!!! info "Remove files from snapshots"
    ```bash
    restic -r /srv/restic-repo rewrite --exclude secret-file
    restic -r /srv/restic-repo rewrite --exclude secret-file 6160ddb2
    ```

!!! info "Modify metadata of snapshots"
    ```bash
    restic rewrite --new-host newhost --new-time "1999-01-01 11:11:11"
    ```

!!! info "You can restore a backup by noting the snapshot ID you want and running"
    ```bash
    restic restore --target /tmp/restore-work your-snapshot-ID
    ```

!!! info "It is a good idea to periodically check your repository’s metadata"
    ```bash
    restic check
    ```

!!! info "or full data"
    ```bash
    restic check --read-data
    ```

!!! info "Dry run"
    ```bash
    restic restore --target /tmp/restore-work --dry-run --verbose=2 latest
    ```

!!! info "Printing files to stdout"
    ```bash
    restic -r /srv/restic-repo dump latest production.sql | mysql
    ```

!!! info "Dump the file contents and folder structure to a file"
    ```bash
    restic -r /srv/restic-repo dump latest / --target /home/linux.user/output.tar -a tar
    ```

!!! info "Check if a repo is already initialized"
    ```bash
    restic -r /srv/restic-repo cat config
    ```

!!! info "Exclude files"
    ```bash
    cat <<EOF > excludes.txt
    ```

!!! info "exclude go-files"
    ```bash
    *.go
    ```

!!! info "exclude foo/x/y/z/bar foo/x/bar foo/bar"
    ```bash
    foo/**/bar
    EOF
    restic -r /srv/restic-repo backup ~/work --exclude="*.c" --exclude-file=excludes.txt
    ```
