

# Switch Fonts: Cormorant Garamond + Great Vibes

Replace Playfair Display with Cormorant Garamond for all headlines/logo, and add Great Vibes for script accents (e.g., the "It's" in the logo, decorative labels).

## Changes

### 1. `index.html`
- Replace Playfair Display with **Cormorant Garamond** (weights 400–700, italic) in Google Fonts link
- Add **Great Vibes** (weight 400)

### 2. `src/index.css`
- Update all `'Playfair Display'` references to `'Cormorant Garamond'`
- Add `.font-script` utility class using Great Vibes
- Update `.font-serif-display` to use Cormorant Garamond

### 3. `tailwind.config.ts`
- Change `display` font family from Playfair Display to Cormorant Garamond
- Add `script: ['"Great Vibes"', 'cursive']` font family

### 4. `src/components/MainHeader.tsx`
- Change the "It's" text in the logo to use `font-script` (Great Vibes) instead of `font-sans-nav uppercase`
- Style it as a flowing script to match the reference

### 5. Other components (as needed)
- Any decorative/accent text that should use Great Vibes script font

