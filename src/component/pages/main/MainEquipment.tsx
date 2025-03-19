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
      title: "Automatic Refilling Stations",
      description: "Precise and fast systems with advanced control modules.",
    },
    {
      img: img2,
      icon: <AiOutlineSafety />,
      title: "Testing & Quality Inspection",
      description:
        "Equipment for checking tightness, pressure, and cylinder safety.",
    },
    {
      img: img3,
      icon: <TbTruckDelivery />,
      title: "Transport & Distribution Systems",
      description:
        "Solutions for convenient logistics and storage of gas containers.",
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
          <h1>Advanced Solutions for Gas Refilling</h1>
          <p>
            Explore our range of modern and safe equipment designed for
            convenient and efficient gas cylinder refilling. We offer reliable
            solutions that help automate the process, reduce gas losses and
            improve safety. Our equipment meets high quality standards and
            ensures stable and uninterrupted operation.
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
                  <p>{el.description}</p>
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
