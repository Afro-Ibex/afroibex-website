import React from "react";
import "./services.css";
import image from "./Rectangle_8.png";

function Services() {
  const services = [
    { name: "Wesbite Development", icon: "..." },
    { name: "Software Development", icon: "..." },
    { name: "Mobile Application", icon: "..." },
    { name: "Wesbite Development", icon: "..." },
    { name: "Wesbite Development", icon: "..." },
    { name: "Software Development", icon: "..." },
    { name: "Mobile Application", icon: "..." },
    { name: "Wesbite Development", icon: "..." },
    { name: "Wesbite Development", icon: "..." },
    { name: "Wesbite Development", icon: "..." },
    { name: "Wesbite Development", icon: "..." },
    { name: "Wesbite Development", icon: "..." },
  ];

  return (
    <div className="services">
      <div className="services__title">
        <div>
          <h3>Services</h3>
          <h1>What we Offer</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          incidunt odit laborum repellendus enim deserunt minima sint quibusdam
          ab. Ipsa quibusdam assumenda sequi illo commodi dolore. Autem expedita
          vero porro.
        </p>
      </div>
      <div className="services__list">
        {services.map((service) => (
          <div className="service">
            <img id="service__image" src={image} />
            <div id="Website_Development">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
