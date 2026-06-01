const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Header() {
  return (
    <header className="topbar">
      <button type="button" className="wordmark wordmark-btn" onClick={() => scrollToSection("hero")}>
        TENANT<span>ACT</span>
      </button>
      <nav>
        <button type="button" className="topbar-link-btn" onClick={() => scrollToSection("showcase")}>
          Tools
        </button>
        <button type="button" className="topbar-link-btn" onClick={() => scrollToSection("contact")}>
          Get Involved
        </button>
      </nav>
    </header>
  );
}
