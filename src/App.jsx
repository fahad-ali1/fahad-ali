import React from "react";
import TopBar from "./components/console/TopBar";
import Hero from "./components/console/Hero";
import Experience from "./components/console/Experience";
import Skills from "./components/console/Skills";
import Projects from "./components/console/Projects";
import Education from "./components/console/Education";
import Contact from "./components/console/Contact";
import Footer from "./components/footer/footer.jsx";
import { useDarkMode } from "./hooks/useDarkMode";
import "./App.css";

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="App">
      <TopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
