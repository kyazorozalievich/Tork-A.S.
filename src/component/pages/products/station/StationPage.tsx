import React from "react";
import StationMain from "./StationMain";
import StationType from "./StationType";
import StationSpecifications from "./StationSpecifications";
import StationMaintenance from "./StationMaintenance";
import StationServices from "./StationServices";
import Consultation from "../Consultation";

const StationPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,70,140,0.07279408345369398) 0%, rgba(0,70,140,0.07279408345369398) 100%)",
      }}
    >
      <StationMain />
      <StationType />
      <StationSpecifications />
      <StationMaintenance />
      <StationServices />
      <Consultation />
    </div>
  );
};

export default StationPage;
