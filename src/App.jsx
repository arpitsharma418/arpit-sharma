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
      <HeroSection />

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillSection />
      </section>

      <section id="projects">
        <ProjectSection />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
