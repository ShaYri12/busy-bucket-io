import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Team from "../components/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
