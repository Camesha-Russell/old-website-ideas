import { useState, useEffect, useRef, useMemo } from "react";
import { listImages, uploadImage, LibraryImage, checkReady } from "@/lib/imageLibrary";

interface Props {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

/**
 * A dropdown picker that lets the user:
 *  1. Click to open a gallery of every image in the Supabase library
 *  2. Filter by filename
 *  3. Upload a new image on the fly (it appears in the gallery and auto-selects)
 *  4. Click a thumbnail to pick that image for this slot
 */
export default function ImagePicker({ value, onChange, label }: Props) {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<LibraryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [uploading, setUploading] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ready = useMemo(() => checkReady(), []);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  useEffect(() => {
    if (!open || !ready.ready) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    listImages()
      .then((imgs) => {
        if (!cancelled) setImages(imgs);
      })
      .catch((e) => {
        if (!cancelled) setError((e as Error).message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [open, ready.ready]);

  const filtered = search
    ? images.filter((img) => img.name.toLowerCase().includes(search.toLowerCase()))
    : images;

  const currentImage = images.find((img) => img.url === value);
  const isPlaceholder = !value || value === "/placeholder.svg" || value.includes("placeholder");

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const uploaded = await uploadImage(file);
      setImages((prev) => [uploaded, ...prev]);
      onChange(uploaded.url);
      setOpen(false);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  return (
    <div className="space-y-1 relative" ref={wrapRef}>
      {label && (
        <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2 text-left hover:border-foreground/40 transition-colors focus:outline-none focus:ring-1 focus:ring-foreground"
      >
        {isPlaceholder ? (
          <div className="w-14 h-14 rounded bg-[hsl(34_33%_96%)] border-2 border-dashed border-[hsl(34_25%_75%)] flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(34 25% 65%)" strokeWidth="1.5">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        ) : (
          <img
            src={value}
            alt=""
            className="w-14 h-14 object-cover rounded flex-shrink-0"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground truncate">
            {isPlaceholder ? "- Pick an image -" : currentImage?.name ?? value}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {isPlaceholder ? "Click to open gallery" : "Click to change"}
          </p>
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-[min(480px,calc(100vw-48px))] rounded-xl border border-border bg-card shadow-lg overflow-hidden">
          <div className="p-3 border-b border-border flex items-center gap-2">
            <input
              type="text"
              placeholder="Search images..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-lg border border-border bg-background px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading || !ready.ready}
              className="inline-flex items-center gap-1 rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background hover:opacity-80 transition-opacity disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />
          </div>

          {!ready.ready && (
            <div className="p-6 text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Supabase is not connected yet</p>
              <p>{ready.reason}</p>
            </div>
          )}

          {error && ready.ready && (
            <div className="p-4 text-sm text-red-700 bg-red-50 border-b border-red-100">
              {error}
            </div>
          )}

          {ready.ready && (
            <div className="max-h-[340px] overflow-y-auto p-3">
              {loading ? (
                <p className="text-center text-sm text-muted-foreground py-8">Loading...</p>
              ) : filtered.length === 0 ? (
                <p className="text-center text-sm text-muted-foreground py-8">
                  {search
                    ? "No images match that search."
                    : "No images yet - click Upload to add the first one."}
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onChange("/placeholder.svg");
                      setOpen(false);
                    }}
                    className={`aspect-square rounded-lg border-2 border-dashed flex items-center justify-center transition-colors ${
                      isPlaceholder
                        ? "border-foreground bg-foreground/5"
                        : "border-border hover:border-foreground/40"
                    }`}
                  >
                    <span className="text-xs text-muted-foreground text-center leading-tight px-1">
                      Use<br />placeholder
                    </span>
                  </button>

                  {filtered.map((img) => {
                    const selected = img.url === value;
                    return (
                      <button
                        key={img.name}
                        type="button"
                        onClick={() => {
                          onChange(img.url);
                          setOpen(false);
                        }}
                        title={img.name}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                          selected ? "border-foreground" : "border-transparent hover:border-foreground/40"
                        }`}
                      >
                        <img
                          src={img.url}
                          alt={img.name}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
