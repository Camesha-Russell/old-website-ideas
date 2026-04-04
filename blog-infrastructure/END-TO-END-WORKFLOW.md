# itsmomapproved.com — End-to-End Content Workflow
Last Updated: April 2026

Everything runs in Cowork's backend. No browser. No Codex. No copy-pasting. No handoff files. Camesha's only action is approving drafts in Lovable.

---

## How a Session Works

**You say:** "Let's do 3 posts" (or 4, or however many you want)

**I do:**
1. Read the Master Brand Brief from Google Drive — once per session, not once per post
2. Read the Content Cluster Map from Google Drive — pick the highest-priority unwritten posts
3. For each post, run the full pipeline:
   - Write the post (research, draft, real review quotes, community CTA)
   - SEO optimize
   - Affiliate links
   - Quality check against all 15 items
   - Fill the MDX template
   - Write the file to `src/content/posts/[slug].mdx`
4. Push all posts to GitHub in one commit at the end of the session

**You do:** Open Lovable, flip each post from draft to published when you're ready.

---

## The Full Pipeline (per session)

```
SESSION START
  └── Read Master Brand Brief from Google Drive (once — ID: 1oVRVSU19_HxuGKt6Eh5t8-0YIgT30lyfg84FqodkS8M)
  └── Read Content Cluster Map from Google Drive (once — ID: 1l8C3kdWR_vpQ4PHAIFJuxWWjDrekpdsJWnlY3F7kSAA)
  └── Identify 3-4 highest-priority posts to write this session

FOR EACH POST:
  PHASE 1: PLAN
    └── /research-brief → confirm topic, search data, prices, real reviews

  PHASE 2: WRITE
    └── /product-post OR /pillar-post OR /skip-this
        → full draft with SourceReviewQuote blocks + unique community CTA

  PHASE 3: OPTIMIZE
    └── /seo-optimize → keyword, title tag, meta description, URL slug
    └── /affiliate-optimizer → best program + commission rate per product

  PHASE 4: QUALITY CHECK
    └── /review-post → all 15 checklist items must pass
        → if flags exist: revise and re-check before moving on

  PHASE 5: PUBLISH TO REPO (automatic after READY TO PUBLISH)
    └── Fill MDX template with all post content and frontmatter
    └── Write file to src/content/posts/[slug].mdx in workspace

SESSION END
  └── git push all new MDX files to GitHub in one commit
  └── Tell Camesha: "[X] posts pushed as drafts — approve in Lovable"

CAMESHA'S ONLY STEP:
  └── Open Lovable dashboard
  └── Change each post status from "draft" to "published"
  └── Posts go live
```

---

## Who Does What

| Step | Owner | How |
|---|---|---|
| Read brand brief | Cowork | Google Drive MCP — once per session |
| Pick posts to write | Cowork | Google Drive MCP — reads cluster map |
| Research + writing | Cowork | Web search + writing skills |
| SEO | Cowork | /seo-optimize |
| Affiliate links | Cowork | /affiliate-optimizer |
| Quality check | Cowork | /review-post |
| MDX file creation | Cowork | Write tool — fills template, saves to src/content/posts/ |
| GitHub push | Cowork | git CLI with stored PAT |
| Go-live approval | Camesha | Lovable dashboard — flip status to "published" |

---

## Time Per Session

| Activity | Time |
|---|---|
| Brand brief + cluster map read (once) | 2 minutes |
| Per product post (research to MDX) | 20-25 minutes |
| Per pillar post (research to MDX) | 30-35 minutes |
| GitHub push (all posts) | 1 minute |
| **3 product posts total** | **~65-80 minutes** |
| **Camesha's time** | **5 minutes (Lovable approvals)** |

---

## Token Efficiency

Reading the brand brief once per session and writing 3-4 posts back-to-back is the most token-efficient approach. The brand brief costs ~15,000 tokens to read — spreading that across 3 posts costs 5,000 tokens per post instead of 15,000. Running 10 sessions of 3 posts each reaches 30 posts with significantly fewer total tokens than 30 individual sessions.

Do not start a new session for each post.

---

## File Reference

| File | Location | How Cowork uses it |
|---|---|---|
| Master Brand Brief | Google Drive `1oVRVSU19_HxuGKt6Eh5t8-0YIgT30lyfg84FqodkS8M` | Read via MCP at session start |
| Content Cluster Map | Google Drive `1l8C3kdWR_vpQ4PHAIFJuxWWjDrekpdsJWnlY3F7kSAA` | Read via MCP to pick posts |
| Skill instructions | `blog-infrastructure/skill-instructions/` | Each skill reads its own file |
| MDX templates | `blog-infrastructure/templates/` | Filled per post during Phase 5 |
| Published posts | `src/content/posts/` | Cowork writes here directly |
| GitHub repo | `https://github.com/Camesha-Russell/old-website-ideas.git` | Pushed via git CLI at session end |

---

## Monthly Rhythm

**First Monday of the month:**
- Say "run competitor gap"
- I add new high-priority posts to the cluster map

**Regular content sessions (2-3x per week during mat leave):**
- Say "let's do [number] posts" or "let's write a post"
- I handle the rest

**Target by August 2026:** 20-30 posts live, authority building passively while you teach.

---

## Skill Quick Reference

| Skill | When | Runs |
|---|---|---|
| `/competitor-gap` | Monthly | Backend web search |
| `/research-brief` | Each post — topic selection | Google Drive + web search |
| `/product-post` | Comparison/recommendation posts | Backend |
| `/pillar-post` | Best-of category pages | Backend |
| `/skip-this` | Negative recommendation posts | Backend |
| `/seo-optimize` | After every draft | Backend |
| `/affiliate-optimizer` | After every draft | Backend |
| `/review-post` | Before MDX creation — triggers publish | Backend |
| `/pinterest` | After every post | Backend |
