import React from "react";
import MarkingMain from "./MarkingMain";
import MarkingCylinder from "./MarkingCylinder";
import MarkingType from "./MarkingType";
import MarkingMandatory from "./MarkingMandatory";
import MarkingEquipment from "./MarkingEquipment";
import MarkingServices from "./MarkingServices";
import Consultation from "../Consultation";

const MarkingPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,70,140,0.07279408345369398) 0%, rgba(0,70,140,0.07279408345369398) 100%)",
      }}
    >
      <MarkingMain />
      <MarkingCylinder />
      <MarkingType />
      <MarkingMandatory />
      <MarkingEquipment />
      <MarkingServices />
      <Consultation />
    </div>
  );
};

export default MarkingPage;
