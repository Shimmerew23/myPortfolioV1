"use client";
import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { getCategoryColors } from "@/lib/categoryColors";
import TechPill from "@/components/ui/TechPill";
import { cn } from "@/lib/utils";

interface Props {
  project: Project;
  variant?: "featured" | "wide" | "default";
  priority?: boolean;
}

export default function ProjectCard({ project, variant = "default", priority }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });
  const colors = getCategoryColors(project.category);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y, opacity: 1 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setGlow((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  const isFeatured = variant === "featured";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative rounded-2xl overflow-hidden border border-outline/60 bg-surface-0 shimmer-card group flex flex-col",
        isFeatured ? "col-span-2 h-[520px]" : "h-[380px]"
      )}
    >
      {/* Magnetic glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(circle 200px at ${glow.x}% ${glow.y}%, rgba(${colors.primary.join(",")}, 0.12), transparent 70%)`,
          opacity: glow.opacity,
        }}
      />

      {project.isNda ? (
        <NdaCardContent project={project} colors={colors} isFeatured={isFeatured} />
      ) : (
        <PublicCardContent project={project} colors={colors} isFeatured={isFeatured} priority={priority} />
      )}
    </motion.div>
  );
}

function PublicCardContent({
  project,
  colors,
  isFeatured,
  priority,
}: {
  project: Project;
  colors: ReturnType<typeof getCategoryColors>;
  isFeatured: boolean;
  priority?: boolean;
}) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="flex flex-col h-full">
      <div className="relative flex-1">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={priority}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, transparent 40%, rgba(32,26,26,0.95) 100%)`,
              }}
            />
          </>
        ) : (
          /* No-image placeholder */
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{
              background: `linear-gradient(135deg, rgba(${colors.primary.join(",")},0.1) 0%, rgba(${colors.secondary.join(",")},0.05) 100%)`,
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: `rgba(${colors.primary.join(",")}, 0.12)`,
                border: `1px solid rgba(${colors.primary.join(",")}, 0.25)`,
              }}
            >
              <HelpCircle
                size={26}
                style={{ color: `rgba(${colors.accent.join(",")}, 0.6)` }}
                strokeWidth={1.5}
              />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary">
              No preview
            </span>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest"
            style={{
              background: `rgba(${colors.primary.join(",")}, 0.2)`,
              border: `1px solid rgba(${colors.primary.join(",")}, 0.4)`,
              color: `rgb(${colors.accent.join(",")})`,
            }}
          >
            {project.category}
          </span>
          {project.liveUrl && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-primary-faint border border-primary-dark/50 text-primary">
              Live
            </span>
          )}
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-outline/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-bg/60 backdrop-blur-sm">
          <ArrowUpRight size={13} className="text-primary" />
        </div>
      </div>

      <div className="p-5 relative z-10">
        <h3 className="font-medium text-fg group-hover:text-primary transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, isFeatured ? 6 : 3).map((tech) => (
            <TechPill key={tech} label={tech} size="sm" />
          ))}
          {project.techStack.length > (isFeatured ? 6 : 3) && (
            <TechPill label={`+${project.techStack.length - (isFeatured ? 6 : 3)}`} size="sm" />
          )}
        </div>
      </div>
    </Link>
  );
}

function NdaCardContent({
  project,
  colors,
  isFeatured,
}: {
  project: Project;
  colors: ReturnType<typeof getCategoryColors>;
  isFeatured: boolean;
}) {
  return (
    <div className="flex flex-col h-full cursor-default">
      <div className="relative flex-1 overflow-hidden">
        {/* Subtle gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(${colors.primary.join(",")},0.08) 0%, rgba(23,18,18,1) 100%)`,
          }}
        />

        {/* Hex stream */}
        <HexStreamBg colors={colors} />

        {/* Scanline on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden"
          style={{ transition: "opacity 0.3s" }}
        >
          <div
            className="absolute left-0 right-0 h-20 pointer-events-none"
            style={{
              background: `linear-gradient(transparent, rgba(${colors.primary.join(",")}, 0.08), transparent)`,
              animation: "scanline 3s linear infinite",
            }}
          />
        </div>

        {/* Centred lock icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgba(23,18,18,0.8)",
              border: `1px solid rgba(${colors.primary.join(",")}, 0.25)`,
              backdropFilter: "blur(8px)",
            }}
          >
            <ShieldCheck
              size={24}
              style={{ color: `rgba(${colors.accent.join(",")}, 0.7)` }}
              strokeWidth={1.5}
            />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary">
            Under NDA
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest"
            style={{
              background: "rgba(23,18,18,0.7)",
              border: "1px solid var(--outline)",
              color: "var(--text-tertiary)",
            }}
          >
            Confidential
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-medium text-fg mb-1.5">{project.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <TechPill key={tech} label={tech} size="sm" />
          ))}
          {project.techStack.length > 3 && (
            <TechPill label={`+${project.techStack.length - 3}`} size="sm" />
          )}
        </div>
      </div>
    </div>
  );
}

function HexStreamBg({ colors }: { colors: ReturnType<typeof getCategoryColors> }) {
  const rows = Array.from({ length: 20 }, (_, i) => {
    let line = "";
    for (let j = 0; j < 50; j++) {
      const chars = "0123456789abcdef ";
      line += chars[(i * 31 + j * 17) % chars.length];
    }
    return line;
  });

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
      <div
        className="font-mono text-[9px] leading-4 whitespace-pre"
        style={{
          color: `rgb(${colors.primary.join(",")})`,
          animation: "data-stream 20s linear infinite",
        }}
      >
        {[...rows, ...rows].join("\n")}
      </div>
    </div>
  );
}
