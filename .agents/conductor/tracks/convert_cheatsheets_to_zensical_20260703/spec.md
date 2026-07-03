# Specification - Cheatsheets to Zensical Converter

## 1. Overview
The goal of this track is to create a TypeScript utility script (`scripts/convert_cheatsheets.ts`) to convert the flat cheatsheet files in `sheets/` into structured markdown files compatible with the Zensical static site, placed under `docs/`.

## 2. Parsing & Conversion Logic
*   **Source Folder**: `./sheets/`
*   **Target Folder**: `./docs/` (or a subfolder `./docs/` directly)
*   **Front Matter**:
    *   Parse YAML front matter if it starts with `---`.
    *   Extract `syntax` (default `bash`) and `tags` (default `[]`).
    *   Extract the tags and list them at the top of the generated markdown file, or preserve them in the front matter of the generated file if supported by Zensical/MkDocs-Material. (Wait, MkDocs-Material supports tags if defined in the front matter. We should preserve the front matter!).
*   **Cheatsheet Body Parsing**:
    *   Identify the main title and description from the header comments (e.g. `# age`, `# A simple...`).
    *   Translate headings (`## Heading`) into target headings: `## Heading`.
    *   Translate command descriptions and commands into admonitions:
        *   Group consecutive description/comment lines (`# ` or `#`).
        *   The first comment line acts as the admonition title (stripped of leading `#` / `# ` and trailing `:`).
        *   Any subsequent comment lines act as note text inside the admonition (indented by 4 spaces).
        *   The corresponding command lines are output as a syntax-highlighted code block (indented by 4 spaces) inside the admonition.
        *   Example format:
            ```markdown
            !!! info "Install"
                ```bash
                /bin/bash -c "$(curl -fsSL ...)"
                ```
            ```

## 3. Automation
*   Add a command `task site:convert` to `Taskfile.yml` that runs `bun run scripts/convert_cheatsheets.ts`.

## 4. Acceptance Criteria
*   The script `scripts/convert_cheatsheets.ts` runs without errors.
*   Generated files are created in `docs/` (matching the original cheatsheet names, e.g. `docs/age.md`, `docs/bash.md`).
*   Running `task site:build` after conversion compiles successfully with no issues.
