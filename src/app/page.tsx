"use client";

import React from "react";

import Benefits from "./_components/benefits";
import WhyChooseUs from "./_components/why-choose-us";
import Services from "./_components/services";
import Hero from "./_components/hero";

const App = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <WhyChooseUs />
      <Services />
      {/* <ContactForm /> */}
    </div>
  );
};

export default App;
