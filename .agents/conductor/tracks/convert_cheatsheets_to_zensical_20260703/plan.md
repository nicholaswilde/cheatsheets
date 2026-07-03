# Implementation Plan - Cheatsheets to Zensical Converter

This plan details the phases and tasks required to build the cheatsheet to Zensical converter script.

## Phase 1: Script Development and Automation

- [x] Task: Create convert_cheatsheets.ts script (6def4a4)
    - [x] Write the TypeScript conversion logic in `scripts/convert_cheatsheets.ts`.
    - [x] Ensure it parses front matter, header notes, headings, and commands, converting them into Zensical admonitions.
- [~] Task: Add task site:convert to Taskfile.yml
    - [ ] Integrate `site:convert` task into `Taskfile.yml`.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Script Development and Automation' (Protocol in workflow.md)

## Phase 2: Execution and Site Validation

- [ ] Task: Run conversion script and verify output
    - [ ] Run `task site:convert` to generate the markdown files under `docs/`.
    - [ ] Verify that files are correctly populated with admonitions and code blocks.
- [ ] Task: Validate Zensical build
    - [ ] Run `task site:build` to compile the site and check for any errors.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Execution and Site Validation' (Protocol in workflow.md)
