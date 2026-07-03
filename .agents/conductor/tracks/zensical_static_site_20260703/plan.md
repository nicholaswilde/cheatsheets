# Implementation Plan - Zensical Static Site Implementation

This plan details the phases and tasks required to set up and integrate the Zensical static site generator in this repository.

## Phase 1: Installation and Environment Setup

- [x] Task: Initialize Python project and install Zensical locally with uv (e282fc3)
    - [x] Run `uv init --no-readme` (or write pyproject.toml) and add `zensical` as a dependency.
    - [x] Run `uv sync` to create `.venv` and `uv.lock`.
- [ ] Task: Configure gitignore
    - [ ] Ensure `.venv/` is added to `.gitignore`.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Installation and Environment Setup' (Protocol in workflow.md)

## Phase 2: Zensical Configuration and Content

- [ ] Task: Create zensical.toml configuration
    - [ ] Create `zensical.toml` at the root with project properties and plugins/CSS/JS matching recipes' config.
- [ ] Task: Create basic homepage
    - [ ] Create `docs/index.md` with cheatsheet project introduction.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Zensical Configuration and Content' (Protocol in workflow.md)

## Phase 3: Task Integration and Verification

- [ ] Task: Integrate commands into Taskfile.yml
    - [ ] Add `site:build` and `site:serve` tasks to `Taskfile.yml`.
- [ ] Task: Verify static site build
    - [ ] Run `task site:build` and verify the static output is successfully generated under `site/` (or configured directory).
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Task Integration and Verification' (Protocol in workflow.md)
