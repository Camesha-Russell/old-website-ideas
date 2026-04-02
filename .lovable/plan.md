

# Subtle Background Color Update

## What's Different
The reference site uses a near-white background for the main content area — much more subtle than our current warm off-white (`#F7F3EE` / `hsl(37, 33%, 95%)`). The reference background reads almost white with just the faintest warmth. The placeholder images and section breaks provide the warmth contrast instead.

## Changes

### `src/index.css`
- Change `--background` from `37 33% 95%` to `30 20% 98%` — a much lighter, barely-warm white (close to `#FAF9F7`)
- Change `--warm-bg` to match
- Adjust `--secondary` / `--muted` / `--taupe` slightly lighter to keep the subtle contrast without looking so heavy: `34 20% 93%`
- Keep `--border` light: `34 15% 90%`

This makes the page feel airy and white like the reference, with warmth coming from the taupe/peach accents rather than the entire background.

