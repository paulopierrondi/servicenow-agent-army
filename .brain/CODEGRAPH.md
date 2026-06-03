---
type: codegraph
status: "indexed"
generated_at: "2026-05-24 15:17:02"
repo: "servicenow-agent-army"
tags:
  - codegraph
  - agent-os
---
# CodeGraph

Repo: `/Users/paulopierrondi/Projects/servicenow-agent-army`
Index status: `indexed`

## Local Index

- Expected DB: `/Users/paulopierrondi/Projects/servicenow-agent-army/.codegraph/codegraph.db`
- Stored in repo working tree but excluded locally via `.git/info/exclude`.
- Obsidian stores only this summary, not the SQLite database.

## Commands

```bash
agent-os index-code "/Users/paulopierrondi/Projects/servicenow-agent-army"
codegraph status "/Users/paulopierrondi/Projects/servicenow-agent-army"
codegraph context "explain the main architecture" "/Users/paulopierrondi/Projects/servicenow-agent-army"
git diff --name-only | codegraph affected --stdin
```

## Current Detail

```text
CodeGraph Status

Project: /Users/paulopierrondi/Projects/servicenow-agent-army

Index Statistics:
  Files:     69
  Nodes:     550
  Edges:     926
  DB Size:   1.01 MB
  Backend:   node:sqlite — built-in (full WAL)
  Journal:   wal

Nodes by Kind:
  import          200
  constant        114
  function        108
  file            66
  interface       27
  type_alias      25
  method          8
  class           1
  variable        1

Files by Language:
  typescript      49
  tsx             12
  javascript      5
  yaml            3

✓ Index is up to date
```
