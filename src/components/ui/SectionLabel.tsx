import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-muted font-mono",
        className
      )}
    >
      <span className="w-4 h-px bg-primary-muted/60" />
      {children}
      <span className="w-4 h-px bg-primary-muted/60" />
    </span>
  );
}
