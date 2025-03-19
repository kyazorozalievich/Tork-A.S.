"use client";
import Image from "next/image";
import scss from "./MainAdvantages.module.scss";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { useRef } from "react";
import { IoBarChartOutline, IoSettingsOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiLineHeight } from "react-icons/ci";

import img from "../../assets/images/home/advantagesImg.webp";

const MainAdvantages = () => {
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

  const data = [
    {
      title: "High Precision",
      icon: <IoBarChartOutline />,
      description:
        "Achieve minimal gas loss with our high-precision filling systems, ensuring maximum safety and efficiency.",
    },
    {
      title: "Process Automation",
      icon: <IoSettingsOutline />,
      description:
        "Reduce manual labor and increase productivity with fully automated gas filling processes.",
    },
    {
      title: "Compliance with Standards",
      icon: <IoMdCheckmarkCircleOutline />,
      description:
        "All our equipment undergoes rigorous quality checks and complies with international safety standards.",
    },
    {
      title: "Scalable Solutions",
      icon: <CiLineHeight />,
      description:
        "From small operations to large industrial facilities, our systems can be scaled to meet your needs.",
    },
  ];

  return (
    <section className={scss.MainAdvantages}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <h5>WHY CHOOSE US</h5>
            <h1>Our Advantages</h1>
            <p>
              At Tork Mechatronics A.Ş., we pride ourselves on delivering industry-leading
              solutions that set the standard for quality, precision, and
              reliability.
            </p>
            <div className={scss.left__cards} ref={advantagesRef}>
              <button className={scss.left} onClick={scrollLeft}>
                <MdOutlineChevronLeft />
              </button>
              {data.map((el, idx) => (
                <div className={scss.left__card} key={idx}>
                  <div className={scss.icon}>{el.icon}</div>
                  <h6>{el.title}</h6>
                  <p>{el.description}</p>
                </div>
              ))}

              <button className={scss.right} onClick={scrollRight}>
                <MdOutlineChevronRight />
              </button>
            </div>
          </div>
          <div className={scss.right}>
            <Image src={img} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAdvantages;
