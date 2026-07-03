---
tags:
  - ssh
---

# Ssh

OpenSSH SSH client (remote login program)

!!! info "SSH in via PEM file, which normally needs 0600 permissions"
    ```bash
    ssh -i /path/to/file.pem user@example.com
    ```

!!! info "Connect through a non-standard port. It's recommended not to use the default"
    port of 22, as it is so often targeted, due to it being so commonplace.

    ```bash
    ssh -p 2222 user@example.com
    ```

!!! info "Connect and forward the authentication agent"
    ```bash
    ssh -A user@example.com
    ```

!!! info "Execute a command on a remote server"
    ```bash
    ssh -t user@example.com 'the-remote-command'
    ```

!!! info "Tunnel an X session over SSH, via X11 Forwarding"
    ```bash
    ssh -X user@example.com
    ```

!!! info "Redirect traffic with a tunnel between local host (port 8080) and a remote"
    host (remote.example.com:5000) through a proxy (personal.server.com).

    ```bash
    ssh -f -L 8080:remote.example.com:5000 user@personal.server.com -N
    ```

!!! info "Launch a specific X application over SSH"
    ```bash
    ssh -X -t user@example.com 'chromium-browser'
    ```

!!! info "Create a SOCKS proxy on localhost and port 9999"
    ```bash
    ssh -D 9999 user@example.com
    ```

!!! info "Connect to server, but allow for X11 forwarding, while also using Gzip"
    compression (can be much faster; YMMV), and using the `blowfish` encryption.
    For more information, see: http://unix.stackexchange.com/q/12755/44856

    ```bash
    ssh -XCc blowfish user@example.com
    ```

!!! info "Copy files and directories, via SSH, from remote host to the current working"
    directory, with Gzip compression. An option for when `rsync` isn't available.
    
    This works by creating (not temporary!) a remote Tar archive, then piping its
    output to a local Tar process, which then extracts it to STDOUT.

    ```bash
    ssh user@example.com 'tar -C /var/www/Shared/ zcf - asset1 asset2' | tar zxf -
    ```

!!! info "Explicitly specify a key for connection. Useful if you have too many"
    authentication failures for a given username.

    ```bash
    ssh -i some_id_rsa -o IdentitiesOnly=yes them@there:/path/
    ```

!!! info "Temporarily disable `pubkey` authentication for this instance"
    ```bash
    ssh -o PubkeyAuthentication=no username@hostname.com
    ```

!!! info "Mount a remote directory or filesystem, through SSH, to a local mount point"
    Install SSHFS from: https://github.com/libfuse/sshfs

    ```bash
    sshfs name@server:/path/to/folder /path/to/mount/point
    ```

!!! info "EMACS can read files through SSH. Below, is a link to related documentation"
    
    http://www.gnu.org/software/emacs/manual/html_node/emacs/Remote-Files.html
    

    ```bash
    emacs /ssh:name@server:/path/to/file
    ```

!!! info "Get help for SSH escape sequences. Useful for terminating unresponsive"
    sessions. The default escape character is ~ (tilde), escapes are only
    recognized immediately after a newline.

    ```bash
    $ <Enter>~?
    ```

!!! info "To ssh via pem file (which normally needs 0600 permissions)"
    ```bash
    ssh -i <pemfile> <user>@<host>
    ```

!!! info "To connect on a non-standard port"
    ```bash
    ssh -p <port> <user>@<host>
    ```

!!! info "To connect and forward the authentication agent"
    ```bash
    ssh -A <user>@<host>
    ```

!!! info "To execute a command on a remote server"
    ```bash
    ssh -t <user>@<host> 'the-remote-command'
    ```

!!! info "To connect to a host with a specific key exchange algorithm"
    Full list of available algorithms : man ssh_config

    ```bash
    ssh -oKeXAlgorithms=+diffie-hellman-group-exchange-sha1 <user>@<server>
    ```

!!! info "To tunnel an x session over SSH"
    ```bash
    ssh -X <user>@<host>
    ```

!!! info "Redirect traffic with a tunnel between local host (port 8080) and a remote"
    host (remote.example.com:5000) through a proxy (personal.server.com):

    ```bash
    ssh -f -L 8080:remote.example.com:5000 user@personal.server.com -N
    ```

!!! info "To launch a specific x application over SSH"
    ```bash
    ssh -X -t <user>@<host> 'chromium-browser'
    ```

!!! info "To create a SOCKS proxy on localhost and <port>"
    ```bash
    ssh -qND <port> <user>@<host>
    ```

!!! info "To tunnel an ssh session over the SOCKS proxy on localhost and port 9999"
    ```bash
    ssh -o "ProxyCommand nc -x 127.0.0.1:9999 -X 4 %h %p" <user>@<host>
    ```

!!! info "-X use an xsession, -C compress data, "-c blowfish" use the encryption blowfish"
    ```bash
    ssh <user>@<host> -C -c blowfish -X
    ```

!!! info "For more information, see"
    http://unix.stackexchange.com/q/12755/44856
    To copy files and folders through ssh from remote host to pwd with tar.gz
    compression when there is no rsync command available:

    ```bash
    ssh <user>@<host> "cd /var/www/Shared/; tar zcf - asset1 asset2" | tar zxf -
    ```

!!! info "To mount folder/filesystem through SSH"
    Install SSHFS from https://github.com/libfuse/sshfs
    Will allow you to mount a folder securely over a network.

    ```bash
    sshfs <user>@<host>:/path/to/folder /path/to/mount/point
    ```

!!! info "Emacs can read file through SSH"
    Doc: http://www.gnu.org/software/emacs/manual/html_node/emacs/Remote-Files.html

    ```bash
    emacs /ssh:<user>@<host>:<file>
    ```

!!! info "Permissions https://superuser.com/q/215504/352242"
    ```bash
    find .ssh/ -type f -exec chmod 600 {} \;; find .ssh/ -type d -exec chmod 700 {} \;; find .ssh/ -type f -name "*.pub" -exec chmod 644 {} \;
    ```
