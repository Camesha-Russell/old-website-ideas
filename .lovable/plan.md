

# Create "Shop the Post" Editorial Section

## What it is
A new full-width section matching the reference's layout: large lifestyle image on the right, with a serif title, description text, and a product thumbnail carousel on the left. This replaces `CategorySleep` in the page order (the section right after Recent Posts that currently corresponds to where this sits in the reference).

## Layout

```text
┌──────────────────────────────────────────────────────────┐
│  (off-white background, full width)                      │
│                                                          │
│   Title (large serif)          ┌─────────────────────┐   │
│   Description paragraph        │                     │   │
│                                │   Large lifestyle   │   │
│   ┌────┐ ┌────┐ ┌────┐ ┌────┐ │   image (edge to    │   │
│   │prod│ │prod│ │prod│ │prod│ │   edge on right)     │   │
│   └────┘ └────┘ └────┘ └────┘ │                     │   │
│   ← →                         └─────────────────────┘   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Changes

### New file: `src/components/ShopThePost.tsx`
- Two-column grid (`grid-cols-1 lg:grid-cols-2`), no max-width constraint on the right image so it bleeds to edge
- **Left column**: Padded content area with:
  - Large serif title (`font-display text-3xl md:text-4xl`)
  - Body paragraph (`font-body text-muted-foreground`)
  - Row of 4 placeholder product thumbnails (square, bordered, in a flex row)
  - Simple prev/next arrow buttons (outlined, square) below the thumbnails
- **Right column**: Placeholder image covering full height (`aspect-[4/3] lg:aspect-auto lg:h-full`)
- Background: `bg-[#F7F3EE]` (off-white from brand palette)
- Placeholder content adapted for mom blog: e.g. "Our Favorite Nursery Essentials for a Cozy Space"

### `src/pages/Index.tsx`
- Import and add `<ShopThePost />` between `<RecentPosts />` and `<CategorySleep />`

