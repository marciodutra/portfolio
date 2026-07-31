import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import DevelopmentProjects from "./components/sections/DevelopmentProjects";
import QAProjects from "./components/sections/QAProjects";
import Contact from "./components/sections/Contact";

function App() {
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

      </main>
    </>
  );
}

export default App;