import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MDXProvider } from "@mdx-js/react";
import TopNavBar from "@/components/TopNavBar";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import AffiliateDisclosure from "@/components/blog/AffiliateDisclosure";
import SafetyNote from "@/components/blog/SafetyNote";
import BudgetCallout from "@/components/blog/BudgetCallout";
import PillarLink from "@/components/blog/PillarLink";
import SourceReviewQuote from "@/components/blog/SourceReviewQuote";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogSidebar from "@/components/blog/BlogSidebar";
import PrevNextNav from "@/components/blog/PrevNextNav";
import SimilarPosts from "@/components/blog/SimilarPosts";
import LeaveAReply from "@/components/blog/LeaveAReply";
import { getPostBySlug, getAllPosts, getAdjacentPosts } from "@/lib/blog";

const SITE_URL = "https://itsmomapproved.com";

const mdxComponents = {
  AffiliateDisclosure,
  SafetyNote,
  BudgetCallout,
  PillarLink,
  SourceReviewQuote,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-foreground mt-8 mb-4"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(24px, 3vw, 36px)",
        fontWeight: 400,
        lineHeight: 1.2,
      }}
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-foreground mt-8 mb-3"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(20px, 2.5vw, 28px)",
        fontWeight: 400,
        lineHeight: 1.25,
      }}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-foreground mt-6 mb-2"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(18px, 2vw, 22px)",
        fontWeight: 400,
      }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-foreground mb-4"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "16px",
        lineHeight: 1.8,
      }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="text-foreground list-disc pl-6 mb-4 space-y-1"
      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", lineHeight: 1.8 }}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="text-foreground list-decimal pl-6 mb-4 space-y-1"
      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", lineHeight: 1.8 }}
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-terracotta underline hover:opacity-70 transition-opacity"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-terracotta pl-4 italic text-muted-foreground my-6"
      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px" }}
      {...props}
    />
  ),
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) return <Navigate to="/blog" replace />;

  const { frontmatter: fm, Component } = post;
  const canonicalUrl = fm.canonicalUrl || `${SITE_URL}/blog/${fm.slug}`;
  const allPosts = getAllPosts();
  const { prev, next } = getAdjacentPosts(fm.slug);
  const isSidebar = fm.layout === "with-sidebar";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fm.title,
    datePublished: fm.publishDate,
    description: fm.metaDescription,
    image: fm.featuredImage,
    author: {
      "@type": "Organization",
      name: "itsmomapproved.com",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{fm.seoTitle || fm.title}</title>
        <meta name="description" content={fm.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={fm.seoTitle || fm.title} />
        <meta property="og:description" content={fm.metaDescription} />
        <meta property="og:image" content={fm.featuredImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fm.seoTitle || fm.title} />
        <meta name="twitter:description" content={fm.metaDescription} />
        <meta name="twitter:image" content={fm.featuredImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <TopNavBar />
      <MainHeader />

      {/* ── Shared editorial post header ── */}
      <BlogPostHeader
        category={fm.category}
        title={fm.title}
        publishDate={fm.publishDate}
        readTime={fm.readTime ?? 5}
      />

      {/* ── LAYOUT A: Standard (no sidebar) ── */}
      {!isSidebar && (
        <article className="mx-auto bg-white" style={{ maxWidth: "780px", padding: "48px 24px 64px" }}>
          {/* Featured image — only shown if not placeholder */}
          {fm.featuredImage && fm.featuredImage !== "/placeholder.svg" && (
            <img
              src={fm.featuredImage}
              alt={fm.featuredImageAlt || fm.title}
              className="w-full rounded-none object-cover mb-10"
              style={{ aspectRatio: "16/9" }}
            />
          )}

          <div className="prose-custom">
            <MDXProvider components={mdxComponents}>
              <Component />
            </MDXProvider>
          </div>
        </article>
      )}

      {/* ── LAYOUT B: With sidebar (33% of posts) ── */}
      {isSidebar && (
        <div
          className="max-w-[1200px] mx-auto px-6 bg-white"
          style={{ paddingTop: "48px", paddingBottom: "64px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[65%_33%] gap-10">
            {/* Main content column */}
            <article>
              {fm.featuredImage && fm.featuredImage !== "/placeholder.svg" && (
                <img
                  src={fm.featuredImage}
                  alt={fm.featuredImageAlt || fm.title}
                  className="w-full rounded-none object-cover mb-10"
                  style={{ aspectRatio: "16/9" }}
                />
              )}
              <div className="prose-custom">
                <MDXProvider components={mdxComponents}>
                  <Component />
                </MDXProvider>
              </div>
            </article>

            {/* Sticky sidebar */}
            <div style={{ position: "sticky", top: "100px", alignSelf: "start" }}>
              <BlogSidebar />
            </div>
          </div>
        </div>
      )}

      {/* ── Prev / Next navigation ── */}
      <PrevNextNav prev={prev} next={next} />

      {/* ── Similar Posts ── */}
      <SimilarPosts
        allPosts={allPosts}
        currentSlug={fm.slug}
        currentCategory={fm.category}
      />

      {/* ── Leave a Reply ── */}
      <LeaveAReply />

      <Footer />
    </div>
  );
};

export default BlogPost;
