---
tags:
  - ai
  - cli
  - proxy
---

# context-mode

Context-Mode - A mandatory routing rule system that optimizes token usage by keeping heavy command outputs in a sandbox.

Run a script (JavaScript, TypeScript, Python, Bash) inside the sandbox:
Call context-mode/ctx_execute with: language, code
Read a file into FILE_CONTENT and run code over it:
Call context-mode/ctx_execute_file with: path, language, code
Run multiple shell commands and index results:
Call context-mode/ctx_batch_execute with: commands, queries
Store files or folders in the FTS5 local index:
Call context-mode/ctx_index with: path, content, source
Search FTS5 index and session memories:
Call context-mode/ctx_search with: queries
Check hook and runtime configuration health:
Call context-mode/ctx_doctor
Upgrade context-mode plugin and repair hooks:
Call context-mode/ctx_upgrade
Clear FTS5 storage indexes:
Call context-mode/ctx_purge
