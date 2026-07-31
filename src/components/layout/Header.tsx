function Header() {
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

        <nav className="flex items-center gap-6 text-sm text-gray-300">
          <a
            href="#inicio"
            className="transition hover:text-white"
          >
            Início
          </a>

          <a
            href="#sobre"
            className="transition hover:text-white"
          >
            Sobre
          </a>

          <a
            href="#experiencia"
            className="transition hover:text-white"
          >
            Experiência
          </a>

          <a
            href="#tecnologias"
            className="transition hover:text-white"
          >
            Tecnologias
          </a>

          <a
            href="#projetos"
            className="transition hover:text-white"
          >
            Projetos
          </a>

          <a
            href="#qa"
            className="transition hover:text-white"
          >
            QA
          </a>

          <a
            href="#contato"
            className="transition hover:text-white"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;