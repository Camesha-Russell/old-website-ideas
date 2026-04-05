

## Update Main Navigation Links

**What changes:** One file edit in `src/components/MainHeader.tsx` — update the `navLinks` array.

**Current nav:** Home / About / Top Picks / We Said No / Contact

**New nav:** About / Start Here / Top Picks / We Said No

### Changes to `src/components/MainHeader.tsx`

Replace the `navLinks` array (lines 6-12) with:

```ts
const navLinks = [
  { name: "About", path: "/about" },
  { name: "Start Here", path: "/start-here" },
  { name: "Top Picks", path: "/top-picks" },
  { name: "We Said No", path: "/we-said-no" },
];
```

That's it. The "Get the Starter Kit" CTA button already exists. The `/start-here` route is already registered as a placeholder page. Logo already links to `/`. Contact stays in footer.

