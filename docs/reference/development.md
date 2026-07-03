---
comments: true
---

# :wrench: Development

Tools used to develop and maintain this repository.

!!! note
    All commands are run from the root of the repo unless otherwise specified.

---

## :runner: Workflow

Below is the general workflow for adding or updating a cheatsheet.

``` mermaid
graph TD
  A["Identify a command<br/>or tool to document"];
  B["Create or edit a<br/>sheet in ./sheets/"];
  C[Validate the sheet format];
  D{Does it pass<br/>validation?};
  E[Fix formatting issues];
  F["Run conversion to<br/>generate Zensical pages"];
  G["Serve the site<br/>locally to verify"];
  H{Does the page<br/>render correctly?};
  I[Fix the sheet or docs];
  J[Commit and push to repo];
  K["CI workflow<br/>runs validation"];
  L["Convert workflow<br/>updates Zensical pages"];
  M["Publish workflow<br/>deploys to GitHub Pages"];

  A --> B;
  B --> C;
  C --> D;
  D --> |Yes| F;
  D --> |No| E;
  E --> C;
  F --> G;
  G --> H;
  H --> |Yes| J;
  H --> |No| I;
  I --> B;
  J --> K;
  K --> L;
  L --> M;

  click C "#task"
  click F "#task"
  click G "#zensical"
  click K "https://github.com/nicholaswilde/cheatsheets/actions/workflows/ci.yml"
  click L "https://github.com/nicholaswilde/cheatsheets/actions/workflows/convert.yml"
  click M "https://github.com/nicholaswilde/cheatsheets/actions/workflows/publish.yml"
```

---

## :hammer_and_wrench: Tools

### :robot: [Task][1]
Used to automate common development tasks.

```shell title="Installation"
# Via Homebrew
brew install go-task/tap/go-task

# Via install script
curl -sSf https://taskfile.dev/install.sh | sh
```

=== "List tasks"

    ```shell title="Usage"
    task
    ```

=== "Run all checks"

    ```shell title="Usage"
    task all
    ```

### :page_facing_up: [cheat][2]
The primary CLI tool used to view and edit cheatsheets.

```shell title="Installation"
# Via Homebrew
brew install cheat
```

```shell title="Usage"
cheat git              # view the git cheatsheet
cheat -e git           # edit the git cheatsheet
cheat -t homelab       # list all sheets tagged "homelab"
cheat -s <keyword>     # search across all sheets
```

### :white_check_mark: Validator (`validate_cheatsheets.ts`)
A custom [Bun][3]/TypeScript script that validates all cheatsheets for correct front matter, syntax tags, and docopt-compliant placeholders.

=== "Task"

    ```shell title="Usage"
    task validate
    ```

=== "Manual"

    ```shell title="Usage"
    bun run scripts/validate_cheatsheets.ts
    ```

### :arrows_counterclockwise: Converter (`convert_cheatsheets.ts`)
A custom [Bun][3]/TypeScript script that converts flat cheatsheets into Zensical markdown pages and automatically updates the site navigation in `zensical.toml`.

=== "Task"

    ```shell title="Usage"
    task site:convert
    ```

=== "Manual"

    ```shell title="Usage"
    bun run scripts/convert_cheatsheets.ts
    ```

### :book: [Zensical][4]
A modern static site generator wrapper that builds and serves this documentation site. It wraps MkDocs and configures the theme, search, and page structure.

```shell title="Installation"
task site:deps
```

=== "Task"

    ```shell title="Usage"
    task site:serve
    task site:build
    ```

=== "Manual"

    ```shell title="Usage"
    uv run zensical serve
    uv run zensical build
    ```

### :package: [uv][5]
An extremely fast Python package installer and resolver. Manages Python dependencies and virtual environments for Zensical.

```shell title="Installation"
curl -LsSf https://astral.sh/uv/install.sh | sh
```

```shell title="Usage"
uv sync
uv run zensical build
```

### :link: [Lychee][6]
Used to check for broken links in the documentation and cheatsheets.

```shell title="Installation"
# Via Homebrew
brew install lychee

# Via Cargo
cargo install lychee
```

=== "Task"

    ```shell title="Usage"
    task linkcheck
    task linkcheck-offline
    task linkcheck-file FILE=sheets/git
    ```

=== "Manual"

    ```shell title="Usage"
    lychee docs/ sheets/
    ```

### :bun: [Bun][3]
A fast JavaScript runtime and package manager used to run the TypeScript validation and conversion scripts.

```shell title="Installation"
curl -fsSL https://bun.sh/install | bash
```

```shell title="Usage"
bun install
bun run scripts/validate_cheatsheets.ts
bun test
```

### :octocat: [GitHub CLI (`gh`)][7]
Used to interact with the remote GitHub repository (checking workflow runs, PR status, etc.). Commands are piped to `cat` to suppress interactive prompts.

```shell title="Installation"
# Via Homebrew
brew install gh
```

```shell title="Usage"
gh run list | cat
gh run view <run-id> --log-failed | cat
```

### :robot: [Google Antigravity CLI][8]
Used for AI-assisted repository management, including adding cheatsheets, updating documentation, and maintaining the static site.

```shell title="Usage"
agy -i "Add a new cheatsheet for tool X"
agy -i "Fix the failing GitHub Actions workflow"
```

---

[1]: <https://taskfile.dev/>
[2]: <https://github.com/cheat/cheat>
[3]: <https://bun.sh/>
[4]: <https://pypi.org/project/zensical/>
[5]: <https://github.com/astral-sh/uv>
[6]: <https://github.com/lycheeverse/lychee>
[7]: <https://cli.github.com/>
[8]: <https://github.com/google-gemini/antigravity-cli>
