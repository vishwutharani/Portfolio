import React from "react";
import "./index.css";
import Hero from './Hero';
import Skills from './Skills';
import About from './About';
import Projects from "./Projects";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">VD.</div>

      <ul className="nav-links">
             <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </ul>

      <div className="nav-buttons">        <a
  href="https://drive.google.com/file/d/1euDO0c24JN5y2mJ-AxfVg17aSntttlH4/view?usp=sharing"
  className="resume-btn"
>
  View Resume
</a>
       <a href="#contact" className="hire-btn">
  Hire Me
</a>
      </div>
    </nav>
  );
};

export default Navbar