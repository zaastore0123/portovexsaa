"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-strong border-b border-white/[0.06]">
        <nav className="container-x flex h-16 items-center justify-between">
          <Link
            href="/#home"
            className="font-display text-lg font-bold text-ink-100 focus-ring"
          >
            {siteConfig.brand}
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-300 hover:text-ink-100 transition-colors focus-ring"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href={siteConfig.project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-electric-500 px-4 py-2 text-sm font-medium text-white hover:bg-electric-400 transition-colors focus-ring"
            >
              Explore VexsaSips
              <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-ink-100 focus-ring p-1"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-b border-white/[0.06]">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-ink-300 hover:text-ink-100 transition-colors focus-ring"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={siteConfig.project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-electric-500 px-4 py-2 text-sm font-medium text-white focus-ring"
              >
                Explore VexsaSips
                <ArrowUpRight size={15} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
