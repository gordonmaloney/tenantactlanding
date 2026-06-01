const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function HeroSection({ bgImg }) {
  return (
    <section id="hero" className="hero snap-step">
      <img src={bgImg} alt="" aria-hidden="true" className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content hero-layout">
        <div>
          <h1 className="hero-title">
            TENANT<span>ACT</span>
          </h1>
          <p className="lede">
            Digital tools for tenant organising, campaigning and collective action.
          </p>
          <div className="actions">
            <button
              type="button"
              className="btn btn-solid"
              onClick={() => scrollToSection("showcase")}
            >
              Browse All Tools
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => scrollToSection("contact")}
            >
              Get involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
