import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Justine Psalm Acosta's portfolio of web applications, SaaS platforms, and AI-integrated products.",
};

export default function PortfolioPage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 text-center">
            <div className="flex justify-center mb-4">
              <SectionLabel>Portfolio</SectionLabel>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-normal text-fg mb-4">
              Selected <span className="italic text-primary">work</span>
            </h1>
            <p className="text-text-secondary text-base max-w-xl mx-auto">
              A curated selection of projects — some public, some under NDA. Each
              represents a real business problem solved with thoughtful engineering.
            </p>
          </div>

          <div
            className="fixed top-0 right-0 w-96 h-96 pointer-events-none opacity-[0.07]"
            style={{
              background: "radial-gradient(circle, #8d021f 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          <ProjectGrid projects={projects} />
        </div>
      </main>
    </>
  );
}
