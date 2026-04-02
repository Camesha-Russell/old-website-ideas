

# Update Font Sizes to Match SheShoppes Reference

## Summary
Align all font sizes across the site to the exact values found on the reference site.

## Reference Sizes (from inspection)
- **Top nav links**: 10px (already correct)
- **Main nav links**: 11-12px (currently 12px — change to 11px)
- **Category labels**: 10px (already correct)
- **Section titles**: 11px (currently `text-sm` = 14px — reduce to 11px)
- **Body text**: 15px, line-height 1.7 (already correct)
- **Hero headline**: 32-36px (currently `text-2xl md:text-3xl lg:text-4xl` — fine, keep)
- **Side card headlines**: keep `text-base md:text-lg`
- **Trending section headline**: keep italic `text-2xl md:text-3xl`
- **Trending numbered list titles**: 14px (currently `text-sm` — correct)
- **Button text**: 10px (already correct)
- **Body excerpt text**: 14px (`text-sm` — correct)

## Changes

### `src/index.css`
1. `.section-title`: change `text-sm` to `text-[11px]` to match the reference's small uppercase section headers
2. `.nav-link`: change `text-xs` (12px) to `text-[11px]`

### `src/components/MainHeader.tsx`
- Main nav links: change `text-[12px]` → `text-[11px]` (line 35)
- Mobile nav links: already `text-[11px]` — no change

### `src/components/TopNavBar.tsx`
- Already `text-[10px]` — no change needed

### `src/components/CurrentlyTrending.tsx`
- Tab buttons already `text-[10px]` — no change

No other component changes needed. The global `.nav-link` and `.section-title` updates will cascade to all sections using those classes.

