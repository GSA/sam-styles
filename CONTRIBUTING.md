## <a name="submit"></a> Submission Guidelines

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

1. Make your changes in a new git branch:

   ```shell
   git checkout -b my-branch master
   ```

1. Commit your changes using a descriptive commit message.

   ```shell
   git commit -a
   ```

   Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

1. Push your branch to GitHub:

   ```shell
   git push origin my-branch
   ```

1. In GitHub, create a pull request against `sam-styles:master`.

## <a name="pr-guidelines"></a> Pull Request Guidelines

We have precise rules over how our pull requests can be formatted. This leads to **more readable** release notes that are easy to follow and understand.

### Format

Each pull request consists of a **title**, a **description** and a **label**. The title has a special format that includes a **scope** and a **subject**:

```
<scope>: <subject>
```

Sample:

```
button: add styles to create a small size button
```

### Scope

The scope should be the name of the component affected. For example `button`, `alert`, etc.

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Description (optional)

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The description should include the motivation for the change and contrast this with previous behavior.

### Label

It must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example: webpack, fractal, setup scripts)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

## After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```shell
  git push origin --delete my-branch
  ```

- Check out the master branch:

  ```shell
  git checkout master
  ```

- Delete the local branch:

  ```shell
  git branch -D my-branch
  ```

- Update your master with the latest master version:

  ```shell
  git pull origin master
  ```

## Code coverage

This is a SCSS-only library with no JS runtime. "Coverage" is measured as **component/story coverage**:

> Every Storybook story file (`.stories.js`) in `sam-styles/packages/` should have at least one matching Playwright smoke-test spec in `tests/storybook/`.

### How it works

- `npm run coverage` runs `scripts/coverage-report.mjs` and writes:
  - `coverage/component-coverage.json` — machine-readable results
  - `coverage/component-coverage.md` — human-readable markdown table
- CI runs this check on every PR and posts the report as a PR comment.
- The check fails (exits 1) if coverage drops below the configured threshold (currently **35%**).

### Adding coverage for a new component

When you add a new `.stories.js` file, add a corresponding spec in `tests/storybook/<component-name>.spec.mjs` that:

1. Navigates to the story via `page.goto('/iframe.html?id=<story-id>')`
2. Asserts at least one computed CSS property on a rendered element

### Raising the threshold

Once enough specs have been added to push coverage above a new watermark, update the `--threshold=N` value in the `coverage` script in `package.json` and commit the change.
