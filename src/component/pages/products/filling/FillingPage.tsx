import React from "react";
import FillingMain from "./FillingMain";
import FillingAdvantages from "./FillingAdvantages";
import FillingEquipment from "./FillingEquipment";
import Consultation from "../Consultation";

const FillingPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,70,140,0.07279408345369398) 0%, rgba(0,70,140,0.07279408345369398) 100%)",
      }}
    >
      <FillingMain />
      <FillingAdvantages />
      <FillingEquipment />
      <Consultation />
    </div>
  );
};

export default FillingPage;
