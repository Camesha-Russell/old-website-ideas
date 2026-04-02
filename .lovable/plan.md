

# Two Quick Fixes

## 1. Featured Section — Bigger card titles
All `h3` elements in `FeaturedSection.tsx` currently use `text-sm`. Change to `text-base md:text-lg` so titles like "Fun Ideas for an Unforgettable Playdate" are more readable over the images.

**File:** `src/components/FeaturedSection.tsx` — update all 6 instances of `text-sm` on `h3` tags to `text-base md:text-lg`.

## 2. Recent Posts — Remove excerpt text
In `RecentPosts.tsx`, remove the `<p>` element that renders `post.excerpt` (lines 30-32). This declutters the grid and leaves just the image, category label, and title.

