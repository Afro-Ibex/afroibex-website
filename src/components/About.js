import React from "react";
import { images } from "../export";

function About() {
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
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
