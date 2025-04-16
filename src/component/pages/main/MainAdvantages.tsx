"use client";
import Image from "next/image";
import scss from "./MainAdvantages.module.scss";
import {
  MdOutlineAccessTime,
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
  MdOutlineCloudSync,
  MdOutlineInsights,
  MdOutlineLocationOn,
  MdOutlineQrCode,
  MdOutlineSupportAgent,
  MdOutlineSwapHoriz,
  MdOutlineTouchApp,
  MdOutlineTrendingUp,
  MdOutlineVideocam,
} from "react-icons/md";
import { useRef } from "react";

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
      title: "24/7 Sales",
      icon: <MdOutlineAccessTime />,
      description:
        "Sell gas cylinders not just during the day, but also at night, even when stores are closed.",
    },
    {
      title: "User-Friendly Interface",
      icon: <MdOutlineTouchApp />,
      description:
        "A simplified, intuitive system that’s easy for customers and requires minimal maintenance.",
    },
    {
      title: "QR Code Tracking",
      icon: <MdOutlineQrCode />,
      description:
        "Track which types sell the most with unique QR codes on each cylinder. Get full sales insights via your computer.",
    },
    {
      title: "Built-In Surveillance Cameras",
      icon: <MdOutlineVideocam />,
      description:
        "Ensure maximum security and operational transparency with integrated surveillance.",
    },
    {
      title: "Real-Time Monitoring",
      icon: <MdOutlineCloudSync />,
      description:
        "Manage stock levels, machine status, and more remotely through the cloud.",
    },
    {
      title: "Advanced Analytics",
      icon: <MdOutlineInsights />,
      description:
        "Get reports on customer behavior, sales trends, and service data to optimize operations.",
    },
    {
      title: "Supports Multiple Cylinder Types",
      icon: <MdOutlineSwapHoriz />,
      description:
        "Compatible with a wide range of cylinder sizes and standards.",
    },
    {
      title: "Flexible Installation",
      icon: <MdOutlineLocationOn />,
      description:
        "Set up the machine anywhere with high foot traffic: gas stations, supermarkets, highways, or industrial zones.",
    },
    {
      title: "Proven Increase in Sales",
      icon: <MdOutlineTrendingUp />,
      description:
        "Automated sales boost revenue thanks to convenience and availability.",
    },
    {
      title: "Premium Reporting & 24/7 Support",
      icon: <MdOutlineSupportAgent />,
      description:
        "Let us handle the back-end with detailed reports and remote support, so you can grow your business.",
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
              At Tork Mechatronics A.Ş., we pride ourselves on delivering
              industry-leading solutions that set the standard for quality,
              precision, and reliability.
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
          {/* <div className={scss.right}>
            <Image src={img} alt="img" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MainAdvantages;
