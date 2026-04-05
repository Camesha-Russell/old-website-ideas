

## Homepage Rebuild — Editorial Layout Overhaul

This is a significant rebuild touching 7 component files plus the Index page and tailwind config. Every section gets restructured per the spec.

### Color additions

**`tailwind.config.ts`** — Add `terracotta: '#B5553C'` to the colors extend. Update `--background` CSS var in `src/index.css` to map to `#F9F6F2`.

### Section-by-section changes

**1. HeroSection.tsx** — Full rewrite. Remove the current card-based layout. New structure: full-width `relative` container, `min-h-[600px]`, placeholder background image with `bg-black/50` overlay, centered white serif headline "The honest answer for every baby product decision.", terracotta CTA button "See Our Top Picks" linking to `/top-picks`. No side cards.

**2. CurrentlyTrending.tsx** — Full rewrite. Remove tabs, carousel, and numbered list. New structure: centered uppercase label "CURRENTLY TRENDING" (11px, letter-spacing 3px). Below: a `grid-cols-[60%_40%]` layout. Left: one large card (image, category tag in terracotta, title, 1-line excerpt). Right: three stacked horizontal cards (thumbnail left, category + title right). All cards white with `rounded-lg` and `border`.

**3. FeaturedSection.tsx** — Keep existing asymmetric grid structure. Add `border border-border rounded-lg` to each card. Add terracotta-colored category tag above each title. Set all images to `h-[240px] object-cover`.

**4. RecentPosts.tsx** — Rewrite from 4-column grid to a 40/60 split. Left: one large post with tall image. Right: 2x2 grid of 4 smaller post cards. Each card is white with border and rounded corners.

**5. CategorySleep.tsx** — Remove the dark overlay image treatment. New structure: left-aligned uppercase label "SLEEP", 4-column post card row beneath, right-aligned terracotta "Browse all Sleep posts →" link below.

**6. CategoryFeeding.tsx** — Same structure as new Sleep section: uppercase label "FEEDING", 4-column card row, right-aligned browse link.

**7. Index.tsx** — Update the page wrapper background to `bg-[#F9F6F2]`. Keep the same section order. Each section gets `py-[100px]` for consistent 100px top/bottom spacing.

**8. ShopThePost, FreebieCTA, SignatureFeatures, NewsletterBlock** — Add `py-[100px]` spacing. Card backgrounds set to white `#FFFFFF`.

### Files to edit (8 total)
- `src/components/HeroSection.tsx` — full rewrite
- `src/components/CurrentlyTrending.tsx` — full rewrite
- `src/components/FeaturedSection.tsx` — border/radius/image height/terracotta tag
- `src/components/RecentPosts.tsx` — layout restructure to 40/60 split
- `src/components/CategorySleep.tsx` — full rewrite to simple 4-col + browse link
- `src/components/CategoryFeeding.tsx` — match new Sleep structure
- `src/pages/Index.tsx` — background color, section spacing
- `tailwind.config.ts` — add terracotta color

