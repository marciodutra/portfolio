import { Mail, FileText } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import curriculo from "../../assets/documents/curriculo.pdf";

function Contact() {
  return (
    <section
      id="contato"
      className="bg-zinc-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">
          Entre em Contato
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          Estou sempre aberto a novas oportunidades,
          projetos e desafios nas áreas de Desenvolvimento
          de Software, QA Automation e Análise de Sistemas.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <a
            href="https://wa.me/5551994690210"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-green-500"
          >
            <FaWhatsapp className="mb-4 text-4xl text-green-500" />

            <h3 className="text-xl font-semibold">
              WhatsApp
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              (51) 99469-0210
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/m%C3%A1rcio-dutra-10362222/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-blue-500"
          >
            <FaLinkedin className="mb-4 text-4xl text-blue-500" />

            <h3 className="text-xl font-semibold">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Márcio Dutra
            </p>
          </a>

          <a
            href="https://github.com/marciodutra"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-gray-300"
          >
            <FaGithub className="mb-4 text-4xl" />

            <h3 className="text-xl font-semibold">
              GitHub
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              @marciodutra
            </p>
          </a>

          <a
            href="mailto:professormarciodutra@gmail.com"
            className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-red-400"
          >
            <Mail className="mb-4 h-10 w-10 text-red-400" />

            <h3 className="text-xl font-semibold">
              E-mail
            </h3>

            <p className="mt-2 break-all text-sm text-gray-400">
              professormarciodutra@gmail.com
            </p>
          </a>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={curriculo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            <FileText size={20} />
            Visualizar Currículo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;