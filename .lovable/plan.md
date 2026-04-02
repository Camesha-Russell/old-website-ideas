

# Add Downloadable/Freebie Section Before Recent Posts

## What the reference shows
A full-width section with a **soft pink background** (`#F9E8E0` / peachy-pink tone). Two-column layout:
- **Left**: 2-3 overlapping magazine/guide cover images, slightly rotated and stacked with a casual, layered look
- **Right**: Bold serif headline in all caps + italic mix, a description paragraph, an email input field, a dark "SIGN UP" button, and a checkbox for consent

## What we'll build
A new `FreebieCTA` component placed between `ShopThePost` and `RecentPosts` in `Index.tsx`. Adapted to the "It's Mom Approved" brand:

### Layout
- Full-width section, `bg-peach` (your `#E8D5C4`) background
- `max-w-[1400px]` container with generous vertical padding (`py-16 md:py-24`)
- Two-column grid: left ~40% for stacked placeholder guide images, right ~60% for text + form
- On mobile: stacks vertically (images on top, form below)

### Left column — stacked guide covers
- 2-3 placeholder rectangles styled as guide/ebook covers using `bg-white` with shadows
- Slightly rotated (`-rotate-6`, `rotate-3`) and overlapping to mimic the magazine stack effect
- Placeholder text like "The Ultimate Nursery Checklist" on the covers

### Right column — text + form
- Bold serif headline (Playfair Display): **"GET YOUR FREE STARTER KIT AND *SIMPLIFY YOUR PARENTING JOURNEY.*"**
- Body text (Lora): "Get the essential checklists, guides, and tips we use every day to make parenting easier — delivered straight to your inbox."
- Email input field with placeholder "Your E-Mail" — full width, bordered, matching site style
- Dark "SIGN UP" button — full width, matching `.btn-dark` style
- Checkbox with label: "I would like to receive news and special offers."

### Files changed
- `src/components/FreebieCTA.tsx` (new)
- `src/pages/Index.tsx` — add `<FreebieCTA />` between `<ShopThePost />` and `<RecentPosts />`

