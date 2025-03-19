"use client";
import { LuTarget, LuTrophy, LuUsers } from "react-icons/lu";
import scss from "./AboutValues.module.scss";
import { FaRegBuilding } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { RxCountdownTimer } from "react-icons/rx";
import Block from "../Block";
import { useRef } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

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

  const aboutValuesRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (aboutValuesRef.current) {
      aboutValuesRef.current.scrollTo({
        left: aboutValuesRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (aboutValuesRef.current) {
      aboutValuesRef.current.scrollTo({
        left: aboutValuesRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={scss.AboutValues}>
      <div className="container">
        <div className={scss.content}>
          <h5>OUR VALUES</h5>
          <h1>What Drives Us</h1>
          <h6>
            At Tork Mechatronics A.Ş. our core values guide everything we do, from product
            development to customer relationships.
          </h6>
          <div className={scss.valuesData} ref={aboutValuesRef}>
            <button className={scss.left} onClick={scrollLeft}>
              <MdOutlineChevronLeft />
            </button>
            {data.map((el, idx) => (
              <Block el={el} key={idx} />
            ))}
            <button className={scss.right} onClick={scrollRight}>
              <MdOutlineChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
