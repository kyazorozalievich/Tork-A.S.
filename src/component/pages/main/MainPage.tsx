import React from "react";
import MainWelcome from "./MainWelcome";
import MainEquipment from "./MainEquipment";
import MainAdvantages from "./MainAdvantages";
import MainOther from "./MainOther";

const MainPage = () => {
  return (
    <div>
      <MainWelcome />
      <MainEquipment />
      <MainAdvantages />
      <MainOther />
    </div>
  );
};

export default MainPage;
