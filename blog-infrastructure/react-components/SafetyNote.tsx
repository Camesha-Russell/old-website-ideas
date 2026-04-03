// SafetyNote.tsx
// Place at: src/components/blog/SafetyNote.tsx
// Usage in MDX: <SafetyNote>Your safety content here.</SafetyNote>
// Amber/yellow callout. Signals care, not alarm. Used for every post's safety section.

import { ReactNode } from 'react';

interface SafetyNoteProps {
  children: ReactNode;
}

export default function SafetyNote({ children }: SafetyNoteProps) {
  return (
    <div
      style={{
        backgroundColor: '#fff8e1',
        border: '1px solid #f5cc5a',
        borderLeft: '4px solid #f5cc5a',
        borderRadius: '0 10px 10px 0',
        padding: '16px 20px',
        margin: '28px 0',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans, Arial, sans-serif)',
          fontSize: '10px',
          fontWeight: '800',
          letterSpacing: '1.5px',
          textTransform: 'uppercase' as const,
          color: '#a07800',
          marginBottom: '8px',
        }}
      >
        ⚠️ Safety Note
      </div>
      <div
        style={{
          fontSize: '15px',
          color: '#5a4500',
          lineHeight: '1.65',
          fontFamily: 'var(--font-serif, Georgia, serif)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
