import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "efficyon",
    title: "Efficyon — SaaS Cost Optimizer",
    category: "SaaS / AI",
    tagline: "AI-powered SaaS sprawl detection & license optimization",
    description:
      "Efficyon is an AI-powered platform that detects unused SaaS subscriptions, tracks license utilization, and surfaces actionable cost-saving recommendations. Built for finance teams and IT ops who want clarity over their software spend.",
    challenge:
      "Companies waste thousands monthly on unused SaaS licenses with no clear visibility into actual usage. Existing tools were either too expensive or too basic to surface actionable insights automatically.",
    solution:
      "Built an AI-driven analysis engine that integrates with SSO providers to track real login activity, cross-references billing data, and generates prioritized recommendations. The dashboard surfaces ROI estimates per action.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API", "Supabase", "PostgreSQL", "Stripe"],
    features: [
      "Real-time SaaS usage tracking via SSO integration",
      "AI-generated cost optimization recommendations",
      "License utilization heatmaps per department",
      "Automated renewal alerts and budget forecasting",
      "One-click deprovisioning workflows",
    ],
    image: "/images/projects/efficyon.png",
    isNda: false,
    liveUrl: "https://www.efficyon.com/",
    featured: true,
  },
  {
    slug: "verdant",
    title: "Verdant Messaging App",
    category: "Communication",
    tagline: "Private, security-first real-time messaging platform",
    description:
      "A secure, privacy-focused messaging application with end-to-end encrypted conversations, real-time presence indicators, and a minimal interface designed for clarity and trust.",
    challenge:
      "Most messaging platforms trade privacy for convenience. Building a genuinely secure system requires careful architecture around authentication, message storage, and real-time delivery.",
    solution:
      "Built on Next.js with PostgreSQL for persistence, Redis pub/sub for real-time delivery, and Firebase Auth for secure identity management. TypeScript throughout ensures type-safe message handling.",
    techStack: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Firebase Auth"],
    features: [
      "End-to-end encrypted message storage",
      "Real-time typing indicators and presence",
      "Message threading and reactions",
      "Secure file and media sharing",
      "Multi-device session management",
    ],
    image: "/images/projects/verdant.png",
    isNda: false,
    // liveUrl: "https://mydmproject.vercel.app/",
  },
  {
    slug: "solar-calculator",
    title: "Solar Calculator & Installer Platform",
    category: "Energy / GreenTech",
    tagline: "Solar ROI estimation and installer marketplace",
    description:
      "A platform enabling homeowners to calculate solar panel ROI, estimate costs, and connect with verified local installers. Integrates live electricity rate data for accurate projections.",
    challenge:
      "Solar adoption is hindered by complexity. Homeowners struggle to understand costs, savings timelines, and how to find qualified installers in their area.",
    solution:
      "Built a multi-step calculator with real-time electricity pricing APIs, roof size estimation, and a curated installer marketplace with review system. Streamlines the full decision journey.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "REST APIs"],
    features: [
      "Dynamic ROI and payback period calculator",
      "Live electricity rate data by ZIP code",
      "Verified installer marketplace with ratings",
      "Automated quote request workflow",
      "Energy savings projection dashboards",
    ],
    image: undefined,
    isNda: true,
  },
  {
    slug: "salon-management",
    title: "Salon & Stylist Management Platform",
    category: "Beauty / Salon",
    tagline: "End-to-end booking and management for salons",
    description:
      "A comprehensive salon management platform with client booking, stylist scheduling, POS integration, and automated reminders. Reduces no-shows and streamlines operations.",
    challenge:
      "Small salons operate on scattered tools — text messages for bookings, paper schedules, manual receipts. The fragmentation causes lost revenue and poor client experiences.",
    solution:
      "Built a unified platform covering online booking, stylist calendar management, SMS/email reminders, and a POS module. Designed for non-technical salon owners with an intuitive admin UI.",
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Stripe", "Twilio", "Prisma"],
    features: [
      "Online client self-booking with calendar sync",
      "Stylist availability and schedule management",
      "Automated SMS/email appointment reminders",
      "Integrated POS with service packages",
      "Client history and loyalty tracking",
    ],
    image: undefined,
    isNda: true,
  },
  {
    slug: "ai-transcription",
    title: "AI Transcription & Editing Platform",
    category: "AI / Productivity",
    tagline: "Automatic transcription with AI-powered editing tools",
    description:
      "A platform that transcribes audio and video content using AI, then provides an intelligent editing workspace with speaker diarization, keyword search, and export workflows.",
    challenge:
      "Content creators and journalists spend hours manually transcribing recordings. Existing tools lacked the editing workflow needed to go from raw transcript to published content.",
    solution:
      "Integrated OpenAI Whisper for transcription, built a rich-text editor with speaker labels, and added AI-assisted summarization and clip export. Handles files up to 2GB.",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "AWS S3", "Prisma", "Tailwind CSS"],
    features: [
      "AI-powered audio/video transcription",
      "Speaker diarization and labeling",
      "Keyword search across transcripts",
      "AI-generated summaries and highlights",
      "Export to SRT, TXT, DOCX formats",
    ],
    image: undefined,
    isNda: true,
  },
  {
    slug: "job-referral-platform",
    title: "Job Referral & Career Platform",
    category: "HR Tech / Recruitment",
    tagline: "Employee referral network with career progression tools",
    description:
      "An internal career platform enabling employees to refer candidates, track referral bonuses, and access career development resources. Increases quality hires and employee engagement.",
    challenge:
      "Companies lose significant value from informal referral programs that lack tracking, transparency, or incentives. Building trust in the process requires visibility at every step.",
    solution:
      "Built a full referral tracking system with automated status updates, bonus calculation, and a career development portal. HR admins get analytics on referral quality vs. open requisitions.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Supabase"],
    features: [
      "Employee referral submission and tracking",
      "Automated referral status notifications",
      "Bonus calculation and payout workflows",
      "Career development resource library",
      "HR analytics dashboard",
    ],
    image: undefined,
    isNda: true,
  },
  {
    slug: "cartly",
    title: "eCommerce Platform",
    category: "E-Commerce",
    tagline: "Modern eCommerce with scalable full-stack architecture",
    description:
      "A full-featured eCommerce platform with real-time cart management, product discovery, Redis-backed sessions, and a custom storefront. Designed for performance and extensibility at scale.",
    challenge:
      "Building a production-grade eCommerce system that handles high-concurrency sessions, maintains real-time cart sync, and delivers sub-second page loads across catalog pages.",
    solution:
      "Architected a React + Vite frontend with Redux for cart state, backed by a Node.js/Express API with MongoDB and Redis caching layers. NGINX handles reverse proxying and static asset serving.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "MongoDB", "Redis", "Redux", "Node.js", "Express", "NGINX"],
    features: [
      "Real-time cart sync with Redis session store",
      "Faceted product search with instant filtering",
      "Admin dashboard for inventory management",
      "Optimistic UI updates for seamless UX",
      "Mobile-first responsive storefront",
    ],
    image: "/images/projects/cartly.png",
    isNda: false,
    // liveUrl: "https://mcartly.vercel.app/",
  },
  {
    slug: "entertainment-booking",
    title: "Entertainment Booking Marketplace",
    category: "Entertainment / Marketplace",
    tagline: "Artist and event booking marketplace platform",
    description:
      "A two-sided marketplace connecting event organizers with performers, DJs, and entertainment acts. Handles discovery, booking negotiation, contracts, and payment escrow.",
    challenge:
      "The entertainment booking industry runs on email chains, phone calls, and informal agreements. Creating a trusted digital marketplace requires solving both discovery and trust.",
    solution:
      "Built a marketplace with verified performer profiles, a negotiation flow with offer/counter-offer mechanics, e-signature for contracts, and Stripe escrow for payment security.",
    techStack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Stripe", "AWS S3", "Tailwind CSS"],
    features: [
      "Performer discovery with rich media profiles",
      "Booking request and negotiation workflow",
      "E-signature contract management",
      "Stripe escrow payment system",
      "Review and rating system",
    ],
    image: undefined,
    isNda: true,
  },
  {
    slug: "ai-email-marketing",
    title: "AI Email Marketing Automation",
    category: "AI / Marketing",
    tagline: "Intelligent email campaigns powered by generative AI",
    description:
      "A marketing automation platform that uses AI to generate, personalize, and optimize email campaigns at scale. Includes A/B testing, deliverability analytics, and audience segmentation.",
    challenge:
      "Marketing teams waste hours writing email variants and manually managing audience segments. Generic emails underperform because they lack personalization at scale.",
    solution:
      "Integrated Claude API for campaign copy generation with brand voice tuning, built audience segmentation on behavioral data, and added a send-time optimization engine.",
    techStack: ["Next.js", "TypeScript", "Claude API", "PostgreSQL", "Redis", "SendGrid", "Prisma"],
    features: [
      "AI campaign copy generation with brand voice",
      "Dynamic audience segmentation",
      "A/B testing with statistical significance",
      "Send-time optimization engine",
      "Deliverability and engagement analytics",
    ],
    image: undefined,
    isNda: true,
  },
  {
    slug: "enterprise-typing-assessment",
    title: "Enterprise Typing Assessment Platform",
    category: "HR Tech / EdTech",
    tagline: "Accurate, fraud-resistant typing assessments for enterprise hiring",
    description:
      "A proctored typing assessment platform for enterprise hiring pipelines. Measures WPM, accuracy, and consistency under realistic conditions with anti-cheating safeguards.",
    challenge:
      "Self-reported typing speeds are unreliable for hiring decisions. Existing tools lacked enterprise-grade security, bulk administration, or integration with ATS platforms.",
    solution:
      "Built a real-time keystroke analytics engine, integrated passive proctoring (tab-switch detection, copy-paste blocking), and built an ATS webhook API for seamless hiring workflow integration.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "WebSockets", "Prisma"],
    features: [
      "Real-time WPM and accuracy measurement",
      "Anti-cheating: tab detection, paste blocking",
      "Bulk candidate invitation system",
      "ATS webhook integration",
      "Detailed per-candidate analytics reports",
    ],
    image: undefined,
    isNda: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
