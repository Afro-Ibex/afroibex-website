import React from "react";
import underline from "../assets/images/underline.svg";

function Underline({ text }) {
  return (
    <div style={{ lineHeight: "5px", margin: "0 5px" }}>
      <div>{text}</div>
      <img width={50} src={underline} />
    </div>
  );
}

export default Underline;
