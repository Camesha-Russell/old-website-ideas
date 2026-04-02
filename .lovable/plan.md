

# Fix Currently Trending Section — Softer Background & Tab Style

## Problem
The `bg-taupe` background (`hsl(34, 20%, 93%)`) creates too harsh a contrast against the near-white main background. The reference shows a much subtler shift — barely different from the main content area, just a whisper of warmth.

Additionally, the reference tabs ("BEAUTY CORNER" / "FASHION JUNCTION") are **plain uppercase text with an underline on the active tab** — not filled pill buttons like ours.

## Changes

### `src/components/CurrentlyTrending.tsx`
1. **Background**: Change `bg-taupe` to a lighter value — use a custom class or inline style like `bg-[hsl(30,15%,96%)]` which is only ~2% darker than the main background, matching the reference's subtle shift.
2. **Tab buttons**: Replace pill-shaped buttons with plain text tabs — uppercase, no background, with a bottom border on the active tab (like the reference).

### `tailwind.config.ts` (optional)
- Add a `taupe-light` color token (`hsl(30, 15%, 96%)`) if preferred over inline styles.

