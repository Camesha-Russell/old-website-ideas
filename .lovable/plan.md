

# Fix Shop the Post — Match Reference Exactly

## What the reference shows
- **Image on LEFT**, flush to left edge (no padding), occupying ~47% width
- **Text on RIGHT** with generous padding (~px-12 to px-16), vertically centered
- Large serif title (~`text-3xl md:text-4xl`, Playfair Display)
- Body paragraph in regular weight, muted color, ~`text-base`
- 4 product thumbnails: ~100x100px squares with **white backgrounds**, subtle border, spaced with ~`gap-4`
- Navigation arrows: simple thin chevrons (no border/box around them), ~20px, side by side below thumbnails
- Off-white/beige background across entire section
- No product name text under thumbnails on the reference

## Changes needed

### `src/components/ShopThePost.tsx`
1. **Swap column order** — image div first (left), text div second (right)
2. **Image**: remove padding, make it flush to left edge with `object-cover h-full` and min-height ~520px
3. **Product thumbnails**: increase to `w-24 h-24 md:w-28 md:h-28`, add `bg-white` background, keep subtle border
4. **Remove product name labels** — reference doesn't show text under thumbnails
5. **Arrow buttons**: remove border/box styling, make them plain chevron icons (~`w-5 h-5`), use `ChevronLeft`/`ChevronRight` instead of `ArrowLeft`/`ArrowRight`
6. **Increase body text** from `text-sm` → `text-base`
7. **Increase spacing**: `mb-8` → `mb-10` between paragraph and thumbnails, `gap-3` → `gap-4` between thumbnails

### `src/pages/Index.tsx`
- Move `<ShopThePost />` from after `<RecentPosts />` to **before** it (between `<FeaturedSection />` and `<RecentPosts />`)

### Files changed
- `src/components/ShopThePost.tsx`
- `src/pages/Index.tsx`

