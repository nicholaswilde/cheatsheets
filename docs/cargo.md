---
tags:
  - app
  - package-manager
  - rust
---

# cargo

The Rust package manager (https://github.com/rust-lang/cargo)

!!! info "To create a new binary project"
    ```bash
    cargo new <project_name>
    ```

!!! info "To create a new library project"
    ```bash
    cargo new --lib <project_name>
    ```

!!! info "To compile the project"
    ```bash
    cargo build
    ```

!!! info "To compile the project with optimizations (for release)"
    ```bash
    cargo build --release
    ```

!!! info "To build and execute the binary"
    ```bash
    cargo run
    ```

!!! info "To build and execute the binary with arguments"
    ```bash
    cargo run -- <args>
    ```

!!! info "To run tests"
    ```bash
    cargo test
    ```

!!! info "To check the code for compilation errors without building"
    ```bash
    cargo check
    ```

!!! info "To update dependencies in Cargo.lock"
    ```bash
    cargo update
    ```

!!! info "To install a binary crate locally"
    ```bash
    cargo install <crate_name>
    ```

!!! info "To uninstall a locally installed binary crate"
    ```bash
    cargo uninstall <crate_name>
    ```

!!! info "To remove build artifacts and clean the target directory"
    ```bash
    cargo clean
    ```
