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
