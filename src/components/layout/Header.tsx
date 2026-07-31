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

      <div
        className="
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          px-4
          py-4
          sm:px-6
        "
      >

        <a
          href="#inicio"
          onClick={() => setMenuOpen(false)}
          className="
            text-lg
            font-bold
            text-white
            transition
            hover:text-blue-400
            sm:text-xl
          "
        >
          Márcio Dutra
        </a>


        <nav className="hidden items-center gap-6 text-sm md:flex">

          {links.map((link) => (

            <a
              key={link.id}
              href={link.href}
              className={`
                transition
                ${
                  activeSection === link.id
                    ? "font-semibold text-blue-400"
                    : "text-gray-300 hover:text-white"
                }
              `}
            >
              {link.label}
            </a>

          ))}

        </nav>


        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          className="
            rounded-md
            p-2
            text-white
            transition
            hover:bg-white/10
            md:hidden
          "
        >

          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}

        </button>

      </div>


      <div
        className={`
          overflow-hidden
          border-t
          border-white/10
          bg-zinc-950
          transition-all
          duration-300
          md:hidden
          ${
            menuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <nav
          className="
            flex
            flex-col
            gap-1
            px-4
            py-4
            sm:px-6
          "
        >

          {links.map((link) => (

            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`
                rounded-lg
                px-4
                py-3
                text-sm
                transition
                ${
                  activeSection === link.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-zinc-800 hover:text-white"
                }
              `}
            >
              {link.label}
            </a>

          ))}

        </nav>

      </div>

    </header>
  );
}

export default Header;