import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase client for itsmomapproved.com admin.
 *
 * Credentials are read from Vite env vars injected by Lovable's
 * Supabase integration at build time:
 *   VITE_SUPABASE_URL
 *   VITE_SUPABASE_ANON_KEY
 *
 * If the vars are not set (i.e. Supabase not wired up yet), we export
 * `null` and callers check with `isSupabaseReady()`.
 */

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase: SupabaseClient | null =
  url && anon ? createClient(url, anon) : null;

export function isSupabaseReady(): boolean {
  return !!supabase;
}

export const IMAGE_BUCKET = "blog-images";
