import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "Vishal Ecommerce",
    alt: "About Image",
  };
  return <HeroSection myData={data} />;
};

export default About;
