

# Section-by-Section Overhaul: Match Reference Exactly

After comparing the reference screenshots against our current site, here are all the differences I've identified and will fix:

---

## Section 1: Top Nav Bar
**Current**: Looks close. Minor tweaks needed.
- No changes needed — matches reference well.

## Section 2: Main Header
**Issues found**:
- Logo: Currently just "It's Mom Approved" in one line of italic serif. Reference shows **two-line treatment**: "THE" in tiny small caps on top, "EDITdaily" in large bold italic serif below. We need: **"IT'S"** in tiny small caps above, **"Mom Approved"** in larger italic serif below.
- Nav links: Currently `text-[11px]` — reference shows slightly larger, more spaced nav links.
- CTA button: Reference "THE SHOP" has a subtle outline/border style, not a filled peach button. Our "GET THE STARTER KIT" is filled peach — keep it peach per the original brief, but consider making it more subtle with a border style.

**Fix**: Rebuild logo as two-line treatment. Adjust nav sizing.

## Section 3: Hero Section
**Issues found**:
- **Background**: Currently `bg-white`. Reference uses the warm off-white page background — should be `bg-background` (off-white `#F7F3EE`).
- **Side cards**: Reference shows each side card inside a **thin border container** (subtle light grey border around each card). Currently no borders.
- **Side card images**: Reference images are much larger — roughly square aspect, taking ~40% of card width. Currently `w-28 h-20 md:w-32 md:h-24` which is too small.
- **Side card text**: Reference headline text is larger serif (Playfair Display, ~18-20px), currently `text-sm md:text-base`.
- **Featured post image**: Aspect ratio looks good. Category label + title below image — matches.
- **Spacing**: Reference has more generous padding around the hero.

**Fix**: Add thin borders to side cards, increase side card image size, increase headline font size, change bg to off-white.

## Section 4: Currently Trending
**Current**: Looks reasonable. The reference doesn't show this section in the new screenshots, so keep as-is with minor spacing cleanup.

## Section 5: Warm Section Break
**Current**: Fine as placeholder.

## Section 6: Featured Section
**Current**: Dark overlay mosaic grid. This matches the general concept from the original brief. Keep as-is.

## Section 7: Recent Posts
**Current**: Grid with excerpts. Looks functional. Keep as-is.

## Section 8-9: Category Sections
**Current**: Functional layouts. Keep as-is.

## Section 10-12: Signature Features, Newsletter, Footer
**Current**: Functional. Keep as-is.

---

## Priority Changes (what matters most)

1. **Logo two-line treatment** — "IT'S" tiny small caps above, "Mom Approved" large italic serif below
2. **Hero bg** — off-white not white
3. **Hero side cards** — thin border, larger square images, bigger headline text
4. **Page-wide bg** — ensure `bg-background` (off-white) is used consistently instead of `bg-white` for the main page sections

## Files to Modify
- `src/components/MainHeader.tsx` — Logo rebuild
- `src/components/HeroSection.tsx` — Side card borders, image sizing, bg color
- `src/pages/Index.tsx` — Ensure bg-background wrapper

