import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPosts, getAllPostsIncludingDrafts, PostFrontmatter } from "@/lib/blog";
import { FEATURED_SLUGS } from "@/config/homepage";
import { useEditMode } from "@/hooks/useEditMode";

/* ── resolve slots from config ────────────────────────────────────────────── */

function resolveSlots(overrides?: (string | null)[]): (PostFrontmatter | null)[] {
  const all = getAllPostsIncludingDrafts();
  const source = overrides ?? FEATURED_SLUGS;
  return source.map((slug) => {
    if (!slug) return null;
    return all.find((p) => p.slug === slug && p.status === "published") ?? null;
  });
}

/* ── placeholder cards ────────────────────────────────────────────────────── */

const dummyTitles = [
  { category: "Sleep", title: "The Baby Monitor We Actually Trust" },
  { category: "Feeding", title: "Formula Prep Machines That Save You Time" },
  { category: "Gear", title: "The Stroller That Replaced Our Entire Collection" },
  { category: "Safety", title: "Baby-Proofing Your Home: Room-by-Room Checklist" },
  { category: "Sleep", title: "Blackout Curtains That Actually Work" },
];

function PlaceholderCard({ index = 0, className = "" }: { index?: number; className?: string }) {
  const dummy = dummyTitles[index % dummyTitles.length];
  return (
    <div className={`border border-border rounded-lg overflow-hidden ${className}`}>
      <div className="placeholder-img h-[240px]" />
      <div className="p-4 md:p-6">
        <span className="text-terracotta uppercase text-[11px] tracking-[2px] font-body font-semibold">{dummy.category}</span>
        <h3 className="font-display text-foreground text-xl md:text-2xl mt-2 leading-snug">
          {dummy.title}
        </h3>
      </div>
    </div>
  );
}

/* ── post card ────────────────────────────────────────────────────────────── */

function PostCard({ post, imageFirst = true }: { post: PostFrontmatter; imageFirst?: boolean }) {
  const image = post.featuredImage && post.featuredImage !== "/placeholder.svg" ? (
    <img src={post.featuredImage} alt={post.featuredImageAlt || post.title} className="w-full h-[240px] object-cover" />
  ) : (
    <div className="placeholder-img h-[240px]" />
  );

  const meta = (
    <div className="p-4 md:p-6">
      <span className="text-terracotta uppercase text-[11px] tracking-[2px] font-body font-semibold">{post.category}</span>
      <h3 className="font-display text-foreground text-xl md:text-2xl mt-2 leading-snug group-hover:opacity-70 transition-opacity">
        {post.title}
      </h3>
    </div>
  );

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group border border-border rounded-lg overflow-hidden flex flex-col hover:border-foreground/30 transition-colors block h-full"
    >
      {imageFirst ? <>{image}{meta}</> : <>{meta}{image}</>}
    </Link>
  );
}

/* ── edit overlay for each slot ────────────────────────────────────────────── */

function SlotEditor({
  slotIndex,
  currentSlug,
  posts,
  onChange,
  children,
}: {
  slotIndex: number;
  currentSlug: string | null;
  posts: PostFrontmatter[];
  onChange: (slotIndex: number, slug: string | null) => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group/edit">
      {children}
      {/* pencil icon */}
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(!open); }}
        className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-foreground/90 text-background flex items-center justify-center opacity-0 group-hover/edit:opacity-100 transition-opacity shadow-lg hover:scale-110"
        title={`Edit slot ${slotIndex + 1}`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      </button>
      {/* slot number badge */}
      <div className="absolute top-2 left-2 z-20 bg-terracotta text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center opacity-60 group-hover/edit:opacity-100 transition-opacity">
        {slotIndex + 1}
      </div>
      {/* dropdown */}
      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div className="absolute top-12 right-2 z-40 w-72 max-h-64 overflow-y-auto bg-card border border-border rounded-xl shadow-xl">
            <button
              onClick={() => { onChange(slotIndex, null); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors ${!currentSlug ? "bg-muted font-medium" : ""}`}
            >
              <span className="text-muted-foreground italic">Empty slot (placeholder)</span>
            </button>
            {posts.map((p) => (
              <button
                key={p.slug}
                onClick={() => { onChange(slotIndex, p.slug); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors border-t border-border/50 ${currentSlug === p.slug ? "bg-muted font-medium" : ""}`}
              >
                <span className="block text-foreground leading-snug">{p.title}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">{p.category}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ── save bar ─────────────────────────────────────────────────────────────── */

function SaveBar({ slots, onReset }: { slots: (string | null)[]; onReset: () => void }) {
  const [copied, setCopied] = useState(false);
  const hasChanges = slots.some((s, i) => s !== FEATURED_SLUGS[i]);

  if (!hasChanges) return null;

  function generateConfig(): string {
    const entries = slots
      .map((slug, i) => `  ${slug ? `"${slug}"` : "null"},${" ".repeat(Math.max(1, 30 - (slug?.length ?? 4)))}// slot ${i + 1}`)
      .join("\n");
    return `export const FEATURED_SLUGS: (string | null)[] = [\n${entries}\n];\n\nexport const RECENT_POSTS_COUNT = 8;`;
  }

  function copyConfig() {
    navigator.clipboard.writeText(generateConfig()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0 animate-pulse" />
          <p className="text-sm text-foreground font-medium truncate">Unsaved homepage changes</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onReset}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Reset
          </button>
          <button
            onClick={copyConfig}
            className="px-5 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:opacity-80 transition-opacity"
          >
            {copied ? "Copied!" : "Copy config for Claude"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── main component ───────────────────────────────────────────────────────── */

const FeaturedSection = () => {
  const editMode = useEditMode();
  const publishedPosts = getAllPosts();

  // Local slot state — starts from saved config, editable in edit mode
  const [localSlugs, setLocalSlugs] = useState<(string | null)[]>([...FEATURED_SLUGS]);

  // Reset local state when exiting edit mode
  useEffect(() => {
    if (!editMode) setLocalSlugs([...FEATURED_SLUGS]);
  }, [editMode]);

  const slots = resolveSlots(editMode ? localSlugs : undefined);
  const [s0, s1, s2, s3, s4] = slots;

  function handleSlotChange(index: number, slug: string | null) {
    setLocalSlugs((prev) => {
      const next = [...prev];
      next[index] = slug;
      return next;
    });
  }

  function renderSlot(index: number, post: PostFrontmatter | null, imageFirst = true) {
    const card = post ? <PostCard post={post} imageFirst={imageFirst} /> : <PlaceholderCard index={index} />;

    if (!editMode) return card;

    return (
      <SlotEditor
        slotIndex={index}
        currentSlug={localSlugs[index]}
        posts={publishedPosts}
        onChange={handleSlotChange}
      >
        {card}
      </SlotEditor>
    );
  }

  return (
    <>
      <section className="py-[100px]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="section-title text-foreground">Featured</h2>
            {editMode && (
              <span className="inline-flex items-center gap-2 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Edit mode — hover slots to change
              </span>
            )}
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
            <div className="md:col-span-3">{renderSlot(0, s0, false)}</div>
            <div className="md:col-span-5">{renderSlot(1, s1, true)}</div>
            <div className="md:col-span-4">{renderSlot(2, s2, false)}</div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderSlot(3, s3, true)}
            {renderSlot(4, s4, false)}
          </div>
        </div>
      </section>

      {editMode && (
        <SaveBar slots={localSlugs} onReset={() => setLocalSlugs([...FEATURED_SLUGS])} />
      )}
    </>
  );
};

export default FeaturedSection;
