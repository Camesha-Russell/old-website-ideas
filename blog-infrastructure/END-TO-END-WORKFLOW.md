# itsmomapproved.com — End-to-End Content Workflow
Last Updated: April 2026

This is the complete workflow from "what should I write?" to "post is live." Every step has a tool. Nothing is manual.

---

## The Full Pipeline

```
PHASE 1: PLAN
  └── Cowork: /competitor-gap (monthly) → updates content-cluster-map.md
  └── Cowork: /research-brief (each session) → picks the post to write today

PHASE 2: WRITE
  └── Cowork: /product-post OR /pillar-post OR /skip-this → full draft produced

PHASE 3: OPTIMIZE
  └── Cowork: /seo-optimize → SEO block + keyword audit
  └── Cowork: /affiliate-optimizer → best affiliate program per product

PHASE 4: QUALITY CHECK
  └── Cowork: /review-post → all 15 checklist items must pass

PHASE 5: HANDOFF DELIVERY (AUTOMATIC — no manual steps)
  └── Cowork: creates handoff file → saves to blog-infrastructure/handoffs/
  └── Cowork: uses Chrome MCP to navigate to Codex tab and paste handoff directly
  └── Codex URL: https://chatgpt.com/codex/tasks/task_e_69d02a9ca120832dbf824b4f19d17d11

PHASE 6: PUBLISH TO DRAFT
  └── Codex: reads pasted handoff + CODEX-BRIEF.md → creates .mdx file in src/content/posts/
  └── Codex: reports back "file created, ready for Cowork review"

PHASE 7: VERIFY
  └── Cowork: runs post-review checklist (COWORK-HANDOFF-FORMAT.md)
  └── Cowork: updates handoff status to PUBLISHED TO DRAFT
  └── Cowork: notifies Camesha — post is ready for final sign-off in Lovable

PHASE 8: GO LIVE
  └── Camesha: reviews the draft post in Lovable dashboard
  └── Camesha: changes status from "draft" to "published"
  └── Post is live
```

---

## Who Does What

| Step | Owner | Tool / Action |
|---|---|---|
| Monthly strategic planning | Cowork | `/competitor-gap` |
| Session topic selection | Cowork | `/research-brief` |
| Writing the post | Cowork | `/product-post`, `/pillar-post`, or `/skip-this` |
| SEO optimization | Cowork | `/seo-optimize` |
| Affiliate link setup | Cowork | `/affiliate-optimizer` |
| Quality check | Cowork | `/review-post` |
| Handoff file creation + delivery | Cowork | Auto-creates file + Chrome MCP pastes into Codex tab |
| Blog infrastructure setup (once) | Codex | `CODEX-BRIEF.md` setup instructions |
| File creation in codebase | Codex | `CODEX-BRIEF.md` + templates |
| Post-publish verification | Cowork | `COWORK-HANDOFF-FORMAT.md` post-review checklist |
| Final go-live approval | Camesha | Lovable dashboard — change status to "published" |

---

## How Long Each Phase Takes

| Phase | Realistic Time |
|---|---|
| /research-brief | 5-10 minutes (Cowork does the research) |
| /product-post or /skip-this | 10-15 minutes |
| /pillar-post | 20-25 minutes |
| /seo-optimize | 5 minutes |
| /affiliate-optimizer | 5-10 minutes |
| /review-post | 5 minutes |
| Handoff + Chrome delivery to Codex | 2 minutes (Cowork does it automatically) |
| Codex file creation | 5 minutes |
| Cowork post-publish verify | 5 minutes |
| Camesha final review | 5 minutes |

**Total per product post:** ~50-60 minutes, most of which is Cowork working autonomously.
**Total per pillar post:** ~70-80 minutes.

---

## File Locations Reference

| File | Location | Purpose |
|---|---|---|
| Content cluster map | `itsmomapproved.com/content-cluster-map.md` | Tracks all posts (Live / In Progress / Planned) |
| Blog structure guide | `blog-infrastructure/BLOG-STRUCTURE.md` | Explains the site's file system |
| Claude Code instructions | `blog-infrastructure/CLAUDE.md` | Claude Code reads this before every file creation |
| Product post template | `blog-infrastructure/templates/product-post-template.mdx` | Template for comparison posts |
| Pillar post template | `blog-infrastructure/templates/pillar-post-template.mdx` | Template for best-of pillar pages |
| Skip This template | `blog-infrastructure/templates/skip-this-template.mdx` | Template for negative recommendations |
| Handoff format guide | `blog-infrastructure/COWORK-HANDOFF-FORMAT.md` | How Cowork packages content for Claude Code |
| Handoff files (live) | `blog-infrastructure/handoffs/` | Active handoffs waiting for Claude Code |
| Published posts | `src/content/posts/` | Live post files in the Lovable codebase |

---

## The Session Rhythm

**Monthly (first Monday):**
1. Run `/competitor-gap` — add new high-priority posts to cluster map
2. 15-minute brief review of the master brand brief

**Weekly content session (aim for 2-3 per week during mat leave):**
1. Open Cowork
2. Say: "Let's write a post" or "Research brief"
3. Cowork runs `/research-brief`, picks the best post for today
4. Approve the topic
5. Cowork writes, optimizes, checks quality
6. Cowork auto-delivers handoff to Codex via Chrome (no action needed from you)
7. Codex creates the .mdx file in the repo
8. Cowork verifies
9. You approve in Lovable

**Target by August 2026:** 20-30 posts live, building authority passively while teaching resumes.

---

## Skill Quick Reference

| Skill | When to use | Installed? |
|---|---|---|
| `/competitor-gap` | Monthly — find content gaps | YES |
| `/research-brief` | Start of every session | YES* |
| `/product-post` | Writing comparison posts | YES* |
| `/pillar-post` | Writing best-of category pages | YES* |
| `/skip-this` | Writing negative recommendations | YES |
| `/seo-optimize` | After every post draft | YES* |
| `/affiliate-optimizer` | After every post draft | YES |
| `/review-post` | Before every handoff | YES* |
| `/pinterest` | After every post (pins for distribution) | YES* |

*Skills marked with * exist as .skill files in the workspace folder but need to be installed through the Cowork plugin interface. See SKILLS-TO-INSTALL.md.
