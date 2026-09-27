import { Lightbulb, Bot, FlaskConical, Rocket } from "lucide-react";
import { workflowSteps } from "@/lib/site";

const icons = [Lightbulb, Bot, FlaskConical, Rocket];

export default function Workflow() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.05]">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-100">
            My Development Workflow.
          </h2>
          <p className="mt-4 text-ink-300 leading-relaxed">
            AI digunakan sebagai asisten dalam proses pengembangan — bukan
            pengganti proses berpikir. Setiap hasil yang dihasilkan dengan
            bantuan AI tetap ditinjau dan diuji sebelum digunakan.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {workflowSteps.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.step} className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <Icon size={20} className="text-electric-400" />
                  <span className="text-xs text-ink-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold text-ink-100">
                  {item.step}
                </h3>
                <p className="mt-2 text-sm text-ink-300 leading-relaxed">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
