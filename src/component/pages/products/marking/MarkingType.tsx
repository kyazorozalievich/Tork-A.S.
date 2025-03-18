"use client";
import { GiCheckMark } from "react-icons/gi";
import scss from "./MarkingType.module.scss";

const MarkingType = () => {
  const data = [
    {
      icon: <GiCheckMark />,
      title: "Stamped Marking",
      description:
        "Traditional method of applying information by mechanically stamping characters on the cylinder surface",
      character1: "Durability and resistance to external influences",
      character2: "No special maintenance required",
      character3: "Clearly visible under any conditions",
      character4: "Complies with all regulatory requirements",
    },
    {
      icon: <GiCheckMark />,
      title: "Laser Marking",
      description:
        "Modern high-precision method of applying information using a laser beam",
      character1: "High detail and clarity",
      character2: "Ability to apply barcodes and QR codes",
      character3: "Indelible marking with long service life",
      character4: "Automation of the marking process",
    },
    {
      icon: <GiCheckMark />,
      title: "RFID Marking",
      description:
        "Innovative system using radio frequency identifiers for automatic accounting",
      character1: "Contactless information reading",
      character2: "Contactless information reading",
      character3: "Automatic identification",
      character4: "Integration with accounting and control systems",
    }, 
  ];
  return (
    <section className={scss.MarkingType}>
      <div className="container">
        <div className={scss.content}>
          <h2>Types of Cylinder Marking</h2>
          <h6>
            We offer various types of gas cylinder marking depending on your
            requirements and operating conditions
          </h6>
          <div className={scss.markingTypeBlocks}>
            {data.map((el, idx) => (
              <div className={scss.markingTypeBlock} key={idx}>
                <h2>{idx + 1}</h2>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <h5>
                  <span>{el.icon}</span>
                  {el.character1}
                </h5>
                <h5>
                  <span>{el.icon}</span>
                  {el.character2} 
                </h5>
                <h5>
                  <span>{el.icon}</span>
                  {el.character3}
                </h5>
                <h5>
                  <span>{el.icon}</span>
                  {el.character4}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarkingType;
