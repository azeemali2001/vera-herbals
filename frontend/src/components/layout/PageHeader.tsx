interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  compact?: boolean;
}

export function PageHeader({ eyebrow, title, description, compact }: PageHeaderProps) {
  return (
    <section className={`app-container text-center ${compact ? "pt-4 pb-6" : "page-hero"}`}>
      {eyebrow ? <p className={`section-heading ${compact ? "mb-2" : "mb-4"}`}>{eyebrow}</p> : null}
      <h1 className={`text-4xl md:text-5xl font-semibold text-earth text-balance ${compact ? "mb-3" : "mb-5"}`}>{title}</h1>
      <p className="mx-auto max-w-3xl text-base md:text-lg text-earth-light leading-relaxed text-balance">
        {description}
      </p>
    </section>
  );
}
