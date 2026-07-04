---
tags:
  - app
  - rust
  - cross-compilation
---

# cross

Containerized cross-compilation for Rust (https://github.com/cross-rs/cross)

!!! info "To install cross"
    ```bash
    cargo install cross --git https://github.com/cross-rs/cross
    ```

!!! info "To build for a specific target"
    ```bash
    cross build --target <target-triple>
    ```

!!! info "To build a release binary"
    ```bash
    cross build --target <target-triple> --release
    ```

!!! info "To run tests for a target"
    ```bash
    cross test --target <target-triple>
    ```

!!! info "Common ARM target triples"
    ```bash
    cross build --target arm-unknown-linux-gnueabihf   # ARMv6 (Raspberry Pi Zero/1)
    cross build --target armv7-unknown-linux-gnueabihf  # ARMv7 (Raspberry Pi 2/3)
    cross build --target aarch64-unknown-linux-gnu      # ARM64 (Raspberry Pi 4/5, modern LXC)
    ```

!!! info "To build for multiple targets"
    ```bash
    cross build --target aarch64-unknown-linux-gnu --release
    cross build --target armv7-unknown-linux-gnueabihf --release
    ```

!!! info "To list available targets (via rustup)"
    ```bash
    rustup target list
    ```

!!! info "To add a target to rustup (for native builds)"
    ```bash
    rustup target add <target-triple>
    ```

!!! info "Cross.toml — custom image configuration (repo root)"
    [target.arm-unknown-linux-gnueabihf]
    image = "ghcr.io/cross-rs/arm-unknown-linux-gnueabihf:edge"
    To run container-backed integration tests:

    ```bash
    RUN_DOCKER_TESTS=1 cargo test -- --test-threads=1
    ```

!!! info "To build a .deb package after cross-compiling (cargo-deb)"
    ```bash
    cargo deb --no-build --target <target-triple>
    ```

!!! info "To build an .rpm package after cross-compiling (cargo-generate-rpm)"
    ```bash
    cargo generate-rpm --target <target-triple>
    ```

Note: Requires a running Docker or Podman daemon.
