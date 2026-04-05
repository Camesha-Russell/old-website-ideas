// ─── Homepage Layout Config ───────────────────────────────────────────────────
// Controls which posts appear in the 5 Featured slots and how many Recent Posts show.
//
// HOW TO CHANGE: Go to /admin → Homepage tab → pick posts from the dropdowns,
// then copy the generated prompt and paste it to Claude. Claude updates this file
// and pushes to GitHub automatically. No code knowledge needed.
//
// Set a slug to null to show a styled placeholder card in that slot.

export const FEATURED_SLUGS: (string | null)[] = [
  "best-sleep-products-2026",   // slot 1 — top left
  "feeding-essentials-guide",   // slot 2 — top center (hero)
  null,                          // slot 3 — top right
  null,                          // slot 4 — bottom left
  null,                          // slot 5 — bottom right
];

// How many posts to show in the Recent Posts section (max 8)
export const RECENT_POSTS_COUNT = 8;
