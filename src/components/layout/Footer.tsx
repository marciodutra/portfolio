import { motion } from "framer-motion";


function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        bg-black
        px-6
        py-8
        text-white
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
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
        className="
          mx-auto
          max-w-6xl
          text-center
        "
      >

        <h3 className="text-xl font-semibold">
          Márcio Dutra
        </h3>


        <p className="mt-2 text-gray-400">
          Analista de Sistemas | Desenvolvedor Web | QA
        </p>


        <p className="mt-4 text-sm text-gray-500">
          © 2026 Márcio Dutra. Todos os direitos reservados.
        </p>


      </motion.div>


    </footer>
  );
}


export default Footer;