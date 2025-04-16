import React from "react";
import ReferencesJourney from "./ReferencesJourney";
import Consultation from "../products/Consultation";
import ReferencePartners from "./ReferencePartners";

const ReferencesPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,70,140,0.07279408345369398) 0%, rgba(0,70,140,0.07279408345369398) 100%)",
      }}
    >
      <ReferencePartners />
      <ReferencesJourney />
      <Consultation />
    </div>
  );
};

export default ReferencesPage;
