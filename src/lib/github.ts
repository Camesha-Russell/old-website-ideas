/**
 * GitHub API helper for committing MDX posts directly from the admin.
 *
 * Uses a personal access token (classic, repo scope) stored in
 * localStorage under `imp_github_pat`. The token is set once via the
 * Settings tab in /admin and never leaves the user's browser.
 */

const OWNER = "Camesha-Russell";
const REPO = "old-website-ideas";
const BRANCH = "main";

const PAT_STORAGE_KEY = "imp_github_pat";

export function getStoredPat(): string | null {
  try {
    return localStorage.getItem(PAT_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setStoredPat(pat: string): void {
  localStorage.setItem(PAT_STORAGE_KEY, pat.trim());
}

export function clearStoredPat(): void {
  localStorage.removeItem(PAT_STORAGE_KEY);
}

function headers(pat: string): HeadersInit {
  return {
    Authorization: `Bearer ${pat}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

async function getFileSha(path: string, pat: string): Promise<string | null> {
  const res = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodeURI(path)}?ref=${BRANCH}`,
    { headers: headers(pat) }
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub GET failed: ${res.status}`);
  const data = (await res.json()) as { sha: string };
  return data.sha;
}

/**
 * Commit (create or update) a file in the repo.
 * Content is a plain string; we base64-encode it for the API.
 */
export async function commitFile({
  path,
  content,
  message,
}: {
  path: string;
  content: string;
  message: string;
}): Promise<void> {
  const pat = getStoredPat();
  if (!pat) {
    throw new Error(
      "No GitHub token saved. Open Admin -> Settings and paste your GitHub personal access token first."
    );
  }

  const sha = await getFileSha(path, pat);
  const b64 = typeof window !== "undefined"
    ? window.btoa(unescape(encodeURIComponent(content)))
    : Buffer.from(content, "utf-8").toString("base64");

  const body: Record<string, unknown> = {
    message,
    content: b64,
    branch: BRANCH,
  };
  if (sha) body.sha = sha;

  const res = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodeURI(path)}`,
    {
      method: "PUT",
      headers: { ...headers(pat), "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub PUT failed: ${res.status} - ${text}`);
  }
}

/** Verifies that a PAT is valid by hitting /user. */
export async function verifyPat(pat: string): Promise<boolean> {
  try {
    const res = await fetch("https://api.github.com/user", {
      headers: headers(pat),
    });
    return res.ok;
  } catch {
    return false;
  }
}
