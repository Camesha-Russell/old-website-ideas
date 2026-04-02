

# Fix: Remove borders from Hero side cards

The reference screenshot shows the side cards **without any border or box** around them — just the image next to the text, no container styling. I incorrectly added `border border-border rounded-sm p-5` to the side cards.

## Change
**`src/components/HeroSection.tsx` line 55**: Remove `border border-border rounded-sm p-5 hover:shadow-sm transition-shadow` from the side card `<Link>` className, keeping just the flex layout and group hover behavior.

