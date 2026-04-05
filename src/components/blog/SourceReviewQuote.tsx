interface SourceReviewQuoteProps {
  firstName: string;
  sourceName: string;
  sourceUrl?: string;
  children: React.ReactNode;
}

const SourceReviewQuote = ({ firstName, sourceName, sourceUrl, children }: SourceReviewQuoteProps) => (
  <blockquote className="my-6 rounded-xl border border-border bg-muted/40 px-5 py-4 not-italic">
    <p className="font-body text-foreground leading-relaxed italic text-sm md:text-base">{children}</p>
    <footer className="mt-3 flex items-center gap-1.5 text-xs font-nav text-muted-foreground">
      <span className="text-foreground font-medium">{firstName}</span>
      <span>via</span>
      {sourceUrl ? (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          {sourceName}
        </a>
      ) : (
        <span>{sourceName}</span>
      )}
    </footer>
  </blockquote>
);

export default SourceReviewQuote;
