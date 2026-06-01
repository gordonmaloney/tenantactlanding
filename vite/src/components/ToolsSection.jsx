export default function ToolsSection({ tools }) {
  return (
    <section id="showcase" className="showcase snap-step">
      <div className="section-inner">
        <p className="kicker">The TenantAct Suite</p>
        <h2>Tools for organising and campaigning</h2>
        <p className="section-text">
          A practical toolkit to help tenants research, coordinate and act together.
        </p>
        <div className="tool-grid">
          {tools.map((tool) => (
            <a key={tool.title} href={tool.link} target="_blank" rel="noreferrer" className="tool-card">
              <img src={tool.img} alt={tool.title} className="tool-card-image" />
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
              <div className="tool-chips">
                {tool.categories?.map((category) => (
                  <span key={`${tool.title}-${category}`} className="tool-chip">
                    {category}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
