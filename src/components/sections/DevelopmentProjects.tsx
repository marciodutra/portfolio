import { developmentProjects } from "../../data/projects";


function DevelopmentProjects() {
  return (
    <section
      id="projetos"
      className="bg-zinc-950 px-6 py-24 text-white"
    >

      <div className="mx-auto max-w-6xl">

        <h2 className="text-4xl font-bold">
          Projetos de Desenvolvimento
        </h2>


        <p className="mt-4 text-gray-400">
          Projetos desenvolvidos envolvendo aplicações web,
          sistemas administrativos, integrações e soluções digitais.
        </p>


        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {developmentProjects.map((project) => (

            <div
              key={project.title}
              className="
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-white/5
                transition
                duration-300
                hover:-translate-y-2
                hover:border-white/40
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                  h-52
                  w-full
                  object-cover
                  transition
                  duration-300
                  hover:scale-105
                "
              />


              <div className="p-6">


                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>


                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  {project.description}
                </p>


                <div className="mt-5 flex flex-wrap gap-2">

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


                <div className="mt-6 flex gap-3">


                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-lg
                      bg-white
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-black
                      transition
                      hover:bg-gray-200
                    "
                  >
                    Demo
                  </a>


                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-lg
                      border
                      border-white
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    GitHub
                  </a>


                </div>


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default DevelopmentProjects;