import React from "react";
import "./socialMedia.css";

function SocialMedia() {
  const smedias = [
    {
      name: "linkedin",
      icon: "fa fa-linkedin",
      link: " https://www.linkedin.com/company/afro-ibex/",
    },
    {
      name: "facebook",
      icon: "fa fa-facebook",
      link: "https://www.facebook.com/Afro-Ibex-101090339040741",
    },
    {
      name: "twitter",
      icon: "fa fa-twitter",
      link: "https://twitter.com/AfroIbex",
    },
    {
      name: "instagram",
      icon: "fa fa-instagram",
      link: "https://www.instagram.com/afro_ibex/",
    },
    // https://www.linkedin.com/company/afro-ibex/
    // https://twitter.com/AfroIbex
    // https://www.instagram.com/afro_ibex/
  ];
  return (
    <div className="social_medias">
      <ul className="ul">
        {smedias.map((smedia) => (
          <li>
            <a
              href={smedia.link}
              target="_blank"
              title={smedia.name}
              className={`links ${smedia.icon}`}
            ></a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
