import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Justine Psalm Acosta — Full Stack Developer & Prompt Engineer",
    template: "%s | Justine Psalm Acosta",
  },
  description:
    "Full Stack Developer & Prompt Engineer specializing in scalable web platforms, AI integration, and high-performance web applications.",
  keywords: [
    "Full Stack Developer",
    "Prompt Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "AI Integration",
    "Technical Consultant",
  ],
  authors: [{ name: "Justine Psalm Acosta" }],
  creator: "Justine Psalm Acosta",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Justine Psalm Acosta — Full Stack Developer",
    description:
      "Full Stack Developer & Prompt Engineer building scalable web platforms with AI integration.",
    siteName: "Justine Psalm Acosta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justine Psalm Acosta — Full Stack Developer",
    description:
      "Full Stack Developer & Prompt Engineer building scalable web platforms with AI integration.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`} data-scroll-behavior="smooth">
      <body className="grain-overlay bg-bg text-fg antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
