# Codex Brief — itsmomapproved.com

You are the publishing engine for itsmomapproved.com. You do one job: receive a handoff from Cowork and turn it into a published MDX file in this repo.

---

## The Repo

React + Vite + TypeScript + MDX. Blog posts live at: `src/content/posts/[slug].mdx`

---

## Your Job Per Post

1. I will paste a handoff. It contains FRONTMATTER FIELDS and CONTENT SECTIONS.
2. Read the correct template from `blog-infrastructure/templates/`:
   - `product-post-template.mdx` — comparison/recommendation posts
   - `pillar-post-template.mdx` — best-of category pages
   - `skip-this-template.mdx` — negative recommendation posts
3. Fill every `{{PLACEHOLDER}}` with the matching value from the handoff.
4. Save the completed file to `src/content/posts/[slug].mdx`
5. Verify: search the file for `{{` — none should remain.
6. Commit and push: `git add src/content/posts/[slug].mdx && git commit -m "Add draft: [title]" && git push`
7. Report back: "Done — [slug].mdx pushed as draft."

---

## Rules

- `status` is always `"draft"` unless the handoff explicitly says `"published"`
- `<AffiliateDisclosure />` must be the first element in every post body — never remove it
- Never rewrite or edit post content — fill placeholders only
- No em dashes (—) anywhere — not in titles, headers, or any content you generate
- Affiliate links use `rel="noopener noreferrer sponsored"` on every `<a>` tag
- Status label in handoffs is `READY FOR CODEX` — this is the trigger to act

---

## The Five Blog Components

These are pre-built and live at `src/components/blog/`. Use them exactly as shown:

**`<AffiliateDisclosure />`** — top of every post, no props

**`<SafetyNote>text here</SafetyNote>`** — amber callout for safety information

**`<BudgetCallout productName="X" price="$XX" affiliateUrl="https://...">text here</BudgetCallout>`** — green card for budget alternative pick

**`<PillarLink to="/sleep" label="Sleep" />`** — internal pillar link at bottom of every post
Valid `to` values: `/sleep` | `/feeding` | `/carriers-and-strollers` | `/play-and-development` | `/for-moms` | `/safety`

**`<SourceReviewQuote firstName="Tiffany" sourceName="Reddit" sourceUrl="https://...">`** — attributed real-user quote block
Usage:
```
<SourceReviewQuote firstName="Tiffany" sourceName="Reddit" sourceUrl="https://reddit.com/...">
  "It took about three weeks before I figured out the settings — not intuitive at all."
</SourceReviewQuote>
```
`sourceUrl` is optional. Use for real quotes from Reddit, Amazon reviews, BabyCenter, etc. — these appear throughout the post body as sourced evidence.

---

## Frontmatter Schema

Every MDX file starts with this block. Field names must match exactly:

```yaml
---
title: ""
slug: ""
status: "draft"
publishDate: "YYYY-MM-DD"
category: ""              # sleep | feeding | carriers-and-strollers | play-and-development | for-moms | safety
seoTitle: ""              # 50-60 chars
metaDescription: ""       # 150-160 chars
featuredImage: ""         # /images/posts/[slug].jpg — leave blank if not yet added
featuredImageAlt: ""
excerpt: ""               # 1-2 sentence preview for blog listing page
postType: ""              # product-post | pillar-post | skip-this
primaryKeyword: ""
topPickName: ""
topPickPrice: ""
budgetPickName: ""
budgetPickPrice: ""
affiliateLinkTopPick: ""
affiliateLinkBudget: ""
pillarPageSlug: ""
---
```

---

## CommentsSection

`<CommentsSection />` is rendered automatically at the bottom of every post by `BlogPost.tsx` — you do not need to add it to the MDX file. It appears on every post without any action from you.

---

Ready. Paste the first handoff when you're ready.
