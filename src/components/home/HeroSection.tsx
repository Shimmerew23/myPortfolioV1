"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Code2, Brain, Briefcase, ArrowRight, Mail,
  CheckCircle2, Clock, Globe,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { staggerContainer, staggerItem, fadeIn } from "@/lib/motion";

const chips = [
  { icon: Code2, label: "Full Stack Developer" },
  { icon: Brain, label: "Prompt Engineer" },
  { icon: Briefcase, label: "Technical Consultant" },
];


const trustChips = [
  { icon: CheckCircle2, label: "On-time delivery" },
  { icon: Clock, label: "Fast turnaround" },
  { icon: Globe, label: "US · CA · EU clients" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffb3b2 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Atmospheric orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.13] animate-[float-orb_9s_ease-in-out_infinite]"
          style={{
            background: "radial-gradient(circle, #8d021f 0%, transparent 65%)",
            top: "-10%",
            right: "-10%",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.08] animate-[orb-drift_14s_ease-in-out_infinite]"
          style={{
            background: "radial-gradient(circle, #ffb3b2 0%, transparent 70%)",
            bottom: "0%",
            left: "-5%",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full py-16">
        {/* ── Text column ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1"
        >
          {/* Role chips */}
          <motion.div variants={staggerItem} className="mb-6 flex flex-wrap gap-2">
            {chips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary-dark/40 bg-primary-faint text-primary text-xs font-mono"
              >
                <Icon size={11} />
                {label}
              </span>
            ))}
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={staggerItem}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.05] text-fg mb-4"
          >
            Justine Psalm{" "}
            <span className="italic text-primary">Acosta</span>
          </motion.h1>

          {/* Value tagline */}
          <motion.p
            variants={staggerItem}
            className="text-primary-muted font-mono text-sm mb-5 tracking-wide"
          >
            I turn ideas into production-ready platforms — end to end.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6 max-w-lg text-justify"
          >
            Building scalable web platforms from system architecture to
            deployment. Working with clients across the US, Canada, and Europe,
            specializing in{" "}
            <span className="text-primary-muted">AI-integrated applications</span>{" "}
            that actually ship. Based in the Philippines.
          </motion.p>

          {/* Trust chips */}
          <motion.div variants={staggerItem} className="flex flex-wrap gap-2 mb-7">
            {trustChips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-1 border border-outline text-text-secondary text-xs"
              >
                <Icon size={12} className="text-green-400" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={staggerItem} className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-bg font-semibold text-sm hover:bg-primary/90 transition-all shadow-[0_0_24px_rgba(255,179,178,0.25)] hover:shadow-[0_0_32px_rgba(255,179,178,0.4)]"
            >
              Start a Project
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-outline hover:border-primary/40 text-text-secondary hover:text-fg text-sm transition-all"
            >
              View My Work
            </Link>
          </motion.div>

          {/* Socials + availability */}
          <motion.div variants={staggerItem} className="flex items-center gap-3 flex-wrap">
            <a
              href="https://github.com/Shimmerew23"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-outline flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-all"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/justinesam023/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-outline flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-all"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href="mailto:justine.psalm23@gmail.com"
              className="w-9 h-9 rounded-lg border border-outline flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-all"
            >
              <Mail size={15} />
            </a>

            <div className="flex items-center gap-2 ml-1 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-[pulse-dot_2s_ease-in-out_infinite]" />
              <span className="text-green-400 text-xs font-mono">Open to new projects</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Photo column ── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute -inset-4 rounded-2xl opacity-20"
              style={{
                background: "radial-gradient(circle, #8d021f 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />

            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[480px] md:h-[520px] rounded-2xl overflow-hidden border-0">
              <Image
                src="/images/Profile.png"
                alt="Justine Psalm Acosta"
                fill
                sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 480px"
                className="object-cover object-top"
                priority
              />
              {/* Edge fade */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to bottom, #171212 0%, transparent 18%, transparent 60%, #171212 100%),
                    linear-gradient(to right,  #171212 0%, transparent 18%, transparent 82%, #171212 100%)
                  `,
                }}
              />
            </div>

            {/* Stat badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 glass px-4 py-2.5 rounded-xl"
            >
              <p className="text-[10px] text-text-tertiary font-mono uppercase tracking-wider">Experience</p>
              <p className="text-xl font-display text-primary">3+ Years</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -top-4 -right-4 glass px-4 py-2.5 rounded-xl"
            >
              <p className="text-[10px] text-text-tertiary font-mono uppercase tracking-wider">Projects</p>
              <p className="text-xl font-display text-primary">10+</p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
