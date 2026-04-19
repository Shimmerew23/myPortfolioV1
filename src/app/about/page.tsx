import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import AboutHero from "@/components/about/AboutHero";
import SkillsSection from "@/components/about/SkillsSection";
import ServicesSection from "@/components/about/ServicesSection";
import TimelineSection from "@/components/about/TimelineSection";
import CTASection from "@/components/about/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Justine Psalm Acosta — Full Stack Developer & Prompt Engineer with 3+ years of experience building scalable web platforms.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        {/* bg-bg */}
        <AboutHero />
        {/* bg-surface-0 */}
        <div className="bg-surface-0">
          <SkillsSection />
        </div>
        {/* bg-bg */}
        <ServicesSection />
        {/* bg-surface-0 */}
        <div className="bg-surface-0">
          <TimelineSection />
        </div>
        {/* bg-bg */}
        <CTASection />
      </main>
    </>
  );
}
