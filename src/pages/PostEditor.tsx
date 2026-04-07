import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  getPostBySlug,
  getAllPostsIncludingDrafts,
  PostFrontmatter,
  getRawMdxBySlug,
  splitMdx,
} from "@/lib/blog";
import BodyEditor from "@/components/editor/BodyEditor";
import ComponentInserter from "@/components/editor/ComponentInserter";
import { mdxToHtml, htmlToMdx } from "@/components/editor/mdx-serializer";

/* ── constants ────────────────────────────────────────────────────────────── */

const CATEGORIES = [
  "Sleep",
  "Feeding",
  "Carriers and Strollers",
  "Play and Development",
  "For Moms",
  "Safety",
];

const DM = "'DM Sans', sans-serif";
const LORA = "'Lora', serif";

type Tab = "fields" | "body";

/* ── field editor ─────────────────────────────────────────────────────────── */

function Field({
  label,
  value,
  onChange,
  hint,
  maxLength,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
  maxLength?: number;
  textarea?: boolean;
}) {
  const len = value.length;
  const isOver = maxLength ? len > maxLength : false;

  return (
    <div className="space-y-1">
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {maxLength && (
          <span className={`ml-2 ${isOver ? "text-red-500" : "text-muted-foreground/60"}`}>
            {len}/{maxLength}
          </span>
        )}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground resize-y"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
        />
      )}
      {hint && <p className="text-xs text-muted-foreground/70">{hint}</p>}
    </div>
  );
}

/* ── live preview panel ───────────────────────────────────────────────────── */

