import { expect, test } from "bun:test";
import { parseCheatsheet } from "../scripts/convert_cheatsheets";

test("basic cheatsheet parsing", () => {
  const lines = [
    "# bash",
    "# GNU Bourne-Again SHell",
    "",
    "# To list files:",
    "ls -l"
  ];
  const { title, description, markdown } = parseCheatsheet("bash", lines, "bash");
  expect(title).toBe("bash");
  expect(description).toBe("GNU Bourne-Again SHell");
  expect(markdown).toContain('!!! info "To list files"');
  expect(markdown).toContain("    ls -l");
});

test("parse with sections", () => {
  const lines = [
    "# mytool",
    "",
    "## Files",
    "",
    "# To list files:",
    "ls"
  ];
  const { title, markdown } = parseCheatsheet("mytool", lines, "bash");
  expect(markdown).toContain("## Files");
  expect(markdown).toContain('!!! info "To list files"');
});

test("no description on cheatsheet", () => {
  const lines = [
    "## Section",
    "# To do something:",
    "doit"
  ];
  const { title, description, markdown } = parseCheatsheet("mytool", lines, "bash");
  expect(title).toBe("mytool");
  expect(description).toBe("");
  expect(markdown).toContain('!!! info "To do something"');
});
