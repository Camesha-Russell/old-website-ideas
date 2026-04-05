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
import { getPostBySlug } from "@/lib/blog";

const SITE_URL = "https://itsmomapproved.com";

const mdxComponents = {
  AffiliateDisclosure,
  SafetyNote,
  BudgetCallout,
  PillarLink,
  SourceReviewQuote,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-headline text-3xl md:text-4xl italic text-foreground mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-headline text-2xl md:text-3xl text-foreground mt-8 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-headline text-xl md:text-2xl text-foreground mt-6 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-body text-foreground leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="font-body text-foreground list-disc pl-6 mb-4 space-y-1" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="font-body text-foreground list-decimal pl-6 mb-4 space-y-1" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent-foreground underline hover:text-foreground transition-colors" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6" {...props} />
  ),
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) return <Navigate to="/blog" replace />;

  const { frontmatter: fm, Component } = post;
  const canonicalUrl = fm.canonicalUrl || `${SITE_URL}/blog/${fm.slug}`;

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

        {/* Open Graph */}
        <meta property="og:title" content={fm.seoTitle || fm.title} />
        <meta property="og:description" content={fm.metaDescription} />
        <meta property="og:image" content={fm.featuredImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fm.seoTitle || fm.title} />
        <meta name="twitter:description" content={fm.metaDescription} />
        <meta name="twitter:image" content={fm.featuredImage} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <TopNavBar />
      <MainHeader />

      <article className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10">
          <span className="text-xs font-nav uppercase tracking-wider text-muted-foreground">
            {fm.category}
          </span>
          <h1 className="mt-2 font-headline text-3xl md:text-5xl italic text-foreground leading-tight">
            {fm.title}
          </h1>
          <time className="mt-3 block text-sm text-muted-foreground font-nav">
            {new Date(fm.publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>

        {fm.featuredImage && (
          <img
            src={fm.featuredImage}
            alt={fm.featuredImageAlt || fm.title}
            className="mb-10 w-full rounded-xl object-cover aspect-[16/9]"
          />
        )}

        <div className="prose-custom">
          <MDXProvider components={mdxComponents}>
            <Component />
          </MDXProvider>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
