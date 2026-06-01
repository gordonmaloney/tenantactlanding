import livingRentLogo from "../imgs/living-rent-logo.png";

export default function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-stack">
        <div className="footer-row footer-row-imprint">
          <a
            href="https://www.livingrent.org/"
            target="_blank"
            rel="noreferrer"
            className="footer-imprint"
          >
            <img src={livingRentLogo} alt="Living Rent logo" />
            <span>Built be members of Living Rent, Scotland&apos;s tenants&apos; and community union</span>
          </a>
        </div>

        <div className="footer-row footer-row-lr">
          <div className="footer-socials">
            <a href="https://www.instagram.com/living_rent/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.2" cy="6.8" r="1.1" />
              </svg>
            </a>
            <a href="https://x.com/Living_Rent" target="_blank" rel="noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h4.1l4.4 6.2L17.7 4H20l-6.4 7.5L20.5 20h-4.1l-4.8-6.8L6 20H3.7l6.7-7.8z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/livingrentscotland/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.5 8.5h2.5V5h-2.5c-2.7 0-4.5 1.8-4.5 4.6v2H7v3.4h3v5h3.6v-5H17l.6-3.4h-4V9.8c0-.9.4-1.3 1.3-1.3z" />
              </svg>
            </a>
          </div>
          <a
            href="https://www.livingrent.org/join"
            target="_blank"
            rel="noreferrer"
            className="footer-join"
          >
            Join Living Rent
          </a>
        </div>
      </div>
    </footer>
  );
}
