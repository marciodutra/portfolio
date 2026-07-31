import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { developmentProjects } from "../../data/projects";


function DevelopmentProjects() {
  return (
    <section
      id="projetos"
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
          Projetos de Desenvolvimento
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
          className="mt-4 text-gray-400"
        >
          Projetos desenvolvidos envolvendo aplicações web,
          sistemas administrativos, integrações e soluções digitais.
        </motion.p>



        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {developmentProjects.map((project, index) => (

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
                group
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-white/5
                transition
                duration-300
                hover:-translate-y-3
                hover:border-blue-400/50
                hover:shadow-xl
              "
            >


              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-52
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition
                    duration-500
                    group-hover:bg-black/40
                  "
                />

              </div>



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




                <div className="mt-6 flex gap-3">


                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-blue-500
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:scale-105
                      hover:bg-blue-600
                    "
                  >
                    <ExternalLink size={16} />

                    Demo Online
                  </a>



                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-white/30
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:scale-105
                      hover:bg-white
                      hover:text-black
                    "
                  >                   

                    GitHub
                  </a>


                </div>


              </div>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default DevelopmentProjects;