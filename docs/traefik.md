---
tags:
  - app
  - homelab
  - networking
  - proxy
---

# traefik

Cloud-native reverse proxy and load balancer (https://traefik.io)

!!! info "--- Installation (Docker) ---"
    To run traefik with Docker:

    ```bash
    docker run -d \
      -p 80:80 \
      -p 443:443 \
      -p 8080:8080 \
      -v /var/run/docker.sock:/var/run/docker.sock \
      traefik:latest
    ```

!!! info "--- CLI Commands ---"
    To check traefik version:

    ```bash
    traefik version
    ```

!!! info "To validate a config file"
    ```bash
    traefik healthcheck --configFile=traefik.yml
    ```

!!! info "To run traefik with a config file"
    ```bash
    traefik --configFile=traefik.yml
    ```

!!! info "--- Static Configuration (traefik.yml) ---"
    Minimal traefik.yml example:
    api:
    dashboard: true
    insecure: true
    
    entryPoints:
    web:
    address: ":80"
    websecure:
    address: ":443"
    
    providers:
    docker:
    exposedByDefault: false
    file:
    directory: /etc/traefik/conf.d
    watch: true
    
    certificatesResolvers:
    letsencrypt:
    acme:
    email: admin@example.com
    storage: /letsencrypt/acme.json
    httpChallenge:
    entryPoint: web
    --- Dynamic Configuration (conf.d/*.yml) ---
    To add a new service route (file provider):
    http:
    routers:
    myapp:
    rule: "Host(`myapp.home`)"
    service: myapp
    entryPoints:
    - web
    services:
    myapp:
    loadBalancer:
    servers:
    - url: "http://192.168.1.50:8080"
    --- Docker Labels ---
    To expose a container via traefik (docker-compose):
    labels:
    - "traefik.enable=true"
    - "traefik.http.routers.myapp.rule=Host(`myapp.home`)"
    - "traefik.http.routers.myapp.entrypoints=web"
    - "traefik.http.services.myapp.loadbalancer.server.port=8080"
    To add HTTPS with Let's Encrypt:
    labels:
    - "traefik.http.routers.myapp.entrypoints=websecure"
    - "traefik.http.routers.myapp.tls.certresolver=letsencrypt"
    To add basic auth middleware:
    labels:
    - "traefik.http.middlewares.auth.basicauth.users=user:$$hashed$$password"
    - "traefik.http.routers.myapp.middlewares=auth"
    --- Dashboard ---
    To access the traefik dashboard (insecure mode):
    http://localhost:8080/dashboard/
    To check registered routers via API:

    ```bash
    curl http://localhost:8080/api/http/routers | jq '.[].name'
    ```

!!! info "To check registered services"
    ```bash
    curl http://localhost:8080/api/http/services | jq '.[].name'
    ```

--- Homelab Convention ---
Add new service conf in: pve/traefik/conf.d/<app>.yml
Then run: /traefik update
Pair with AdGuard DNS rewrite for <app>.home
