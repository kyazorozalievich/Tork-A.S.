"use client";
import Image from "next/image";
import scss from "./StationMachine.module.scss";
import machineStation from "../../../assets/images/product/machine2.png";

const StationMachine = () => {
  return (
    <section className={scss.StationMachine}>
      <div className="container">
        <div className={scss.content}>
          <p className={scss.left}>
            ELECTRONIC LPG CYLINDER FILLING MACHINE is designed to supply liquid
            petroleum gas(LPG) to the cylinders. The cylinders to be filled are
            manufactured in 3 different sizes according to type and in 4 models
            according to the filling head types of the cylinders. In addition,
            cylinders are manufactured fully automatically
            (centralized-propulsion), semi-automatically (centralized) and
            manually in separate models to fit the plant's automation.
          </p>
          <Image src={machineStation} alt="" />

          <p className={scss.right}>
            This is an **electronic LPG cylinder filling station**. The
            equipment is designed for precise and safe filling of liquefied
            petroleum gas (LPG) into cylinders. It features an automated control
            system, a dosing mechanism, and a sturdy structure that ensures
            secure cylinder positioning during the filling process. The device
            supports various operating modes (automatic, semi-automatic, and
            manual), making it a versatile solution for gas filling stations and
            industrial facilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StationMachine;
