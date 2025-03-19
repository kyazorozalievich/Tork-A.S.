"use client";
import scss from "./StationMain.module.scss";

const StationMain = () => {
  return (
    <section className={scss.StationMain}>
      <div className="container">
        <div className={scss.content}>
          <h5>Professional Gas Equipment</h5>
          <h1>Gas Filling Stations</h1>
          <h6>
            Modern and highly efficient gas filling stations for commercial and
            industrial use from Tork Mechatronics A.Ş.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default StationMain;
