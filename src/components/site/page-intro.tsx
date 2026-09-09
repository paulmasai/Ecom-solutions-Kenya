export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="site-container pt-14 pb-12 sm:pt-20">
      <p className="eyebrow hero-enter">{eyebrow}</p>
      <h1 className="hero-enter mt-5 max-w-3xl text-4xl leading-[1.08] font-medium tracking-[-0.045em] sm:text-6xl">
        {title}
      </h1>
      <p className="hero-enter hero-enter-delay mt-6 max-w-xl text-base leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
