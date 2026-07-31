import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import curriculo from "../../assets/documents/curriculo.pdf";


function Contact() {
  const contacts = [
    {
      title: "WhatsApp",
      description: "(51) 99469-0210",
      icon: <FaWhatsapp />,
      link: "https://wa.me/5551994690210",
      color: "hover:border-green-500",
      iconColor: "text-green-500",
    },

    {
      title: "LinkedIn",
      description: "Márcio Dutra",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/m%C3%A1rcio-dutra-10362222/",
      color: "hover:border-blue-500",
      iconColor: "text-blue-500",
    },

    {
      title: "GitHub",
      description: "@marciodutra",
      icon: <FaGithub />,
      link: "https://github.com/marciodutra",
      color: "hover:border-gray-300",
      iconColor: "text-white",
    },

    {
      title: "E-mail",
      description: "professormarciodutra@gmail.com",
      icon: <Mail />,
      link: "mailto:professormarciodutra@gmail.com",
      color: "hover:border-red-400",
      iconColor: "text-red-400",
    },
  ];


  return (
    <section
      id="contato"
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
          className="text-center text-4xl font-bold"
        >
          Entre em Contato
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
          className="mx-auto mt-4 max-w-2xl text-center text-gray-400"
        >
          Estou sempre aberto a novas oportunidades,
          projetos e desafios nas áreas de Desenvolvimento
          de Software, QA Automation e Análise de Sistemas.
        </motion.p>




        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">


          {contacts.map((contact, index) => (

            <motion.a
              key={contact.title}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
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
                delay: index * 0.2,
              }}
              className={`
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-6
                transition
                duration-300
                hover:-translate-y-3
                hover:bg-white/10
                hover:shadow-xl
                ${contact.color}
              `}
            >

              <div
                className={`
                  mb-4
                  text-4xl
                  ${contact.iconColor}
                `}
              >
                {contact.icon}
              </div>


              <h3 className="text-xl font-semibold">
                {contact.title}
              </h3>


              <p className="mt-2 break-all text-sm text-gray-400">
                {contact.description}
              </p>


            </motion.a>

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
            delay: 0.3,
          }}
          className="mt-12 flex justify-center"
        >

          <a
            href={curriculo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-3
              rounded-lg
              bg-white
              px-8
              py-3
              font-semibold
              text-black
              transition
              hover:scale-105
              hover:bg-gray-200
            "
          >

            <FileText size={20} />

            Visualizar Currículo

          </a>


        </motion.div>


      </div>

    </section>
  );
}


export default Contact;