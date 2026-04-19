"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

const STORY_LINES = [
  "Every product has a story. I help build it.",
  "From idea to a scalable, production-ready platform.",
  "Clean architecture. Fast performance. Real results.",
  "Built for startups and businesses ready to grow.",
  "More than code — I build systems that last.",
];

const CODE_FRAGMENTS = [
  'const world = await build(idea)',
  'if (problem) solve(it)',
  'deploy({ env: "production" })',
  'git commit -m "ship it"',
  'return experience.craft()',
  'await client.delight()',
  'const value = effort * passion',
  'type Future = Promise<Impact>',
  '// no shortcuts, only craft',
  'while (learning) { grow() }',
];

function generateHexLines() {
  return Array.from({ length: 30 }, (_, i) => {
    const chars = "0123456789abcdef ";
    let line = "";
    for (let j = 0; j < 40; j++) {
      line += chars[Math.floor((i * 31 + j * 17) % chars.length)];
    }
    return line;
  });
}

const HEX_LINES = generateHexLines();

export default function IntroSequence({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const totalSections = STORY_LINES.length + 1;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (v >= 0.98) {
        setDone(true);
        onComplete();
      }
    });
    return unsub;
  }, [scrollYProgress, onComplete]);

  return (
    <div ref={containerRef} style={{ height: `${totalSections * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Atmospheric background */}
        <div className="absolute inset-0 bg-bg">
          {/* Burgundy orb */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-[float-orb_8s_ease-in-out_infinite]"
            style={{
              background: "radial-gradient(circle, #8d021f 0%, transparent 70%)",
              top: "10%",
              left: "5%",
              filter: "blur(80px)",
            }}
          />
          {/* Rose orb */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-15 animate-[orb-drift_12s_ease-in-out_infinite]"
            style={{
              background: "radial-gradient(circle, #ffb3b2 0%, transparent 70%)",
              bottom: "15%",
              right: "10%",
              filter: "blur(100px)",
            }}
          />
        </div>

        {/* Floating code fragments */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {CODE_FRAGMENTS.map((fragment, i) => (
            <motion.div
              key={i}
              className="absolute font-mono text-xs text-primary/10 whitespace-nowrap select-none"
              style={{
                left: `${(i * 23 + 5) % 90}%`,
                top: `${(i * 17 + 8) % 85}%`,
                rotate: `${(i % 2 === 0 ? 1 : -1) * (i % 5) * 2}deg`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.08, 0.18, 0.08],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              {fragment}
            </motion.div>
          ))}
        </div>

        {/* Data stream (hex lines) */}
        <div className="absolute right-6 top-0 h-full w-48 overflow-hidden opacity-5 pointer-events-none hidden lg:block">
          <div
            className="font-mono text-[9px] text-primary leading-4 whitespace-pre"
            style={{
              animation: "data-stream 20s linear infinite",
            }}
          >
            {[...HEX_LINES, ...HEX_LINES].join("\n")}
          </div>
        </div>

        {/* Landing panel */}
        <LandingPanel progress={smoothProgress} totalSections={totalSections} />

        {/* Story lines */}
        {STORY_LINES.map((line, i) => (
          <StoryPanel
            key={i}
            text={line}
            index={i + 1}
            progress={smoothProgress}
            totalSections={totalSections}
          />
        ))}

        {/* Progress bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <motion.div
            className="h-px bg-outline/30 rounded-full overflow-hidden"
            style={{ width: 120 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary-dark to-primary rounded-full"
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
            />
          </motion.div>
          <motion.span
            className="text-[10px] font-mono text-text-tertiary"
            style={{
              opacity: useTransform(smoothProgress, [0, 0.1], [1, 0.5]),
            }}
          >
            scroll
          </motion.span>
        </div>

        {/* Scroll bounce indicator */}
        <motion.div
          className="absolute bottom-14 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          style={{ opacity: useTransform(smoothProgress, [0, 0.15], [1, 0]) }}
        >
          <div className="w-5 h-8 rounded-full border border-outline/60 flex items-start justify-center pt-1.5">
            <motion.div
              className="w-1 h-1.5 rounded-full bg-primary/60"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function LandingPanel({
  progress,
  totalSections,
}: {
  progress: ReturnType<typeof useSpring>;
  totalSections: number;
}) {
  const opacity = useTransform(progress, [0, 1 / totalSections], [1, 0]);
  const y = useTransform(progress, [0, 1 / totalSections], [0, -60]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
    >
      <motion.p
        className="font-mono text-xs text-primary-muted tracking-[0.3em] uppercase mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Full Stack Developer & Prompt Engineer
      </motion.p>
      <motion.h1
        className="font-display text-6xl sm:text-7xl md:text-8xl font-normal text-fg leading-[1.05]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Justine Psalm{" "}
        <span className="italic text-primary">Acosta</span>
      </motion.h1>
      <motion.div
        className="mt-6 w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      />
      <motion.p
        className="mt-6 text-text-secondary text-sm max-w-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        Scroll to explore
      </motion.p>
    </motion.div>
  );
}

function StoryPanel({
  text,
  index,
  progress,
  totalSections,
}: {
  text: string;
  index: number;
  progress: ReturnType<typeof useSpring>;
  totalSections: number;
}) {
  const segmentSize = 1 / totalSections;
  const start = index * segmentSize;
  const peak = start + segmentSize * 0.3;
  const end = (index + 1) * segmentSize;

  const opacity = useTransform(
    progress,
    [start - segmentSize * 0.2, start, peak, end - segmentSize * 0.1, end],
    [0, 1, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start - segmentSize * 0.2, start, end],
    [40, 0, -40]
  );
  const scale = useTransform(
    progress,
    [start - segmentSize * 0.1, start, peak],
    [0.92, 1, 1]
  );

  const isLast = index === totalSections - 1;

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
    >
      <div className="text-center max-w-3xl">
        <p
          className={`font-display leading-tight text-fg ${
            isLast
              ? "text-4xl sm:text-5xl md:text-6xl"
              : "text-3xl sm:text-4xl md:text-5xl"
          }`}
        >
          {text.includes("—") ? (
            <>
              {text.split("—")[0]}
              <span className="text-primary italic">—{text.split("—")[1]}</span>
            </>
          ) : (
            <>
              {text.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="italic text-primary">
                {text.split(" ").slice(-2).join(" ")}
              </span>
            </>
          )}
        </p>
      </div>
    </motion.div>
  );
}
