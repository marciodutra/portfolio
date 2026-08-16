import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function ProjectForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [link, setLink] = useState("");
  const [github, setGithub] = useState("");
  const [order, setOrder] = useState("");
  const [active, setActive] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await api.post("/projects", {
        title,
        image: image || null,
        description,
        technologies: technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        link: link || null,
        github: github || null,
        order: order ? Number(order) : undefined,
        active,
      });

      navigate("/admin/projects");
    } catch (error: any) {
      console.error("Erro ao criar projeto:", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("portfolio_token");
        localStorage.removeItem("portfolio_user");

        navigate("/admin/login");
        return;
      }

      setError(
        error.response?.data?.message ||
          "Não foi possível cadastrar o projeto."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-bold">
              Novo Projeto
            </h1>

            <p className="text-sm text-slate-400">
              Cadastre um novo projeto no portfolio.
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/projects")}
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

          {/* Título */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Título
            </label>

            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              placeholder="Ex: Sistema de Supermercado"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Imagem */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Caminho da imagem
            </label>

            <input
              type="text"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="Ex: images/projects/meu-projeto.png"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-slate-500">
              Por enquanto vamos utilizar imagens existentes no projeto.
            </p>
          </div>

          {/* Descrição */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Descrição
            </label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              rows={5}
              placeholder="Descrição do projeto..."
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Tecnologias */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Tecnologias
            </label>

            <input
              type="text"
              value={technologies}
              onChange={(event) => setTechnologies(event.target.value)}
              placeholder="React, TypeScript, Laravel, PostgreSQL"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-slate-500">
              Separe as tecnologias por vírgula.
            </p>
          </div>

          {/* Link */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Link do projeto
            </label>

            <input
              type="url"
              value={link}
              onChange={(event) => setLink(event.target.value)}
              placeholder="https://meuprojeto.vercel.app"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* GitHub */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              GitHub
            </label>

            <input
              type="url"
              value={github}
              onChange={(event) => setGithub(event.target.value)}
              placeholder="https://github.com/usuario/projeto"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Ordem */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Ordem
            </label>

            <input
              type="number"
              value={order}
              onChange={(event) => setOrder(event.target.value)}
              min="1"
              placeholder="Ex: 7"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Ativo */}
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
              Projeto ativo
            </label>

          </div>

          {/* Botões */}
          <div className="flex gap-4 pt-4">

            <button
              type="button"
              onClick={() => navigate("/admin/projects")}
              className="rounded-lg bg-slate-700 px-6 py-3 font-semibold hover:bg-slate-600"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Salvando..." : "Salvar Projeto"}
            </button>

          </div>

        </form>

      </main>

    </div>
  );
}