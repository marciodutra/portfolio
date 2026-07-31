import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio", id: "inicio" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Experiência", href: "#experiencia", id: "experiencia" },
  { label: "Tecnologias", href: "#tecnologias", id: "tecnologias" },
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "QA", href: "#qa", id: "qa" },
  { label: "Contato", href: "#contato", id: "contato" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-zinc-950/80
        backdrop-blur
      "
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="text-xl font-bold text-white transition hover:text-blue-400"
        >
          Márcio Dutra
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`transition ${
                activeSection === link.id
                  ? "font-semibold text-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-zinc-950 md:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-3 py-3 transition ${
                  activeSection === link.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;