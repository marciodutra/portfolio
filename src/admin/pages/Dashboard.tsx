import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("portfolio_user") || "{}"
  );

  function handleLogout() {
    localStorage.removeItem("portfolio_token");
    localStorage.removeItem("portfolio_user");

    navigate("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-bold">
              Painel Administrativo
            </h1>

            <p className="text-sm text-slate-400">
              Bem-vindo, {user.name || "Administrador"}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700"
          >
            Sair
          </button>

        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">

        <h2 className="mb-8 text-3xl font-bold">
          Dashboard
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">
              Projetos
            </h3>

            <p className="mt-2 text-slate-400">
              Gerencie seus projetos.
            </p>

            <button
              onClick={() => navigate("/admin/projects")}
              className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Gerenciar Projetos
            </button>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">
              Conteúdo
            </h3>

            <p className="mt-2 text-slate-400">
              Edite as informações do portfolio.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">
              Experiência
            </h3>

            <p className="mt-2 text-slate-400">
              Gerencie sua experiência profissional.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}