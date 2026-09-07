import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiBootstrap,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

import { GiArtificialIntelligence } from "react-icons/gi";

import "./index.css";

function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },

    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <GiArtificialIntelligence />, name: "AI / ML" },

    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="skills-title">Technologies I Work With as an 
          Full Stack Developer and AI ML Developer also skills that i am have  </h2>
          
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h6>{skill.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills