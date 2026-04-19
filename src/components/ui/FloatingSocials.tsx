"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Shimmerew23",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justinesam023/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:justine.psalm23@gmail.com",
  },
];

export default function FloatingSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-5 bottom-8 z-50 flex flex-col items-center gap-2"
    >
      {socials.map(({ icon: Icon, label, href }, i) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-colors duration-200"
        >
          <Icon size={16} />
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-12 px-2.5 py-1 rounded-lg bg-surface-1 border border-outline text-xs text-fg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200">
            {label}
          </span>
        </motion.a>
      ))}

      {/* Vertical line below */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.6, duration: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className="w-px h-10 bg-gradient-to-b from-outline/60 to-transparent mt-1"
      />
    </motion.div>
  );
}
