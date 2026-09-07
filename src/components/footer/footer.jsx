import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>Built by Fahad Ali · © {new Date().getFullYear()}</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
