

# Reduce Guide Covers from 3 to 2

Remove the middle cover from the stacked magazine layout in `src/components/FreebieCTA.tsx`, keeping only the back and front covers (2 total), matching the reference.

### Changes to `src/components/FreebieCTA.tsx`
- Delete the "Middle cover" `<div>` block (the `rotate-2` / "Sleep Training Guide" card)
- Adjust positioning of the remaining two covers so they overlap nicely (back: `-rotate-6`, front: `rotate-6`)

### Files changed
- `src/components/FreebieCTA.tsx`

