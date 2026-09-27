import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-sm font-semibold text-ink-100">
            © {year} {siteConfig.name}.
          </p>
          <p className="mt-1 text-xs text-ink-500">
            Built with curiosity, code, and AI.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs text-ink-300 hover:text-ink-100 transition-colors focus-ring"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={siteConfig.project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-electric-400 hover:text-electric-300 transition-colors focus-ring"
            >
              VexsaSips
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
