"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Code2, Brain, Briefcase, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { staggerContainer, staggerItem, fadeIn } from "@/lib/motion";

const chips = [
  { icon: Code2, label: "Full Stack Developer" },
  { icon: Brain, label: "Prompt Engineer" },
  { icon: Briefcase, label: "Technical Consultant" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Atmospheric orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.12] animate-[float-orb_9s_ease-in-out_infinite]"
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
        {/* Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1"
        >
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

          <motion.h1
            variants={staggerItem}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.05] text-fg mb-6"
          >
            Justine Psalm{" "}
            <span className="italic text-primary">Acosta</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
          >
            I build scalable web platforms end-to-end — from system architecture
            to production deployment. Working with clients across the US, Canada,
            and Europe, specializing in{" "}
            <span className="text-primary-muted">AI-integrated applications</span>{" "}
            that actually ship.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-bg font-medium text-sm hover:bg-primary/90 transition-all"
            >
              View My Work
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-outline hover:border-primary/40 text-text-secondary hover:text-fg text-sm transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div variants={staggerItem} className="flex items-center gap-4">
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
            <span className="text-text-tertiary text-xs font-mono ml-2">
              Available for projects
            </span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-[pulse-dot_2s_ease-in-out_infinite]" />
          </motion.div>
        </motion.div>

        {/* Photo */}
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
                src="/images/profile.jpg"
                alt="Justine Psalm Acosta"
                fill
                sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 480px"
                className="object-cover object-top"
                priority
              />
              {/* Edge fade — all four sides blending into background */}
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
            <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl">
              <p className="text-xs text-text-secondary font-mono">Experience</p>
              <p className="text-lg font-display text-primary">3+ Years</p>
            </div>
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl">
              <p className="text-xs text-text-secondary font-mono">Projects</p>
              <p className="text-lg font-display text-primary">10+</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
