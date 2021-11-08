import React from "react";
import udemyLogo from "../assets/images/afroibex-shadow.png";
import "./partner.css";

function Partner() {
  const partners = [
    {
      name: "Udemy",
      logo: "https://www.pmits.co.uk/portals/0/images/partners/solar-communications-200.png",
    },
    {
      name: "MasterCard",
      logo: "https://www.pmits.co.uk/Portals/0/img/opera3_logo.png",
    },
    {
      name: "Paypal",
      logo: "https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png",
    },
    {
      name: "Netflix",
      logo: "https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png",
    },
    {
      name: "Paypal",
      logo: "https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png",
    },
  ];
  return (
    <div className="partner">
      <div className="partner__text">
        <p>
          {/* Trusted by over <Underline text="120+" /> happy organizations */}
          Trusted by over <span className="partner__number">120+</span> happy
          organizations
        </p>
      </div>
      <div className="partner__list">
        {partners.map((partner) => (
          <div className="partner__single">
            <img
              width="80"
              src={partner.logo}
              alt={partner.name}
              className="partner__logo"
            />
            {/* <h3 className="partner__name">{partner.name}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partner;
