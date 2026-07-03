---
tags:
  - mac
  - deps
---

# brew

!!! info "Install"
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

!!! info "Install on linux Penguin"
    ```bash
    export CI=1 # (https://github.com/Homebrew/install/issues/369)
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

!!! info "Update"
    ```bash
    brew update
    ```

!!! info "Upgrade everything"
    ```bash
    brew upgrade
    ```

!!! info "Upgrade specific formula"
    ```bash
    brew upgrade <formula>
    ```

!!! info "Install formula"
    ```bash
    brew install <formula>
    ```

!!! info "Install cask"
    ```bash
    brew install --cask <formula>
    ```

!!! info "Uninstall"
    ```bash
    brew uninstall <formula>
    ```

!!! info "List installed formulae"
    ```bash
    brew list
    ```

!!! info "Fix"
    ```bash
    brew doctor
    ```

!!! info "Clean up"
    ```bash
    brew cleanup
    ```
