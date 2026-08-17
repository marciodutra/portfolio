import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { uploadProjectImage } from "../../services/supabase";

interface Project {
  id: number;
  title: string;
  image: string | null;
  description: string;
  technologies: string[];
  link: string | null;
  github: string | null;
  active: boolean;
  order: number;
}

export default function ProjectForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEditing = Boolean(id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [link, setLink] = useState("");
  const [github, setGithub] = useState("");
  const [order, setOrder] = useState("");
  const [active, setActive] = useState(true);

  const [loading, setLoading] = useState(false);
  const [loadingProject, setLoadingProject] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      return;
    }

    async function loadProject() {
      try {
        setLoadingProject(true);
        setError("");

        const response = await api.get(`/projects/${id}`);

        const project: Project = response.data;

        setTitle(project.title || "");
        setCurrentImage(project.image || null);
        setDescription(project.description || "");

        setTechnologies(
          Array.isArray(project.technologies)
            ? project.technologies.join(", ")
            : ""
        );

        setLink(project.link || "");
        setGithub(project.github || "");

        setOrder(
          project.order !== null && project.order !== undefined
            ? String(project.order)
            : ""
        );

        setActive(Boolean(project.active));
      } catch (error: any) {
        console.error("Erro ao carregar projeto:", error);

        if (error.response?.status === 401) {
          localStorage.removeItem("portfolio_token");
          localStorage.removeItem("portfolio_user");

          navigate("/admin/login");
          return;
        }

        setError(
          error.response?.data?.message ||
          "Não foi possível carregar o projeto."
        );
      } finally {
        setLoadingProject(false);
      }
    }

    loadProject();
  }, [id, navigate]);

  function handleImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0] || null;

    setImage(file);

    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
    } else {
      setPreviewImage(null);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);

      const technologyList = technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      technologyList.forEach((technology, index) => {
        formData.append(`technologies[${index}]`, technology);
      });

      if (link) {
        formData.append("link", link);
      }

      if (github) {
        formData.append("github", github);
      }

      if (order) {
        formData.append("order", order);
      }

      formData.append("active", active ? "1" : "0");

      /*
       * Só envia image quando realmente existe
       * um arquivo selecionado.
       */
      if (image) {
        const imageUrl = await uploadProjectImage(image);
        formData.append("image", imageUrl);
      }

      if (isEditing) {
        /*
         * Laravel recebe PUT através do method spoofing.
         */
        formData.append("_method", "PUT");

        await api.post(`/projects/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        await api.post("/projects", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      navigate("/admin/projects");
    } catch (error: any) {
      console.error("Erro ao salvar projeto:", error);

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
          "Não foi possível salvar o projeto."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  if (loadingProject) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">
          Carregando projeto...
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
              {isEditing ? "Editar Projeto" : "Novo Projeto"}
            </h1>

            <p className="text-sm text-slate-400">
              {isEditing
                ? "Edite as informações do projeto."
                : "Cadastre um novo projeto no portfolio."}
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
              Imagem do projeto
            </label>

            <input
              type="file"
              accept="image/jpeg,image/png,image/jpg,image/webp"
              onChange={handleImageChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700"
            />

            <p className="mt-2 text-xs text-slate-500">
              Formatos permitidos: JPG, PNG e WEBP. Tamanho máximo: 5 MB.
            </p>

            {/* Imagem nova selecionada */}
            {previewImage && (
              <div className="mt-5">

                <p className="mb-2 text-sm text-slate-400">
                  Pré-visualização:
                </p>

                <img
                  src={previewImage}
                  alt="Pré-visualização"
                  className="h-48 w-auto rounded-lg border border-slate-700 object-cover"
                />

                <p className="mt-2 text-sm text-green-400">
                  Nova imagem selecionada: {image?.name}
                </p>

              </div>
            )}

            {/* Imagem atual */}
            {!previewImage && currentImage && (
              <div className="mt-5">

                <p className="mb-2 text-sm text-slate-400">
                  Imagem atual:
                </p>

                <img
                  src={currentImage}
                  alt={title}
                  className="h-48 w-auto rounded-lg border border-slate-700 object-cover"
                />

              </div>
            )}

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
              {loading
                ? "Salvando..."
                : isEditing
                  ? "Atualizar Projeto"
                  : "Salvar Projeto"}
            </button>

          </div>

        </form>

      </main>

    </div>
  );
}