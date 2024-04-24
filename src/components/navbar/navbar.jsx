import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/fahad-ali"
        className={location.pathname === "/fahad-ali" ? "active" : ""}
      >
        Home <AiFillHome />
      </Link>
      <Link
        to="/fahad-ali/experience"
        className={
          location.pathname === "/fahad-ali/experience" ? "active" : ""
        }
      >
        Experience <GiSkills />
      </Link>
      <Link
        to="/fahad-ali/portfolio"
        className={location.pathname === "/fahad-ali/portfolio" ? "active" : ""}
      >
        Projects <FaProjectDiagram />
      </Link>
    </nav>
  );
};

export default Nav;
