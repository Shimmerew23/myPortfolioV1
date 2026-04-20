"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail, Send, CheckCircle, AlertCircle, Clock,
  ArrowRight, MessageSquare, Handshake, Rocket,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { staggerContainer, staggerItem } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "justine.psalm23@gmail.com",
    href: "mailto:justine.psalm23@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@Shimmerew23",
    href: "https://github.com/Shimmerew23",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "/in/justinesam023",
    href: "https://www.linkedin.com/in/justinesam023/",
  },
];

const steps = [
  {
    icon: MessageSquare,
    title: "Send a Message",
    body: "Fill out the form with your project details.",
  },
  {
    icon: Handshake,
    title: "Get a Response",
    body: "I'll reply within 24h with next steps.",
  },
  {
    icon: Rocket,
    title: "Start Building",
    body: "We align on scope, timeline, and kick off.",
  },
];

type Status = "idle" | "loading" | "success" | "error";
const RATE_LIMIT_MINUTES = 2;
const RATE_LIMIT_MS = RATE_LIMIT_MINUTES * 60 * 1000;
const LAST_SEND_TIME_KEY = "contact_form_last_send";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  useEffect(() => {
    const checkRateLimit = () => {
      const lastSendTimeStr = localStorage.getItem(LAST_SEND_TIME_KEY);
      if (!lastSendTimeStr) { setSecondsRemaining(0); return; }
      const elapsed = Date.now() - parseInt(lastSendTimeStr, 10);
      setSecondsRemaining(Math.max(0, Math.ceil((RATE_LIMIT_MS - elapsed) / 1000)));
    };
    checkRateLimit();
    const interval = setInterval(checkRateLimit, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (secondsRemaining > 0) {
      setStatus("error");
      setErrorMsg(`Please wait ${secondsRemaining}s before sending another message.`);
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      localStorage.setItem(LAST_SEND_TIME_KEY, Date.now().toString());
      setSecondsRemaining(RATE_LIMIT_MINUTES * 60);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section className="relative pt-20 pb-8 min-h-screen overflow-hidden">
      {/* ── Floating social bar ── */}
      <div className="fixed left-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 hidden lg:flex">
        {contactLinks.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative w-10 h-10 rounded-xl glass border border-outline/60 flex items-center justify-center hover:border-primary/40 hover:bg-primary-faint transition-all duration-200"
          >
            <Icon size={15} className="text-text-secondary group-hover:text-primary transition-colors" />
            {/* Tooltip */}
            <span className="pointer-events-none absolute left-full ml-3 px-2.5 py-1 rounded-lg bg-surface-1 border border-outline/60 text-[10px] font-mono uppercase tracking-widest text-fg whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
              {label}
            </span>
          </a>
        ))}
        <div className="w-px h-12 bg-outline/40 mt-1" />
      </div>
      {/* Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d021f 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute top-1/3 -left-40 w-80 h-80 opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #c07070 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute top-1/2 -right-40 w-96 h-96 opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #8d021f 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-8 text-center"
        >
          <motion.div variants={staggerItem} className="flex justify-center mb-3">
            <SectionLabel>Contact</SectionLabel>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-display text-4xl sm:text-5xl font-normal text-fg mb-3"
          >
            Let&apos;s Build Something{" "}
            <span className="italic text-primary">Together</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-text-secondary text-sm max-w-lg mx-auto leading-relaxed"
          >
            Have a project in mind? Whether it&apos;s an MVP, a full platform, or an
            AI-powered tool — I&apos;d love to hear about it. Let&apos;s make it real.
          </motion.p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid md:grid-cols-5 gap-6 items-start">

          {/* ── Left: Info ── */}
          <ScrollReveal className="md:col-span-2 space-y-3">

            {/* Availability */}
            <div className="glass rounded-2xl p-4 border-l-2 border-l-emerald-500/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  Open for Work
                </span>
              </div>
              <p className="text-fg text-sm font-medium mb-1">Available for new projects</p>
              <p className="text-text-tertiary text-xs leading-relaxed">
                Working with clients in the US, Canada, and Europe. Typically respond within 24 hours.
              </p>
            </div>

            {/* What happens next */}
            <div className="glass rounded-2xl p-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary-muted mb-3">
                What Happens Next
              </p>
              <div className="space-y-2">
                {steps.map(({ icon: Icon, title, body }, i) => (
                  <div key={title} className="flex gap-3">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon size={12} className="text-primary-muted" />
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px flex-1 mt-1 bg-outline/40 min-h-[12px]" />
                      )}
                    </div>
                    <div className="pb-3">
                      <p className="text-xs font-medium text-fg mb-0.5">{title}</p>
                      <p className="text-[11px] text-text-tertiary leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </ScrollReveal>

          {/* ── Right: Form ── */}
          <ScrollReveal delay={0.1} className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-5 sm:p-6 space-y-4"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h2 className="text-lg font-medium text-fg mb-1">Send a Message</h2>
                  <p className="text-text-tertiary text-xs">
                    All fields marked * are required. I&apos;ll reply within 24 hours.
                  </p>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase tracking-widest">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Accepting Projects
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-surface-1 border border-outline rounded-xl px-3 py-2.5 text-sm text-fg placeholder:text-text-tertiary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-surface-1 border border-outline rounded-xl px-3 py-2.5 text-sm text-fg placeholder:text-text-tertiary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="MVP build, SaaS platform, AI integration…"
                  className="w-full bg-surface-1 border border-outline rounded-xl px-3 py-2.5 text-sm text-fg placeholder:text-text-tertiary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project — what you're building, your timeline, and any specific requirements…"
                  className="w-full bg-surface-1 border border-outline rounded-xl px-3 py-2.5 text-sm text-fg placeholder:text-text-tertiary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm"
                >
                  <CheckCircle size={15} />
                  Message sent! I&apos;ll get back to you within 24 hours.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  <AlertCircle size={15} />
                  {errorMsg || "Failed to send. Please try again."}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || secondsRemaining > 0}
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-bg font-semibold text-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-bg/30 border-t-bg animate-spin" />
                    Sending…
                  </>
                ) : secondsRemaining > 0 ? (
                  <>
                    <Clock size={14} />
                    Wait {secondsRemaining}s
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>

              <p className="text-center text-text-tertiary text-[11px] font-mono">
                No spam · No commitment · Just a conversation
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
