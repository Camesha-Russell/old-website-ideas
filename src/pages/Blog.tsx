import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TopNavBar from "@/components/TopNavBar";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog | It's Mom Approved</title>
        <meta
          name="description"
          content="Honest reviews, guides, and tips from a real mom — covering sleep, feeding, gear, and everything in between."
        />
      </Helmet>
      <TopNavBar />
      <MainHeader />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-headline text-4xl md:text-5xl italic text-foreground mb-10 text-center">
          The Blog
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground font-body">
            Posts coming soon — stay tuned!
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                {post.featuredImage && (
                  <img
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-5">
                  <span className="text-xs font-nav uppercase tracking-wider text-muted-foreground">
                    {post.category}
                  </span>
                  <h2 className="mt-1 font-headline text-xl text-foreground group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground font-body line-clamp-3">
                    {post.excerpt}
                  </p>
                  <time className="mt-3 block text-xs text-muted-foreground font-nav">
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
