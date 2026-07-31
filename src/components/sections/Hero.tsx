import { motion } from "framer-motion";

import profile from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-screen items-center bg-black px-6 pt-24 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
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
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Márcio Dutra"
            className="
              h-80
              w-80
              rounded-full
              border-4
              border-white/20
              object-cover
              shadow-xl
              transition
              duration-500
              hover:scale-105
            "
          />
        </motion.div>


        <motion.div
          initial={{
            opacity: 0,
            x: 50,
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
            delay: 0.2,
          }}
        >

          <p className="mb-4 text-lg text-gray-400">
            Analista de Sistemas | Desenvolvedor Web | QA
          </p>


          <h1 className="text-5xl font-bold">
            Márcio Dutra
          </h1>


          <h2 className="mt-4 text-3xl font-semibold text-gray-200">
            Transformando ideias em soluções digitais
          </h2>


          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Portfólio profissional apresentando projetos de desenvolvimento,
            qualidade de software, automação de testes e experiências na área
            de tecnologia.
          </p>


          <div className="mt-8 flex gap-4">

            <a
              href="https://github.com/marciodutra"
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
              GitHub
            </a>


            <a
              href="https://wa.me/5551994690210"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-lg
                border
                border-white
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:scale-105
                hover:bg-white
                hover:text-black
              "
            >
              WhatsApp
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;