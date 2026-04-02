

# Update Currently Trending Section to Match SheShoppes Reference

## Changes to `src/components/CurrentlyTrending.tsx`

### 1. Section title — decorative script font, larger size
Change "Currently Trending" from `text-2xl md:text-3xl` to `text-4xl md:text-5xl` italic Playfair Display to match the large decorative heading style on the reference.

### 2. Horizontal rule connecting title to tabs
Replace the short `w-24` divider with a flexible `flex-grow` horizontal line between the title and tabs, all on one row. This creates the long line that stretches across the header area like the reference.

### 3. Tab label size
Increase tab text from `text-[10px]` to `text-[12px]` to match the reference's slightly larger tab labels.

### 4. Featured post — side-by-side layout
Change from stacked (image on top, text below) to a horizontal layout: image on the left (~50-60% width), text content on the right. Use `flex` with `gap-6` instead of the current vertical stack.

### 5. Numbered list — larger decorative numbers
Make the numbers much larger and lighter (watermark-style): change from `text-2xl font-semibold` to `text-5xl font-light text-foreground/15` so they appear as big background-style numerals. Increase list title size from `text-sm` to `text-base font-medium`.

### 6. More vertical spacing in numbered list
Change `space-y-4` to `space-y-6` and add a subtle bottom border (`border-b border-border pb-6`) to each item for visual separation like the reference.

### 7. Product carousel — remove white card backgrounds
Remove the white card wrapper. Show placeholder images directly at `w-36 h-36 md:w-44 md:h-44` without the enclosing white box, matching the reference's cleaner product grid.

### 8. Overall spacing
Increase section vertical padding from `py-12 md:py-16` to `py-16 md:py-20` for more breathing room.

