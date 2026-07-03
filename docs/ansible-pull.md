---
tags:
  - automation
---

# ansible-pull

Pull ansible playbooks from a VCS repo and executes them for the local host.

More information: <https://docs.ansible.com/ansible/latest/cli/ansible-pull.html>.

!!! info "Install"
    ```bash
    apt install ansible-core
    ```

!!! info "Pull a playbook from a VCS and execute a default local.yml playbook"
    ```bash
    ansible-pull -U repository_url
    ```

!!! info "Pull a playbook from a VCS and execute a specific playbook"
    ```bash
    ansible-pull -U repository_url playbook
    ```

!!! info "Pull a playbook from a VCS at a specific branch and execute a specific playbook"
    ```bash
    ansible-pull -U repository_url -C branch playbook
    ```

!!! info "Pull a playbook from a VCS, specify hosts file and execute a specific playbook"
    ```bash
    ansible-pull -U repository_url -i hosts_file playbook
    ansible-pull -U git@github.com:nicholaswilde/homelab-pull.git -i "$(hostname --short),"
    ```
