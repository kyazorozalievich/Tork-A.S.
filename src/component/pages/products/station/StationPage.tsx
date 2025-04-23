import React from "react";
import StationMain from "./StationMain";
import Consultation from "../Consultation";
import StationMachine from "./StationMachine";
import StationSafety from "./StationSafety";

const StationPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,70,140,0.07279408345369398) 0%, rgba(0,70,140,0.07279408345369398) 100%)",
      }}
    >
      <StationMain />
      <StationMachine />
      <StationSafety />
      <Consultation />
    </div>
  );
};

export default StationPage;
