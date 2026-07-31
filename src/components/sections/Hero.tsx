import profile from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="inicio"
      className="
        flex
        min-h-screen
        w-full
        overflow-hidden
        items-center
        bg-black
        px-6
        pt-24
        text-white
      "
    >

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-6xl
          items-center
          gap-12
          md:grid-cols-2
        "
      >

        <div
          className="
            flex
            w-full
            justify-center
          "
        >

          <img
            src={profile}
            alt="Márcio Dutra"
            className="
              h-64
              w-64
              rounded-full
              border-4
              border-white/20
              object-cover
              shadow-xl
              transition
              duration-500
              hover:scale-105
              sm:h-80
              sm:w-80
            "
          />

        </div>


        <div
          className="
            w-full
          "
        >

          <p className="mb-4 text-lg text-gray-400">
            Analista de Sistemas | Desenvolvedor Web | QA
          </p>


          <h1
            className="
              text-4xl
              font-bold
              sm:text-5xl
            "
          >
            Márcio Dutra
          </h1>


          <h2
            className="
              mt-4
              text-2xl
              font-semibold
              text-gray-200
              sm:text-3xl
            "
          >
            Transformando ideias em soluções digitais
          </h2>


          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-gray-400
            "
          >
            Portfólio profissional apresentando projetos de desenvolvimento,
            qualidade de software, automação de testes e experiências na área
            de tecnologia.
          </p>


          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >

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

        </div>

      </div>

    </section>
  );
}

export default Hero;