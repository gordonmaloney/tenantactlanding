export default function TenantShoutSection({ tsImg }) {
  return (
    <section id="tenantshout" className="tenantshout snap-step">
      <div className="section-inner tenantshout-grid">
        <div>
          <p className="kicker">TenantShout</p>
          <h2>Mobilise members to pile on the pressure</h2>
          <p className="section-text tenantshout-text">
            TenantShout allows you to build email, tweet, and phone campaigns to
            mobilise members and supporters to bombard MSPs, councillors, letting
            agents, or any other target with personalised member stories.
          </p>
          <a href="https://shout.tenantact.org/" target="_blank" rel="noreferrer" className="btn btn-solid">
            Open TenantShout
          </a>
        </div>
        <a href="https://shout.tenantact.org/" target="_blank" rel="noreferrer" className="tenantshout-image-wrap">
          <img src={tsImg} alt="TenantShout preview" className="tenantshout-image" />
        </a>
      </div>
    </section>
  );
}
