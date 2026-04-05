import { useState } from "react";
import { COMPONENT_TEMPLATES } from "./mdx-serializer";

/* ── component block preview card ──────────────────────────────────────── */

const COMPONENT_INFO: Record<string, { label: string; icon: string; description: string }> = {
  AffiliateDisclosure: {
    label: "Affiliate Disclosure",
    icon: "📋",
    description: "FTC disclosure bar - required at top of every post",
  },
  SafetyNote: {
    label: "Safety Note",
    icon: "⚠️",
    description: "Amber callout box for safety information",
  },
  BudgetCallout: {
    label: "Budget Callout",
    icon: "💚",
    description: "Green card for budget alternative product",
  },
  SourceReviewQuote: {
    label: "Review Quote",
    icon: "💬",
    description: "Styled quote from a real parent review",
  },
  ShopButton: {
    label: "Shop Button",
    icon: "🛒",
    description: "CTA button with product name, price, and affiliate link",
  },
  ImagePlaceholder: {
    label: "Image Placeholder",
    icon: "📷",
    description: "Placeholder for a future product or lifestyle image",
  },
  PillarLink: {
    label: "Pillar Link",
    icon: "🔗",
    description: "Card linking to the pillar/category page",
  },
};

/* ── component block editor modal ──────────────────────────────────────── */

function ComponentEditor({
  componentName,
  initialRaw,
  onSave,
  onCancel,
}: {
  componentName: string;
  initialRaw: string;
  onSave: (raw: string) => void;
  onCancel: () => void;
}) {
  const [raw, setRaw] = useState(initialRaw);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-card rounded-xl border border-border shadow-2xl w-full max-w-xl mx-4">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>{COMPONENT_INFO[componentName]?.icon || "🧩"}</span>
            <h3 className="font-headline text-base">{COMPONENT_INFO[componentName]?.label || componentName}</h3>
          </div>
          <button onClick={onCancel} className="text-muted-foreground hover:text-foreground">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="p-5 space-y-4">
          <p className="text-xs text-muted-foreground">{COMPONENT_INFO[componentName]?.description}</p>
          <textarea
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            rows={8}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono text-foreground focus:outline-none focus:ring-1 focus:ring-foreground resize-y"
            spellCheck={false}
          />
        </div>
        <div className="px-5 py-3 border-t border-border flex justify-end gap-3">
          <button onClick={onCancel} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
            Cancel
          </button>
          <button
            onClick={() => onSave(raw)}
            className="px-5 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:opacity-80"
          >
            Save Block
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── inserter dropdown ─────────────────────────────────────────────────── */

interface ComponentInserterProps {
  onInsert: (mdxBlock: string) => void;
}

export default function ComponentInserter({ onInsert }: ComponentInserterProps) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editRaw, setEditRaw] = useState("");

  function handleSelect(name: string) {
    const template = COMPONENT_TEMPLATES[name];
    if (!template) return;
    setEditing(name);
    setEditRaw(template);
    setOpen(false);
  }

  function handleSave(raw: string) {
    onInsert(raw);
    setEditing(null);
    setEditRaw("");
  }

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border bg-card text-foreground hover:bg-muted transition-colors"
        >
          <span className="text-lg">+</span>
          Add Block
        </button>
        {open && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
            <div className="absolute bottom-full left-0 mb-2 z-40 w-64 bg-card border border-border rounded-xl shadow-xl overflow-hidden">
              {Object.entries(COMPONENT_INFO).map(([name, info]) => (
                <button
                  key={name}
                  onClick={() => handleSelect(name)}
                  className="w-full text-left px-4 py-3 hover:bg-muted transition-colors border-b border-border/50 last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <span>{info.icon}</span>
                    <span className="text-sm font-medium text-foreground">{info.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 ml-6">{info.description}</p>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {editing && (
        <ComponentEditor
          componentName={editing}
          initialRaw={editRaw}
          onSave={handleSave}
          onCancel={() => setEditing(null)}
        />
      )}
    </>
  );
}

/* ── inline component block display (for rendering in editor) ──────────── */

export function ComponentBlock({
  name,
  raw,
  onEdit,
  onDelete,
}: {
  name: string;
  raw: string;
  onEdit: (newRaw: string) => void;
  onDelete: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const info = COMPONENT_INFO[name];

  return (
    <>
      <div className="my-3 rounded-lg border border-dashed border-border bg-muted/30 px-4 py-3 flex items-center justify-between group">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-base shrink-0">{info?.icon || "🧩"}</span>
          <span className="text-xs font-medium text-muted-foreground truncate">{info?.label || name}</span>
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setEditing(true)}
            className="p-1.5 rounded hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
            title="Edit block"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 rounded hover:bg-red-50 text-muted-foreground hover:text-red-500 transition-colors"
            title="Delete block"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {editing && (
        <ComponentEditor
          componentName={name}
          initialRaw={raw}
          onSave={(r) => { onEdit(r); setEditing(false); }}
          onCancel={() => setEditing(false)}
        />
      )}
    </>
  );
}
