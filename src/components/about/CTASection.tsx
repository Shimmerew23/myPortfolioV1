"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Shield, MessageCircle } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

const trust = [
  { icon: Clock,         label: "Responds within 24h" },
  { icon: MessageCircle, label: "Free initial consultation" },
  { icon: Shield,        label: "No lock-in contracts" },
];

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Orbs */}
      <div className="absolute -top-[220px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full opacity-[0.18] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(55px)" }} />
      <div className="absolute top-1/2 -translate-y-1/2 -left-[180px] w-[400px] h-[400px] rounded-full opacity-[0.13] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(70px)" }} />
      <div className="absolute top-1/2 -translate-y-1/2 -right-[180px] w-[400px] h-[400px] rounded-full opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #c07070 0%, transparent 65%)", filter: "blur(70px)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, #8d021f 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Glass card */}
          <motion.div
            variants={staggerItem}
            className="glass rounded-3xl p-10 sm:p-14 text-center border border-outline/50 relative overflow-hidden"
          >
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-[0.08] pointer-events-none"
              style={{ background: "radial-gradient(ellipse, #ffb3b2 0%, transparent 70%)", filter: "blur(40px)" }} />

            {/* Availability badge */}
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-[11px] font-mono uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Currently Accepting Projects
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={staggerItem}
              className="font-display text-5xl sm:text-6xl font-bold text-fg leading-tight mb-5"
            >
              Ready to Build{" "}
              <span className="italic font-normal text-primary">Something Real?</span>
            </motion.h2>

            {/* Body */}
            <motion.p
              variants={staggerItem}
              className="text-text-secondary text-base leading-relaxed max-w-lg mx-auto mb-10"
            >
              Whether you need an MVP in two weeks, a full SaaS platform, or an
              AI-powered tool — I'll help you ship fast, build right, and own
              every line of it.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-3 mb-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-bg text-sm font-semibold hover:bg-primary/90 transition-all duration-200"
              >
                Start a Project
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-outline/60 bg-surface-0 text-fg text-sm font-mono uppercase tracking-widest hover:border-primary/40 hover:bg-primary-faint transition-all duration-300"
              >
                View My Work
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap justify-center gap-6"
            >
              {trust.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-text-tertiary text-xs font-mono">
                  <Icon size={12} className="text-primary-muted" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
