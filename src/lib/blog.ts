export interface PostFrontmatter {
  title: string;
  slug: string;
  status: "draft" | "published";
  publishDate: string;
  category: string;
  seoTitle: string;
  metaDescription: string;
  featuredImage: string;
  featuredImageAlt: string;
  canonicalUrl?: string;
  excerpt: string;
  primaryKeyword?: string;
  topPickName?: string;
  topPickPrice?: string;
  budgetPickName?: string;
  budgetPickPrice?: string;
  /** Editorial star rating for top pick e.g. "4.5" — enables Review schema rich snippet */
  topPickRating?: string;
  /** "standard" = no sidebar (default), "with-sidebar" = 33% variant */
  layout?: "standard" | "with-sidebar";
  /** Estimated read time in minutes — defaults to 5 if not set */
  readTime?: number;
}

export interface PostModule {
  default: React.ComponentType;
  frontmatter: PostFrontmatter;
}

const modules = import.meta.glob<PostModule>("../content/posts/*.mdx", {
  eager: true,
});

export function getAllPosts(): PostFrontmatter[] {
  const now = new Date();
  return Object.values(modules)
    .map((m) => m.frontmatter)
    .filter(
      (post) =>
        post.status === "published" && new Date(post.publishDate) <= now
    )
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

export function getAllPostsIncludingDrafts(): PostFrontmatter[] {
  return Object.values(modules)
    .map((m) => m.frontmatter)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

export function getPostBySlug(
  slug: string
): { frontmatter: PostFrontmatter; Component: React.ComponentType } | null {
  const entry = Object.values(modules).find(
    (m) => m.frontmatter.slug === slug
  );
  if (!entry) return null;
  return { frontmatter: entry.frontmatter, Component: entry.default };
}

/** Returns { prev, next } relative to the given slug in chronological order */
export function getAdjacentPosts(slug: string): {
  prev: PostFrontmatter | null;
  next: PostFrontmatter | null;
} {
  const posts = getAllPosts();
  const idx = posts.findIndex((p) => p.slug === slug);
  return {
    prev: idx < posts.length - 1 ? posts[idx + 1] : null,
    next: idx > 0 ? posts[idx - 1] : null,
  };
}

/* ── raw MDX source for editor ──────────────────────────────────────────── */

const rawModules = import.meta.glob<string>("../content/posts/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
});

/** Returns the raw MDX source string for a given slug (for editor use) */
export function getRawMdxBySlug(slug: string): string | null {
  const entry = Object.entries(rawModules).find(([path]) =>
    path.endsWith(`/${slug}.mdx`)
  );
  return entry ? entry[1] : null;
}

/** Splits raw MDX into { frontmatter: string, body: string } */
export function splitMdx(raw: string): { frontmatter: string; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { frontmatter: "", body: raw };
  return { frontmatter: match[1], body: match[2].trim() };
}
