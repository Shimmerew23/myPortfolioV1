"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, GraduationCap, Layers, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

const stats = [
  { value: "3+",  label: "Years Experience", note: "Since 2021" },
  { value: "10+", label: "Projects Shipped",  note: "Live in production" },
  { value: "3",   label: "Countries Served",  note: "US · Canada · EU" },
  { value: "5+",  label: "Industries",        note: "SaaS · GIS · AI · more" },
];

const guarantees = [
  "Clean, documented code you own",
  "Defined milestones & deliverables",
  "On-time or negotiated delivery",
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
          {/* ── Right: Image ── */}
          <motion.div variants={staggerItem} className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-80 h-80 sm:w-[380px] sm:h-[420px]">
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
              {/* Floating availability badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-[#171212]/80 backdrop-blur-sm text-emerald-400 text-[11px] font-mono uppercase tracking-widest whitespace-nowrap"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for Projects
              </motion.div>
            </div>
          </motion.div>

          {/* ── Left: Content ── */}
          <div className="space-y-5 order-2 md:order-1">
            {/* Meta chips */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-2">
              {[
                { icon: MapPin, label: "Philippines" },
                { icon: GraduationCap, label: "BS Computer Engineering" },
              ].map(({ icon: Icon, label }) => (
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
              {["Full-Stack Developer", "Prompt Engineer", "Technical Consultant"].map((r, i, arr) => (
                <span key={r} className="flex items-center gap-2">
                  {r}
                  {i < arr.length - 1 && <span className="text-primary-dark">·</span>}
                </span>
              ))}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={staggerItem}
              className="text-text-secondary text-sm leading-relaxed max-w-lg text-justify"
            >
              I build production-ready web applications that are fast, scalable, and built to grow
              your business — from architecture to deployment. Trusted by international clients
              across the US, Canada, and Europe, with a focus on{" "}
              <span className="text-primary-muted">AI-powered platforms</span>.
            </motion.p>

            {/* Guarantees */}
            <motion.ul variants={staggerItem} className="space-y-1.5">
              {guarantees.map((g) => (
                <li key={g} className="flex items-center gap-2 text-xs text-text-secondary">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  {g}
                </li>
              ))}
            </motion.ul>

            {/* CTA buttons */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-bg text-sm font-semibold hover:bg-primary/90 transition-all duration-200"
              >
                Hire Me
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-full border border-outline/60 bg-surface-0 text-text-secondary text-sm font-mono uppercase tracking-widest hover:border-primary/40 hover:text-fg transition-all duration-200"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
        >
          {stats.map(({ value, label, note }) => {
            const num    = value.replace(/\D/g, "");
            const suffix = value.replace(/\d/g, "");
            return (
              <motion.div
                key={label}
                variants={staggerItem}
                className="glass rounded-2xl p-5 text-center hover:border-primary/20 transition-all group border-t border-t-primary/20"
              >
                <p className="font-display text-4xl text-primary mb-1 leading-none">
                  {num}
                  {suffix && <sup className="text-xl text-primary align-super">{suffix}</sup>}
                </p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary mt-1">
                  {label}
                </p>
                <p className="text-[10px] text-text-tertiary/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {note}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Build modes + Philosophy ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-6 glass rounded-2xl overflow-hidden"
        >
          {/* Build modes row */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-outline/40">
            {[
              {
                icon: Layers,
                title: "Build Our Own Products",
                body: "We create scalable apps, platforms, and tools — solving real problems with products we believe in.",
              },
              {
                icon: Users,
                title: "Build for Others",
                body: "MVP development, web & mobile apps, AI solutions, and custom software — built for founders who move fast.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="flex items-start gap-4 p-6 group hover:bg-primary/[0.03] transition-colors duration-300"
              >
                <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-primary/10 border border-primary/20 mt-0.5">
                  <Icon size={16} className="text-primary-muted" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-fg mb-1 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-text-tertiary text-xs leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-outline/40" />

          {/* Philosophy row */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-outline/40">
            {[
              {
                label: "My Approach",
                body: "I started with a simple curiosity about how things work, which grew into a focused career building robust, user-centered web applications. With strong attention to detail and a problem-solving mindset, I create seamless digital experiences that combine solid engineering with intuitive design.",
              },
              {
                label: "How I Work",
                body: "I work with international clients and take full ownership of the development lifecycle — from planning and proposals to launch and handoff. You get clean, well-structured code, organized repositories, and clear documentation so you're never dependent on me long-term.",
              },
            ].map(({ label, body }) => (
              <motion.div key={label} variants={staggerItem} className="p-6">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary-muted mb-3">
                  {label}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed text-justify">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
