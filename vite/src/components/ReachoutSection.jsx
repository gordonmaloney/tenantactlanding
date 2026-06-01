export default function ReachoutSection({ reachoutImg }) {
  return (
    <section id="reachout" className="reachout snap-step">
      <div className="section-inner reachout-grid">
        <a
          href="https://reachout.tenantact.org/"
          target="_blank"
          rel="noreferrer"
          className="reachout-image-wrap"
        >
          <img src={reachoutImg} alt="Reachout preview" className="reachout-image" />
        </a>
        <div>
          <p className="kicker">Reachout</p>
          <h2>ReachOut: call, track, organise</h2>
          <p className="section-text reachout-text">
            ReachOut is a platform for easily organising phone and text banking to
            mobilise members and supporters for meetings, actions, and more.
          </p>
          <a
            href="https://reachout.tenantact.org/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-solid"
          >
            Open Reachout
          </a>
        </div>
      </div>
    </section>
  );
}
