# Cowork Handoff Format
## How Cowork Passes a Completed Post to Claude Code

After a post passes the `/review-post` checklist (all 15 items), Cowork produces a handoff file in this exact format. Claude Code reads this file and populates the template.

---

## The Handoff File Structure

Save handoff files to: `blog-infrastructure/handoffs/[slug]-handoff.md`
Status before Claude Code picks it up: `READY FOR CLAUDE CODE`
Status after Claude Code creates the file: `PUBLISHED TO DRAFT`

---

## Handoff File Template

```
# HANDOFF: [Post Title]
Status: READY FOR CLAUDE CODE
Post Type: [product-post | pillar-post | skip-this]
Date: [YYYY-MM-DD]

---

## FRONTMATTER FIELDS

title: "[Post title]"
slug: "[url-slug]"
date: "[YYYY-MM-DD]"
postType: "[product-post | pillar-post | skip-this]"
pillar: "[Pillar Name]"
primaryKeyword: "[primary keyword phrase]"
seoTitle: "[50-60 char SEO title]"
metaDescription: "[150-160 char meta description]"
topPickName: "[Product Name]"
topPickPrice: "$[XX]"
budgetPickName: "[Budget Product Name]"
budgetPickPrice: "$[XX]"
affiliateLinkTopPick: "[URL]"
affiliateLinkBudget: "[URL]"
pillarPageSlug: "[pillar-slug]"
status: "draft"

---

## CONTENT SECTIONS

### OUR_PICK_SECTION
[Full text of the Our Pick section — exactly as reviewed and approved]

### REVIEWS_SECTION
[Full text of the Reviews section]

### SAFETY_NOTE
[Full text of the safety note]

### BUDGET_ALTERNATIVE_SECTION
[Full text of the budget alternative section]

### LONGEVITY_SECTION
[Full text of the longevity section]

### INTERNAL_LINKS_SECTION
[Full text of internal links — formatted as markdown links]

---

## PINTEREST PINS

Pin 1: [Full pin title + description]
Pin 2: [Full pin title + description]
Pin 3: [Full pin title + description]

---

## REVIEW STATUS
Review-post result: READY TO PUBLISH
Flags resolved: [X] / 15 items passed
Reviewed: [Date]
```

---

## Cowork Checklist Before Creating the Handoff File

Before saving a handoff file, confirm all of the following:

- [ ] `/review-post` returned "READY TO PUBLISH" (all 15 items passed)
- [ ] All frontmatter fields are filled — no empty strings except status
- [ ] Affiliate links are real URLs (not placeholders) — `/affiliate-optimizer` has been run
- [ ] SEO title is 50-60 characters
- [ ] Meta description is 150-160 characters
- [ ] URL slug is lowercase, hyphenated, 4-6 words
- [ ] Three Pinterest pins are written and included
- [ ] Status is set to "draft"

If any item is missing, fix it before creating the handoff file.

---

## Cowork Post-Review Checklist (After Claude Code Publishes)

After Claude Code reports the file is created, Cowork opens the published draft and runs these checks:

1. **All placeholders replaced** — search the file for `{{`. If any remain, Claude Code missed one.
2. **Frontmatter renders correctly** — title, date, pillar, and slug are all correct.
3. **FTC disclosure is visible** — `<AffiliateDisclosure />` component is present at the top.
4. **Safety note renders** — `<SafetyNote>` wraps the safety content.
5. **Budget callout renders** — `<BudgetCallout>` wraps the budget alternative.
6. **Pillar link is present** — `<PillarLink />` component is at the bottom of the post.
7. **Content matches approved draft** — spot-check 3 sections against the handoff file.
8. **Status is "draft"** — do not change to "published" without Camesha's sign-off.

If everything passes: update handoff file status to `PUBLISHED TO DRAFT`. Notify Camesha the post is ready to review in the site dashboard before going live.
