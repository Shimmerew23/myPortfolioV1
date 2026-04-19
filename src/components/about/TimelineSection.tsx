"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { journeyItems } from "@/data/journey";
import SectionLabel from "@/components/ui/SectionLabel";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function TimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Semi-circle — top center */}
      <div className="absolute -top-[220px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full opacity-[0.18] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(55px)" }} />
      {/* Orb — top-right */}
      <div className="absolute -top-10 -right-10 w-[600px] h-[600px] opacity-[0.13] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(80px)" }} />
      {/* Orb — bottom center */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-[0.09] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #c07070 0%, transparent 70%)", filter: "blur(80px)" }} />
      {/* Glow band */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[180px] opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, #8d021f 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 text-center"
        >
          <motion.h2 variants={staggerItem} className="font-display text-4xl font-normal text-fg mb-4">
            The <span className="italic text-primary">Journey</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="flex justify-center">
            <SectionLabel>Career milestones & Achievements</SectionLabel>
          </motion.div>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Left vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-outline/40" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {journeyItems.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative pl-10 cursor-default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Hover glow */}
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 -left-2 rounded-xl pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(141,2,31,0.14) 0%, transparent 70%)" }}
                    />
                  )}
                </AnimatePresence>

                {/* Dot */}
                <motion.div
                  animate={
                    hovered === i
                      ? { scale: 1.6, boxShadow: "0 0 14px rgba(255,179,178,0.55)" }
                      : { scale: 1, boxShadow: "0 0 0px transparent" }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full z-10 ${
                    item.active
                      ? "bg-primary"
                      : "bg-primary-dark opacity-60"
                  }`}
                />

                {/* Left accent bar on hover */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ originY: 0 }}
                  className="absolute left-[5px] top-6 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-primary-dark via-primary-dark to-transparent z-0"
                />

                {/* Year */}
                <motion.p
                  animate={{ color: hovered === i ? "#c07070" : "#7a6060" }}
                  transition={{ duration: 0.2 }}
                  className="text-[10px] font-mono uppercase tracking-[0.2em] mb-2"
                >
                  {item.year}
                </motion.p>

                {/* Role */}
                <motion.h3
                  animate={{ x: hovered === i ? 5 : 0, color: hovered === i ? "#ece0df" : "#c9b8b7" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="font-display text-2xl italic mb-3 leading-tight"
                >
                  {item.role}
                </motion.h3>

                {/* Org */}
                {item.org && (
                  <p className="text-xs font-mono text-primary/60 mb-2">{item.org}</p>
                )}

                {/* Description */}
                <motion.p
                  animate={{ opacity: hovered === i ? 0.85 : 0.55 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-mono leading-relaxed text-justify text-text-secondary"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
