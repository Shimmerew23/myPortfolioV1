import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { footerLinks, socialLinks } from "@/data/navigation";

const iconMap: Record<string, React.ElementType> = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Mail,
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-outline/30 bg-surface-0">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <Link href="/" className="font-display text-xl italic text-primary">
              JPA
            </Link>
            <p className="text-text-secondary text-sm max-w-xs">
              Full Stack Developer & Prompt Engineer building scalable platforms
              with AI integration.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-outline flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-all"
                >
                  {Icon && <Icon size={15} />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-outline/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-text-tertiary text-xs">
          <p>© {year} Justine Psalm Acosta. All rights reserved.</p>
          <a
            href="mailto:justine.psalm23@gmail.com"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            justine.psalm23@gmail.com
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
