

# Featured Section Fixes

## 1. Make "Featured" title bigger
In `src/index.css`, update `.section-title` from `text-[11px]` to `text-lg md:text-xl` (or similar). Keep uppercase and tracking.

## 2. Remove "Fun Ideas for an Unforgettable Playdate"
Remove `featuredPosts[5]` from the array and delete the second card in the center column (lines 41-44). This makes the center column a single tall card matching the reference layout — no more awkward empty space.

## 3. Fix awkward spacing on left and right columns
The left (`col-span-3`) and right (`col-span-4`) cards currently don't fill their height, leaving gaps below the image. With the center now being a single card, all three columns in Row 1 will naturally align. Add `flex flex-col` and make the image `flex-1` on the left/right cards so they stretch to fill evenly.

### Files changed
- `src/index.css` — increase `.section-title` font size
- `src/components/FeaturedSection.tsx` — remove 6th post, remove second center card, adjust column stretch

