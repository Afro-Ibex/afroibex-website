import React from "react";
import udemyLogo from "../assets/images/afroibex-shadow.png";
import "./partner.css";
import Underline from "./Underline";

function Partner() {
  const partners = [
    { name: "Udemy", logo: udemyLogo },
    { name: "MasterCard", logo: udemyLogo },
    { name: "Paypal", logo: udemyLogo },
    { name: "Netflix", logo: udemyLogo },
    { name: "Paypal", logo: udemyLogo },
  ];
  return (
    <div className="partner">
      <div className="partner__text">
        <p>
          Trusted by over <Underline text="120+" /> happy organizations
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
            <h3 className="partner__name">{partner.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partner;
