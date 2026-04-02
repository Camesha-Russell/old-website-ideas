

# Optimize Currently Trending for Mobile

## What the reference (SheShoppes) shows on mobile
- **Cursive title** "Currently Trending" — centered, large
- **Tab buttons** centered below the title (not inline with it), e.g. "BEAUTY CORNER" / "FASHION JUNCTION"
- **Full-width image** — takes the full screen width, tall aspect ratio
- **Title + excerpt + "READ MORE" button** stacked below the image (not side by side)
- **Numbered pagination** (1 2 3 4 5) as clickable dots/numbers to switch between posts — replaces the full numbered list on mobile
- **Product thumbnails** row at the bottom with left/right arrows

## Current problems on mobile
1. Header tries to squeeze cursive title + divider line + two tab buttons all in one horizontal row — overflows on 390px
2. Featured post layout goes full-width image then text, which is fine, but the full 5-item numbered list below it is very long on mobile
3. No numbered pagination dots — mobile users must scroll through the entire list

## Plan

### `src/components/CurrentlyTrending.tsx`

**Header (mobile restructure):**
- On mobile (`md:` breakpoint): stack vertically — cursive title centered on top, tabs centered below, no divider line
- On desktop (`md:+`): keep current horizontal layout with title + divider + tabs

**Featured post (mobile):**
- Full-width image (no side-by-side), title and excerpt below, "Read More" button — this already works with the `flex-col md:flex-row` pattern, just ensure the image is full-width without the `md:w-[55%]` constraint on mobile

**Replace numbered list with pagination dots on mobile:**
- Hide the `<ol>` numbered list on mobile (`hidden lg:block`)
- Show a row of clickable numbers (1 2 3 4 5) on mobile (`flex lg:hidden`), centered
- Active number gets a filled circle background (dark), others are plain text
- Clicking a number updates `activePost`

**Product carousel:**
- Keep as-is (already scrollable)

### Files changed
- `src/components/CurrentlyTrending.tsx` only

