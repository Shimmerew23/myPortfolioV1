"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import IntroSequence from "@/components/home/IntroSequence";
import HeroSection from "@/components/home/HeroSection";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export default function HomePage() {
  const [showMain, setShowMain] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro-seen");
    if (seen) {
      setShowMain(true);
      setSkipIntro(true);
    }
  }, []);

  function handleIntroComplete() {
    sessionStorage.setItem("intro-seen", "1");
    setShowMain(true);
  }

  if (skipIntro) {
    return (
      <>
        <ScrollProgressBar />
        <Navbar />
        <main>
          <HeroSection />
        </main>
      </>
    );
  }

  return (
    <>
      {!showMain && <IntroSequence onComplete={handleIntroComplete} />}
      {showMain && (
        <>
          <ScrollProgressBar />
          <Navbar />
          <main>
            <HeroSection />
          </main>
        </>
      )}
    </>
  );
}
