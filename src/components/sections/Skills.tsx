import { motion } from "framer-motion";

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
      "PostgreSQL",
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


        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-4xl font-bold"
        >
          Tecnologias e Ferramentas
        </motion.h2>



        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-4 max-w-3xl text-gray-400"
        >
          Tecnologias utilizadas em projetos de desenvolvimento,
          automação de testes, qualidade de software e análise de sistemas.
        </motion.p>



        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


          {skills.map((skill, index) => (

            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-6
                transition
                duration-300
                hover:-translate-y-3
                hover:border-blue-400/50
                hover:shadow-xl
              "
            >


              <h3 className="text-xl font-semibold">
                {skill.title}
              </h3>



              <ul className="mt-5 flex flex-wrap gap-2">


                {skill.items.map((item) => (

                  <li
                    key={item}
                    className="
                      rounded-full
                      bg-white/10
                      px-3
                      py-1
                      text-sm
                      text-gray-300
                      transition
                      hover:bg-blue-500/20
                      hover:text-blue-300
                    "
                  >
                    {item}
                  </li>

                ))}


              </ul>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}

export default Skills;