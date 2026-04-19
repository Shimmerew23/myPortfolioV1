"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2, Smartphone, Layers, CreditCard, Brain, Map, Zap, Server,
} from "lucide-react";
import { services } from "@/data/services";
import SectionLabel from "@/components/ui/SectionLabel";
import { staggerContainer, staggerItem } from "@/lib/motion";

const iconMap: Record<string, React.ElementType> = {
  Code2, Smartphone, Layers, CreditCard, Brain, Map, Zap, Server,
};

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Semi-circle — top center */}
      <div className="absolute -top-[220px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full opacity-[0.18] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(55px)" }} />
      {/* Orb — top center */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 65%)", filter: "blur(90px)" }} />
      {/* Orb — bottom-left */}
      <div className="absolute -bottom-10 -left-20 w-[500px] h-[500px] opacity-[0.09] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #c07070 0%, transparent 70%)", filter: "blur(70px)" }} />
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
            What I <span className="italic text-primary">do?</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="flex justify-center">
            <SectionLabel>Services & Specializations</SectionLabel>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service) => {
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
        </motion.div>
      </div>
    </section>
  );
}
