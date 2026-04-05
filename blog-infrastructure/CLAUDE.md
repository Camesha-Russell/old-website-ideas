# itsmomapproved.com — Instructions for Claude Code
# Read this file before every post publish action.

---

## Your Role

Cowork researches and writes every post. You publish it.

Your job is:
1. Read the handoff file Cowork produced
2. Pick the right template
3. Fill every `{{PLACEHOLDER}}` with the matching content
4. Save the completed file to `src/content/posts/[slug].mdx`
5. Confirm all placeholders are gone and report back

You do not write content. You do not edit content. You place it.

---

## File Locations (Lovable project structure)

```
src/
  content/
    posts/           ← Save all completed posts here as [slug].mdx
  components/
    blog/
      AffiliateDisclosure.tsx   ← FTC disclosure, top of every post
      SafetyNote.tsx            ← Amber callout for safety sections
      BudgetCallout.tsx         ← Green card for budget alternative
      PillarLink.tsx            ← Internal link card to pillar page
  pages/
    Blog.tsx                    ← /blog listing page
    BlogPost.tsx                ← /blog/:slug individual post renderer
  lib/
    blog.ts                     ← getAllPosts(), getPostBySlug(), getPostsByCategory()
```

Component files are in: `blog-infrastructure/react-components/`
Copy them to `src/components/blog/` if not already there.

---

## Step 1: Read the handoff file

Handoff files are in: `blog-infrastructure/handoffs/[slug]-handoff.md`
Status should say: `READY FOR CLAUDE CODE`

The handoff has two sections:
- **FRONTMATTER FIELDS** — map directly to `{{PLACEHOLDER}}` values in the template
- **CONTENT SECTIONS** — named blocks that fill the post body

---

## Step 2: Choose the right template

| `postType` in handoff | Template to use |
|---|---|
| `product-post` | `blog-infrastructure/templates/product-post-template.mdx` |
| `pillar-post` | `blog-infrastructure/templates/pillar-post-template.mdx` |
| `skip-this` | `blog-infrastructure/templates/skip-this-template.mdx` |

---

## Step 3: Fill the template

Replace every `{{PLACEHOLDER}}` with the matching field from the handoff.

Rules:
- Copy content exactly — no edits, no rewording, no formatting changes
- Do not remove any JSX components (`<AffiliateDisclosure />`, `<SafetyNote>`, `<BudgetCallout>`, `<PillarLink />`)
- If a frontmatter field is empty in the handoff, use an empty string `""` — never delete the field
- Pinterest pins go inside the `<!-- -->` comments at the bottom — leave the comment tags in place

---

## Step 4: Frontmatter schema reference

Every post file must have this frontmatter block at the top. Field names match Lovable's blog.ts schema exactly:

```yaml
---
title: ""
slug: ""
status: "draft"
publishDate: "YYYY-MM-DD"
category: ""          # matches pillar: sleep | feeding | carriers-and-strollers | play-and-development | for-moms | safety
seoTitle: ""
metaDescription: ""
featuredImage: ""     # path to image: /images/posts/[slug].jpg — leave blank if not yet added
featuredImageAlt: ""
excerpt: ""           # 1-2 sentence preview shown on the blog listing page
postType: ""          # product-post | pillar-post | skip-this
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

## Step 5: Set the filename

Filename = `slug` field from frontmatter + `.mdx`

Example: `slug: "hatch-rest-vs-hatch-rest-plus"` → file is `hatch-rest-vs-hatch-rest-plus.mdx`

Save to: `src/content/posts/hatch-rest-vs-hatch-rest-plus.mdx`

---

## Step 6: Verify and report

Before reporting done, search the completed file for `{{`. If any remain, a placeholder was missed — fix it.

Then confirm:
- Filename matches slug exactly
- No `{{` strings remain in the file
- Frontmatter YAML is valid (no unmatched quotes, no special characters)
- Status is `"draft"` unless handoff explicitly says `"published"`
- All JSX components are present and unclosed tags are self-closing where required

Report back: `"File created: src/content/posts/[slug].mdx — all placeholders filled, status: draft, ready for Cowork review."`

---

## If something is missing

If a required field is blank or a content section is missing from the handoff, stop and report:

`"Handoff is missing: [field names]. Cannot complete. Return to Cowork."`

Do not guess. Do not fill in content.

---

## One-time blog infrastructure setup

Run this once when the blog system is first being added to the Lovable project. After that, every new post is just a new `.mdx` file.

1. Copy all 4 components from `blog-infrastructure/react-components/` → `src/components/blog/`
2. Ensure `src/content/posts/` directory exists
3. Confirm MDX is configured in `vite.config.ts`
4. Confirm `src/lib/blog.ts` has `getAllPosts()`, `getPostBySlug()`, `getPostsByCategory()`
5. Confirm `/blog` and `/blog/:slug` routes exist in `src/App.tsx`
6. Confirm `react-helmet-async` is installed for per-post SEO tags
7. Confirm `vite-plugin-sitemap` is installed and configured
