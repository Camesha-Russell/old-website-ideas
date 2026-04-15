import { useEffect, useRef, useState } from "react";
import {
  listImages,
  uploadImage,
  deleteImage,
  LibraryImage,
  checkReady,
} from "@/lib/imageLibrary";

export default function ImageLibraryTab() {
  const [images, setImages] = useState<LibraryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [search, setSearch] = useState("");
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ready = checkReady();

  async function refresh() {
    if (!ready.ready) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const imgs = await listImages();
      setImages(imgs);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError(null);
    try {
      const uploaded: LibraryImage[] = [];
      for (const file of Array.from(files)) {
        const img = await uploadImage(file);
        uploaded.push(img);
      }
      setImages((prev) => [...uploaded, ...prev]);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  async function handleDelete(name: string) {
    if (!confirm(`Delete ${name}? This can't be undone.`)) return;
    try {
      await deleteImage(name);
      setImages((prev) => prev.filter((i) => i.name !== name));
    } catch (e) {
      setError((e as Error).message);
    }
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 1500);
    });
  }

  const filtered = search
    ? images.filter((img) => img.name.toLowerCase().includes(search.toLowerCase()))
    : images;

  if (!ready.ready) {
    return (
      <div className="rounded-xl border border-[#E8B4A0] bg-[#FDF6F2] p-6 space-y-3">
        <p className="font-headline text-lg">Photo library is not live yet</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{ready.reason}</p>
        <div className="rounded-lg border border-border bg-card p-4 text-sm space-y-2">
          <p className="font-medium text-foreground">What to tell Lovable:</p>
          <p className="text-muted-foreground italic leading-relaxed">
            "Connect my Supabase project to this site and create a public Storage bucket named
            'blog-images'. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are wired into the build."
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div
        className="rounded-xl border-2 border-dashed border-border bg-card p-6 text-center hover:border-foreground/40 transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFiles(e.dataTransfer.files);
        }}
      >
        <p className="font-headline text-base">
          {uploading ? "Uploading..." : "Drop photos here or click to upload"}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          JPG, PNG, WebP - upload multiple at once
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search by filename..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border border-border bg-card px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
        />
        <span className="text-xs text-muted-foreground font-nav">
          {filtered.length} of {images.length}
        </span>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-center text-sm text-muted-foreground py-12">Loading library...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground py-12">
          {search ? "No images match." : "No photos yet. Upload your first one above."}
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((img) => (
            <div
              key={img.name}
              className="rounded-xl border border-border bg-card overflow-hidden group"
            >
              <div className="aspect-square bg-muted">
                <img
                  src={img.url}
                  alt={img.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-2 space-y-1">
                <p className="text-xs text-foreground truncate" title={img.name}>
                  {img.name}
                </p>
                <div className="flex gap-1">
                  <button
                    onClick={() => copyUrl(img.url)}
                    className="flex-1 rounded border border-border px-2 py-1 text-[11px] font-nav text-foreground hover:bg-muted transition-colors"
                  >
                    {copiedUrl === img.url ? "Copied!" : "Copy URL"}
                  </button>
                  <button
                    onClick={() => handleDelete(img.name)}
                    className="rounded border border-border px-2 py-1 text-[11px] font-nav text-muted-foreground hover:bg-red-50 hover:text-red-700 transition-colors"
                    title="Delete"
                  >
                    x
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
