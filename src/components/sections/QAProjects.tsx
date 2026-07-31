import { motion } from "framer-motion";

import { qaProjects } from "../../data/qaProjects";


function QAProjects() {
  return (
    <section
      id="qa"
      className="bg-zinc-950 px-6 py-24 text-white"
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
          Projetos de QA e Automação
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
          Projetos desenvolvidos na área de qualidade de software,
          automação de testes e validação de aplicações.
        </motion.p>



        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {qaProjects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
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


              <div className="text-5xl">
                {project.icon}
              </div>



              <h3 className="mt-5 text-xl font-semibold">
                {project.title}
              </h3>



              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>




              <div className="mt-6">


                <h4 className="text-sm font-semibold">
                  Tecnologias
                </h4>



                <div className="mt-3 flex flex-wrap gap-2">


                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-blue-500/10
                        px-3
                        py-1
                        text-xs
                        text-blue-300
                      "
                    >
                      {tech}
                    </span>

                  ))}


                </div>


              </div>




              <div className="mt-6">


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
                  inline-flex
                  rounded-lg
                  border
                  border-white/30
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  transition
                  hover:scale-105
                  hover:bg-white
                  hover:text-black
                "
              >
                Ver GitHub
              </a>



            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default QAProjects;