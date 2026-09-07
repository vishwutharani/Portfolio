import React from "react";
import "./index.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <div className="about-content">
              <h5 className="about-tag">ABOUT ME</h5>

              <h2>
                Full Stack Developer &
                <span> AI/ML Enthusiast</span>
              </h2>

              <p>
                I'm Viswadharini, a passionate Full Stack Developer with
                knowledge of the MERN Stack and Artificial Intelligence.
                I enjoy building responsive web applications, creating
                intuitive user experiences, and exploring machine learning
                technologies to solve real-world problems.
              </p>

              <p>
                My focus is on developing scalable applications,
                writing clean code, and continuously learning modern
                technologies to stay ahead in the tech industry.
              </p>

              <div className="about-stats">
                <div>
                  <h3>10+</h3>
                  <span>Technologies</span>
                </div>

                <div>
                  <h3>MERN</h3>
                  <span>Stack</span>
                </div>

                <div>
                  <h3>AI/ML</h3>
                  <span>Learner</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="about-image">
              <img
                src="./src/profile.jpeg"
                alt="Viswadharini"
                className="img-fluid"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;