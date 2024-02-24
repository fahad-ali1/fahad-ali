import React from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { FaProjectDiagram } from 'react-icons/fa';

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/fahad-ali" className={location.pathname === '/fahad-ali' ? 'active' : ''}>
        Home <AiFillHome />
      </Link>
      <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>
        Experience <GiSkills />
      </Link>
      <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
        Projects <FaProjectDiagram />
      </Link>
    </nav>
  );
};

export default Nav;