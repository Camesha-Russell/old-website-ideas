

# Fix Hero Side Cards

## Issues
1. **Dark border around placeholder images**: The three side card images show a thin dark outline. Need to remove any border and ensure clean edges.
2. **Text too large**: Side card titles are `text-xl md:text-2xl` — reference shows them smaller, around `text-base md:text-lg`.

## Changes

### `src/components/HeroSection.tsx`
- Remove `rounded-sm` from side card placeholder images (line 57) to eliminate border appearance
- Reduce headline size from `text-xl md:text-2xl` to `text-base md:text-lg` (line 62)

### `src/index.css` (if needed)
- Check if `.placeholder-img` has any border or outline and remove it

