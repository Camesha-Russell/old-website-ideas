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

export function getPostBySlug(
  slug: string
): { frontmatter: PostFrontmatter; Component: React.ComponentType } | null {
  const entry = Object.values(modules).find(
    (m) => m.frontmatter.slug === slug
  );
  if (!entry) return null;
  return { frontmatter: entry.frontmatter, Component: entry.default };
}

export function getPostsByCategory(category: string): PostFrontmatter[] {
  return getAllPosts().filter((post) => post.category === category);
}
