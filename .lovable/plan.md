

# Make Currently Trending Interactive and Airy

## Changes — `src/components/CurrentlyTrending.tsx`

### 1. Add `activePost` state
Track which numbered item is selected (default `0`). Clicking a list item updates `activePost` and changes the featured post on the left.

### 2. Featured post becomes dynamic
Show `trendingPosts[activePost]` instead of always `trendingPosts[0]`. Title and description update based on the selected item.

### 3. Active/faded styling on numbered list
- **Active item**: number and title dark/bold (`text-foreground`, `font-semibold`)
- **Inactive items**: very light (`text-foreground/15` for numbers, `text-foreground/30` for titles)
- Smooth `transition-colors` on both

### 4. Keep divider lines
Keep existing `border-b border-border pb-6 last:border-b-0` on list items. Increase `space-y-6` → `space-y-8` for more breathing room.

### 5. Increase number size
`text-5xl` → `text-6xl` to match reference's prominent numbering.

### 6. Increase featured post title size
`text-lg md:text-xl` → `text-xl md:text-2xl`.

### 7. Two content sets for tabs
Create a second array of posts for the second tab. Switching tabs resets `activePost` to `0`.

