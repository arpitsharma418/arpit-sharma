import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutSection from "./pages/AboutSection";
import HeroSection from "./pages/HeroSection";
import ProjectSection from "./pages/ProjectSection";
import SkillSection from "./pages/SkillSection";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillSection />
      </section>

      <section id="projects">
        <ProjectSection />
      </section>
      <Footer />
    </>
  );
}

export default App;
