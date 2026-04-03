// AffiliateDisclosure.tsx
// Place at: src/components/blog/AffiliateDisclosure.tsx
// Usage in MDX: <AffiliateDisclosure />
// Always appears at the very top of every post — FTC required.

export default function AffiliateDisclosure() {
  return (
    <div
      style={{
        backgroundColor: '#fafafa',
        borderBottom: '1px solid #e8e4de',
        padding: '10px 0 10px',
        fontFamily: 'var(--font-sans, Arial, sans-serif)',
        fontSize: '12px',
        color: '#888',
        lineHeight: '1.5',
        marginBottom: '0',
      }}
    >
      Heads up: this post contains affiliate links. If you buy through our
      links, we may earn a small commission at no extra cost to you. As an
      Amazon Associate, we earn from qualifying purchases. We research every
      product we recommend. We only share what we&apos;d tell a friend.
    </div>
  );
}
