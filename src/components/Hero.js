import React, { useEffect } from "react";
import Button from "./Button";
import "./hero.css";

function Hero() {
  const services = ["WEBSITE", "APPLICATION", "GRAPHICS"];

  function changeService() {
    let length = services.length;
    let i = 0;
    let serviceName = document.getElementById("serviceName");

    return () => {
      setInterval(() => {
        if (i >= length) {
          i = 0;
        }
        // serviceName.style.opacity = "0.4";
        serviceName.textContent = services[i];
        i++;
      }, 4000);
    };
  }

  useEffect(() => {
    // changeService()();
  });

  document.addEventListener("DOMContentLoaded", function (event) {
    // array with texts to type in typewriter
    var dataText = ["WEBSITE", "APPLICATION", "GRAPHICS", "SECURITY"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < text.length) {
        // add next character to h1
        document.querySelector("#serviceName").innerHTML =
          text.substring(0, i + 1) +
          '<span class="blink" aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == "function") {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      if (typeof dataText[i] == "undefined" || dataText == "undefined") {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 100);
      }
      // check if dataText[i] exists
      else {
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
          typeWriter(dataText[i], 0, function () {
            // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
          });
        }
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

  return (
    <div className="hero">
      <div className="hero__text">
        <h2>YOUR BUSINESS</h2>
        <h1>DEFINITELY</h1>
        <h2>
          NEED <span id="serviceName"></span>
        </h2>
        <div className="hero__button">
          <Button name="Contact Us" />
        </div>
      </div>
      {/* <div className="hero__image">
        <img src={heroImage} alt="team image" />
      </div> */}
    </div>
  );
}

export default Hero;
