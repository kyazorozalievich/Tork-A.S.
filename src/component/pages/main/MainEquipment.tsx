"use client";
import Image from "next/image";
import scss from "./MainEquipment.module.scss";
import { CiTimer } from "react-icons/ci";
import { useRef } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import img1 from "../../assets/images/about/aboutHistoryImg.jpg";
import img2 from "../../assets/images/home/equipmentTest.jpg";
import img3 from "../../assets/images/home/equipmentTransport.jpg";

const MainEquipment = () => {
  const cardsData = [
    {
      img: img1,
      icon: <CiTimer />,
      title:
        "LPG Cylinder Vending Machine A Fully Automated System – Operates 24/7 Without Breaks or Days Off!",
      description: [
        "• Sell Anytime, Anywhere",
        "• Real-Time Monitoring & Analytics",
        "• Sales of Various Cylinder Types",
      ],
    },
    {
      img: img2,
      icon: <AiOutlineSafety />,
      title: "Testing & Quality Inspection",
      description: [
        "Equipment for checking tightness, pressure, and cylinder safety.",
      ],
    },
    {
      img: img3,
      icon: <TbTruckDelivery />,
      title: "Transport & Distribution Systems",
      description: [
        "Solutions for convenient logistics and storage of gas containers.",
      ],
    },
  ];

  const equipmentRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (equipmentRef.current) {
      equipmentRef.current.scrollTo({
        left: equipmentRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (equipmentRef.current) {
      equipmentRef.current.scrollTo({
        left: equipmentRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={scss.MainEquipment}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            Sell LPG Cylinders 24/7 with the LPG GAS CYLINDER VENDING AUTOMAT
            MACHINE – A Smart Solution for Your Business!
          </h1>
          <p>
            The era of traditional gas cylinder sales is over. With our
            automated vending machine, you get more than just equipment—you get
            a fully intelligent system that works non-stop, day and night.
          </p>
          <div className={scss.cards} ref={equipmentRef}>
            <button className={scss.left} onClick={scrollLeft}>
              <MdOutlineChevronLeft />
            </button>
            {cardsData.map((el, idx) => (
              <div className={scss.card} key={idx}>
                <div className={scss.imgBlock}>
                  <Image src={el.img} alt="img" width={400} height={320} />
                </div>
                <div className={scss.allText}>
                  <div className={scss.data}>
                    <span>{el.icon}</span>
                    <h4>{el.title}</h4>
                  </div>
                  {el.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </div>
              </div>
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

export default MainEquipment;
