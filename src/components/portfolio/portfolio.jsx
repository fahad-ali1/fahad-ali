import React, { useEffect } from "react";
import "./portfolio.css";
import PortfolioItem from "./PortfolioItem";
import { portfolioItems } from "./portfolioData";
import { useLocation } from "react-router-dom";

const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]); // Re-run when hash changes

  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <h5>My Personal Work</h5>
        <h2>Portfolio</h2>
        <p className="caption">
          Click on cards to visit their GitHub repositories (when available)!
        </p>
        <div className="portfolioContainer">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
