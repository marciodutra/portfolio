function About() {
  return (
    <section
      id="sobre"
      className="bg-zinc-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="text-4xl font-bold">
          Sobre mim
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">

          <div>
            <p className="text-lg leading-relaxed text-gray-300">
              Sou Analista de Sistemas com experiência no desenvolvimento
              de aplicações web, atuando na criação de soluções utilizando
              tecnologias modernas de frontend e backend.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Minha trajetória envolve desenvolvimento de sistemas,
              integração de APIs, banco de dados, manutenção de aplicações
              e também qualidade de software, com foco em testes e melhoria
              contínua dos produtos.
            </p>
          </div>


          <div className="rounded-xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-xl font-semibold">
              Áreas de atuação
            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li>
                🚀 Desenvolvimento Web
              </li>

              <li>
                🧪 Quality Assurance (QA)
              </li>

              <li>
                🗄️ Banco de Dados
              </li>

              <li>
                🔌 Integrações e APIs
              </li>

              <li>
                📋 Análise de Sistemas
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;