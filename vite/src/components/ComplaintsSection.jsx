export default function ComplaintsSection({ complaintsImg }) {
  return (
    <section id="complaints" className="complaints snap-step">
      <div className="section-inner complaints-grid">
        <div>
          <p className="kicker">Tenant Complaints Portal</p>
          <h2>The council wouldn&apos;t do it, so we did</h2>
          <p className="section-text complaints-text">
            The Tenant Complaints Portal allows tenants to easily submit complaints
            about their landlords or rented properties to the City of Edinburgh
            Council.
          </p>
          <a
            href="https://complaints.tenantact.org/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-solid"
          >
            Open Complaints Portal
          </a>
        </div>
        <a
          href="https://complaints.tenantact.org/"
          target="_blank"
          rel="noreferrer"
          className="complaints-image-wrap"
        >
          <img
            src={complaintsImg}
            alt="Tenant Complaints Portal preview"
            className="complaints-image"
          />
        </a>
      </div>
    </section>
  );
}
