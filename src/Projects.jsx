import React from "react";
import "./App.css";

const projects = [
  {
    title: "AI Powered Study Scheduler",
    date: "Mar 2026",
    description:
      "An adaptive learning platform that creates personalized study schedules based on user goals, task priorities, and progress tracking.",
    tech: ["Python", "Flask", "MongoDB"],
    github: "https://github.com/vishwutharani/AI-POWERED-STUDY-SCHEDULER",
    demo: "#",
  },
  {
    title: "Job Tracker",
    date: "Nov 2025",
    description:
      "A MERN stack application for tracking job applications with status updates, search functionality, and application management.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "#",
    demo: "#",
  },
  {
  title: "Smart To-Do List App",
  date: "May 2026",
  description:
    "A task management application that allows users to add, edit, delete, and track daily tasks. Includes local storage support and task completion tracking.",
  tech: ["React", "JavaScript", "CSS", "Local Storage"],
  github: "https://github.com/vishwutharani/Smart-to-do-list",
  demo: "#",
}
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A showcase of my Full Stack, AI, and Web Development projects.
          </p>
        </div>

        <div className="row mt-5">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="project-card">
                <span className="project-date">{project.date}</span>

                <h4>{project.title}</h4>

                <p>{project.description}</p>

                <div className="tech-container">
                  {project.tech.map((item, i) => (
                    <span key={i} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i> GitHub
                  </a>

                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects