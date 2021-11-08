import React from "react";
import { images } from "../export";
import "./about.css";

function About() {
  const content = `Afro ibex is a company build by an entrepreneur which provide a
  technology service to our client. As Technology Company we provide
  website, mobile App, desktop App, networking, graphics design,
  logo designing, computer and network security, maintenance, data
  analysis, video production. By producing high-quality work that is
  affordable and flexible.`;

  return (
    <div className="about">
      <div className="__title">
        <div>
          <h3>About Us</h3>
          <h1>Who Are We?</h1>
        </div>
        <p>
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          incidunt */}
        </p>
      </div>
      <div className="about__content">
        {/* image here */}
        <img src={images.teamImage2} />
        <div className="about__text">
          <div id="about-header">
            <span>
              We Are Here <br />
              for Business Solution Idea
            </span>
          </div>
          <div id="about-desc">
            <span>{content}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
