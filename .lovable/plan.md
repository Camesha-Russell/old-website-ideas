

# Swap Fonts to Match SheShoppes Edit Daily

## Summary
Replace **Lora** (body) and **Inter** (nav/labels) with **Open Sans** to match the reference site. Keep **Playfair Display** for headings (already matches).

## Changes

### `index.html`
- Replace the Google Fonts `<link>` to load **Open Sans** (weights 300, 400, 500, 600) instead of Lora and Inter. Keep Playfair Display.

### `src/index.css`
- Change `body` font-family from `'Lora', serif` to `'Open Sans', sans-serif`
- Update `.font-serif-body` to `'Open Sans', sans-serif`
- Update `.font-sans-nav` to `'Open Sans', sans-serif`

### `tailwind.config.ts`
- Change `fontFamily.body` from `Lora` to `Open Sans, sans-serif`
- Change `fontFamily.nav` from `Inter` to `Open Sans, sans-serif`

No other files need changes — all components already reference these tokens.

