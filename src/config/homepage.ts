// ─── Homepage Layout Config ───────────────────────────────────────────────────
// Controls which posts appear in the 5 Featured slots and how many Recent Posts show.
//
// HOW TO CHANGE: Go to /?edit=true → hover any Featured slot → pick a post from
// the dropdown. Copy the generated config and paste it to Claude. Claude updates
// this file and pushes to GitHub automatically. No code knowledge needed.
//
// SLOT MODES:
//   - Slug string (e.g. "hatch-rest-vs-hatch-rest-plus") → always shows that post
//   - Category lock (e.g. { category: "Sleep" }) → always shows the newest published
//     post in that category, automatically updating as you publish new content
//   - null → shows a styled placeholder card

export type SlotConfig = string | { category: string } | null;

export const FEATURED_SLOTS: SlotConfig[] = [
  "best-sleep-products-2026",   // slot 1 — top left
  "feeding-essentials-guide",   // slot 2 — top center (hero)
  null,                          // slot 3 — top right
  null,                          // slot 4 — bottom left
  null,                          // slot 5 — bottom right
];

// Legacy export for backward compat
export const FEATURED_SLUGS: (string | null)[] = FEATURED_SLOTS.map((s) =>
  typeof s === "string" ? s : null
);

// How many posts to show in the Recent Posts section (max 8)
export const RECENT_POSTS_COUNT = 8;
