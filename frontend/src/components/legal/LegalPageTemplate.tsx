import type { ReactNode } from "react";
import { PageHeader } from "../layout/PageHeader";

interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalPageTemplateProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  sections: LegalSection[];
  footerNote?: ReactNode;
}

export function LegalPageTemplate({
  eyebrow,
  title,
  description,
  image,
  sections,
  footerNote,
}: LegalPageTemplateProps) {
  return (
    <section className="section-block">
      <PageHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="app-container">
        <div className="overflow-hidden rounded-3xl border border-[#dbe5d1] shadow-card bg-white">
          <div className="h-52 md:h-64 relative">
            <img src={image} alt={title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2D5016]/60 via-[#4A7C2C]/40 to-transparent" />
          </div>

          <div className="p-6 md:p-10 space-y-8">
            {sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-[#e5eddc] bg-[#fbfdf8] p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-earth mb-4">{section.title}</h2>
                <div className="space-y-3 text-earth-light leading-relaxed">
                  {section.paragraphs?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 text-earth-light">
                    {section.bullets.map((bullet, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-sage">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}

            {footerNote ? <div className="rounded-2xl bg-[#f3f8ec] border border-[#dbe5d1] p-5 text-earth">{footerNote}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
