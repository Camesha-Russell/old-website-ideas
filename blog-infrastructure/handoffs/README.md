# Handoffs Folder

This is where Cowork drops completed post files for Claude Code to pick up.

## How it works

1. Cowork writes a post, optimizes it, runs the quality check
2. Cowork saves a handoff file here: `[slug]-handoff.md`
3. Claude Code reads the handoff + CLAUDE.md, creates the `.mdx` file in the Lovable project
4. Claude Code updates the handoff status to `PUBLISHED TO DRAFT`
5. Cowork runs the post-publish verification checklist

## File naming

`[slug]-handoff.md` — matches the URL slug of the post exactly.

Example: `hatch-rest-vs-hatch-rest-plus-handoff.md`

## Statuses

- `READY FOR CLAUDE CODE` — Cowork finished, all 15 review items passed
- `PUBLISHED TO DRAFT` — Claude Code created the .mdx file, awaiting Cowork verification
- `VERIFIED` — Cowork confirmed the published file matches the handoff
- `NEEDS REVISION` — Something failed verification, returned to Cowork
