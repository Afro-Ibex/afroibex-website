import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Partner from "../components/Partner";
import Services from "../components/Services";
import About from "../components/About";
import EmailForm from "../components/EmailForm";

function Landing() {
  return (
    <div>
      <Hero />
      <Partner />
      <Services />
      <About />
      <EmailForm />
      <Footer />
    </div>
  );
}

export default Landing;
