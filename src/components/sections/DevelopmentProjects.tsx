import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import api from "../../services/api";

interface Project {
  id: number;
  title: string;
  image: string | null;
  description: string;
  technologies: string[];
  link: string | null;
  github: string | null;
  active: boolean;
  order: number;
}

function getImageUrl(image: string | null): string {
  if (!image) {
    return "";
  }

  if (image.includes("/storage/v1/object/public/")) {
    return image;
  }

  if (image.includes("/storage/v1/s3/")) {
    return image.replace(
      "/storage/v1/s3/",
      "/storage/v1/object/public/"
    );
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseBucket = import.meta.env.VITE_SUPABASE_BUCKET;

  if (supabaseUrl && supabaseBucket) {
    const cleanImage = image.replace(/^\/+/, "");

    return `${supabaseUrl}/storage/v1/object/public/${supabaseBucket}/${cleanImage}`;
  }

  return image;
}

function DevelopmentProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await api.get("/projects");

        const activeProjects = response.data
          .filter((project: Project) => project.active)
          .sort(
            (a: Project, b: Project) =>
              a.order - b.order
          );

        setProjects(activeProjects);
      } catch (error) {
        console.error(
          "Erro ao carregar projetos:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

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

        {loading && (
          <p className="mt-10 text-gray-400">
            Carregando projetos...
          </p>
        )}

        {!loading && projects.length === 0 && (
          <p className="mt-10 text-gray-400">
            Nenhum projeto disponível.
          </p>
        )}

        {!loading && projects.length > 0 && (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project, index) => (

              <motion.div
                key={project.id}
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

                  {project.image && (
                    <img
                      src={getImageUrl(project.image)}
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
                  )}

                  {!project.image && (
                    <div
                      className="
                        flex
                        h-52
                        w-full
                        items-center
                        justify-center
                        bg-zinc-900
                        text-gray-500
                      "
                    >
                      Sem imagem
                    </div>
                  )}

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

                    {project.link && (
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
                    )}

                    {project.github && (
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
                    )}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default DevelopmentProjects;