import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
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

        <Footer />

      </main>
    </>
  );
}

export default App;