function LivePreview({ fm }: { fm: PostFrontmatter }) {
  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      {/* Google SERP preview */}
      <div className="border-b border-border px-5 py-4">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Google Preview</p>
        <div className="space-y-0.5">
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "#1a0dab", lineHeight: 1.3 }}>
            {fm.seoTitle || fm.title || "Post title"}
          </p>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#006621" }}>
            itsmomapproved.com/blog/{fm.slug || "post-slug"}
          </p>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#545454", lineHeight: 1.5 }}>
            {fm.metaDescription || "Meta description will appear here..."}
          </p>
        </div>
      </div>

      {/* Blog card preview */}
      <div className="border-b border-border px-5 py-4">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Blog Card Preview</p>
        <div className="flex gap-4 items-start">
          {fm.featuredImage && fm.featuredImage !== "/placeholder.svg" ? (
            <img src={fm.featuredImage} alt="" className="w-32 h-20 object-cover rounded" />
          ) : (
            <div className="w-32 h-20 rounded bg-[hsl(34_33%_96%)] border-2 border-dashed border-[hsl(34_25%_75%)] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(34 25% 65%)" strokeWidth="1.5">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <span
              style={{
                fontFamily: DM,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "hsl(11 52% 47%)",
              }}
            >
              {fm.category || "Category"}
            </span>
            <h3
              style={{
                fontFamily: LORA,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: 1.3,
                color: "hsl(0 0% 10%)",
                marginTop: "4px",
              }}
            >
              {fm.title || "Post Title"}
            </h3>
            <p style={{ fontFamily: DM, fontSize: "12px", color: "hsl(0 0% 50%)", marginTop: "4px", lineHeight: 1.5 }}>
              {fm.excerpt || "Excerpt will appear here..."}
            </p>
          </div>
        </div>
      </div>

      {/* Product info preview */}
      {(fm.topPickName || fm.budgetPickName) && (
        <div className="px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">Product Data</p>
          <div className="grid grid-cols-2 gap-4">
            {fm.topPickName && (
              <div className="rounded-lg border border-border p-3">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Top Pick</p>
                <p className="text-sm font-medium text-foreground mt-1">{fm.topPickName}</p>
                <p className="text-sm text-terracotta font-medium">{fm.topPickPrice}</p>
              </div>
            )}
            {fm.budgetPickName && (
              <div className="rounded-lg border border-border p-3">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Budget Pick</p>
                <p className="text-sm font-medium text-foreground mt-1">{fm.budgetPickName}</p>
                <p className="text-sm text-emerald-600 font-medium">{fm.budgetPickPrice}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── fields panel (left side when tab = "fields") ─────────────────────────── */

function FieldsPanel({
  fm,
  update,
}: {
  fm: PostFrontmatter;
  update: <K extends keyof PostFrontmatter>(key: K, value: PostFrontmatter[K]) => void;
}) {
  return (
    <div className="space-y-8">
      {/* Core fields */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-5">
        <h2 className="font-headline text-lg">Post Details</h2>
        <Field label="Title" value={fm.title} onChange={(v) => update("title", v)} />
        <Field label="Slug" value={fm.slug} onChange={(v) => update("slug", v)} hint="URL path: /blog/your-slug-here" />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</label>
            <select
              value={fm.status}
              onChange={(e) => update("status", e.target.value as "draft" | "published")}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Category</label>
            <select
              value={fm.category}
              onChange={(e) => update("category", e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Publish Date" value={fm.publishDate} onChange={(v) => update("publishDate", v)} hint="YYYY-MM-DD" />
          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Layout</label>
            <select
              value={fm.layout || "standard"}
              onChange={(e) => update("layout", e.target.value as "standard" | "with-sidebar")}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            >
              <option value="standard">Standard (no sidebar)</option>
              <option value="with-sidebar">With Sidebar</option>
            </select>
          </div>
        </div>
        <Field label="Excerpt" value={fm.excerpt} onChange={(v) => update("excerpt", v)} textarea />
      </div>

      {/* SEO fields */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-5">
        <h2 className="font-headline text-lg">SEO</h2>
        <Field
          label="SEO Title"
          value={fm.seoTitle}
          onChange={(v) => update("seoTitle", v)}
          maxLength={60}
          hint="Displayed in Google search results"
        />
        <Field
          label="Meta Description"
          value={fm.metaDescription}
          onChange={(v) => update("metaDescription", v)}
          maxLength={160}
          hint="Displayed below the title in search results"
          textarea
        />
        <Field label="Primary Keyword" value={fm.primaryKeyword || ""} onChange={(v) => update("primaryKeyword", v)} />
      </div>

      {/* Image fields */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-5">
        <h2 className="font-headline text-lg">Featured Image</h2>
        <Field label="Image URL" value={fm.featuredImage} onChange={(v) => update("featuredImage", v)} hint="Paste a URL or /images/posts/filename.jpg" />
        <Field label="Alt Text" value={fm.featuredImageAlt} onChange={(v) => update("featuredImageAlt", v)} />
        {fm.featuredImage && fm.featuredImage !== "/placeholder.svg" && (
          <img src={fm.featuredImage} alt={fm.featuredImageAlt} className="w-full rounded-lg object-cover" style={{ maxHeight: "200px" }} />
        )}
      </div>

      {/* Product fields */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-5">
        <h2 className="font-headline text-lg">Product Data</h2>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Top Pick Name" value={fm.topPickName || ""} onChange={(v) => update("topPickName", v)} />
          <Field label="Top Pick Price" value={fm.topPickPrice || ""} onChange={(v) => update("topPickPrice", v)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Budget Pick Name" value={fm.budgetPickName || ""} onChange={(v) => update("budgetPickName", v)} />
          <Field label="Budget Pick Price" value={fm.budgetPickPrice || ""} onChange={(v) => update("budgetPickPrice", v)} />
        </div>
        <Field label="Top Pick Rating" value={fm.topPickRating || ""} onChange={(v) => update("topPickRating", v)} hint="e.g. 4.5 — enables rich snippets in Google" />
        <Field label="Read Time (minutes)" value={String(fm.readTime ?? 5)} onChange={(v) => update("readTime", parseInt(v) || 5)} />
      </div>
    </div>
  );
}

/* ── body editor panel (left side when tab = "body") ──────────────────────── */

function BodyPanel({
  bodyHtml,
  onBodyChange,
  onInsertComponent,
}: {
  bodyHtml: string;
  onBodyChange: (html: string) => void;
  onInsertComponent: (mdxBlock: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Post Body</p>
        <ComponentInserter onInsert={onInsertComponent} />
      </div>
      <BodyEditor initialHtml={bodyHtml} onUpdate={onBodyChange} />
      <p className="text-xs text-muted-foreground/60">
        MDX component blocks appear as labeled chips. Click their edit icon to modify props. Use "Add Block" to insert new components.
      </p>
    </div>
  );
}

/* ── main editor page ─────────────────────────────────────────────────────── */

const PostEditor = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) return <Navigate to="/admin" replace />;

  const { frontmatter: original } = post;

  // State
  const [tab, setTab] = useState<Tab>("fields");
  const [fm, setFm] = useState<PostFrontmatter>({ ...original });
  const [initialBody, setInitialBody] = useState("");
  const [bodyHtml, setBodyHtml] = useState("");
  const [copied, setCopied] = useState(false);
  const [showMdxPreview, setShowMdxPreview] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadRawMdx() {
      if (!slug) return;

      const rawMdx = await getRawMdxBySlug(slug);
      if (cancelled) return;

      const nextBody = rawMdx ? splitMdx(rawMdx).body : "";
      setInitialBody(nextBody);
      setBodyHtml(mdxToHtml(nextBody));
    }

    loadRawMdx();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Derived
  const fmChanged = useMemo(() => JSON.stringify(fm) !== JSON.stringify(original), [fm, original]);
  const bodyMdx = useMemo(() => htmlToMdx(bodyHtml), [bodyHtml]);
  const bodyChanged = useMemo(() => bodyMdx.trim() !== initialBody.trim(), [bodyMdx, initialBody]);
  const hasChanges = fmChanged || bodyChanged;

  function update<K extends keyof PostFrontmatter>(key: K, value: PostFrontmatter[K]) {
    setFm((prev) => ({ ...prev, [key]: value }));
  }

  function generateFrontmatter(): string {
    return `---
title: "${fm.title}"
slug: "${fm.slug}"
status: "${fm.status}"
publishDate: "${fm.publishDate}"
category: "${fm.category}"
seoTitle: "${fm.seoTitle}"
metaDescription: "${fm.metaDescription}"
featuredImage: "${fm.featuredImage}"
featuredImageAlt: "${fm.featuredImageAlt}"
excerpt: "${fm.excerpt}"
primaryKeyword: "${fm.primaryKeyword || ""}"
topPickName: "${fm.topPickName || ""}"
topPickPrice: "${fm.topPickPrice || ""}"
budgetPickName: "${fm.budgetPickName || ""}"
budgetPickPrice: "${fm.budgetPickPrice || ""}"
topPickRating: "${fm.topPickRating || ""}"
layout: "${fm.layout || "standard"}"
readTime: ${fm.readTime ?? 5}
---`;
  }

  function generateFullMdx(): string {
    return `${generateFrontmatter()}\n\n${bodyMdx}\n`;
  }

  const handleInsertComponent = useCallback(
    (mdxBlock: string) => {
      // Convert the component block to HTML and append to body
      const blockHtml = mdxToHtml(mdxBlock);
      setBodyHtml((prev) => prev + "\n" + blockHtml);
    },
    []
  );

  function copyForClaude() {
    const fullMdx = generateFullMdx();
    const prompt = `Please replace the entire contents of src/content/posts/${fm.slug}.mdx with the following and push to GitHub:\n\n${fullMdx}`;
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  function downloadMdx() {
    const fullMdx = generateFullMdx();
    const blob = new Blob([fullMdx], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fm.slug}.mdx`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="mx-auto max-w-[1600px] px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/admin"
              className="text-sm font-nav text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Admin
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-nav text-foreground truncate max-w-[300px]">{fm.title}</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to={`/blog/${fm.slug}`}
              className="text-xs font-nav text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
            >
              View live post
            </Link>
            {hasChanges && (
              <>
                <button
                  onClick={downloadMdx}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  Download .mdx
                </button>
                <button
                  onClick={copyForClaude}
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-80 transition-opacity"
                >
                  {copied ? "Copied!" : "Copy for Claude"}
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Tab bar */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1600px] px-6 flex items-center gap-0">
          <button
            onClick={() => setTab("fields")}
            className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
              tab === "fields"
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Fields
          </button>
          <button
            onClick={() => setTab("body")}
            className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
              tab === "body"
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Body Editor
            {bodyChanged && (
              <span className="ml-2 inline-block w-2 h-2 rounded-full bg-amber-400" title="Body has unsaved changes" />
            )}
          </button>
          {/* MDX source toggle (far right) */}
          <div className="ml-auto">
            <button
              onClick={() => setShowMdxPreview(!showMdxPreview)}
              className="px-4 py-3 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              {showMdxPreview ? "Hide Source" : "View MDX Source"}
            </button>
          </div>
        </div>
      </div>

      {/* Editor grid */}
      <div className="mx-auto max-w-[1600px] px-6 py-8">
        {/* MDX source preview */}
        {showMdxPreview && (
          <div className="mb-6 rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-muted/30 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Generated MDX Source</p>
              <span className="text-xs text-muted-foreground/60 font-mono">
                {generateFullMdx().split("\n").length} lines
              </span>
            </div>
            <pre className="p-5 text-xs font-mono text-foreground overflow-x-auto max-h-96 overflow-y-auto whitespace-pre-wrap">
              {generateFullMdx()}
            </pre>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start">
          {/* Left: form fields OR body editor */}
          {tab === "fields" ? (
            <FieldsPanel fm={fm} update={update} />
          ) : (
            <BodyPanel
              bodyHtml={bodyHtml}
              onBodyChange={setBodyHtml}
              onInsertComponent={handleInsertComponent}
            />
          )}

          {/* Right: sticky live preview + save bar */}
          <div className="lg:sticky lg:top-32 space-y-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Live Preview</p>
            <LivePreview fm={fm} />

            {/* Change summary + save actions */}
            {hasChanges && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 space-y-3">
                <p className="text-sm font-medium text-amber-800">Unsaved changes</p>
                <div className="text-xs text-amber-700 space-y-1">
                  {fmChanged && <p>Frontmatter fields modified</p>}
                  {bodyChanged && <p>Body content modified</p>}
                </div>
                <div className="space-y-2">
                  <button
                    onClick={copyForClaude}
                    className="w-full rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:opacity-80 transition-opacity"
                  >
                    {copied ? "Copied!" : "Copy full MDX for Claude"}
                  </button>
                  <button
                    onClick={downloadMdx}
                    className="w-full rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    Download .mdx file
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
