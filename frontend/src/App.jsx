import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Statement from "./components/Statement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="overflow-x-hidden pt-20">
      
      <Navbar />
      <Hero />
      <Skills />
      <TechStack />
      <Projects />
      <Statement />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
