import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

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

export default function Projects() {
    const navigate = useNavigate();

    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function loadProjects() {
        try {
            setLoading(true);

            const response = await api.get("/projects");

            setProjects(response.data);
        } catch (error: any) {
            console.error("Erro ao carregar projetos:", error);

            if (error.response?.status === 401) {
                localStorage.removeItem("portfolio_token");
                localStorage.removeItem("portfolio_user");

                navigate("/admin/login");
                return;
            }

            setError("Não foi possível carregar os projetos.");
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id: number) {
        const confirmed = window.confirm(
            "Tem certeza que deseja excluir este projeto?"
        );

        if (!confirmed) {
            return;
        }

        try {
            await api.delete(`/projects/${id}`);

            await loadProjects();
        } catch (error: any) {
            console.error("Erro ao excluir projeto:", error);

            if (error.response?.status === 401) {
                localStorage.removeItem("portfolio_token");
                localStorage.removeItem("portfolio_user");

                navigate("/admin/login");
                return;
            }

            setError("Não foi possível excluir o projeto.");
        }
    }

    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <header className="border-b border-slate-800 bg-slate-900">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                    <div>
                        <h1 className="text-2xl font-bold">
                            Gerenciar Projetos
                        </h1>

                        <p className="text-sm text-slate-400">
                            Cadastre e edite os projetos do portfolio.
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
                        Projetos
                    </h2>

                    <button
                        onClick={() => navigate("/admin/projects/new")}
                        className="rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
                    >
                        + Novo Projeto
                    </button>

                </div>

                {loading && (
                    <p className="text-slate-400">
                        Carregando projetos...
                    </p>
                )}

                {error && (
                    <div className="rounded-lg bg-red-500/10 p-4 text-red-400">
                        {error}
                    </div>
                )}

                {!loading && !error && (
                    <div className="grid gap-6">

                        {projects.map((project) => (

                            <div
                                key={project.id}
                                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
                            >

                                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                                    <div>

                                        <h3 className="text-xl font-semibold">
                                            {project.title}
                                        </h3>

                                        <p className="mt-2 text-slate-400">
                                            {project.description}
                                        </p>

                                        <div className="mt-3 flex flex-wrap gap-2">

                                            {project.technologies.map((technology) => (

                                                <span
                                                    key={technology}
                                                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                                                >
                                                    {technology}
                                                </span>

                                            ))}

                                        </div>

                                        <p className="mt-4 text-sm text-slate-500">
                                            Ordem: {project.order}
                                        </p>

                                    </div>

                                    <div className="flex gap-3">

                                        <button
                                            onClick={() => navigate(`/admin/projects/${project.id}/edit`)}
                                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-700"
                                        >
                                            Editar
                                        </button>

                                        <button
                                            onClick={() => handleDelete(project.id)}
                                            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700"
                                        >
                                            Excluir
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>
                )}

            </main>

        </div>
    );
}