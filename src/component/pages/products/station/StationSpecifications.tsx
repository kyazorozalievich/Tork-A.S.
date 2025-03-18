"use client";
import scss from "./StationSpecifications.module.scss";

const StationSpecifications = () => {
  const specificationData = [
    {
      title: "Compact Station	",
      productivity: "Up to 50 cylinders/hour",
      workingPressure: "Up to 150 bar",
      fillingAccuracy: "±1%",
      powerConsumption: "15 kW",
      placementArea: "20 m²",
      automation: "Basic",
    },
    {
      title: "Medium Station	",
      productivity: "Up to 100 cylinders/hour",
      workingPressure: "Up to 200 bar",
      fillingAccuracy: "±0.5%", 
      powerConsumption: "30 kW",
      placementArea: "40 m²",
      automation: "Extended",
    },
    {
      title: "Industrial Station",
      productivity: "Up to 200 cylinders/hour",
      workingPressure: "Up to 300 bar",
      fillingAccuracy: "±0.3%",
      powerConsumption: "60 kW",
      placementArea: "100 m²",
      automation: "Complete",
    },
  ];
  return (
    <section className={scss.StationSpecifications}>
      <div className="container">
        <div className={scss.content}>
          <h2>Technical Specifications</h2>
          <h6>
            Our gas filling stations feature high technical specifications and
            reliability
          </h6>
          <div className={scss.specificationBlock}>
            <div className={scss.mainTable}>
              <h4>Parameter</h4>
              <hr />
              <h5>Productivity</h5>
              <hr />
              <h5>Working pressure </h5>
              <hr />
              <h5>Filling accuracy </h5>
              <hr />
              <h5>Power consumption </h5>
              <hr />
              <h5>Placement area </h5>
              <hr />
              <h5>Automation</h5>
            </div>
            {specificationData.map((el, idx) => (
              <div className={scss.otherTable} key={idx}>
                <h4>{el.title}</h4>
                <hr />
                <h5>{el.productivity}</h5>
                <hr />
                <h5>{el.workingPressure}</h5>
                <hr />
                <h5>{el.fillingAccuracy}</h5>
                <hr />
                <h5>{el.powerConsumption}</h5>
                <hr />
                <h5>{el.placementArea}</h5>
                <hr />
                <h5>{el.automation}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StationSpecifications;
