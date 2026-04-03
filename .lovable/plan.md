

# Phased SEO + Blog Infrastructure Plan

## Reality check on your AI's advice

Your AI is **right** about the SEO problem with SPAs — Google does deprioritize JS-rendered content. However, some adjustments are needed for Lovable:

- **`vite-ssg`**: This fundamentally changes how the app boots and requires a different router (`createMemoryHistory`). It conflicts with Lovable's preview/hosting system. It only works once you export to GitHub and build externally (e.g., Vercel).
- **Vercel deployment**: Lovable can connect to GitHub, then you connect that repo to Vercel separately. This is a manual step outside Lovable.

So the practical approach: **build everything inside Lovable now, then deploy externally when ready to launch.**

---

## Phase 1 — MDX Blog System (build first, SEO comes free later)

Already planned. Create the full blog with MDX posts, frontmatter, listing page, post pages, and shared components.

Files: `vite.config.ts`, `src/lib/blog.ts`, `src/pages/Blog.tsx`, `src/pages/BlogPost.tsx`, `src/content/posts/*.mdx`, `src/components/blog/*.tsx`, `src/App.tsx`

## Phase 2 — Per-Page SEO Tags

Add `react-helmet-async` and set up on every blog post page:

- **OG tags**: `og:title`, `og:description`, `og:image`, `og:type`, `og:url` — all from frontmatter
- **Twitter cards**: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- **Canonical URL**: `<link rel="canonical" />`
- **JSON-LD Article schema**: headline, datePublished, description, author, image — injected as `<script type="application/ld+json">`
- **Extended frontmatter**: add `featuredImageAlt` and `canonicalUrl` fields

Files: `src/pages/BlogPost.tsx`, `package.json`

## Phase 3 — Sitemap + Robots

- Install `vite-plugin-sitemap` to auto-generate `sitemap.xml` at build time
- Update `robots.txt` to point to sitemap: `Sitemap: https://itsmomapproved.com/sitemap.xml`

Files: `vite.config.ts`, `public/robots.txt`

## Phase 4 — GitHub Export + Vercel + SSG

This is the step that actually solves the Google indexing problem:

1. Connect Lovable project to GitHub (Project Settings → GitHub)
2. Add `vite-ssg` to the exported repo — converts every route to static HTML at build time
3. Connect GitHub repo to Vercel
4. Configure Vercel build command to use `vite-ssg build`

This phase involves steps **outside Lovable** (Vercel dashboard, GitHub settings). I can give you exact instructions when you're ready.

---

## Suggested order

**Phase 1 → Phase 2 → Phase 3** can all be done inside Lovable now.
**Phase 4** happens when you're ready to go live with real content.

Want to start with Phase 1 (the MDX blog system)?

