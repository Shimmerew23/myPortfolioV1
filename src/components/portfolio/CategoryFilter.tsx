"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {["All", ...categories].map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={cn(
              "relative px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-widest transition-colors duration-200",
              isActive ? "text-primary" : "text-text-tertiary hover:text-fg"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="cat-active"
                className="absolute inset-0 rounded-xl bg-primary-faint border border-primary-dark/50"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}
