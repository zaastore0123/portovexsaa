import { ArrowUpRight, Terminal } from "lucide-react";
import { siteConfig } from "@/lib/site";

const categories = ["AI API Platform", "API Integration", "Developer Tooling"];

export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 border-t border-white/[0.05]"
    >
      <div className="container-x">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-100">
          Featured Project.
        </h2>

        <div className="mt-12 glass-strong rounded-3xl overflow-hidden grid md:grid-cols-2">
          <div className="relative flex items-center justify-center p-10 md:p-14 bg-gradient-to-br from-base-800 to-base-900 border-b md:border-b-0 md:border-r border-white/[0.06] min-h-[260px]">
            <div
              className="absolute inset-0 bg-radial-glow opacity-70"
              aria-hidden="true"
            />
            <div className="relative w-full max-w-xs rounded-xl glass p-4 font-mono text-xs text-ink-300 space-y-2">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-electric-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-violet-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-500/50" />
              </div>
              <p>
                <span className="text-electric-400">POST</span> /v1/ai/complete
              </p>
              <p className="text-ink-500">{"{"}</p>
              <p className="pl-3">
                &quot;status&quot;:{" "}
                <span className="text-violet-400">&quot;ok&quot;</span>
              </p>
              <p className="pl-3">
                &quot;model&quot;:{" "}
                <span className="text-violet-400">&quot;vexsasips&quot;</span>
              </p>
              <p className="text-ink-500">{"}"}</p>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-electric-400 text-xs font-medium">
              <Terminal size={14} />
              Official Project
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold text-ink-100">
              {siteConfig.project.name}
            </h3>
            <p className="mt-4 text-ink-300 leading-relaxed">
              {siteConfig.project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-ink-300"
                >
                  {cat}
                </span>
              ))}
            </div>

            <a
              href={siteConfig.project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-electric-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-electric-400 transition-colors focus-ring"
            >
              Visit VexsaSips
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
