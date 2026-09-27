import { GraduationCap, Wrench, Cpu, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";

const infoCards = [
  { icon: GraduationCap, label: "Education", value: siteConfig.school },
  { icon: Wrench, label: "Academic Focus", value: "Automotive Engineering" },
  { icon: Cpu, label: "Technology Focus", value: "Programming & AI" },
  { icon: Zap, label: "Development Approach", value: "Vibe Coding" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/[0.05]">
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-100 leading-tight">
              Beyond Automotive, Into Technology.
            </h2>
            <div className="mt-6 space-y-4 text-ink-300 leading-relaxed">
              <p>
                Bayu Rahmat Kurniawan adalah siswa {siteConfig.school} yang
                menempuh pendidikan di bidang teknik otomotif, sambil terus
                mengembangkan kemampuannya di bidang pemrograman dan
                pengembangan perangkat lunak modern.
              </p>
              <p>
                Dalam proses belajarnya, Bayu memanfaatkan{" "}
                <span className="text-ink-100">vibe coding</span> — sebuah
                pendekatan pengembangan yang menggunakan kecerdasan buatan
                sebagai asisten untuk membantu menulis kode, mengeksplorasi
                solusi, dan meningkatkan efisiensi proses pengembangan.
              </p>
              <p>
                Ia tertarik menghubungkan pengetahuan teknis, cara berpikir
                kreatif dalam memecahkan masalah, dan teknologi modern
                menjadi satu proses belajar yang berkelanjutan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="glass rounded-2xl p-5 flex flex-col gap-3"
              >
                <card.icon size={20} className="text-electric-400" />
                <div>
                  <p className="text-xs text-ink-500">{card.label}</p>
                  <p className="mt-1 text-sm font-medium text-ink-100">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
