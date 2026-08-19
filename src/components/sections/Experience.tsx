import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import api from "../../services/api";
import curriculo from "../../assets/documents/curriculo.pdf";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  active: boolean;
  order: number;
}

function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    async function loadExperiences() {
      try {
        const response = await api.get("/experiences");

        setExperiences(response.data);
      } catch (error) {
        console.error(
          "Erro ao carregar experiências:",
          error
        );
      }
    }

    loadExperiences();
  }, []);

  return (
    <section
      id="experiencia"
      className="
        w-full
        overflow-hidden
        bg-black
        px-6
        py-24
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
        "
      >

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
          Experiência Profissional
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
          Minha trajetória profissional envolvendo qualidade de software,
          desenvolvimento, infraestrutura e tecnologia.
        </motion.p>

        <div
          className="
            relative
            mt-12
            space-y-10
            border-l
            border-white/20
            pl-8
          "
        >

          {experiences.map((experience) => (

            <motion.div
              key={experience.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative w-full overflow-hidden"
            >

              <div
                className="
                  absolute
                  -left-[42px]
                  top-6
                  h-5
                  w-5
                  rounded-full
                  border-4
                  border-black
                  bg-blue-500
                "
              />

              <div
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

                <div
                  className="
                    flex
                    flex-col
                    justify-between
                    gap-2
                    md:flex-row
                  "
                >

                  <div>

                    <h3 className="text-2xl font-semibold">
                      {experience.role}
                    </h3>

                    <p className="text-gray-400">
                      {experience.company}
                    </p>

                  </div>

                  <span className="text-sm text-gray-400">
                    {experience.period}
                  </span>

                </div>

                <p className="mt-5 leading-relaxed text-gray-300">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {experience.technologies?.map((tech) => (

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

            </motion.div>

          ))}

        </div>

        <motion.div
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
          className="mt-12"
        >

          <a
            href={curriculo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-lg
              bg-white
              px-6
              py-3
              font-semibold
              text-black
              transition
              hover:scale-105
              hover:bg-gray-200
            "
          >
            📄 Ver currículo
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;