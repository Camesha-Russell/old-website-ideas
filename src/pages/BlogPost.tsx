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

const LORA = "'Lora', serif";
const DM = "'DM Sans', sans-serif";

const mdxComponents = {
  AffiliateDisclosure,
  SafetyNote,
  BudgetCallout,
  PillarLink,
  SourceReviewQuote,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      style={{
        fontFamily: LORA,
        fontSize: "clamp(22px, 3vw, 32px)",
        fontWeight: 600,
        lineHeight: 1.25,
        color: "hsl(0 0% 10%)",
        marginTop: "40px",
        marginBottom: "16px",
        letterSpacing: "-0.01em",
      }}
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      style={{
        fontFamily: LORA,
        fontSize: "clamp(18px, 2.5vw, 26px)",
        fontWeight: 600,
        lineHeight: 1.3,
        color: "hsl(0 0% 10%)",
        marginTop: "36px",
        marginBottom: "12px",
        letterSpacing: "-0.01em",
      }}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      style={{
        fontFamily: LORA,
        fontSize: "clamp(16px, 2vw, 20px)",
        fontWeight: 600,
        lineHeight: 1.35,
        color: "hsl(0 0% 12%)",
        marginTop: "28px",
        marginBottom: "10px",
      }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      style={{
        fontFamily: DM,
        fontSize: "16px",
        lineHeight: 1.85,
        color: "hsl(0 0% 18%)",
        marginBottom: "18px",
      }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc pl-6 mb-5 space-y-1"
      style={{ fontFamily: DM, fontSize: "16px", lineHeight: 1.8, color: "hsl(0 0% 18%)" }}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal pl-6 mb-5 space-y-1"
      style={{ fontFamily: DM, fontSize: "16px", lineHeight: 1.8, color: "hsl(0 0% 18%)" }}
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="underline hover:opacity-70 transition-opacity"
      style={{ fontFamily: DM, color: "hsl(11 52% 47%)" }}
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      style={{
        borderLeft: "4px solid hsl(11 52% 47%)",
        paddingLeft: "20px",
        fontFamily: LORA,
        fontSize: "18px",
        fontStyle: "italic",
        color: "hsl(0 0% 40%)",
        margin: "28px 0",
        lineHeight: 1.65,
      }}
      {...props}
    />
  ),
  hr: () => (
    <hr style={{ border: "none", borderTop: "1px solid hsl(34 15% 88%)", margin: "32px 0" }} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ fontFamily: DM, fontWeight: 600, color: "hsl(0 0% 10%)" }} {...props} />
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
        <article className="mx-auto" style={{ maxWidth: "780px", padding: "56px 40px 72px", backgroundColor: "#ffffff" }}>
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
          className="max-w-[1200px] mx-auto px-6"
          style={{ paddingTop: "0", paddingBottom: "64px", backgroundColor: "hsl(34 33% 96%)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[64%_34%] gap-8 items-start">
            {/* Main content column — white card */}
            <article
              style={{
                backgroundColor: "#ffffff",
                padding: "48px 40px 64px",
              }}
            >
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
            <div style={{ position: "sticky", top: "32px", alignSelf: "start" }}>
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
