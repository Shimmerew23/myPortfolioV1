"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, Shield, ChevronLeft } from "lucide-react";
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
    <div className="min-h-screen pt-32 pb-20">
      {/* Back */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm"
        >
          <ChevronLeft size={15} />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 mb-16"
      >
        {/* Atmospheric orb */}
        <div
          className="fixed top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-[0.08]"
          style={{
            background: `radial-gradient(circle, rgb(${colors.primary.join(",")}) 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />

        <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className="px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest"
            style={{
              background: `rgba(${colors.primary.join(",")}, 0.15)`,
              border: `1px solid rgba(${colors.primary.join(",")}, 0.35)`,
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
          className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-fg leading-tight mb-4"
        >
          {project.title.split("—")[0]}
          {project.title.includes("—") && (
            <span className="italic text-primary">— {project.title.split("—")[1]}</span>
          )}
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="text-text-secondary text-lg leading-relaxed max-w-3xl mb-6"
        >
          {project.description}
        </motion.p>

        <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-bg font-medium text-sm hover:bg-primary/90 transition-all"
            >
              <ExternalLink size={14} />
              View Live
            </a>
          )}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-outline text-text-secondary hover:text-fg hover:border-outline-hover text-sm transition-all"
          >
            Discuss a Project
          </Link>
        </motion.div>
      </motion.section>

      {/* Cover image */}
      {project.image && !project.isNda && (
        <ScrollReveal className="max-w-6xl mx-auto px-6 mb-16">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-outline/60">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 60%, rgba(23,18,18,0.6) 100%)",
              }}
            />
          </div>
        </ScrollReveal>
      )}

      <div className="max-w-6xl mx-auto px-6">
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
          <div className="space-y-6">
            <ScrollReveal>
              <div className="glass rounded-2xl p-5 sticky top-28">
                <h3 className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <TechPill key={tech} label={tech} />
                  ))}
                </div>

                {project.liveUrl && (
                  <div className="mt-6 pt-4 border-t border-outline/30">
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
