import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Justine Psalm Acosta's portfolio of web applications, SaaS platforms, and AI-integrated products.",
};

const stats = [
  { value: "10+", label: "Projects Shipped" },
  { value: "3",   label: "Countries" },
  { value: "5+",  label: "Industries" },
];

export default function PortfolioPage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main className="pt-28 pb-20 min-h-screen relative overflow-hidden">
        {/* Orbs */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none opacity-[0.10]"
          style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="fixed top-0 right-0 w-96 h-96 pointer-events-none opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #8d021f 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="fixed top-1/3 -left-40 w-80 h-80 pointer-events-none opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #c07070 0%, transparent 70%)", filter: "blur(80px)" }}
        />

        <div className="max-w-6xl mx-auto px-6">
          {/* ── Hero header ── */}
          <div className="mb-14 text-center">
            <div className="flex justify-center mb-4">
              <SectionLabel>Portfolio</SectionLabel>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl font-normal text-fg mb-5">
              Selected <span className="italic text-primary">Work</span>
            </h1>

            <p className="text-text-secondary text-base max-w-lg mx-auto mb-10 leading-relaxed">
              A curated selection of projects — some public, some under NDA. Each
              represents a real business problem solved with thoughtful engineering.
            </p>

            {/* Stats bar */}
            <div className="inline-flex items-center divide-x divide-outline/40 glass rounded-2xl border border-outline/40 overflow-hidden mb-10">
              {stats.map(({ value, label }) => (
                <div key={label} className="px-8 py-3 text-center">
                  <p className="font-display text-2xl text-primary leading-none mb-0.5">{value}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <ProjectGrid projects={projects} />

          {/* ── Bottom CTA nudge ── */}
          <div className="mt-20 pt-10 border-t border-outline/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-fg font-medium mb-1">Don&apos;t see exactly what you need?</p>
              <p className="text-text-secondary text-sm">
                Every project starts with a conversation. Let&apos;s talk about yours.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-bg text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shrink-0"
            >
              Start a Project
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
