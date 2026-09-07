import React from "react";
import "./index.css";
import Skills from './Skills';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h3>Hello, I'm</h3>
        <h1>Viswadharani S</h1>
        <h2>A Software Engineer and Web developer </h2>

        <p>
            I'm a Full Stack Developer with knowledge of the MERN Stack and 
            a growing interest in AI & Machine Learning. 
            I enjoy building modern web applications, solving real-world problems, and learning new technologies to create efficient and scalable solutions.
          Passionate about building responsive and modern web
          applications using React.js, JavaScript, HTML and CSS.
        </p>

        <div className="hero-buttons">
          <a
  href="https://drive.google.com/file/d/1euDO0c24JN5y2mJ-AxfVg17aSntttlH4/view?usp=sharing"
  className="resume-btn"
>
  View Resume
</a>
          <button className="contact-btn"href="#Contact">Contact Me</button>
        </div>
        
      </div>
    </section>
  );
}

export default Hero