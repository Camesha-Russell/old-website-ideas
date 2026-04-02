

# Apply Satisfy Font to "Currently Trending" Title

## Changes

### `index.html`
Add `Satisfy` to the Google Fonts link URL.

### `src/components/CurrentlyTrending.tsx`
- Reduce title from `text-4xl md:text-5xl` → `text-3xl md:text-4xl`
- Replace `font-display italic` with `style={{ fontFamily: "'Satisfy', cursive" }}`
- Remove `italic` class

