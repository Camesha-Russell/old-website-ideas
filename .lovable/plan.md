

# Add New Logo to Site

## What changes
Copy the uploaded SVG logo into the project and use it in `MainHeader.tsx` and `Footer.tsx` to replace the current text-based "It's Mom Approved" logos.

## Steps

### 1. Copy the logo file
Copy `user-uploads://its-mom-approved-logo.svg` → `src/assets/its-mom-approved-logo.svg`

### 2. `src/components/MainHeader.tsx`
- Import the logo SVG
- Replace the current `<Link>` with two `<span>` elements with an `<img>` tag using the logo
- Size it appropriately: `h-12 md:h-14` (roughly 48–56px tall)

### 3. `src/components/Footer.tsx`
- Import the same logo
- Replace the text-based brand block with the logo `<img>`, styled for dark background (may need `brightness` or `invert` filter since the logo has a light background — will check and handle)

### Note on the SVG
The logo has a `#FAF7F2` background rect. This blends with the off-white sections but may need the background rect removed or made transparent for the footer's dark background. I'll create a clean version or use CSS to handle it.

### Files changed
- `src/assets/its-mom-approved-logo.svg` (new)
- `src/components/MainHeader.tsx`
- `src/components/Footer.tsx`

