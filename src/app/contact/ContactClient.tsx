"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { staggerContainer, staggerItem } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactInfo = [
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

type Status = "idle" | "loading" | "success" | "error";
const RATE_LIMIT_MINUTES = 2;
const RATE_LIMIT_MS = RATE_LIMIT_MINUTES * 60 * 1000;
const LAST_SEND_TIME_KEY = "contact_form_last_send";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  // Check rate limit on mount and set up interval
  useEffect(() => {
    const checkRateLimit = () => {
      const lastSendTimeStr = localStorage.getItem(LAST_SEND_TIME_KEY);
      if (!lastSendTimeStr) {
        setSecondsRemaining(0);
        return;
      }

      const lastSendTime = parseInt(lastSendTimeStr, 10);
      const now = Date.now();
      const elapsed = now - lastSendTime;
      const remaining = Math.max(0, Math.ceil((RATE_LIMIT_MS - elapsed) / 1000));

      setSecondsRemaining(remaining);
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
      setErrorMsg(`Please wait ${secondsRemaining} seconds before sending another message.`);
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
      
      // Save send time to localStorage
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
    <section className="relative pt-32 pb-20 min-h-screen">
      {/* Orb */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.08] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #8d021f 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-14 text-center"
        >
          <motion.div variants={staggerItem} className="flex justify-center mb-4">
            <SectionLabel>Contact</SectionLabel>
          </motion.div>
          <motion.h1
            variants={staggerItem}
            className="font-display text-5xl sm:text-6xl font-normal text-fg mb-4"
          >
            Let's build something{" "}
            <span className="italic text-primary">together</span>
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-text-secondary text-base max-w-lg mx-auto"
          >
            Have a project in mind? Looking for a technical partner? I'm currently
            available for freelance work and consulting.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Info */}
          <ScrollReveal className="md:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 group hover:border-primary/20 transition-all shimmer-card"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-faint border border-primary-dark/40 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-text-tertiary text-xs font-mono uppercase tracking-widest">
                    {label}
                  </p>
                  <p className="text-fg text-sm group-hover:text-primary transition-colors mt-0.5">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-[pulse-dot_2s_ease-in-out_infinite]" />
                <span className="text-xs font-mono text-text-secondary">
                  Available for projects
                </span>
              </div>
              <p className="text-text-tertiary text-xs leading-relaxed">
                Working with clients across the US, Canada, and Europe. Typically
                respond within 24 hours.
              </p>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.1} className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-surface-1 border border-outline rounded-xl px-4 py-3 text-sm text-fg placeholder:text-text-tertiary focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-surface-1 border border-outline rounded-xl px-4 py-3 text-sm text-fg placeholder:text-text-tertiary focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, consulting, etc."
                  className="w-full bg-surface-1 border border-outline rounded-xl px-4 py-3 text-sm text-fg placeholder:text-text-tertiary focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-surface-1 border border-outline rounded-xl px-4 py-3 text-sm text-fg placeholder:text-text-tertiary focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
                >
                  <CheckCircle size={15} />
                  Message sent! I'll get back to you within 24 hours.
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
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-bg font-medium text-sm hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-bg/30 border-t-bg animate-spin" />
                    Sending...
                  </>
                ) : secondsRemaining > 0 ? (
                  <>
                    <Clock size={14} />
                    Wait {secondsRemaining}s before sending another message.
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
