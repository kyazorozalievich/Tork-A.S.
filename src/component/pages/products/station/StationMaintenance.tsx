"use client";
import scss from "./StationMaintenance.module.scss";

const StationMaintenance = () => {
  const maintenanceData = [
    {
      title: "Installation and Startup",
      oneTitle: "Site Preparation",
      oneDesc:
        "Engineering preparation of the site according to project documentation and regulatory requirements",
      twoTitle: "Equipment Installation",
      twoDesc:
        "Professional installation of all station components in compliance with technologies and safety requirements",
      threeTitle: "Setup and Testing",
      threeDesc:
        "Setting all parameters, calibrating measuring instruments, and comprehensive testing of the station",
      fourTitle: "Staff Training",
      fourDesc:
        "Detailed training of client personnel on the rules of operation and maintenance of the station",
    },
    {
      title: "Technical Maintenance",
      oneTitle: "Scheduled Maintenance",
      oneDesc:
        "Regular preventive inspections and maintenance according to schedule",
      twoTitle: "Prompt Repairs",
      twoDesc: "Quick troubleshooting with minimal equipment downtime",
      threeTitle: "Diagnostics and Upgrades",
      threeDesc:
        "Regular diagnostics and equipment updates to maintain optimal performance",
      fourTitle: "Technical Support",
      fourDesc:
        "24/7 technical support and specialist consultations on any issues",
    },
  ];

  return (
    <section className={scss.StationMaintenance}>
      <div className="container">
        <div className={scss.content}>
          <h2>Installation and Maintenance</h2>
          <h6>
            We offer a full range of services for installation, setup, and
            maintenance of gas filling stations
          </h6>
          <div className={scss.maintenanceBlocks}>
            {maintenanceData.map((el, idx) => (
              <div className={scss.maintenanceBlock} key={idx}>
                <h3>{el.title}</h3>
                <div className={scss.textBlocks}>
                  <div className={scss.textBlock}>
                    <h4>
                      <span>1</span>
                      {el.oneTitle}
                    </h4>
                    <h5>{el.oneDesc}</h5>
                  </div>
                  <hr />
                  <div className={scss.textBlock}>
                    <h4>
                      <span>2</span>
                      {el.twoTitle}
                    </h4>
                    <h5>{el.twoDesc}</h5>
                  </div>
                  <hr />
                  <div className={scss.textBlock}>
                    <h4>
                      <span>3</span>
                      {el.threeTitle}
                    </h4>
                    <h5>{el.threeDesc}</h5>
                  </div>
                  <hr />
                  <div className={scss.textBlock}>
                    <h4>
                      <span>4</span>
                      {el.fourTitle}
                    </h4>
                    <h5>{el.fourDesc}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StationMaintenance;
