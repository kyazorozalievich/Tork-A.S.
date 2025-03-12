import React from "react";
import AboutMain from "./AboutMain";
import AboutValues from "./AboutValues";
import AboutJourney from "./AboutJourney";

const AboutPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient( 180deg,rgba(13, 113, 162, 0.20444674451811973) 0%, rgba(13, 113, 162, 0.08679968569459029) 35%, rgba(13, 113, 162, 0.09) 100%  )",
      }}
    >
      <AboutMain />
      <AboutValues />
      <AboutJourney />
    </div>
  );
};

export default AboutPage;
