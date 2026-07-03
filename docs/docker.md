---
tags:
  - docker
  - containers
---

# docker

!!! info "To start the docker daemon"
    ```bash
    docker -d
    ```

!!! info "To build a docker image"
    ```bash
    docker build -t <image-tag-name> <path-of-Dockerfile>
    ```

!!! info "To start a container with an interactive shell"
    ```bash
    docker run -ti <image-name> /bin/bash
    ```

!!! info "To run a docker container in the background"
    ```bash
    docker run -d <image-name>
    ```

!!! info "To "shell" into a running container (docker-1.3+)"
    ```bash
    docker exec -ti <container-name> bash
    ```

!!! info "To inspect a running container"
    ```bash
    docker inspect <container-name> (or <container-id>)
    ```

!!! info "To get the process ID for a container"
    ```bash
    docker inspect --format {{.State.Pid}} <container-name-or-id>
    ```

!!! info "To list (and pretty-print) the current mounted volumes for a container"
    ```bash
    docker inspect --format='{{json .Volumes}}' <container-id> | python -mjson.tool
    ```

!!! info "To copy files/folders between a container and your host"
    ```bash
    docker cp foo.txt mycontainer:/foo.txt
    ```

!!! info "To list currently running containers"
    ```bash
    docker ps
    ```

!!! info "To list all containers"
    ```bash
    docker ps -a
    ```

!!! info "To remove all stopped containers"
    ```bash
    docker container prune
    ```

!!! info "To remove all stopped containers"
    ```bash
    docker rm $(docker ps -qa)
    ```

!!! info "To list all images"
    ```bash
    docker images
    ```

!!! info "To only see all images id"
    ```bash
    docker image ls -q
    ```

!!! info "To remove all untagged images"
    ```bash
    docker rmi $(docker images | grep "^<none>" | awk '{print $3}')
    ```

!!! info "To remove all volumes not used by at least one container"
    ```bash
    docker volume prune
    ```

!!! info "To save image as tar archive"
    ```bash
    docker save -o <archive-name>.tar <image-name>
    ```

!!! info "To restore image from a saved tar archive"
    ```bash
    docker load -i <archive-name>.tar
    ```

!!! info "To remove an image"
    ```bash
    docker image rm <image-name-or-id>
    ```

!!! info "To tag an image"
    ```bash
    docker image tag <image-name>:<tag-name> <image-name>:<new-tag-name>
    ```

!!! info "To login into hub.docker.com"
    ```bash
    docker login
    ```

!!! info "To push a docker image into dockerhub repository"
    ```bash
    docker push <image-name>:<image-tag-name>
    ```

!!! info "List all networks daemon knows about"
    ```bash
    docker network ls
    ```

!!! info "Create a specific network"
    ```bash
    docker network create "<network_name>"
    ```

!!! info "Connect a specific container to a network"
    ```bash
    docker network connect "<network_id|name>" "<container_id|name>"
    ```

!!! info "Disconnect a specific container from network"
    ```bash
    docker network disconnect "<network_id|name>" "<container_id|name>"
    ```

!!! info "To see the logs of a background or stopped container"
    ```bash
    docker logs <container-id>
    ```

!!! info "To publish a port of container on localhost"
    ```bash
    docker run -p <localhost-port>:<container-port> <image-name>
    ```

!!! info "To create a docker volume"
    ```bash
    docker volume create <volume-name>
    ```

!!! info "To see information of a docker volume"
    ```bash
    docker volume inspect <volume-name>
    ```

!!! info "To use a volume in the container"
    ```bash
    docker run -v <volume-name>:<folder-path-in-container> <image>
    ```

!!! info "To link current folder between host and container for development"
    ```bash
    docker run <image-name> -v $(pwd):<folder-path-in-container> <image>
    ```

!!! info "To copy a file from the running container to host mechine"
    ```bash
    docker cp <container-id>:<path/to/file> <host/copy/path>
    ```

!!! info "To copy a file from host mechine to the running container"
    ```bash
    docker cp <host/copy/path> <container-id>:<path/to/file>
    ```
