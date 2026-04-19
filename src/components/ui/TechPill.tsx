import { cn } from "@/lib/utils";

interface Props {
  label: string;
  size?: "sm" | "md";
  className?: string;
}

export default function TechPill({ label, size = "md", className }: Props) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-outline/60 text-text-secondary font-mono bg-surface-0",
        size === "sm" ? "px-2.5 py-0.5 text-[10px]" : "px-3 py-1 text-xs",
        className
      )}
    >
      {label}
    </span>
  );
}
