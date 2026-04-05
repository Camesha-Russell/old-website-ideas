

## Swap Fonts: Cormorant Garamond + DM Sans

Replace the current font stack (Playfair Display for headlines, Poppins for body, Montserrat for nav/labels) with the recommended editorial pairing.

**Current → New mapping:**
- Playfair Display → Cormorant Garamond (headlines, italic accents)
- Poppins → DM Sans Regular (body copy)
- Montserrat → DM Sans Medium (nav, labels, subheads)

### Files to change

**1. `index.html`** — Replace the Google Fonts `<link>` to load Cormorant Garamond (400, 500, 600, 700 + italics) and DM Sans (400, 500, 600) instead of Playfair/Poppins/Montserrat.

**2. `src/index.css`** — Update all font-family references:
- `body` rule: `'DM Sans'` instead of `'Poppins'`
- `h1-h6` rule: `'Cormorant Garamond'` instead of `'Playfair Display'`
- `.font-serif-display`: `'Cormorant Garamond'`
- `.font-serif-body`: `'DM Sans'`
- `.font-sans-nav`: `'DM Sans'`

**3. `tailwind.config.ts`** — Update the `fontFamily` extend:
- `display`: `'Cormorant Garamond', serif`
- `body`: `'DM Sans', sans-serif`
- `nav`: `'DM Sans', sans-serif`

**4. `mem://index.md` and `mem://design/tokens`** — Update font references in project memory.

No structural or layout changes — purely a font swap across 3 code files + memory.

