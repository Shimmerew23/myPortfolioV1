"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

const chips = [
  { icon: MapPin,          label: "Philippines" },
  { icon: Briefcase,       label: "Available for Work" },
  { icon: GraduationCap,   label: "BS Computer Engineering" },
];

const roles = ["Full-Stack Developer", "Prompt Engineer", "Technical Consultant"];

const stats = [
  { value: "3+",  label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "3",   label: "Countries Served" },
  { value: "5+",  label: "Industries Served" },
];

export default function AboutHero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Orb — top center burgundy */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 70%)", filter: "blur(80px)" }} />
      {/* Orb — white top-right */}
      <div className="absolute -top-10 right-1/4 w-[400px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #ffffff 0%, transparent 65%)", filter: "blur(70px)" }} />
      {/* Orb — white bottom-left */}
      <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #ffffff 0%, transparent 65%)", filter: "blur(80px)" }} />
      {/* Semi-circle — left edge */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-[200px] w-[400px] h-[400px] rounded-full opacity-[0.18] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 70%)", filter: "blur(50px)" }} />
      {/* Semi-circle — right edge */}
      <div className="absolute top-1/3 -right-[200px] w-[400px] h-[400px] rounded-full opacity-[0.15] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #c07070 0%, transparent 70%)", filter: "blur(50px)" }} />
      {/* Semi-circle — bottom edge center */}
      <div className="absolute -bottom-[180px] left-1/2 -translate-x-1/2 w-[600px] h-[360px] rounded-full opacity-[0.14] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(60px)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-[3fr_2fr] gap-10 items-center"
        >
          {/* ── Left: Content ── (swapped to order-1 on desktop) */}
          {/* ── Right: Image ── */}
          <motion.div variants={staggerItem} className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-80 h-80 sm:w-[380px] sm:h-[400px]">
              <Image
                src="/images/profile.jpg"
                alt="Justine Psalm Acosta"
                fill
                sizes="(max-width: 640px) 320px, 380px"
                className="object-cover object-top rounded-2xl"
                priority
              />
              {/* Edge fade */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to bottom, #171212 0%, transparent 14%, transparent 62%, #171212 100%),
                    linear-gradient(to right,  #171212 0%, transparent 14%, transparent 86%, #171212 100%)
                  `,
                }}
              />
            </div>
          </motion.div>

          {/* ── Left: Content ── */}
          <div className="space-y-5 order-2 md:order-1">
            {/* Chips */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-2">
              {chips.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline/60 bg-surface-0 text-text-secondary text-[11px] font-mono uppercase tracking-widest"
                >
                  <Icon size={11} className="text-primary-muted" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl sm:text-6xl font-normal text-fg leading-[1.05]"
            >
              Justine Psalm M.{" "}
              <span className="italic text-primary block">Acosta</span>
            </motion.h1>

            {/* Roles */}
            <motion.p
              variants={staggerItem}
              className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-secondary flex flex-wrap items-center gap-2"
            >
              {roles.map((r, i) => (
                <span key={r} className="flex items-center gap-2">
                  {r}
                  {i < roles.length - 1 && (
                    <span className="text-primary-dark">·</span>
                  )}
                </span>
              ))}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={staggerItem}
              className="text-text-secondary text-base leading-relaxed font-mono text-sm max-w-lg text-justify"
            >
              I build production-ready web applications that are fast, scalable, 
              and built to grow your business — from architecture to deployment. 
              Trusted by international clients across the US, Canada, and Europe, 
              with a focus on modern{" "}
              <span className="text-primary-muted">AI-powered platforms</span>.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
        >
          {stats.map(({ value, label }) => {
            const num    = value.replace(/\D/g, "");
            const suffix = value.replace(/\d/g, "");
            return (
              <motion.div
                key={label}
                variants={staggerItem}
                className="glass rounded-2xl p-5 text-center hover:border-primary/20 transition-all"
              >
                <p className="font-display text-4xl text-primary mb-1 leading-none">
                  {num}
                  {suffix && (
                    <sup className="text-xl text-primary align-super">{suffix}</sup>
                  )}
                </p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary mt-2">
                  {label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Philosophy columns ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6 mt-6 text-justify"
        >
          {[
            {
              label: "My Approach",
              body: "I started with a simple curiosity about how things work, which grew into a focused career building robust, user-centered web applications. With strong attention to detail and a problem-solving mindset, I create seamless digital experiences that combine solid engineering with intuitive design. From initial concept to deployment, I specialize in turning complex ideas into clean, scalable software.",
            },
            {
              label: "How I Work",
              body: "I work with international clients and take full ownership of the development lifecycle — from planning and proposals to launch and handoff. You get clean, well-structured code, organized repositories, and clear documentation, so you’re never dependent on me long-term. Each project is delivered in defined phases, with clear milestones, deliverables, and payment checkpoints to keep everything transparent and on track.",
            },
          ].map(({ label, body }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="glass rounded-2xl p-8 border-l-2 border-l-primary-dark"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary-muted mb-4">
                {label}
              </p>
              <p className="text-text-secondary font-mono text-sm leading-relaxed">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
