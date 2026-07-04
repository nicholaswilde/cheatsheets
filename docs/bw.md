---
tags:
  - app
  - security
  - password-manager
---

# bw

A CLI to access and manage a Bitwarden vault (https://bitwarden.com/help/cli/)

!!! info "Log in to a Bitwarden user account"
    ```bash
    bw login
    ```

!!! info "Log out of a Bitwarden user account"
    ```bash
    bw logout
    ```

!!! info "Search and display items from Bitwarden vault"
    ```bash
    bw list items --search github
    ```

!!! info "Display a particular item from Bitwarden vault"
    ```bash
    bw get item github
    ```

!!! info "Create a folder in Bitwarden vault"
    ```bash
    echo -n '{"name":"My Folder1"}' | base64 | bw create folder
    bw get password github
    bw login
    bw lock
    bw unlock myPassword321
    bw list --help
    bw list items --search google
    bw get item 99ee88d2-6046-4ea7-92c2-acac464b1412
    bw get password google.com
    echo '{"name":"My Folder"}' | bw encode
    bw create folder eyJuYW1lIjoiTXkgRm9sZGVyIn0K
    bw edit folder c7c7b60b-9c61-40f2-8ccd-36c49595ed72 eyJuYW1lIjoiTXkgRm9sZGVyMiJ9Cg==
    bw delete item 99ee88d2-6046-4ea7-92c2-acac464b1412
    bw generate -lusn --length 18
    bw config server https://bitwarden.example.com
    bw send -f ./file.ext
    bw send "text to send"
    echo "text to send" | bw send
    bw receive https://vault.bitwarden.com/#/send/rg3iuoS_Akm2gqy6ADRHmg/Ht7dYjsqjmgqUM3rjzZDSQ
    ```
