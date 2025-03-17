"use client";
import { AiOutlineSafety } from "react-icons/ai";
import scss from "./FillingAdvantages.module.scss";
import { GrThreeDEffects } from "react-icons/gr";
import { IoStarOutline } from "react-icons/io5";
import { TbAutomation } from "react-icons/tb";
import { MdSystemUpdateAlt } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Block from "../../Block";

const FillingAdvantages = () => {
  const cardData = [
    {
      icon: <AiOutlineSafety />,
      title: "Safety",
      description:
        "All equipment complies with the most stringent safety standards when working with gas under pressure",
    },
    {
      icon: <GrThreeDEffects />,
      title: "Efficiency",
      description:
        "High productivity with minimal energy consumption and optimal use of resources",
    },
    {
      icon: <IoStarOutline />,
      title: "Reliability",
      description:
        "Fault-tolerant systems with backup components and long service life",
    },
    {
      icon: <TbAutomation />,
      title: "Automation",
      description:
        "Minimal operator involvement in the filling process thanks to automated systems",
    },
    {
      icon: <MdSystemUpdateAlt />,
      title: "Scalability",
      description:
        "Possibility to expand the system with increased production volumes without replacing equipment",
    },
    {
      icon: <FiPhoneCall />,
      title: "Service Support",
      description:
        "24/7 technical support and quick response to any customer requests",
    },
  ];
  return (
    <section className={scss.FillingAdvantages}>
      <div className="container">
        <div className={scss.content}>
          <h2>Advantages of Our Systems</h2>
          <h6>
            Our equipment is designed with all safety and efficiency
            requirements in mind when working with gas
          </h6>
          <div className={scss.cardDatas}>
            {cardData.map((el, idx) => (
              <Block el={el} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FillingAdvantages;
