import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Statement from "./components/Statement";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/ui/CustomCursor";
import { useLenis } from "./hooks/useLenis";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll globally
  useLenis();

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Custom cursor (desktop only — hides itself on touch devices) */}
      <CustomCursor />

      {/* Cinematic page loader */}
      <Loader isVisible={isLoading} onComplete={handleLoaderComplete} />

      {/* Scroll progress bar at top */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Statement />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
