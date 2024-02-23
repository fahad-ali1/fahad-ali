import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/navbar.jsx';
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';

import Portfolio from './components/portfolio/portfolio.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} /> 
          <Route path="/about" element={<About />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
