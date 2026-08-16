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
        left-0
        top-0
        z-50
        w-full
        overflow-x-hidden
        border-b
        border-white/10
        bg-zinc-950/90
        backdrop-blur
      "
    >
      <div
        className="
          flex
          w-full
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
            whitespace-nowrap
            text-lg
            font-bold
            text-white
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

          <a
            href="/admin/login"
            className="
              rounded-lg
              border
              border-blue-500/50
              px-4
              py-2
              font-semibold
              text-blue-400
              transition
              hover:bg-blue-500
              hover:text-white
            "
          >
            Admin
          </a>

        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-md
            text-white
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

      {menuOpen && (
        <div
          className="
            w-full
            border-t
            border-white/10
            bg-zinc-950
            md:hidden
          "
        >
          <nav
            className="
              flex
              flex-col
              px-4
              py-4
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
                  ${
                    activeSection === link.id
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:bg-zinc-800"
                  }
                `}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/admin/login"
              onClick={() => setMenuOpen(false)}
              className="
                mt-2
                rounded-lg
                border
                border-blue-500/50
                px-4
                py-3
                font-semibold
                text-blue-400
                transition
                hover:bg-blue-500
                hover:text-white
              "
            >
              Admin
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;