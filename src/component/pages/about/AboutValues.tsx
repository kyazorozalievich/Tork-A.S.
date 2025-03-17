"use client";
import { LuTarget, LuTrophy, LuUsers } from "react-icons/lu";
import scss from "./AboutValues.module.scss";
import { FaRegBuilding } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { RxCountdownTimer } from "react-icons/rx";
import Block from "../Block";

const AboutValues = () => {
  const data = [
    {
      icon: <LuTrophy />,
      title: "Excellence",
      description: "We strive for excellence in every solution we deliver.",
    },
    {
      icon: <FaRegBuilding />,
      title: "Innovation",
      description:
        "Continuous improvement and innovative approaches drive our growth.",
    },
    {
      icon: <LuTarget />,
      title: "Precision",
      description: "Accuracy and attention to detail ensure reliability.",
    },
    {
      icon: <TbWorld />,
      title: "Sustainability",
      description: "We develop solutions with minimal environmental impact.",
    },
    {
      icon: <LuUsers />,
      title: "Collaboration",
      description: "Working together with clients to achieve mutual success.",
    },
    {
      icon: <RxCountdownTimer />,
      title: "Reliability",
      description: "Consistent performance and dependable systems.",
    },
  ];

  return (
    <section className={scss.AboutValues}>
      <div className="container">
        <div className={scss.content}>
          <h5>OUR VALUES</h5>
          <h1>What Drives Us</h1>
          <h6>
            At Tork A.Ş. our core values guide everything we do, from product
            development to customer relationships.
          </h6>
          <div className={scss.valuesData}>
            {data.map((el, idx) => (
              <Block el={el} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
