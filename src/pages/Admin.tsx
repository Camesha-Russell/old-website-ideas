import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { getAllPostsIncludingDrafts, PostFrontmatter } from "@/lib/blog";
import { FEATURED_SLUGS } from "@/config/homepage";

// ─── helpers ────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Sleep", "Feeding", "Carriers and Strollers", "Play and Development", "For Moms", "Safety"];

function estimateReadTime(excerpt: string): string {
  const words = excerpt.split(/\s+/).length * 12; // rough body estimate
  const minutes = Math.max(3, Math.round(words / 200));
  return `~${minutes} min read`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getKeyword(post: PostFrontmatter): string {
  if (post.primaryKeyword) return post.primaryKeyword;
  // derive from title as fallback
  return post.title.replace(/[:\-–—]/g, "").replace(/\s{2,}/g, " ").trim();
}

// ─── sub-components ──────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: "draft" | "published" }) {
  return status === "published" ? (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      Published
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 border border-amber-200">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
      Draft
    </span>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card px-6 py-5">
      <p className="text-xs uppercase tracking-wider text-muted-foreground font-nav">{label}</p>
      <p className="mt-1 text-3xl font-headline">{value}</p>
      {sub && <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}

function ExternalCard({
  icon, title, description, href, cta,
}: { icon: string; title: string; description: string; href: string; cta: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3">
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="font-headline text-lg">{title}</p>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-80 transition-opacity w-fit"
      >
        {cta} →
      </a>
    </div>
  );
}

// ─── tabs ────────────────────────────────────────────────────────────────────

function PostsTab({ posts }: { posts: PostFrontmatter[] }) {
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      if (statusFilter !== "all" && p.status !== statusFilter) return false;
      if (categoryFilter !== "All" && p.category !== categoryFilter) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [posts, statusFilter, categoryFilter, search]);

  const published = posts.filter((p) => p.status === "published").length;
  const drafts = posts.filter((p) => p.status === "draft").length;

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label="Total Posts" value={posts.length} />
        <StatCard label="Published" value={published} />
        <StatCard label="Drafts" value={drafts} sub="Ready to flip live" />
        <StatCard label="Categories" value={new Set(posts.map((p) => p.category)).size} sub="Active pillars" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Status filter */}
        <div className="flex rounded-lg border border-border overflow-hidden text-sm">
          {(["all", "published", "draft"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-2 font-nav capitalize transition-colors ${
                statusFilter === s
                  ? "bg-foreground text-background"
                  : "bg-card text-foreground hover:bg-muted"
              }`}
            >
              {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        {/* Category filter */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-nav text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
        >
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search posts…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-nav text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground flex-1 min-w-[180px]"
        />

        <span className="ml-auto text-xs text-muted-foreground font-nav">
          {filtered.length} post{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              {["Title", "Status", "Category", "Published", "Est. Read", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-nav uppercase tracking-wider text-muted-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground text-sm">
                  No posts match this filter.
                </td>
              </tr>
            ) : (
              filtered.map((post) => (
                <tr key={post.slug} className="hover:bg-muted/40 transition-colors">
                  <td className="px-4 py-4 max-w-xs">
                    <p className="font-medium text-foreground leading-snug">{post.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{post.excerpt}</p>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <StatusBadge status={post.status} />
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="text-xs font-nav text-muted-foreground bg-muted rounded-full px-2.5 py-1">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-xs text-muted-foreground">
                    {formatDate(post.publishDate)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-xs text-muted-foreground">
                    {estimateReadTime(post.excerpt)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-xs font-nav text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity"
                      >
                        Preview
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Publish reminder */}
      {drafts > 0 && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
          <strong>{drafts} draft{drafts !== 1 ? "s" : ""}</strong> ready to review.
          Open each post in Lovable and flip <code className="bg-amber-100 rounded px-1">status: "draft"</code> to <code className="bg-amber-100 rounded px-1">status: "published"</code> when you are happy with it.
        </div>
      )}
    </div>
  );
}

function KeywordsTab({ posts }: { posts: PostFrontmatter[] }) {
  const keywords = useMemo(() => {
    return posts.map((p) => ({
      keyword: getKeyword(p),
      post: p.title,
      slug: p.slug,
      category: p.category,
      status: p.status,
      date: p.publishDate,
    }));
  }, [posts]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-5">
        <p className="font-headline text-lg mb-1">Keyword Tracker</p>
        <p className="text-sm text-muted-foreground">
          Every post targets one primary keyword. This table shows your full keyword map.
          Add a <code className="bg-muted rounded px-1 text-xs">primaryKeyword</code> field to any post's frontmatter for exact tracking —
          otherwise the post title is used as a proxy.
        </p>
      </div>

      <div className="rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              {["Keyword", "Post", "Category", "Status", "Date"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-nav uppercase tracking-wider text-muted-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            {keywords.map((row) => (
              <tr key={row.slug} className="hover:bg-muted/40 transition-colors">
                <td className="px-4 py-4">
                  <p className="font-medium text-foreground">{row.keyword}</p>
                </td>
                <td className="px-4 py-4 max-w-xs">
                  <Link
                    to={`/blog/${row.slug}`}
                    className="text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity text-xs"
                  >
                    {row.post}
                  </Link>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs font-nav text-muted-foreground bg-muted rounded-full px-2.5 py-1">
                    {row.category}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4 py-4 text-xs text-muted-foreground whitespace-nowrap">
                  {formatDate(row.date)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-border bg-card p-5 space-y-3">
        <p className="font-headline text-base">See how your keywords are actually ranking</p>
        <p className="text-sm text-muted-foreground">
          Google Search Console shows you exactly which search queries are bringing people to your site,
          which posts rank, and what position they are in. It is free and takes five minutes to set up once your site is live.
        </p>
        <a
          href="https://search.google.com/search-console"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-80 transition-opacity"
        >
          Open Google Search Console →
        </a>
      </div>
    </div>
  );
}

function AnalyticsTab({ posts }: { posts: PostFrontmatter[] }) {
  const published = posts.filter((p) => p.status === "published");
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <div className="space-y-6">
      {/* Setup banner */}
      <div className="rounded-xl border border-[#E8B4A0] bg-[#FDF6F2] p-5 space-y-2">
        <p className="font-headline text-lg">Connect your analytics to see real traffic data</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Your site is ready for Google Analytics 4. Once you add your GA4 Measurement ID,
          you will see page views, sessions, traffic sources, and which posts are being read.
          The whole setup takes about five minutes.
        </p>
        <ol className="text-sm text-muted-foreground space-y-1 list-decimal pl-4">
          <li>Create a free account at analytics.google.com</li>
          <li>Create a new property for itsmomapproved.com</li>
          <li>Copy your Measurement ID (starts with G-)</li>
          <li>Tell Lovable: "Add Google Analytics 4 to my site with Measurement ID [your ID]"</li>
        </ol>
      </div>

      {/* External tools */}
      <div className="grid sm:grid-cols-2 gap-4">
        <ExternalCard
          icon="📊"
          title="Google Analytics 4"
          description="Page views, sessions, user locations, traffic sources, and which posts are your top performers. Free."
          href="https://analytics.google.com"
          cta="Open GA4"
        />
        <ExternalCard
          icon="🔍"
          title="Google Search Console"
          description="See which search queries bring people to your site, which posts rank, and your click-through rates. Free and requires zero code."
          href="https://search.google.com/search-console"
          cta="Open Search Console"
        />
        <ExternalCard
          icon="📌"
          title="Pinterest Analytics"
          description="See which pins are driving traffic, your top-performing boards, and your monthly impressions. Log in to Pinterest and go to Analytics."
          href="https://analytics.pinterest.com"
          cta="Open Pinterest Analytics"
        />
        <ExternalCard
          icon="✉️"
          title="Email List Growth"
          description="Track subscriber count, open rates, and click rates in your email platform. Connect MailerLite or ConvertKit for the full picture."
          href="https://www.mailerlite.com"
          cta="Open MailerLite"
        />
      </div>

      {/* Content stats — what I can show without GA */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <p className="font-headline text-base">Content inventory</p>
          <p className="text-xs text-muted-foreground mt-0.5">Based on your published posts — traffic data available once GA4 is connected.</p>
        </div>
        <div className="divide-y divide-border">
          <div className="grid grid-cols-3 px-5 py-3 text-xs font-nav uppercase tracking-wider text-muted-foreground bg-muted">
            <span>Category</span>
            <span>Posts live</span>
            <span>Drafts</span>
          </div>
          {categories.map((cat) => {
            const catPosts = posts.filter((p) => p.category === cat);
            const catPublished = catPosts.filter((p) => p.status === "published").length;
            const catDrafts = catPosts.filter((p) => p.status === "draft").length;
            return (
              <div key={cat} className="grid grid-cols-3 px-5 py-3 text-sm">
                <span className="font-medium text-foreground">{cat}</span>
                <span className="text-muted-foreground">{catPublished}</span>
                <span className="text-muted-foreground">{catDrafts}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CommentsTab() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-8 text-center space-y-4">
        <div className="text-4xl">💬</div>
        <p className="font-headline text-xl">Comments are not connected yet</p>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Your site has a CommentsSection component, but it needs to be connected to a database before comments are stored and visible here.
          Supabase is free up to 500 MB and integrates natively with Lovable.
        </p>
        <div className="rounded-lg border border-border bg-muted p-4 text-left text-sm max-w-md mx-auto">
          <p className="font-medium text-foreground mb-2">Tell Lovable this:</p>
          <p className="text-muted-foreground italic leading-relaxed">
            "Connect my CommentsSection component to Supabase. Create a comments table with fields for: post slug, author name, comment body, and created_at timestamp.
            Show comments below each blog post and add a comments moderation tab to my /admin page."
          </p>
        </div>
        <a
          href="https://supabase.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-80 transition-opacity"
        >
          Learn about Supabase →
        </a>
      </div>

      {/* Preview of what it will look like */}
      <div className="rounded-xl border border-border bg-card overflow-hidden opacity-50 pointer-events-none select-none">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <p className="font-headline text-base">Recent Comments</p>
          <span className="text-xs font-nav text-muted-foreground bg-muted rounded-full px-2.5 py-1">Coming soon</span>
        </div>
        <div className="divide-y divide-border">
          {[
            { name: "Sarah M.", post: "Hatch Rest vs Hatch Rest+", comment: "We went with the Rest+ and the battery life is really 13 hours — no issues overnight.", time: "2 hours ago" },
            { name: "Tanya R.", post: "Nanit vs Owlet", comment: "The Owlet false alarm thing happened to us on night two. Once we re-fitted the sock it was fine.", time: "1 day ago" },
            { name: "Priya K.", post: "Ergobaby vs Solly", comment: "Four YouTube tutorials before the Solly clicked for me too. So worth it once you get it.", time: "3 days ago" },
          ].map((c, i) => (
            <div key={i} className="px-5 py-4 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.time}</p>
              </div>
              <p className="text-xs text-muted-foreground">on: {c.post}</p>
              <p className="text-sm text-foreground leading-relaxed">{c.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-center text-muted-foreground">Preview of what the comments panel will look like once Supabase is connected.</p>
    </div>
  );
}


function HomepageTab({ posts }: { posts: PostFrontmatter[] }) {
  const publishedPosts = posts.filter((p) => p.status === "published");
  const [slots, setSlots] = useState<(string | null)[]>([...FEATURED_SLUGS]);
  const [copied, setCopied] = useState(false);

  const slotLabels = [
    "Slot 1 — Top left (text above, image below)",
    "Slot 2 — Top center hero (image above, text below)",
    "Slot 3 — Top right (text above, image below)",
    "Slot 4 — Bottom left (image above, text below)",
    "Slot 5 — Bottom right (text above, image below)",
  ];

  const hasChanges = slots.some((s, i) => s !== FEATURED_SLUGS[i]);

  function generatePrompt(): string {
    const lines = slots.map((slug, i) => `  Slot ${i + 1}: ${slug ?? "empty"}`).join("\n");
    return `Please update src/config/homepage.ts with these featured slot assignments and push to GitHub:\n\n${lines}\n\nKeep everything else in the file the same.`;
  }

  function copyPrompt() {
    navigator.clipboard.writeText(generatePrompt()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-5 space-y-1">
        <p className="font-headline text-lg">Featured Slots</p>
        <p className="text-sm text-muted-foreground">
          Choose which published posts appear in each slot on the homepage. Pick from the dropdowns, then copy the prompt and paste it to Claude to save your changes.
        </p>
      </div>

      <div className="space-y-3">
        {slotLabels.map((label, i) => {
          const currentPost = slots[i] ? publishedPosts.find((p) => p.slug === slots[i]) : null;
          return (
            <div key={i} className="rounded-xl border border-border bg-card p-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-nav uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
                {currentPost ? (
                  <p className="text-sm font-medium text-foreground truncate">{currentPost.title}</p>
                ) : (
                  <p className="text-sm text-muted-foreground italic">Empty — showing placeholder</p>
                )}
              </div>
              <select
                value={slots[i] ?? ""}
                onChange={(e) => {
                  const next = [...slots];
                  next[i] = e.target.value || null;
                  setSlots(next);
                }}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-nav text-foreground focus:outline-none focus:ring-1 focus:ring-foreground w-full sm:w-64"
              >
                <option value="">— Empty slot —</option>
                {publishedPosts.map((p) => (
                  <option key={p.slug} value={p.slug}>{p.title}</option>
                ))}
              </select>
            </div>
          );
        })}
      </div>

      {hasChanges && (
        <div className="rounded-xl border border-[#E8B4A0] bg-[#FDF6F2] p-5 space-y-3">
          <p className="font-headline text-base">You have unsaved changes</p>
          <p className="text-sm text-muted-foreground">
            This site does not have a backend yet, so changes are saved by updating the config file in GitHub.
            Copy the prompt below and paste it to Claude — changes will be pushed and live within a minute.
          </p>
          <div className="rounded-lg border border-border bg-card p-3 text-xs font-nav text-muted-foreground whitespace-pre-wrap">
            {generatePrompt()}
          </div>
          <button
            onClick={copyPrompt}
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-80 transition-opacity"
          >
            {copied ? "Copied!" : "Copy prompt for Claude →"}
          </button>
        </div>
      )}

      {!hasChanges && (
        <div className="rounded-xl border border-border bg-muted/30 px-5 py-4 text-sm text-muted-foreground">
          Current slots match what is live on the homepage. Change a dropdown above to reassign a slot.
        </div>
      )}

      <div className="rounded-xl border border-border bg-card p-5 space-y-2">
        <p className="font-headline text-base">Recent Posts section</p>
        <p className="text-sm text-muted-foreground">
          The Recent Posts section below the featured grid automatically shows your {publishedPosts.length} most recently published post{publishedPosts.length !== 1 ? "s" : ""} in date order. No configuration needed — new published posts appear there automatically.
        </p>
        {publishedPosts.length === 0 && (
          <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
            No published posts yet. Flip a draft to published to see it appear on the homepage.
          </p>
        )}
      </div>
    </div>
  );
}

// ─── main page ───────────────────────────────────────────────────────────────

type Tab = "posts" | "keywords" | "analytics" | "comments" | "homepage";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "posts", label: "Posts", icon: "📝" },
  { id: "homepage", label: "Homepage", icon: "🏠" },
  { id: "keywords", label: "Keywords", icon: "🔑" },
  { id: "analytics", label: "Analytics", icon: "📊" },
  { id: "comments", label: "Comments", icon: "💬" },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState<Tab>("posts");
  const allPosts = getAllPostsIncludingDrafts();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm font-nav text-muted-foreground hover:text-foreground transition-colors">
              ← itsmomapproved.com
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-nav text-foreground">Admin</span>
          </div>
          <Link
            to="/blog"
            className="text-xs font-nav text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
          >
            View live blog →
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 space-y-8">
        {/* Page title */}
        <div>
          <h1 className="font-headline text-4xl italic text-foreground">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {allPosts.length} total posts across {new Set(allPosts.map((p) => p.category)).size} categories
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-border">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-nav transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div>
          {activeTab === "posts" && <PostsTab posts={allPosts} />}
          {activeTab === "homepage" && <HomepageTab posts={allPosts} />}
          {activeTab === "keywords" && <KeywordsTab posts={allPosts} />}
          {activeTab === "analytics" && <AnalyticsTab posts={allPosts} />}
          {activeTab === "comments" && <CommentsTab />}
        </div>
      </main>
    </div>
  );
};

export default Admin;
