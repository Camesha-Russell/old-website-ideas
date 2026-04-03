import { DollarSign } from "lucide-react";

interface BudgetCalloutProps {
  children: React.ReactNode;
}

const BudgetCallout = ({ children }: BudgetCalloutProps) => (
  <div className="my-6 flex gap-3 rounded-xl border border-border bg-card px-5 py-4">
    <DollarSign className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
    <div className="text-sm font-body text-foreground">{children}</div>
  </div>
);

export default BudgetCallout;
