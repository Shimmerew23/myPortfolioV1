import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-mono text-xs text-primary-muted uppercase tracking-widest mb-4">
            404
          </p>
          <h1 className="font-display text-6xl text-fg mb-4">
            Page not <span className="italic text-primary">found</span>
          </h1>
          <p className="text-text-secondary text-base mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-bg font-medium text-sm hover:bg-primary/90 transition-all"
          >
            Go Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
