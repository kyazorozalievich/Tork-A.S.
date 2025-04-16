"use client";
import { AiOutlineSafety } from "react-icons/ai";
import scss from "./FillingAdvantages.module.scss";
import { GrThreeDEffects } from "react-icons/gr";
import { IoStarOutline } from "react-icons/io5";
import { TbAutomation } from "react-icons/tb";
import {
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
  MdSystemUpdateAlt,
} from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Block from "../../Block";
import { useRef } from "react";

const FillingAdvantages = () => {
  const cardData = [
    {
      icon: <AiOutlineSafety />,
      title: "Safety",
      description:
        "Certified safety systems for 24/7 LPG vending Our vending machines meet the highest international standards for safe gas cylinder handling and automated distribution.",
    },
    {
      icon: <GrThreeDEffects />,
      title: "Efficiency",
      description:
        "Maximum sales with minimal operational cost Sell gas cylinders with low energy consumption, reduced manpower, and optimized system performance.",
    },
    {
      icon: <IoStarOutline />,
      title: "Reliability",
      description:
        "Uninterrupted operation with backup systems Designed for continuous use with durable components, ensuring long-term performance and minimal downtime.",
    },
    {
      icon: <TbAutomation />,
      title: "Automation",
      description:
        "Fully automated sales & tracking Customers buy cylinders without staff involvement. QR-code tracking allows full visibility of sales and inventory in real time.",
    },
    {
      icon: <MdSystemUpdateAlt />,
      title: "Scalability",
      description:
        "Easily expand your LPG vending network Add more machines as your business grows—no need to upgrade existing infrastructure.",
    },
    {
      icon: <FiPhoneCall />,
      title: "Service Support",
      description:
        "24/7 remote support and system monitoring Enjoy around-the-clock technical support, real-time machine status updates, and fast troubleshooting  from  any where.",
    },
  ];

  const advantagesRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (advantagesRef.current) {
      advantagesRef.current.scrollTo({
        left: advantagesRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (advantagesRef.current) {
      advantagesRef.current.scrollTo({
        left: advantagesRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={scss.FillingAdvantages}>
      <div className="container">
        <div className={scss.content}>
          <h2>Advantages of Our Systems</h2>
          <h6>
            Our equipment is designed with all safety and efficiency
            requirements in mind when working with gas
          </h6>
          <div className={scss.cardDatas} ref={advantagesRef}>
            <button className={scss.left} onClick={scrollLeft}>
              <MdOutlineChevronLeft />
            </button>
            {cardData.map((el, idx) => (
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

export default FillingAdvantages;
