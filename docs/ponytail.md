---
tags:
  - ai
  - cli
  - reference
---

# ponytail

Ponytail Mode - Enforces a "Lazy Senior Dev" coding philosophy (YAGNI - You Aren't Gonna Need It).

To switch ponytail intensity level (within agy TUI):
Type /ponytail <level>
Available levels: lite, full, ultra, off
Lite level (Clean code, minimal abstractions, low boilerplate):
- Keep code simple, avoid unnecessary layers.
Full level (Default, strict YAGNI, prefer standard libraries and native features):
- Reject extra packages if native APIs suffice.
Ultra level (Maximum boilerplate removal, keep codebase as small as possible):
- Zero extra dependencies, write raw/native code only.
The "Ponytail" Comment Pattern:
Document deliberate simplifications inline using comment prefixes:
// ponytail: <shortcut_reason>. Ceiling: <limit>. Upgrade path: <migration_path>.
