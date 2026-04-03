import { ShieldCheck } from "lucide-react";

interface SafetyNoteProps {
  children: React.ReactNode;
}

const SafetyNote = ({ children }: SafetyNoteProps) => (
  <div className="my-6 flex gap-3 rounded-xl border-l-4 border-accent bg-accent/20 px-5 py-4">
    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
    <div className="text-sm font-body text-foreground">{children}</div>
  </div>
);

export default SafetyNote;
