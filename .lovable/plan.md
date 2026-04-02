

# Refine FreebieCTA Section to Match Reference

## Key differences observed between the reference (Voux) and our current implementation

### 1. Section height/padding
- **Reference**: The pink section is **thin** — roughly `py-10 md:py-16` at most. Compact, not oversized.
- **Ours**: Much taller with `py-16 md:py-24`. Too much vertical padding.

### 2. Magazine covers **break out** of the pink section
- **Reference**: The stacked magazines extend **above** the pink background — they overflow upward past the section boundary. The pink band is short and the images are taller than the band, creating a layered depth effect.
- **Ours**: Everything is contained within the section. The covers feel flat and constrained.

### 3. Headline size
- **Reference**: The bold italic heading is roughly `text-lg md:text-xl` — **much smaller** than ours. It reads like a strong subheading, not a massive hero title.
- **Ours**: `text-3xl md:text-4xl lg:text-[42px]` — way too large. Needs to drop to roughly `text-xl md:text-2xl`.

### 4. Email + button layout is **inline**, not stacked
- **Reference**: The email input and "SIGN UP" button sit **side by side** on one row (input takes ~70%, button ~30%). Not full-width stacked.
- **Ours**: Input and button are both full-width and stacked vertically.

### 5. Body text size
- **Reference**: Body paragraph is `text-sm` or `text-[15px]`, compact.
- **Ours**: `text-base` — slightly too large but close.

### 6. Spacing between elements
- **Reference**: Tight spacing throughout — heading to paragraph ~`mt-3`, paragraph to form ~`mt-5`. Very compact.
- **Ours**: `mt-6` and `mt-8` — too much breathing room.

### 7. Cover images are actual magazine images, not plain white cards
- This is expected since we're using placeholders, so no change needed here. But the covers in the reference are larger and overlap more dramatically with rotation.

### 8. Overall alignment
- **Reference**: Content is vertically centered in a compact band. The magazines provide visual weight on the left, overflowing the top.
- **Ours**: Section feels like a big padded block rather than a thin elegant strip.

## Changes to `src/components/FreebieCTA.tsx`

1. **Reduce section padding**: `py-16 md:py-24` → `py-10 md:py-14`
2. **Allow covers to overflow upward**: Add `overflow-visible` to the section, give the cover container a negative top margin (`-mt-16 md:-mt-24`) so covers break above the pink band
3. **Shrink headline**: `text-3xl md:text-4xl lg:text-[42px]` → `text-xl md:text-2xl font-bold italic` (bold italic like reference)
4. **Make email + button inline**: Replace stacked layout with a flex row — input grows, button is fixed width beside it
5. **Tighten spacing**: `mt-6` → `mt-3`, `mt-8` → `mt-5`
6. **Reduce max-width on form**: `max-w-md` → `max-w-lg` to accommodate the inline layout

### Files changed
- `src/components/FreebieCTA.tsx`

