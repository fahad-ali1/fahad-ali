import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare, FaEnvelope } from "react-icons/fa";

const Socials = () => {
  const emailSubject = encodeURIComponent("Fahad Website Inquiry");

  return (
    <div className="socials">
      <h4 className="socialCaption">Lets Connect!</h4>
      <a
        href="https://www.linkedin.com/in/fahad-ali-421014219/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin className="socialIcon" />
      </a>
      <a
        href="https://github.com/fahad-ali1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className="socialIcon" />
      </a>
      <a href={`mailto:adrift.planner.0a@icloud.com?subject=${emailSubject}`}>
        <FaEnvelope className="socialIcon" />
      </a>
    </div>
  );
};

export default Socials;
