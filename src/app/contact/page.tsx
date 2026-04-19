import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Justine Psalm Acosta for freelance projects, consulting, or collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <ContactClient />
      </main>
    </>
  );
}
