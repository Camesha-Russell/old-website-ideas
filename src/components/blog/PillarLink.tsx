import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PillarLinkProps {
  to: string;
  label: string;
}

const PillarLink = ({ to, label }: PillarLinkProps) => (
  <Link
    to={to}
    className="my-4 inline-flex items-center gap-2 rounded-full border border-foreground px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
  >
    {label}
    <ArrowRight className="h-4 w-4" />
  </Link>
);

export default PillarLink;
