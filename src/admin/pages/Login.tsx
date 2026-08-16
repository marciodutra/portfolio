import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await api.post("/login", {
                email,
                password,
            });

            localStorage.setItem(
                "portfolio_token",
                response.data.token
            );

            localStorage.setItem(
                "portfolio_user",
                JSON.stringify(response.data.user)
            );

            navigate("/admin");
        } catch (error: any) {
            console.error("Erro no login:", error);

            if (error.response) {
                console.error("Resposta da API:", error.response.data);

                setError(
                    `Erro ${error.response.status}: ${error.response.data?.message || "Erro retornado pela API"
                    }`
                );
            } else {
                console.error("Erro de conexão:", error);

                setError(
                    "Não foi possível conectar com a API. Verifique se o Laravel está rodando."
                );
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
            <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">

                <h1 className="mb-2 text-3xl font-bold text-white">
                    Painel Administrativo
                </h1>

                <p className="mb-8 text-slate-400">
                    Entre para administrar seu portfolio.
                </p>

                {error && (
                    <div className="mb-6 rounded-lg bg-red-500/10 p-4 text-sm text-red-400">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">

                    <div>
                        <label className="mb-2 block text-sm text-slate-300">
                            E-mail
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="admin@portfolio.com"
                            required
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-slate-300">
                            Senha
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Sua senha"
                            required
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? "Entrando..." : "Entrar"}
                    </button>

                </form>

                <button
                    onClick={() => navigate("/")}
                    className="mt-6 w-full text-sm text-slate-400 hover:text-white"
                >
                    ← Voltar para o portfolio
                </button>

            </div>
        </div>
    );
}