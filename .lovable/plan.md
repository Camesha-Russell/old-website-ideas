

## Fix: Align image stack with text content in "You found your people" section

**Problem**: The three stacked images on the right don't align with the text. There's a large gap, and the images should span from the "You found your people." headline (top) down to the "don't buy it." line (bottom).

**Solution**: Change the image column from `gap-5` spacing to `justify-between`, so the images stretch to fill the exact same vertical space as the text. Also set the grid to `items-stretch` so both columns share the same height.

### Changes to `src/pages/About.tsx`

1. **Grid container** (line 39): Change `items-start` to `items-stretch` so the image column matches the full height of the text column.

2. **Image column** (line 71): Change `gap-5` to `justify-between` so images distribute evenly from top to bottom of the text block, with the first image aligned to "You found your people." and the last image aligned to the end of the body text.

This is a two-line CSS change — no structural or content changes needed.

