import React from "react";
import "./services.css";
import { images } from "../export";

function Services() {
  const services = [
    { name: "Wesbite Development", icon: images.webService },
    { name: "Mobile Application", icon: images.mobileService },
    { name: "Software Development", icon: images.softwareService },
    { name: "Networking", icon: images.networkingService },
    { name: "Computer and Network Security", icon: images.securityService },
    { name: "Graphics Design", icon: images.graphicsService },
    { name: "Logo Design", icon: images.logoService },
    { name: "Maintenance", icon: images.maintenanceService },
    { name: "Data Analysis", icon: images.analysisService },
    { name: "Video Production", icon: images.videoService },
  ];

  return (
    <div className="services">
      <div className="__title">
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
            <img id="service__image" src={service.icon} alt="==========" />
            <div id="Website_Development">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
