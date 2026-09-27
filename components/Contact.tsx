import { ArrowUpRight, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-white/[0.05]"
    >
      <div className="container-x">
        <div className="glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 bg-radial-glow"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-100 max-w-lg mx-auto">
              Let&apos;s Build Something Meaningful.
            </h2>
            <p className="mt-4 text-ink-300 max-w-md mx-auto">
              Lihat proyek resmi dan profil publik Bayu Rahmat Kurniawan
              melalui tautan berikut.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={siteConfig.project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-electric-500 px-6 py-3 text-sm font-medium text-white hover:bg-electric-400 transition-colors focus-ring"
              >
                Visit VexsaSips
                <ArrowUpRight size={16} />
              </a>
              <a
                href={siteConfig.externalProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-ink-100 hover:bg-white/[0.06] transition-colors focus-ring"
              >
                Public Profile
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
