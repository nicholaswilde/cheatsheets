---
tags:
  - orchestration
---

# ansible

Manage groups of computers remotely over SSH. (use the `/etc/ansible/hosts` file to add new groups/hosts).

Some subcommands such as `ansible galaxy` have their own usage documentation.

More information: <https://www.ansible.com/>.

!!! info "To run a command on multiple instances at once - using `servers` group from `inventory.yml`"
    ```bash
    ansible -u ansible -i inventory.yml servers -m shell -a "ls /var"
    ```

!!! info "List hosts belonging to a group"
    ```bash
    ansible group --list-hosts
    ```

!!! info "Ping a group of hosts by invoking the ping module"
    ```bash
    ansible group -m ping
    ```

!!! info "Display facts about a group of hosts by invoking the setup module"
    ```bash
    ansible group -m setup
    ```

!!! info "Execute a command on a group of hosts by invoking command module with arguments"
    ```bash
    ansible group -m command -a 'my_command'
    ```

!!! info "Execute a command with administrative privileges"
    ```bash
    ansible group --become --ask-become-pass -m command -a 'my_command'
    ```

!!! info "Execute a command using a custom inventory file"
    ```bash
    ansible group -i inventory_file -m command -a 'my_command'
    ```

!!! info "List the groups in an inventory"
    ```bash
    ansible localhost -m debug -a 'var=groups.keys()'
    ```

!!! info "Ignore errors"
    ```bash
    - name: task name
      ansible.builtin.taskname
      ignore_errors: true
    ```
