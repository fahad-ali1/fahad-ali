import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/navbar.jsx';
import Header from './components/header/header.jsx';
import Experience from './components/experience/experience.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Footer from './components/footer/footer.jsx';
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "App dark-mode" : "App"}>
        <button className="darkmodeToggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <Navbar />
        <Routes>
          <Route path="/fahad-ali" element={<Header />} /> 
          <Route path="/fahad-ali/experience" element={<Experience />} />
          <Route path="/fahad-ali/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;