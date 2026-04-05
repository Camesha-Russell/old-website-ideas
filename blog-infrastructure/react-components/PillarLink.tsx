// PillarLink.tsx
// Place at: src/components/blog/PillarLink.tsx
// Usage in MDX:
//   <PillarLink
//     slug="sleep"
//     label="Sleep"
//     title="See all our baby sleep recommendations"
//   />
// Always appears at the bottom of every cluster post.
// Links back to the pillar page. Warm card format — not a plain text link.

interface PillarLinkProps {
  slug: string;       // e.g. "sleep" → links to /sleep
  label: string;      // e.g. "Sleep" — used for the pillar emoji label
  title?: string;     // CTA text. Defaults to "See all our [label] recommendations"
}

const PILLAR_EMOJIS: Record<string, string> = {
  sleep: '💤',
  feeding: '🍼',
  'carriers-and-strollers': '🚼',
  'play-and-development': '🧸',
  'for-moms': '💛',
  safety: '🛡️',
};

export default function PillarLink({ slug, label, title }: PillarLinkProps) {
  const emoji = PILLAR_EMOJIS[slug] ?? '→';
  const linkTitle = title ?? `See all our ${label.toLowerCase()} recommendations`;

  return (
    <a
      href={`/${slug}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        backgroundColor: '#f5f2ee',
        borderRadius: '10px',
        padding: '18px 22px',
        marginTop: '40px',
        textDecoration: 'none',
        border: '1px solid #e8e2da',
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          backgroundColor: '#d4956a',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          flexShrink: 0,
        }}
      >
        {emoji}
      </div>

      <div style={{ fontFamily: 'var(--font-sans, Arial, sans-serif)' }}>
        <div
          style={{
            fontSize: '10px',
            fontWeight: '800',
            letterSpacing: '1.5px',
            textTransform: 'uppercase' as const,
            color: '#d4956a',
            marginBottom: '3px',
          }}
        >
          Part of the {label} Pillar
        </div>
        <div
          style={{
            fontSize: '15px',
            fontWeight: '700',
            color: '#1a1a1a',
          }}
        >
          {linkTitle} →
        </div>
      </div>
    </a>
  );
}
