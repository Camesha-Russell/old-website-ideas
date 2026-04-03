// BudgetCallout.tsx
// Place at: src/components/blog/BudgetCallout.tsx
// Usage in MDX:
//   <BudgetCallout
//     productName="LectroFan Classic"
//     price="$34.99"
//     affiliateUrl="https://..."
//   >
//     Does white noise and fan sounds. No app, no smart features...
//   </BudgetCallout>
// Green card with its own CTA button. Always positioned after safety note.

import { ReactNode } from 'react';

interface BudgetCalloutProps {
  productName: string;
  price: string;
  affiliateUrl: string;
  children: ReactNode;
}

export default function BudgetCallout({
  productName,
  price,
  affiliateUrl,
  children,
}: BudgetCalloutProps) {
  return (
    <div
      style={{
        backgroundColor: '#f2f7f2',
        border: '1px solid #b8d8b8',
        borderRadius: '12px',
        padding: '22px 26px',
        margin: '32px 0',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans, Arial, sans-serif)',
          fontSize: '10px',
          fontWeight: '800',
          letterSpacing: '2px',
          textTransform: 'uppercase' as const,
          color: '#4a7a4a',
          marginBottom: '6px',
        }}
      >
        💚 Budget Pick
      </div>

      <div
        style={{
          fontSize: '18px',
          fontWeight: '700',
          color: '#1a1a1a',
          marginBottom: '4px',
          fontFamily: 'var(--font-serif, Georgia, serif)',
        }}
      >
        {productName}
      </div>

      <div
        style={{
          fontFamily: 'var(--font-sans, Arial, sans-serif)',
          fontWeight: '700',
          color: '#4a7a4a',
          marginBottom: '12px',
          fontSize: '15px',
        }}
      >
        {price}
      </div>

      <div
        style={{
          fontSize: '15px',
          color: '#2a4a2a',
          lineHeight: '1.65',
          marginBottom: '18px',
          fontFamily: 'var(--font-serif, Georgia, serif)',
        }}
      >
        {children}
      </div>

      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{
          display: 'inline-block',
          backgroundColor: '#4a7a4a',
          color: 'white',
          fontFamily: 'var(--font-sans, Arial, sans-serif)',
          fontWeight: '700',
          fontSize: '14px',
          padding: '11px 22px',
          borderRadius: '8px',
          textDecoration: 'none',
          letterSpacing: '0.3px',
        }}
      >
        Shop {productName} — {price} →
      </a>
    </div>
  );
}
