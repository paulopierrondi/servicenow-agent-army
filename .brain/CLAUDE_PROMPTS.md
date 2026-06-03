# Claude Cloud Prompt Templates

Use these in GitHub issues or PR comments after the workflow is committed and `ANTHROPIC_API_KEY` is configured as a GitHub Actions secret.

## Continue From Brain

@claude read `CLAUDE.md` and `.brain/CLAUDE_CLOUD_CONTEXT.md`, then continue from the project memory. Propose a short plan first, then implement the smallest safe change.

## Review With Brain

@claude review this PR using `CLAUDE.md` and `.brain/CLAUDE_CLOUD_CONTEXT.md`. Focus on regressions, missing tests, security risks, and conflicts with prior project decisions.

## Fix CI

@claude inspect the failing checks, read the project memory, and fix the smallest likely cause. Do not broaden scope.

## Create Issue Plan

@claude read the project memory and turn this issue into a concrete implementation plan with files likely to change, risks, and tests.
