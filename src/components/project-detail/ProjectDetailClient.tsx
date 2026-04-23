"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Shield, ChevronLeft, Rocket } from "lucide-react";
import type { Project } from "@/types";
import { getCategoryColors } from "@/lib/categoryColors";
import TechPill from "@/components/ui/TechPill";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface Props {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

export default function ProjectDetailClient({ project, prev, next }: Props) {
  const colors = getCategoryColors(project.category);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero with background image */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden"
      >
        {/* Background image */}
        {project.image && (
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
        )}

        {/* Color tint — ties image hue to the project's accent */}
        <div
          className="absolute inset-0"
          style={{
            background: `rgba(${colors.primary.join(",")}, 0.08)`,
            mixBlendMode: "color",
          }}
        />

        {/* Gradient overlay — fades into page bg */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(13,11,11,0.3) 0%, rgba(13,11,11,0.6) 50%, rgba(13,11,11,1) 88%)",
          }}
        />

        {/* Atmospheric orb */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-[0.12]"
          style={{
            background: `radial-gradient(circle, rgb(${colors.primary.join(",")}) 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 pt-32 w-full">
          {/* Back link */}
          <motion.div variants={staggerItem} className="mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <ChevronLeft size={15} />
              Back to Portfolio
            </Link>
          </motion.div>

          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest"
              style={{
                background: `rgba(${colors.primary.join(",")}, 0.2)`,
                border: `1px solid rgba(${colors.primary.join(",")}, 0.4)`,
                color: `rgb(${colors.accent.join(",")})`,
              }}
            >
              {project.category}
            </span>
            {project.isNda && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-surface-1 border border-outline text-text-tertiary">
                <Shield size={10} />
                NDA Project
              </span>
            )}
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-normal text-white leading-tight mb-4"
          >
            {project.title.split("—")[0]}
            {project.title.includes("—") && (
              <span className="italic text-primary">— {project.title.split("—")[1]}</span>
            )}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8"
          >
            {project.description}
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-bg font-medium text-sm hover:bg-white/90 transition-all"
              >
                <ExternalLink size={14} />
                Live Site
              </a>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/30 text-white/80 hover:text-white hover:border-white/50 text-sm transition-all"
            >
              <Rocket size={14} />
              Build Something Similar
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-12">
            {/* Challenge */}
            <ScrollReveal>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="mb-4">
                  <SectionLabel>The Challenge</SectionLabel>
                </div>
                <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
              </div>
            </ScrollReveal>

            {/* Solution */}
            <ScrollReveal delay={0.1}>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="mb-4">
                  <SectionLabel>The Solution</SectionLabel>
                </div>
                <p className="text-text-secondary leading-relaxed">{project.solution}</p>
              </div>
            </ScrollReveal>

            {/* Features */}
            <ScrollReveal delay={0.15}>
              <div>
                <div className="mb-6">
                  <SectionLabel>Key Features</SectionLabel>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      className="glass rounded-xl p-4 flex items-start gap-3 group hover:border-primary/20 transition-all"
                    >
                      <span
                        className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px]"
                        style={{
                          background: `rgba(${colors.primary.join(",")}, 0.2)`,
                          color: `rgb(${colors.accent.join(",")})`,
                          border: `1px solid rgba(${colors.primary.join(",")}, 0.3)`,
                        }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-text-secondary text-sm leading-relaxed group-hover:text-fg transition-colors">
                        {feat}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <ScrollReveal>
              <div className="glass rounded-2xl p-5 sticky top-28 space-y-5">
                {/* Tech stack */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <TechPill key={tech} label={tech} />
                    ))}
                  </div>
                </div>

                {project.liveUrl && (
                  <div className="pt-4 border-t border-outline/30">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full text-sm text-text-secondary hover:text-primary transition-colors group"
                    >
                      <span>View Live Site</span>
                      <ExternalLink
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  </div>
                )}

                {/* CTA */}
                <div className="pt-4 border-t border-outline/30">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary-muted mb-2">
                    Like what you see?
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed mb-4">
                    I can build something similar — or better — tailored to your business.
                  </p>
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between w-full px-4 py-3 rounded-xl bg-primary text-bg text-sm font-semibold hover:bg-primary/90 transition-all duration-200"
                  >
                    Start a Project
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-20 pt-10 border-t border-outline/20 flex flex-col sm:flex-row items-stretch gap-4">
          {prev ? (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="flex-1 glass rounded-2xl p-5 group hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-2 text-text-tertiary text-xs font-mono uppercase tracking-widest mb-2">
                <ArrowLeft size={12} />
                Previous
              </div>
              <p className="text-fg text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {next ? (
            <Link
              href={`/portfolio/${next.slug}`}
              className="flex-1 glass rounded-2xl p-5 text-right group hover:border-primary/20 transition-all"
            >
              <div className="flex items-center justify-end gap-2 text-text-tertiary text-xs font-mono uppercase tracking-widest mb-2">
                Next
                <ArrowRight size={12} />
              </div>
              <p className="text-fg text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
                {next.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  );
}
