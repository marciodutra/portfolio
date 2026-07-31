import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="sobre"
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
          Sobre mim
        </motion.h2>


        <div className="mt-8 grid gap-8 md:grid-cols-2">

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

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

          </motion.div>


          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-8
              transition
              duration-300
              hover:-translate-y-4
              hover:border-blue-400/50
              hover:shadow-xl
            "
          >

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

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;