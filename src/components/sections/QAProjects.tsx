import { qaProjects } from "../../data/qaProjects";


function QAProjects() {
  return (
    <section
      id="qa"
      className="bg-zinc-950 px-6 py-24 text-white"
    >

      <div className="mx-auto max-w-6xl">


        <h2 className="text-4xl font-bold">
          Projetos de QA e Automação
        </h2>


        <p className="mt-4 max-w-3xl text-gray-400">
          Projetos desenvolvidos na área de qualidade de software,
          automação de testes e validação de aplicações.
        </p>


        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {qaProjects.map((project) => (

            <div
              key={project.title}
              className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-6
                transition
                duration-300
                hover:-translate-y-2
                hover:border-white/40
              "
            >

              <div className="text-4xl">
                {project.icon}
              </div>


              <h3 className="mt-4 text-xl font-semibold">
                {project.title}
              </h3>


              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>


              <div className="mt-5">

                <h4 className="text-sm font-semibold">
                  Tecnologias
                </h4>


                <div className="mt-3 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-white/10
                        px-3
                        py-1
                        text-xs
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>


              <div className="mt-5">

                <h4 className="text-sm font-semibold">
                  Destaques
                </h4>


                <ul className="mt-3 space-y-2 text-sm text-gray-300">

                  {project.features.map((feature) => (

                    <li key={feature}>
                      ✓ {feature}
                    </li>

                  ))}

                </ul>

              </div>


              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6
                  inline-block
                  rounded-lg
                  border
                  border-white
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  transition
                  hover:bg-white
                  hover:text-black
                "
              >
                Ver GitHub
              </a>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}


export default QAProjects;