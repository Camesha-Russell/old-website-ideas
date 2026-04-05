/**
 * MDX ↔ Tiptap HTML round-trip serializer
 *
 * Converts MDX body content to HTML for Tiptap,
 * and converts Tiptap HTML back to MDX-compatible markdown.
 *
 * Custom MDX components (AffiliateDisclosure, SafetyNote, etc.)
 * are preserved as raw HTML blocks that Tiptap treats as non-editable.
 */

// ── MDX component patterns ────────────────────────────────────────────────

const SELF_CLOSING_COMPONENTS = [
  "AffiliateDisclosure",
  "ShopButton",
  "PillarLink",
  "ImagePlaceholder",
];

const WRAPPING_COMPONENTS = [
  "SafetyNote",
  "BudgetCallout",
  "SourceReviewQuote",
];

const ALL_COMPONENTS = [...SELF_CLOSING_COMPONENTS, ...WRAPPING_COMPONENTS];

// ── MDX → HTML (for loading into Tiptap) ──────────────────────────────────

export function mdxToHtml(mdx: string): string {
  let html = mdx;

  // Wrap JSX comments {/* ... */} as HTML comments
  html = html.replace(/\{\/\*\s*(.*?)\s*\*\/\}/g, "<!-- $1 -->");

  // Convert self-closing components to placeholder divs
  for (const comp of SELF_CLOSING_COMPONENTS) {
    const regex = new RegExp(
      `<${comp}([^/>]*?)\\s*/>`,
      "g"
    );
    html = html.replace(regex, (match, props) => {
      const encoded = encodeURIComponent(match.trim());
      return `<div data-component="${comp}" data-raw="${encoded}" contenteditable="false" class="component-block">[${comp}]</div>`;
    });
  }

  // Convert wrapping components to placeholder divs
  for (const comp of WRAPPING_COMPONENTS) {
    const regex = new RegExp(
      `<${comp}([^>]*)>([\\s\\S]*?)<\\/${comp}>`,
      "g"
    );
    html = html.replace(regex, (match, props, children) => {
      const encoded = encodeURIComponent(match.trim());
      const preview = children.trim().slice(0, 80);
      return `<div data-component="${comp}" data-raw="${encoded}" contenteditable="false" class="component-block">[${comp}] ${preview}${children.trim().length > 80 ? "..." : ""}</div>`;
    });
  }

  // Convert markdown headings to HTML
  html = html.replace(/^### (.*$)/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gm, "<h1>$1</h1>");

  // Convert markdown horizontal rules
  html = html.replace(/^---$/gm, "<hr>");

  // Convert markdown bold/italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Convert markdown links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Convert paragraphs (lines that aren't already HTML tags)
  const lines = html.split("\n");
  const result: string[] = [];
  let inParagraph = false;
  let paragraphLines: string[] = [];

  function flushParagraph() {
    if (paragraphLines.length > 0) {
      result.push(`<p>${paragraphLines.join(" ")}</p>`);
      paragraphLines = [];
    }
    inParagraph = false;
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      continue;
    }
    // Already an HTML block element
    if (
      trimmed.startsWith("<h") ||
      trimmed.startsWith("<hr") ||
      trimmed.startsWith("<div") ||
      trimmed.startsWith("<!--") ||
      trimmed.startsWith("<ul") ||
      trimmed.startsWith("<ol") ||
      trimmed.startsWith("<li") ||
      trimmed.startsWith("<blockquote")
    ) {
      flushParagraph();
      result.push(trimmed);
      continue;
    }
    // Regular text line — accumulate into paragraph
    paragraphLines.push(trimmed);
    inParagraph = true;
  }
  flushParagraph();

  return result.join("\n");
}

// ── HTML → MDX (for saving from Tiptap) ───────────────────────────────────

export function htmlToMdx(html: string): string {
  let mdx = html;

  // Restore component blocks from data-raw attribute
  mdx = mdx.replace(
    /<div[^>]*data-component="([^"]*)"[^>]*data-raw="([^"]*)"[^>]*>.*?<\/div>/g,
    (_, _comp, raw) => decodeURIComponent(raw)
  );

  // Convert HTML headings to markdown
  mdx = mdx.replace(/<h1[^>]*>(.*?)<\/h1>/g, "# $1");
  mdx = mdx.replace(/<h2[^>]*>(.*?)<\/h2>/g, "## $1");
  mdx = mdx.replace(/<h3[^>]*>(.*?)<\/h3>/g, "### $1");

  // Convert paragraphs
  mdx = mdx.replace(/<p[^>]*>(.*?)<\/p>/gs, "$1");

  // Convert inline formatting
  mdx = mdx.replace(/<strong><em>(.*?)<\/em><\/strong>/g, "***$1***");
  mdx = mdx.replace(/<strong[^>]*>(.*?)<\/strong>/g, "**$1**");
  mdx = mdx.replace(/<em[^>]*>(.*?)<\/em>/g, "*$1*");

  // Convert links
  mdx = mdx.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g, "[$2]($1)");

  // Convert horizontal rules
  mdx = mdx.replace(/<hr[^>]*\/?>/g, "---");

  // Convert blockquotes
  mdx = mdx.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/g, (_, content) => {
    return content
      .trim()
      .split("\n")
      .map((line: string) => `> ${line.trim()}`)
      .join("\n");
  });

  // Convert lists
  mdx = mdx.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (_, content) => {
    return content.replace(/<li[^>]*>(.*?)<\/li>/g, "- $1").trim();
  });
  mdx = mdx.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/g, (_, content) => {
    let i = 0;
    return content.replace(/<li[^>]*>(.*?)<\/li>/g, () => `${++i}. `).trim();
  });

  // Restore HTML comments from JSX
  mdx = mdx.replace(/<!--\s*(.*?)\s*-->/g, "{/* $1 */}");

  // Clean up: remove any remaining HTML tags (except component ones)
  mdx = mdx.replace(/<br\s*\/?>/g, "\n");
  mdx = mdx.replace(/<\/?div[^>]*>/g, "");

  // Clean up excessive newlines
  mdx = mdx.replace(/\n{3,}/g, "\n\n");

  return mdx.trim();
}

/** List of recognized MDX components for the block inserter */
export const COMPONENT_TEMPLATES: Record<string, string> = {
  AffiliateDisclosure: "<AffiliateDisclosure />",
  SafetyNote: '<SafetyNote>\nYour safety note content here.\n</SafetyNote>',
  BudgetCallout:
    '<BudgetCallout\n  productName="Product Name"\n  price="$XX"\n  affiliateUrl="https://..."\n>\nDescription of the budget alternative.\n</BudgetCallout>',
  SourceReviewQuote:
    '<SourceReviewQuote firstName="Name" sourceName="Amazon">\n"Quote text here."\n</SourceReviewQuote>',
  ShopButton:
    '<ShopButton product="Product Name" price="$XX" href="https://..." />',
  ImagePlaceholder:
    '<ImagePlaceholder label="Description of image" dimensions="800x600 px" aspect="product" />',
  PillarLink:
    '<PillarLink to="/slug" label="Pillar Name" />',
};
