# itsmomapproved.com — Blog File Structure
Last Updated: April 2026

## Overview

Posts are written as MDX files. Each file contains frontmatter (metadata) at the top and the full post content below. Claude Code reads a template, fills in the content Cowork produced, and saves the completed file to the `content/posts/` folder.

The Lovable site renders each file automatically as a live post. No builder. No manual formatting. No logging into anything.

---

## The Folder Structure to Add to Lovable

Ask Claude Code to add this structure to the Lovable project:

```
src/
  content/
    posts/           ← Each published post lives here as an .mdx file
  components/
    blog/
      BlogLayout.tsx       ← Shared wrapper for all post types
      PostHero.tsx         ← Title, pillar tag, date, intro
      AffiliateDisclosure.tsx  ← FTC disclosure block (reused on every post)
      BudgetCallout.tsx    ← The budget alternative card component
      SafetyNote.tsx       ← The safety note component
      PillarLink.tsx       ← Internal link to pillar page
  pages/
    blog/
      index.tsx      ← Blog listing page (shows all published posts)
      [slug].tsx     ← Dynamic route — renders individual post from MDX
```

---

## The Frontmatter Fields

Every post file starts with a frontmatter block. These fields control how the post renders on the site, what shows up in Google, and what Pinterest pins link to.

```mdx
---
title: "Post title here — no em dashes"
slug: "url-slug-here"
date: "YYYY-MM-DD"
postType: "product-post" | "pillar-post" | "skip-this"
pillar: "Sleep" | "Feeding" | "Carriers and Strollers" | "Play and Development" | "Just for Mama" | "Safety"
primaryKeyword: "exact keyword phrase"
seoTitle: "SEO title — 50-60 chars"
metaDescription: "Meta description — 150-160 chars"
topPickName: "Product Name"
topPickPrice: "$XXX"
budgetPickName: "Budget Product Name"
budgetPickPrice: "$XX"
affiliateLinkTopPick: "https://..."
affiliateLinkBudget: "https://..."
pillarPageSlug: "pillar-page-slug"
status: "draft" | "published"
---
```

---

## How a Post Goes Live

1. **Cowork writes the post** using the appropriate skill (product-post, pillar-post, or skip-this)
2. **Cowork runs seo-optimize** to fill in the SEO fields
3. **Cowork runs affiliate-optimizer** to fill in the affiliate links
4. **Cowork runs review-post** — post must pass all 15 items before handoff
5. **Cowork produces a handoff file** — a structured `.md` file with all content and frontmatter fields filled in (see HANDOFF-FORMAT.md)
6. **Claude Code receives the handoff file** and uses the appropriate template to create the final `.mdx` post file in `src/content/posts/`
7. **Cowork reviews the published post** using the review protocol

---

## File Naming Convention

All post files use this format: `[slug].mdx`

The slug comes from the SEO Block produced by `/seo-optimize`. It is lowercase, hyphenated, keyword-first, 4-6 words maximum.

Examples:
- `hatch-rest-vs-hatch-rest-plus.mdx`
- `best-baby-carriers-newborns.mdx`
- `skip-dockatot-safe-alternatives.mdx`

---

## Post Type Reference

| Post Type | Template File | Skill That Writes It | Word Count |
|---|---|---|---|
| Product comparison | `templates/product-post-template.mdx` | `/product-post` | 600-1,000 |
| Best-of pillar page | `templates/pillar-post-template.mdx` | `/pillar-post` | 1,800-2,400 |
| Negative recommendation | `templates/skip-this-template.mdx` | `/skip-this` | 800-1,200 |
