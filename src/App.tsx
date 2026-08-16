import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import DevelopmentProjects from "./components/sections/DevelopmentProjects";
import QAProjects from "./components/sections/QAProjects";
import Contact from "./components/sections/Contact";

import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import Projects from "./admin/pages/Projects";
import ProjectForm from "./admin/pages/ProjectForm";

function Portfolio() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero />

        <About />

        <Experience />

        <Skills />

        <DevelopmentProjects />

        <QAProjects />

        <Contact />

        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Portfolio público */}
        <Route path="/" element={<Portfolio />} />

        {/* Painel administrativo */}
        <Route path="/admin/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/projects" element={<Projects />} />
          <Route path="/admin/projects/new" element={<ProjectForm />} />
          <Route path="/admin/projects/:id/edit" element={<ProjectForm />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;