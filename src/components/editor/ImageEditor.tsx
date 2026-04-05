import { useState } from "react";

/**
 * ImageEditor — modal for replacing image URLs in the post body.
 * Phase 4D: Click any ImagePlaceholder or img tag to set/change the URL.
 */

interface ImageEditorProps {
  currentUrl: string;
  label?: string;
  onSave: (url: string, alt: string) => void;
  onCancel: () => void;
}

export default function ImageEditor({ currentUrl, label, onSave, onCancel }: ImageEditorProps) {
  const [url, setUrl] = useState(currentUrl || "");
  const [alt, setAlt] = useState(label || "");

  const hasPreview = url && !url.includes("placeholder");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-card rounded-xl border border-border shadow-2xl w-full max-w-lg mx-4">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-headline text-base">Edit Image</h3>
          <button onClick={onCancel} className="text-muted-foreground hover:text-foreground">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Preview */}
          <div className="rounded-lg overflow-hidden border border-border bg-muted/30 flex items-center justify-center" style={{ minHeight: "140px" }}>
            {hasPreview ? (
              <img
                src={url}
                alt={alt}
                className="max-h-48 w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="text-center py-8">
                <svg className="mx-auto mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(34 25% 65%)" strokeWidth="1.5">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <p className="text-xs text-muted-foreground">Paste an image URL below</p>
              </div>
            )}
          </div>

          {/* URL input */}
          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Image URL</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://images.unsplash.com/... or /images/posts/file.jpg"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            />
          </div>

          {/* Alt text input */}
          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Alt Text</label>
            <input
              type="text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              placeholder="Describe the image for accessibility"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            />
          </div>
        </div>

        <div className="px-5 py-3 border-t border-border flex justify-end gap-3">
          <button onClick={onCancel} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
            Cancel
          </button>
          <button
            onClick={() => onSave(url, alt)}
            disabled={!url}
            className="px-5 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Save Image
          </button>
        </div>
      </div>
    </div>
  );
}
