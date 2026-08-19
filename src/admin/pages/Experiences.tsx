import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

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

export default function Experiences() {
  const navigate = useNavigate();

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadExperiences() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/experiences");

      setExperiences(response.data);
    } catch (error: any) {
      console.error("Erro ao carregar experiências:", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("portfolio_token");
        localStorage.removeItem("portfolio_user");

        navigate("/admin/login");
        return;
      }

      setError("Não foi possível carregar as experiências.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir esta experiência?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await api.delete(`/experiences/${id}`);

      await loadExperiences();
    } catch (error: any) {
      console.error("Erro ao excluir experiência:", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("portfolio_token");
        localStorage.removeItem("portfolio_user");

        navigate("/admin/login");
        return;
      }

      setError("Não foi possível excluir a experiência.");
    }
  }

  useEffect(() => {
    loadExperiences();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-bold">
              Gerenciar Experiências
            </h1>

            <p className="text-sm text-slate-400">
              Cadastre e edite as experiências profissionais do portfolio.
            </p>
          </div>

          <button
            onClick={() => navigate("/admin")}
            className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-600"
          >
            ← Voltar
          </button>

        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Experiências
          </h2>

          <button
            onClick={() => navigate("/admin/experiences/new")}
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
          >
            + Nova Experiência
          </button>

        </div>

        {loading && (
          <p className="text-slate-400">
            Carregando experiências...
          </p>
        )}

        {error && (
          <div className="rounded-lg bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid gap-6">

            {experiences.map((experience) => (

              <div
                key={experience.id}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >

                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                  <div className="min-w-0">

                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">

                      <h3 className="text-xl font-semibold">
                        {experience.role}
                      </h3>

                      <span className="text-slate-500">
                        @
                      </span>

                      <p className="text-lg text-slate-300">
                        {experience.company}
                      </p>

                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      {experience.period}
                    </p>

                    <p className="mt-4 leading-relaxed text-slate-400">
                      {experience.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {experience.technologies?.map((technology) => (

                        <span
                          key={technology}
                          className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                        >
                          {technology}
                        </span>

                      ))}

                    </div>

                    <div className="mt-4 flex items-center gap-4 text-sm">

                      <span className="text-slate-500">
                        Ordem: {experience.order}
                      </span>

                      <span
                        className={
                          experience.active
                            ? "text-green-400"
                            : "text-red-400"
                        }
                      >
                        {experience.active ? "Ativa" : "Inativa"}
                      </span>

                    </div>

                  </div>

                  <div className="flex shrink-0 gap-3">

                    <button
                      onClick={() =>
                        navigate(
                          `/admin/experiences/${experience.id}/edit`
                        )
                      }
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-700"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => handleDelete(experience.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700"
                    >
                      Excluir
                    </button>

                  </div>

                </div>

              </div>

            ))}

            {experiences.length === 0 && (
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
                Nenhuma experiência cadastrada.
              </div>
            )}

          </div>
        )}

      </main>

    </div>
  );
}