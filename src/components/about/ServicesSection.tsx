"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2, Smartphone, Layers, CreditCard, Brain, Map, Zap, Server, Timer, Palette,
  Lightbulb, ClipboardList, Wrench, Rocket,
} from "lucide-react";
import { services } from "@/data/services";
import SectionLabel from "@/components/ui/SectionLabel";
import { staggerContainer, staggerItem } from "@/lib/motion";

const processSteps = [
  { icon: Lightbulb, label: "Idea", desc: "Understanding your vision and goals." },
  { icon: ClipboardList, label: "Planning", desc: "Define scope, features, and architecture." },
  { icon: Wrench, label: "Build", desc: "Fast, iterative development with constant feedback." },
  { icon: Rocket, label: "Launch", desc: "Deploy, refine, and scale." },
];

const iconMap: Record<string, React.ElementType> = {
  Code2, Smartphone, Layers, CreditCard, Brain, Map, Zap, Server, Timer, Palette,
};

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [featured, ...rest] = services;

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Orbs */}
      <div className="absolute -top-[220px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full opacity-[0.18] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(55px)" }} />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(90px)" }} />
      <div className="absolute -bottom-10 -left-20 w-[500px] h-[500px] opacity-[0.09] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #c07070 0%, transparent 70%)", filter: "blur(70px)" }} />
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
            How I Can <span className="italic text-primary">Help You</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="flex justify-center">
            <SectionLabel>Services & Specializations</SectionLabel>
          </motion.div>
        </motion.div>

        {/* Floating process bar — far left, like Contact socials */}
        <div className="fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 hidden lg:flex">
          {processSteps.map(({ icon: StepIcon, label, desc }) => (
            <div key={label} className="group relative w-10 h-10 rounded-xl glass border border-outline/60 flex items-center justify-center hover:border-primary/40 hover:bg-primary-faint transition-all duration-200">
              <StepIcon size={15} className="text-text-secondary group-hover:text-primary transition-colors" />
              <div className="pointer-events-none absolute left-full ml-3 px-2.5 py-1.5 rounded-lg bg-surface-1 border border-outline/60 whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                <p className="text-[10px] font-mono uppercase tracking-widest text-fg">{label}</p>
                <p className="text-[10px] text-text-tertiary mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
          <div className="w-px h-12 bg-outline/40 mt-1" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
            {/* Featured card — MVP */}
            {featured && (() => {
              const FeaturedIcon = iconMap[featured.icon] ?? Code2;
              return (
                <motion.div
                  variants={staggerItem}
                  className="relative glass rounded-2xl p-6 sm:p-8 border border-primary/20 group"
                >
                  <div className="absolute -top-10 -right-10 w-[300px] h-[200px] opacity-[0.15] pointer-events-none"
                    style={{ background: `radial-gradient(ellipse, ${featured.accent} 0%, transparent 70%)`, filter: "blur(40px)" }} />

                  <span
                    className="absolute -top-3.5 right-4 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border z-10"
                    style={{ color: featured.accent, borderColor: `${featured.accent}40`, background: `#1a0a08` }}
                  >
                    Most Popular
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 relative z-10">
                    <div className="flex items-start gap-5 flex-1">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${featured.accent}20`, border: `1px solid ${featured.accent}40` }}
                      >
                        <FeaturedIcon size={22} style={{ color: featured.accent }} />
                      </div>
                      <div>
                        <div className="mb-1">
                          <h3 className="text-base font-semibold text-fg group-hover:text-primary transition-colors">
                            {featured.title}
                          </h3>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                          {featured.description}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right hidden sm:block">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary mb-1">Delivery</p>
                      <p className="font-display text-2xl text-primary">7–14</p>
                      <p className="text-[10px] text-text-tertiary font-mono">Days</p>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* Rest of services — 3-col grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((service) => {
                const Icon = iconMap[service.icon] ?? Code2;
                return (
                  <motion.div
                    key={service.title}
                    variants={staggerItem}
                    className="shimmer-card glass rounded-2xl p-5 group hover:border-primary/20 transition-all duration-300"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${service.accent}18`, border: `1px solid ${service.accent}30` }}
                    >
                      <Icon size={18} style={{ color: service.accent }} />
                    </div>
                    <h3 className="text-sm font-medium text-fg mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-tertiary text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
      </div>
    </section>
  );
}
