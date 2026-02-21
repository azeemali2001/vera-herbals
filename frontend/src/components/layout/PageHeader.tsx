interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="page-hero app-container">
      {eyebrow ? <p className="section-heading mb-4">{eyebrow}</p> : null}
      <h1 className="text-4xl md:text-5xl font-semibold text-earth mb-5 text-balance">{title}</h1>
      <p className="mx-auto max-w-3xl text-base md:text-lg text-earth-light leading-relaxed text-balance">
        {description}
      </p>
    </section>
  );
}
