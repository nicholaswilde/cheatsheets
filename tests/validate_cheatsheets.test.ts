import { expect, test } from "bun:test";
import { validateContent, getCheatsheetsDir } from "../scripts/validate_cheatsheets";

test("no front matter", () => {
  const content = `# Simple cheatsheet
git status
`;
  const errors = validateContent(content);
  expect(errors.length).toBe(0);
});

test("valid front matter", () => {
  const content = `---
syntax: bash
tags:
  - git
  - vcs
---
# Simple cheatsheet
git status
`;
  const errors = validateContent(content);
  expect(errors.length).toBe(0);
});

test("malformed front matter yaml", () => {
  const content = `---
syntax: [invalid
tags:
  - git
---
# Simple cheatsheet
git status
`;
  const errors = validateContent(content);
  expect(errors.some(e => e.includes("YAML"))).toBe(true);
});

test("missing syntax", () => {
  const content = `---
tags:
  - git
---
# Simple cheatsheet
git status
`;
  const errors = validateContent(content);
  expect(errors.some(e => e.toLowerCase().includes("missing 'syntax'"))).toBe(true);
});

test("missing tags", () => {
  const content = `---
syntax: bash
---
# Simple cheatsheet
git status
`;
  const errors = validateContent(content);
  expect(errors.some(e => e.toLowerCase().includes("missing 'tags'"))).toBe(true);
});

test("invalid tags type", () => {
  const content = `---
syntax: bash
tags: not-a-list
---
# Simple cheatsheet
git status
`;
  const errors = validateContent(content);
  expect(errors.some(e => e.toLowerCase().includes("'tags' must be a list"))).toBe(true);
});

test("valid structure", () => {
  const content = `# First description
git status

# Second description
git commit -m "msg"
`;
  const errors = validateContent(content);
  expect(errors.length).toBe(0);
});

test("command without description", () => {
  const content = `git status
`;
  const errors = validateContent(content);
  expect(errors.some(e => e.toLowerCase().includes("command without description"))).toBe(true);
});

test("command after heading without description", () => {
  const content = `## Git Commands
git status
`;
  const errors = validateContent(content);
  expect(errors.some(e => e.toLowerCase().includes("command without description"))).toBe(true);
});

test("valid docopt placeholders", () => {
  const content = `# Commit change
git commit -m <message>
`;
  const errors = validateContent(content);
  expect(errors.length).toBe(0);
});

test("invalid placeholder bracket", () => {
  const content = `# Commit change
git commit -m [message]
`;
  const errors = validateContent(content);
  expect(errors.some(e => e.toLowerCase().includes("placeholder"))).toBe(true);
});

test("invalid placeholder curly", () => {
  const content = `# Commit change
git commit -m {message}
`;
  const errors = validateContent(content);
  expect(errors.some(e => e.toLowerCase().includes("placeholder"))).toBe(true);
});

test("invalid placeholder double curly", () => {
  const content = `# Commit change
git commit -m {{message}}
`;
  const errors = validateContent(content);
  expect(errors.some(e => e.toLowerCase().includes("placeholder"))).toBe(true);
});

test("cheatsheets dir", () => {
  const dirPath = getCheatsheetsDir();
  expect(dirPath.endsWith("sheets")).toBe(true);
});
