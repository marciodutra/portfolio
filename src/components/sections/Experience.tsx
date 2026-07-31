import { experiences } from "../../data/experience";
import curriculo from "../../assets/documents/curriculo.pdf";


function Experience() {

    return (

        <section
            id="experiencia"
            className="bg-black px-6 py-24 text-white"
        >

            <div className="mx-auto max-w-6xl">


                <h2 className="text-4xl font-bold">
                    Experiência Profissional
                </h2>


                <p className="mt-4 text-gray-400">
                    Minha trajetória profissional envolvendo qualidade de software,
                    desenvolvimento, infraestrutura e tecnologia.
                </p>


                <div className="mt-10 space-y-8">


                    {experiences.map((experience) => (

                        <div
                            key={experience.company}
                            className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-6
              "
                        >


                            <div className="flex flex-col justify-between gap-2 md:flex-row">


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


                                {experience.technologies.map((tech) => (

                                    <span
                                        key={tech}
                                        className="
                      rounded-full
                      bg-white/10
                      px-3
                      py-1
                      text-xs
                    "
                                    >
                                        {tech}
                                    </span>

                                ))}


                            </div>


                        </div>

                    ))}


                </div>



                <div className="mt-12">

                    <a
                        href={curriculo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
                    >
                        📄 Ver currículo
                    </a>


                </div>


            </div>

        </section>

    );

}


export default Experience;