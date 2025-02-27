import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/profile.jpg";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src={instructorImage} alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Muhammad Azeem</h1>
          <h4>Creator</h4>
          <p>
            Hello! I'm Muhammad Azeem, a passionate MERN stack developer
            with a love for building scalable, robust applications using 
            MERN Stack!
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Muhammad-Azeem208"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-azeem-b54462202"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
