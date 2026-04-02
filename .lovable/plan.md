

# Add border box around Hero side cards

The reference screenshot shows each side card enclosed in a thin light border container with padding. We previously removed this — now adding it back per the user's request.

## Change
**`src/components/HeroSection.tsx` line 55**: Add `border border-border p-5` back to the side card `<Link>` className.

```
// From:
className="group flex gap-6 items-center"

// To:
className="group flex gap-6 items-center border border-border p-5"
```

