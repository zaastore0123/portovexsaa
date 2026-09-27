import { skillCategories } from "@/lib/site";

const sizeClasses: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-1",
  md: "md:col-span-1",
  sm: "md:col-span-1",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-white/[0.05]">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-100">
            Skills &amp; Interests.
          </h2>
          <p className="mt-4 text-ink-300 leading-relaxed">
            Area yang sedang dipelajari dan terus dikembangkan, menggabungkan
            dasar teknik otomotif dengan ketertarikan pada teknologi
            perangkat lunak dan kecerdasan buatan.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((skill) => (
            <div
              key={skill.title}
              className={`glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors ${sizeClasses[skill.size]}`}
            >
              <h3 className="font-display text-base font-semibold text-ink-100">
                {skill.title}
              </h3>
              <p className="mt-2.5 text-sm text-ink-300 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
