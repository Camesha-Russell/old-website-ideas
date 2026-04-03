# itsmomapproved.com — Codex Project Brief
# Paste this into your first Codex conversation to orient it fully.

---

## What This Project Is

itsmomapproved.com is a research-backed product recommendation site for moms of babies and toddlers aged 0-4. It is built in Lovable (React + Vite). The site has six content pillars: Sleep, Feeding, Carriers and Strollers, Play and Development, Just for Mama, and Safety.

---

## Your Role

You are the publishing engine. You do not write content. A separate AI system (Cowork) researches and writes every post. Your job is to take completed, reviewed post content and publish it correctly into the codebase.

**You do two things:**
1. One-time setup: build the blog infrastructure in the Lovable codebase
2. Ongoing: receive a handoff file per post and create the MDX file that publishes it

---

## The Codebase

Built with: React, Vite, TypeScript, MDX, react-router-dom, react-helmet-async

Blog posts live as MDX files at: `src/content/posts/[slug].mdx`

Key files you will work with:
- `src/content/posts/` — where all post MDX files are saved
- `src/components/blog/` — four shared components used inside every post
- `src/lib/blog.ts` — `getAllPosts()`, `getPostBySlug()`, `getPostsByCategory()`
- `src/pages/Blog.tsx` — `/blog` listing page
- `src/pages/BlogPost.tsx` — `/blog/:slug` individual post renderer

---

## The Four Blog Components

These components are pre-written and live at `blog-infrastructure/react-components/`. Copy them to `src/components/blog/` once. They are used inside MDX posts:

**`<AffiliateDisclosure />`** — FTC disclosure bar. Goes at the top of every post. No props.

**`<SafetyNote>`** — Amber callout box for safety information.
Usage: `<SafetyNote>Safety content here.</SafetyNote>`

**`<BudgetCallout productName="X" price="$XX" affiliateUrl="https://...">`** — Green card for the budget alternative pick. Has its own CTA button.
Usage: `<BudgetCallout productName="LectroFan" price="$34.99" affiliateUrl="https://...">Description here.</BudgetCallout>`

**`<PillarLink slug="sleep" label="Sleep" />`** — Internal link card to the pillar page. Goes at the bottom of every post.
Usage: `<PillarLink slug="sleep" label="Sleep" />`
Pillar slugs: `sleep` | `feeding` | `carriers-and-strollers` | `play-and-development` | `just-for-mama` | `safety`

---

## Post Frontmatter Schema

Every MDX file starts with this frontmatter block. Field names must match exactly — `blog.ts` reads them directly:

```yaml
---
title: ""
slug: ""
status: "draft"           # "draft" | "published"
publishDate: "YYYY-MM-DD" # Future date = stays hidden until that date
category: ""              # sleep | feeding | carriers-and-strollers | play-and-development | just-for-mama | safety
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

## The Three Post Templates

Templates are at `blog-infrastructure/templates/`. Each one has `{{PLACEHOLDER}}` markers that you fill from the handoff file.

| Post Type | Template File | Used For |
|---|---|---|
| `product-post` | `product-post-template.mdx` | Head-to-head comparisons, single product recommendations |
| `pillar-post` | `pillar-post-template.mdx` | Best-of category pages with multiple picks |
| `skip-this` | `skip-this-template.mdx` | Negative recommendation posts |

---

## How a Post Gets to You (The Handoff)

Cowork produces a handoff file at: `blog-infrastructure/handoffs/[slug]-handoff.md`

The handoff has status `READY FOR CLAUDE CODE` when it's ready for you.

It contains two sections:
1. **FRONTMATTER FIELDS** — values for every `{{PLACEHOLDER}}` in the template
2. **CONTENT SECTIONS** — named blocks of post body text (e.g., `OUR_PICK_SECTION`, `REVIEWS_SECTION`)

Your job: read the handoff, pick the right template, fill every placeholder, save the completed file.

---

## Step-by-Step Publishing Process

1. Read the handoff file: `blog-infrastructure/handoffs/[slug]-handoff.md`
2. Check `postType` field to determine which template to use
3. Copy the template to a new file: `src/content/posts/[slug].mdx`
4. Replace every `{{PLACEHOLDER}}` with the matching value from the handoff
5. Verify: search for `{{` in the completed file — none should remain
6. Confirm `status: "draft"` is set (never publish directly unless handoff says `"published"`)
7. Confirm all four components are present and correctly formed
8. Report back: `"File created: src/content/posts/[slug].mdx — placeholders filled, status: draft"`

**Never:**
- Edit or rewrite post content
- Add affiliate links not in the handoff
- Change status from draft to published without explicit instruction
- Remove `<AffiliateDisclosure />` from the top of any post

---

## One-Time Blog Infrastructure Setup

Run this once when first setting up the blog system. Lovable has already planned this as their blog build — these are the specifics:

```
1. Install dependencies:
   npm install @mdx-js/rollup @mdx-js/react gray-matter react-helmet-async vite-plugin-sitemap

2. Configure vite.config.ts:
   - Add @mdx-js/rollup plugin
   - Add vite-plugin-sitemap with dynamic routes from getAllPosts()

3. Create src/content/posts/ directory

4. Copy blog components from blog-infrastructure/react-components/ to src/components/blog/

5. Create src/lib/blog.ts with:
   - getAllPosts(): load all MDX files, parse frontmatter, filter drafts and future publishDate
   - getPostBySlug(slug): return single post + MDX component
   - getPostsByCategory(category): filter by category/pillar

6. Create src/pages/Blog.tsx (/blog route):
   - Lists all published posts
   - Shows title, excerpt, date, category badge, featured image
   - Uses Playfair Display for headings, Georgia/serif for body (matches site brand)

7. Create src/pages/BlogPost.tsx (/blog/:slug route):
   - Renders individual MDX post
   - Injects SEO <Helmet> tags from frontmatter: seoTitle, metaDescription, featuredImage, og tags, canonical
   - Injects JSON-LD Article schema from frontmatter fields
   - Wraps MDX content with the blog components provider

8. Add routes to src/App.tsx:
   /blog → Blog.tsx
   /blog/:slug → BlogPost.tsx

9. Verify the two example posts Lovable created render correctly at /blog
```

---

## Brand Rules That Apply to Every File You Touch

- No em dashes (—) in any content you generate (titles, component text, error messages)
- Status is always `"draft"` unless explicitly told otherwise
- Affiliate links use `rel="noopener noreferrer sponsored"` on every `<a>` tag
- `<AffiliateDisclosure />` must be the first element inside every post body, every time
- Never hardcode session paths — use relative paths from the project root

---

## File Reference Map

```
itsmomapproved.com/                    ← workspace root
  blog-infrastructure/
    CLAUDE.md                          ← this brief (full version)
    CODEX-BRIEF.md                     ← condensed version for Codex chat
    BLOG-STRUCTURE.md                  ← site file structure explanation
    COWORK-HANDOFF-FORMAT.md           ← handoff file spec
    END-TO-END-WORKFLOW.md             ← full pipeline overview
    handoffs/                          ← completed posts waiting to be published
      README.md
      [slug]-handoff.md (added per post)
    templates/
      product-post-template.mdx
      pillar-post-template.mdx
      skip-this-template.mdx
      product-post-visual.html         ← visual design reference
      pillar-post-visual.html
      skip-this-visual.html
    react-components/
      AffiliateDisclosure.tsx
      SafetyNote.tsx
      BudgetCallout.tsx
      PillarLink.tsx
  content-cluster-map.md               ← all posts: Live / In Progress / Planned
  master-brand-brief.md                ← full brand guide
```
