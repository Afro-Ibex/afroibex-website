import React from "react";
import "./button.css";

function Button({ name, to = "#" }) {
  return (
    <a href={to}>
      <button className="button">
        <p className="button__name">{name}</p>
      </button>
    </a>
  );
}

export default Button;
