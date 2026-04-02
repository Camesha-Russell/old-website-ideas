

# Redesign Featured Section — Text Below Images

## What changes
Restyle `src/components/FeaturedSection.tsx` to match the reference layout where category and title appear **below** each image on a white background, not overlaid on the image.

## Layout (matching reference)

**Row 1:** 3 columns (small | large | small)
- Left & right cards: category + title text block on top, image below (or vice versa — reference alternates)
- Center card: tall image on top, category + title below

**Row 2:** 2 columns (large image left | text-only right + image right below)

## Changes in `src/components/FeaturedSection.tsx`

1. **Remove overlay approach** — delete `bg-gradient-to-t` overlays and `absolute` positioned text from all cards
2. **Restructure each card** — image and text are separate stacked blocks:
   - `<div>` for the image (no overlay)
   - `<div className="p-4 md:p-6">` for category label + title below
3. **Add thin border** — `border border-border` on each card to define edges (like reference)
4. **Increase title size** — `text-xl md:text-2xl lg:text-3xl` with `font-display` for prominent serif titles
5. **Category label** — dark text (`text-foreground`) with `tracking-widest uppercase text-xs`
6. **Text color** — all text is dark on white background now, not white-on-image

## Grid structure
- Row 1: `grid-cols-12` — left `col-span-3`, center `col-span-5`, right `col-span-4` (keep current proportions)
- Row 2: `grid-cols-2` (keep current)
- Some cards show text-above-image, some show image-above-text, alternating like the reference

