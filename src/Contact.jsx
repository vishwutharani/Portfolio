import React from "react";
import "./App.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h5 className="contact-title">Let's Connect</h5>
          <p className="contact-subtitle">
            I'm actively looking for opportunities in Web Development, MERN
            Stack, and AI/ML. Feel free to reach out!
          </p>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="contact-card">

              {/* Email */}
              <a
                href="mailto:vishwutharani53626@gmail.com"
                className="contact-item"
              >
                <i className="bi bi-envelope-fill"></i>
                <span>vishwutharani53626@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+916383074650"
                className="contact-item"
              >
                <i className="bi bi-telephone-fill"></i>
                <span>+91 6383074650</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https:www.linkedin.com/in/viswadharani-s-a71370315"
                target="_blank"

                rel="noreferrer"
                className="contact-item"
              >
                <i className="bi bi-linkedin"></i>
                <span>LinkedIn Profile</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/vishwutharani?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <i className="bi bi-github"></i>
                <span>GitHub Profile</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact