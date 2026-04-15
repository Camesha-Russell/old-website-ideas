import { useState, useEffect, ReactNode } from "react";

/**
 * Simple passphrase gate for the /admin routes.
 *
 * The passphrase is stored as a SHA-256 hash in the bundle, so the actual
 * passphrase is never in the source. On unlock we set a flag in
 * sessionStorage so it survives page reloads but clears when the browser
 * closes.
 *
 * Default passphrase: "momapproved".
 */

const SHA_HEX = "f8659cb6988e1a27d71cf4618166a79eedca27af8490deacac2dd79ad4ee87b1";
const STORAGE_KEY = "imp_admin_unlocked";

async function sha256(input: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function AdminAuthGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    try {
      setUnlocked(sessionStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setUnlocked(false);
    }
  }, []);

  async function tryUnlock(e: React.FormEvent) {
    e.preventDefault();
    setChecking(true);
    setError(false);
    const h = await sha256(pass);
    setChecking(false);
    if (h === SHA_HEX) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setPass("");
    }
  }

  function lock() {
    sessionStorage.removeItem(STORAGE_KEY);
    setUnlocked(false);
  }

  if (unlocked === null) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <form
          onSubmit={tryUnlock}
          className="w-full max-w-sm rounded-xl border border-border bg-card p-8 space-y-5"
        >
          <div className="text-center space-y-1">
            <p className="font-headline text-2xl italic">Admin</p>
            <p className="text-xs text-muted-foreground">itsmomapproved.com</p>
          </div>
          <div className="space-y-2">
            <input
              type="password"
              autoFocus
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Passphrase"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            {error && (
              <p className="text-xs text-red-700">That's not right - try again.</p>
            )}
          </div>
          <button
            type="submit"
            disabled={checking || !pass}
            className="w-full rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-80 transition-opacity disabled:opacity-50"
          >
            {checking ? "Checking..." : "Unlock"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      {children}
      <button
        onClick={lock}
        className="fixed bottom-4 right-4 text-xs font-nav text-muted-foreground hover:text-foreground bg-card border border-border rounded-full px-3 py-1.5 shadow-sm"
        title="Lock admin"
      >
        Lock
      </button>
    </>
  );
}
