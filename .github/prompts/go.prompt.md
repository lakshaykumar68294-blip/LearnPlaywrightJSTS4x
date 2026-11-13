---
description: Stage all changes, commit with a descriptive message, and push to GitHub
agent: agent
---

Commit and push all of my current changes to the GitHub repository. Do not ask me to confirm and do not just show me the commands.

1. Run `git status` to see what has changed.
2. Run `git add -A` to stage every change.
3. Write a clear, concise commit message that summarizes the changes (use the imperative mood, e.g. "Add login test for Playwright example").
4. Run `git commit -m "<message>"`.
5. Run `git push` to push to the current branch. If there is no upstream branch, run `git push -u origin <current-branch>`.
6. Report back with the commit hash, the branch name, and whether the push succeeded. If anything fails, explain the error and stop.