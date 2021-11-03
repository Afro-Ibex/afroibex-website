import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Partner from "../components/Partner";
import Services from "../components/Services";

function Landing() {
  return (
    <div>
      <Hero />
      <Partner />
      <Services />
      <Footer />
    </div>
  );
}

export default Landing;
