/**
 * Image library - reads and writes images in Supabase Storage
 * bucket `blog-images`. Each uploaded image's public URL is what
 * posts reference via featuredImage / body <img src=...>.
 */

import { supabase, IMAGE_BUCKET, isSupabaseReady } from "./supabase";

export interface LibraryImage {
  name: string;
  url: string;
  size: number;
  createdAt: string;
}

export async function listImages(): Promise<LibraryImage[]> {
  if (!supabase) return [];

  const { data, error } = await supabase.storage
    .from(IMAGE_BUCKET)
    .list("", { limit: 1000, sortBy: { column: "created_at", order: "desc" } });

  if (error) throw error;
  if (!data) return [];

  return data
    .filter((f) => f.name && !f.name.startsWith("."))
    .map((f) => {
      const { data: pub } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(f.name);
      return {
        name: f.name,
        url: pub.publicUrl,
        size: (f.metadata as { size?: number } | null)?.size ?? 0,
        createdAt: f.created_at ?? "",
      };
    });
}

export async function uploadImage(file: File): Promise<LibraryImage> {
  if (!supabase) throw new Error("Supabase is not configured yet.");

  const ext = file.name.includes(".") ? file.name.split(".").pop() : "jpg";
  const base = file.name
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
  const stamp = Date.now().toString(36);
  const safeName = `${stamp}-${base}.${ext}`;

  const { error } = await supabase.storage
    .from(IMAGE_BUCKET)
    .upload(safeName, file, {
      cacheControl: "31536000",
      upsert: false,
      contentType: file.type,
    });
  if (error) throw error;

  const { data: pub } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(safeName);
  return {
    name: safeName,
    url: pub.publicUrl,
    size: file.size,
    createdAt: new Date().toISOString(),
  };
}

export async function deleteImage(name: string): Promise<void> {
  if (!supabase) throw new Error("Supabase is not configured yet.");
  const { error } = await supabase.storage.from(IMAGE_BUCKET).remove([name]);
  if (error) throw error;
}

export function checkReady(): { ready: boolean; reason?: string } {
  if (!isSupabaseReady()) {
    return {
      ready: false,
      reason:
        "Supabase is not connected yet. Ask Lovable to connect Supabase and create a public Storage bucket named 'blog-images'.",
    };
  }
  return { ready: true };
}
