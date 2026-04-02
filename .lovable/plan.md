

# itsmomapproved.com — Implementation Plan

## Overview
Build a magazine-style editorial blog homepage for moms of babies/toddlers (0-4), closely replicating the SheShoppes Edit Daily WordPress theme aesthetic. Warm, editorial, serif-heavy design with a structured content layout.

## Design System Setup
- **Colors**: Near-black `#1C1C1C`, off-white `#F7F3EE`, warm taupe `#EDE8E0`, soft peach `#E8D5C4`, white `#FFFFFF`
- **Fonts** (Google Fonts): Playfair Display (headlines + italic accents), Lora (body serif), Inter (sans-serif nav/labels)
- **Buttons**: Peach pill buttons (`border-radius: 20px`, `#E8D5C4` bg, dark text). Secondary: dark bg, light text.
- **Typography tokens**: Section titles uppercase + letter-spaced serif; category labels tiny all-caps 10-11px; body 15-16px serif; nav small-caps sans-serif

## Homepage Sections (12 Elements)

1. **Top Nav Bar** — Thin black bar with category links (Sleep, Feeding, Carriers & Strollers, Play & Development, Postpartum & Mom, Safety) + search icon
2. **Main Header** — White bar with "THE itsmomapproved" logo (matching THE EDITdaily treatment), center nav links, peach "GET THE STARTER KIT" CTA
3. **Hero Section** — 55/45 split: large featured card left, 3 stacked thumbnail cards right
4. **Currently Trending** — Taupe bg, handwriting-style label, tab filters, large featured post left, numbered trending list right, horizontal product carousel below
5. **Warm Section Break** — Full-width taupe placeholder strip
6. **Featured Section** — Asymmetric 5-card grid matching the screenshot layout
7. **Recent Posts** — 4-column card grid + "Explore Older Posts" button
8. **Category: Sleep** — 2-column layout with category intro + 3 small cards left, large editorial image with overlay right
9. **Category: Feeding** — Centered title, 2-col layout + 3-card row below
10. **Signature Features Strip** — 4 equal taupe boxes (We Said No, Overhyped vs Worth It, Know Before You Buy, Ask itsmomapproved)
11. **Newsletter Block** — Taupe bg, "Join Our Community" in italic serif, name/email fields + Sign Up button
12. **Footer** — Dark 5-column footer with logo, link columns, social icons, bottom legal bar

## Routing
All 17 routes set up with placeholder pages. Only `/` (homepage) is fully built. Placeholder pages show a centered title with "Coming Soon" message.

## Responsive Behavior
- Top nav collapses to hamburger on mobile
- Hero stacks to single column
- Card grids: 4 → 2 → 1 columns
- All sections stack vertically on mobile

## Technical Notes
- All images are warm neutral grey placeholder divs at correct aspect ratios — no external image services
- No backend logic, no form submissions — layout and navigation only
- Components will be organized by homepage section for maintainability

