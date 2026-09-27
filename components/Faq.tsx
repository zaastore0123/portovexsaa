import { faqItems } from "@/lib/site";

export default function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-white/[0.05]">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-100">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-ink-300 leading-relaxed">
            Informasi faktual seputar identitas dan aktivitas Bayu Rahmat
            Kurniawan.
          </p>
        </div>

        <div className="mt-10 divide-y divide-white/[0.06] glass rounded-2xl">
          {faqItems.map((item) => (
            <div key={item.question} className="p-6">
              <h3 className="font-display text-base font-semibold text-ink-100">
                {item.question}
              </h3>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
