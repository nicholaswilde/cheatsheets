# Specification - Update Default Taskfile Task

## 1. Overview
The goal of this track is to update `Taskfile.yml`'s default task to list all available tasks, and move the original default verification task (which runs validation and test) to a task named `all`.

## 2. Requirements
*   **Move default task**:
    *   Rename the current `default` task (which runs both `validate` and `test`) to `all`.
    *   Give it description `Run both validation and tests`.
*   **Create new default task**:
    *   Create `default` task at the top or bottom of `Taskfile.yml`.
    *   The `default` task will run `task -a` and be `silent: true`.

## 3. Acceptance Criteria
*   Running `task` or `task default` prints a list of all available tasks.
*   Running `task all` runs both validation and tests.
