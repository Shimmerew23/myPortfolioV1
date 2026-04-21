"use client";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";
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
  const router = useRouter();
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
      onClick={() => router.push(`/portfolio/${project.slug}`)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative rounded-2xl overflow-hidden border border-outline/60 bg-surface-0 shimmer-card group flex flex-col cursor-pointer",
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
                background: `linear-gradient(to bottom, transparent 30%, rgba(32,26,26,0.97) 100%)`,
              }}
            />
          </>
        ) : (
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

        {/* Badges */}
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
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
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
        <h3 className="font-medium text-fg group-hover:text-primary transition-colors mb-1.5 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4 min-h-[2.75rem]">
          {project.tagline}
        </p>
        <div className="flex items-center justify-between gap-2">
          <div className={`flex gap-1.5 ${isFeatured ? "flex-wrap" : "flex-nowrap overflow-hidden"}`}>
            {project.techStack.slice(0, isFeatured ? 6 : 2).map((tech) => (
              <TechPill key={tech} label={tech} size="sm" />
            ))}
            {project.techStack.length > (isFeatured ? 6 : 2) && (
              <TechPill label={`+${project.techStack.length - (isFeatured ? 6 : 2)}`} size="sm" />
            )}
          </div>
          <span className="shrink-0 flex items-center gap-1 text-[11px] font-mono text-primary-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            View Case Study <ArrowRight size={11} />
          </span>
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
    <Link href={`/portfolio/${project.slug}`} className="flex flex-col h-full">
      <div className="relative h-[220px] shrink-0 overflow-hidden">
        {/* Gradient background */}
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
          {/* <span className="text-[10px] font-mono text-text-tertiary/50 opacity-0 group-hover:opacity-100 transition-opacity">
            Details available on request
          </span> */}
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest"
            style={{
              background: `rgba(${colors.primary.join(",")}, 0.15)`,
              border: `1px solid rgba(${colors.primary.join(",")}, 0.3)`,
              color: `rgb(${colors.accent.join(",")})`,
            }}
          >
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-surface-1/80 border border-outline text-text-tertiary">
            Confidential
          </span>
        </div>

        {/* Arrow on hover */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-outline/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-bg/60 backdrop-blur-sm">
          <ArrowUpRight size={13} className="text-primary" />
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-medium text-fg group-hover:text-primary transition-colors mb-1.5 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4 min-h-[2.75rem]">
          {project.tagline}
        </p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-nowrap gap-1.5 overflow-hidden">
            {project.techStack.slice(0, 2).map((tech) => (
              <TechPill key={tech} label={tech} size="sm" />
            ))}
            {project.techStack.length > 2 && (
              <TechPill label={`+${project.techStack.length - 2}`} size="sm" />
            )}
          </div>
          <span className="shrink-0 flex items-center gap-1 text-[11px] font-mono text-primary-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            View Details <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </Link>
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
