import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

export default function ExperienceForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEditing = Boolean(id);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [period, setPeriod] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [order, setOrder] = useState("");
  const [active, setActive] = useState(true);

  const [loading, setLoading] = useState(false);
  const [loadingExperience, setLoadingExperience] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      return;
    }

    async function loadExperience() {
      try {
        setLoadingExperience(true);
        setError("");

        const response = await api.get(`/experiences/${id}`);

        const experience: Experience = response.data;

        setCompany(experience.company || "");
        setRole(experience.role || "");
        setPeriod(experience.period || "");
        setDescription(experience.description || "");

        setTechnologies(
          Array.isArray(experience.technologies)
            ? experience.technologies.join(", ")
            : ""
        );

        setOrder(
          experience.order !== null &&
            experience.order !== undefined
            ? String(experience.order)
            : ""
        );

        setActive(Boolean(experience.active));
      } catch (error: any) {
        console.error("Erro ao carregar experiência:", error);

        if (error.response?.status === 401) {
          localStorage.removeItem("portfolio_token");
          localStorage.removeItem("portfolio_user");

          navigate("/admin/login");
          return;
        }

        setError(
          error.response?.data?.message ||
            "Não foi possível carregar a experiência."
        );
      } finally {
        setLoadingExperience(false);
      }
    }

    loadExperience();
  }, [id, navigate]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const data = {
        company,
        role,
        period,
        description,
        technologies: technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        order: order ? Number(order) : undefined,
        active,
      };

      if (isEditing) {
        await api.put(`/experiences/${id}`, data);
      } else {
        await api.post("/experiences", data);
      }

      navigate("/admin/experiences");
    } catch (error: any) {
      console.error("Erro ao salvar experiência:", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("portfolio_token");
        localStorage.removeItem("portfolio_user");

        navigate("/admin/login");
        return;
      }

      const validationErrors = error.response?.data?.errors;

      if (validationErrors) {
        const firstError = Object.values(validationErrors)[0];

        if (Array.isArray(firstError)) {
          setError(String(firstError[0]));
        } else {
          setError(String(firstError));
        }
      } else {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Não foi possível salvar a experiência."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  if (loadingExperience) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">
          Carregando experiência...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-bold">
              {isEditing
                ? "Editar Experiência"
                : "Nova Experiência"}
            </h1>

            <p className="text-sm text-slate-400">
              {isEditing
                ? "Edite as informações da experiência profissional."
                : "Cadastre uma nova experiência profissional no portfolio."}
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/experiences")}
            className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-600"
          >
            ← Voltar
          </button>

        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border border-slate-800 bg-slate-900 p-8"
        >

          {error && (
            <div className="rounded-lg bg-red-500/10 p-4 text-red-400">
              {error}
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Empresa
            </label>

            <input
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              required
              placeholder="Ex: Sysmap"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Cargo
            </label>

            <input
              type="text"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              required
              placeholder="Ex: Analista de Testes Trainee"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Período
            </label>

            <input
              type="text"
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              required
              placeholder="Ex: 12/2024 - 04/2026"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Descrição
            </label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              rows={6}
              placeholder="Descreva suas atividades e responsabilidades..."
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Tecnologias
            </label>

            <input
              type="text"
              value={technologies}
              onChange={(event) => setTechnologies(event.target.value)}
              placeholder="Java, Selenium, JUnit, Maven"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-slate-500">
              Separe as tecnologias por vírgula.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Ordem
            </label>

            <input
              type="number"
              value={order}
              onChange={(event) => setOrder(event.target.value)}
              min="1"
              placeholder="Ex: 5"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-3">

            <input
              id="active"
              type="checkbox"
              checked={active}
              onChange={(event) => setActive(event.target.checked)}
              className="h-4 w-4"
            />

            <label
              htmlFor="active"
              className="text-sm text-slate-300"
            >
              Experiência ativa
            </label>

          </div>

          <div className="flex gap-4 pt-4">

            <button
              type="button"
              onClick={() => navigate("/admin/experiences")}
              className="rounded-lg bg-slate-700 px-6 py-3 font-semibold hover:bg-slate-600"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {loading
                ? "Salvando..."
                : isEditing
                  ? "Atualizar Experiência"
                  : "Salvar Experiência"}
            </button>

          </div>

        </form>

      </main>

    </div>
  );
}