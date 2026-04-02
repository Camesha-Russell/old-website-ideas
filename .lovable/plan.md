

# Change "Get the Starter Kit" Button to Dark Outline

## Change
Update `.btn-peach` in `src/index.css` from a solid dark background to a transparent button with a dark border and dark text.

### `src/index.css`
- Remove `background-color` and `color: white`
- Add `border: 1.5px solid hsl(var(--nearblack))` and `color: hsl(var(--nearblack))` and `background: transparent`
- Hover: light fill (`background-color: hsl(var(--nearblack))`, `color: white`) for a subtle inverse effect

### Files changed
- `src/index.css` — `.btn-peach` and `.btn-peach:hover` styles

