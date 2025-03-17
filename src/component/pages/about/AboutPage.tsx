import React from "react";
import AboutMain from "./AboutMain";
import AboutValues from "./AboutValues";
import AboutJourney from "./AboutJourney";
import AboutCompany from "./AboutCompany";

const AboutPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,70,140,0.07279408345369398) 0%, rgba(0,70,140,0.07279408345369398) 100%)",
      }}
    >
      <AboutMain />
      <AboutValues />
      <AboutCompany />
      <AboutJourney />
    </div>
  );
};

export default AboutPage;
