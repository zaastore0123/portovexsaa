import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.description,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <About />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
