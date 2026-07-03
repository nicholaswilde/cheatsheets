import pytest
from validate_cheatsheets import validate_content

def test_no_front_matter():
    content = """# Simple cheatsheet
git status
"""
    errors = validate_content(content)
    assert len(errors) == 0

def test_valid_front_matter():
    content = """---
syntax: bash
tags:
  - git
  - vcs
---
# Simple cheatsheet
git status
"""
    errors = validate_content(content)
    assert len(errors) == 0

def test_malformed_front_matter_yaml():
    content = """---
syntax: [invalid
tags:
  - git
---
# Simple cheatsheet
git status
"""
    errors = validate_content(content)
    assert any("YAML" in e for e in errors)

def test_missing_syntax():
    content = """---
tags:
  - git
---
# Simple cheatsheet
git status
"""
    errors = validate_content(content)
    assert any("missing 'syntax'" in e.lower() for e in errors)

def test_missing_tags():
    content = """---
syntax: bash
---
# Simple cheatsheet
git status
"""
    errors = validate_content(content)
    assert any("missing 'tags'" in e.lower() for e in errors)

def test_invalid_tags_type():
    content = """---
syntax: bash
tags: not-a-list
---
# Simple cheatsheet
git status
"""
    errors = validate_content(content)
    assert any("'tags' must be a list" in e.lower() for e in errors)

def test_valid_structure():
    content = """# First description
git status

# Second description
git commit -m "msg"
"""
    errors = validate_content(content)
    assert len(errors) == 0

def test_command_without_description():
    content = """git status
"""
    errors = validate_content(content)
    assert any("command without description" in e.lower() for e in errors)

def test_command_after_heading_without_description():
    content = """## Git Commands
git status
"""
    errors = validate_content(content)
    assert any("command without description" in e.lower() for e in errors)

def test_valid_docopt_placeholders():
    content = """# Commit change
git commit -m <message>
"""
    errors = validate_content(content)
    assert len(errors) == 0

def test_invalid_placeholder_bracket():
    content = """# Commit change
git commit -m [message]
"""
    errors = validate_content(content)
    assert any("placeholder" in e.lower() for e in errors)

def test_invalid_placeholder_curly():
    content = """# Commit change
git commit -m {message}
"""
    errors = validate_content(content)
    assert any("placeholder" in e.lower() for e in errors)

def test_invalid_placeholder_double_curly():
    content = """# Commit change
git commit -m {{message}}
"""
    errors = validate_content(content)
    assert any("placeholder" in e.lower() for e in errors)


