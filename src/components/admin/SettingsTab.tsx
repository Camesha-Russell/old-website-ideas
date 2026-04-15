import { useState, useEffect } from "react";
import { getStoredPat, setStoredPat, clearStoredPat, verifyPat } from "@/lib/github";
import { isSupabaseReady } from "@/lib/supabase";

export default function SettingsTab() {
  const [pat, setPat] = useState("");
  const [saved, setSaved] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verifyResult, setVerifyResult] = useState<"ok" | "bad" | null>(null);
  const [hasStored, setHasStored] = useState(false);

  useEffect(() => {
    setHasStored(!!getStoredPat());
  }, []);

  async function save() {
    if (!pat.trim()) return;
    setVerifying(true);
    setVerifyResult(null);
    const ok = await verifyPat(pat.trim());
    setVerifying(false);
    setVerifyResult(ok ? "ok" : "bad");
    if (ok) {
      setStoredPat(pat.trim());
      setHasStored(true);
      setSaved(true);
      setPat("");
      setTimeout(() => setSaved(false), 2000);
    }
  }

  function clear() {
    clearStoredPat();
    setHasStored(false);
    setVerifyResult(null);
  }

  const supabaseReady = isSupabaseReady();

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h2 className="font-headline text-lg">Connection Status</h2>

        <div className="flex items-center justify-between py-2 border-b border-border">
          <div>
            <p className="text-sm font-medium text-foreground">Supabase (photo storage)</p>
            <p className="text-xs text-muted-foreground">
              Required to upload and browse photos in the library
            </p>
          </div>
          {supabaseReady ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Connected
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 border border-amber-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Not set up
            </span>
          )}
        </div>

        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-sm font-medium text-foreground">GitHub (save changes)</p>
            <p className="text-xs text-muted-foreground">
              Required so the Update button can push changes to your site
            </p>
          </div>
          {hasStored ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Token saved
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 border border-amber-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Token needed
            </span>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <div>
          <h2 className="font-headline text-lg">GitHub Access Token</h2>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            To save post changes directly to your site (instead of copying prompts), paste your
            personal access token below. It's stored only in your browser - never sent anywhere
            except GitHub's API.
          </p>
        </div>

        {hasStored && !pat && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 flex items-center justify-between">
            <p className="text-sm text-emerald-800">A token is saved in this browser.</p>
            <button
              onClick={clear}
              className="text-xs font-nav text-emerald-700 underline hover:text-emerald-900"
            >
              Clear token
            </button>
          </div>
        )}

        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {hasStored ? "Replace with a new token" : "Paste your token"}
          </label>
          <input
            type="password"
            value={pat}
            onChange={(e) => setPat(e.target.value)}
            placeholder="ghp_..."
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground font-mono"
          />
          <button
            onClick={save}
            disabled={!pat.trim() || verifying}
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-80 transition-opacity disabled:opacity-50"
          >
            {verifying ? "Verifying..." : saved ? "Saved!" : "Verify and save"}
          </button>
          {verifyResult === "bad" && (
            <p className="text-xs text-red-700">
              That token didn't work. Check that it has `repo` scope and hasn't expired.
            </p>
          )}
        </div>

        <div className="rounded-lg border border-border bg-muted/40 p-4 text-xs text-muted-foreground space-y-2 leading-relaxed">
          <p className="font-medium text-foreground">How to get a token (1 minute)</p>
          <ol className="list-decimal pl-4 space-y-1">
            <li>
              Go to{" "}
              <a
                href="https://github.com/settings/tokens"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                github.com/settings/tokens
              </a>
            </li>
            <li>Click "Generate new token" &rarr; "Generate new token (classic)"</li>
            <li>Name it "itsmomapproved admin", expiration "No expiration"</li>
            <li>Check the <code className="bg-card px-1 rounded">repo</code> scope</li>
            <li>Click Generate, copy the token that starts with <code className="bg-card px-1 rounded">ghp_</code>, paste it above</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
