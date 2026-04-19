"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionLabel from "@/components/ui/SectionLabel";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Semi-circle — top center */}
      <div className="absolute -top-[220px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full opacity-[0.18] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(55px)" }} />
      {/* Orb — bottom-right */}
      <div className="absolute -bottom-20 -right-20 w-[700px] h-[700px] opacity-[0.13] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(80px)" }} />
      {/* Orb — top-left */}
      <div className="absolute top-0 -left-10 w-[400px] h-[400px] opacity-[0.09] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #c07070 0%, transparent 70%)", filter: "blur(60px)" }} />
      {/* Glow band — center horizontal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[180px] opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, #8d021f 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 text-center"
        >
          <motion.h2
            variants={staggerItem}
            className="font-display text-4xl font-normal text-fg mb-4"
          >
            Technologies <span className="italic text-primary">& Tools</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="flex justify-center">
            <SectionLabel>Technologies I work with daily</SectionLabel>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={staggerItem}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.accent }}
                />
                <h3 className="text-sm font-mono uppercase tracking-widest text-text-secondary">
                  {cat.label}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    accent={cat.accent}
                    accentRgb={cat.accentRgb}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillBadge({
  name,
  icon,
  accent,
  accentRgb,
}: {
  name: string;
  icon?: string;
  accent: string;
  accentRgb: [number, number, number];
}) {
  return (
    <div
      className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-default"
      style={{
        borderColor: "var(--outline)",
        background: "var(--surface-0)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = `rgba(${accentRgb.join(",")}, 0.5)`;
        el.style.background = `rgba(${accentRgb.join(",")}, 0.06)`;
        el.style.boxShadow = `0 0 20px rgba(${accentRgb.join(",")}, 0.1)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--outline)";
        el.style.background = "var(--surface-0)";
        el.style.boxShadow = "none";
      }}
    >
      {icon && (
        <img
          src={icon}
          alt={name}
          className="w-4 h-4 object-contain"
          loading="lazy"
        />
      )}
      <span className="text-sm text-text-secondary group-hover:text-fg transition-colors">
        {name}
      </span>
    </div>
  );
}
