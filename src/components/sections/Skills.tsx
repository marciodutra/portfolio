const skills = [
  {
    title: "Desenvolvimento Frontend",
    items: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },

  {
    title: "Desenvolvimento Backend",
    items: [
      "Node.js",
      "PHP",
      "Laravel",
      "APIs REST",
      "Integrações",
    ],
  },

  {
    title: "Banco de Dados",
    items: [
      "MySQL",
      "Modelagem de Dados",
      "Consultas SQL",
    ],
  },

  {
    title: "Quality Assurance (QA)",
    items: [
      "Testes Manuais",
      "Casos de Teste",
      "Testes de API",
      "Postman",
      "Playwright",
      "Selenium",
      "Cypress",
      "Java + Selenium WebDriver",
      "JUnit",
      "Maven",
      "Appium",
    ],
  },

  {
    title: "Ferramentas e Processos",
    items: [
      "GitHub",
      "GitHub Actions",
      "Jira",
      "Qase.io",
      "IntelliJ IDEA",
      "Android Studio",
      "Versionamento Git",
      "Metodologias Ágeis",
    ],
  },
];


function Skills() {
  return (
    <section
      id="tecnologias"
      className="bg-black px-6 py-24 text-white"
    >

      <div className="mx-auto max-w-6xl">

        <h2 className="text-4xl font-bold">
          Tecnologias e Ferramentas
        </h2>


        <p className="mt-4 max-w-3xl text-gray-400">
          Tecnologias utilizadas em projetos de desenvolvimento,
          automação de testes, qualidade de software e análise de sistemas.
        </p>


        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill) => (

            <div
              key={skill.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
            >

              <h3 className="text-xl font-semibold">
                {skill.title}
              </h3>


              <ul className="mt-4 space-y-2 text-gray-300">

                {skill.items.map((item) => (

                  <li key={item}>
                    • {item}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;