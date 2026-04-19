"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Semi-circle — top center */}
      <div className="absolute -top-[220px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full opacity-[0.18] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(55px)" }} />
      {/* Orb — left */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-[180px] w-[400px] h-[400px] rounded-full opacity-[0.13] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(70px)" }} />
      {/* Orb — right */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[180px] w-[400px] h-[400px] rounded-full opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #c07070 0%, transparent 65%)", filter: "blur(70px)" }} />
      {/* Glow band */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, #8d021f 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <motion.h2
            variants={staggerItem}
            className="font-display text-5xl sm:text-6xl font-bold text-fg leading-tight"
          >
            Let&apos;s Build{" "}
            <span className="italic font-normal text-primary">Something</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-text-secondary font-mono text-sm leading-relaxed max-w-lg mx-auto"
          >
            Interested in working together? I&apos;m always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            vision.
          </motion.p>

          <motion.div variants={staggerItem}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-outline/60 bg-surface-0 text-fg text-sm font-mono uppercase tracking-widest hover:border-primary/40 hover:bg-primary-faint transition-all duration-300"
            >
              Get in Touch
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
