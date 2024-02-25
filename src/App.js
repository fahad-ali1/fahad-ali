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

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div 
      style={{
        '--first-color': darkMode ? '#ff491b' : '#ff491b',
        '--text-color': darkMode ? '#000000' : '#ffffff',
        '--body-color': darkMode ? '#e9e9e9' : '#2b2d2f',
        '--nav-color': darkMode ? '#7e7e7e' : '#707070',
        '--card-color': darkMode ? '#bebebe' : '#3a3a3a',
        backgroundColor: darkMode ? '#e9e9e9' : '#2b2d2f',
        color: darkMode ? '#000000' : '#ffffff',
      }} 

      className="App">
        <button className="darkmodeToggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <Navbar />
        <Routes>
          <Route path="/fahad-ali" element={<Header />} /> 
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;