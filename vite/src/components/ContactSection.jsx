export default function ContactSection({ img5, footer }) {
  return (
    <section id="contact" className="contact snap-step">
      <div className="contact-stage-wrap">
        <div className="section-inner contact-hero-wrap">
          <div className="contact-hero-media">
            <img src={img5} alt="Tenant organising" className="contact-hero-image" />
            <div className="contact-hero-overlay" />
          </div>
          <div className="contact-hero-content">
            <p className="kicker">Get Involved</p>
            <h2>Built by tenants. For tenants.</h2>
            <p className="section-text">
              TenantAct is built and maintained by volunteers. Help us build tools,
              test ideas, and support campaigns.
            </p>
            <p className="contact-inline-points">
              Volunteer. Contribute. Organise.
            </p>
            <a
              href="https://wa.me/447903700751?text=Hey!%20I%27d%20like%20to%20chat%20about%20TenantAct."
              className="btn btn-solid"
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
        {footer}
      </div>
    </section>
  );
}
