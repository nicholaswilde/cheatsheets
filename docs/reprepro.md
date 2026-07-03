# reprepro

Produce and Manage a Debian package repository

!!! info "Dry run"
    ```bash
    reprepro -b /srv/reprepro/raspi listfilter bullseye "Package (== my-app), Version (== 1.0.2)"
    ```

!!! info "Remove Only a Specific Version"
    ```bash
    reprepro -b /srv/reprepro/raspi removefilter bullseye "Package (== my-app), Version (== 1.0.2)"
    ```

!!! info "Cleanup"
    ```bash
    reprepro -b /srv/reprepro/raspi deleteunreferenced
    ```

!!! info "Permanent Removal (Deprecating an Architecture)"
    1. Edit Config: Open `conf/distributions`.
    2. Update Architectures: Remove the architecture (e.g., arm64) from the Architectures: line for every distribution.
    3. Clean Up: Run the following command to remove all packages that are no longer referenced by your new configuration:

    ```bash
    reprepro -b /srv/reprepro/raspi clearvanished
    ```

!!! info "List all packages"
    ```bash
    reprepro -b /srv/reprepro/raspi list trixie
    ```
