"use client";
import scss from "./AboutCharacter.module.scss";
import equipmentImg from "../../assets/images/about/equipment.jpg";
import cameraImg from "../../assets/images/about/camera.jpg";
import windowImg from "../../assets/images/about/window.jpg";
import boxImg from "../../assets/images/about/box.jpg";
import Image from "next/image";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { useRef } from "react";

const AboutCharacter = () => {
  const data = [
    {
      img: equipmentImg,
      title: "Safety",
      description: [
        "The solid concrete body inside the machine ensures that in the event of an explosion, the energy remains inside and does not spread out.",
        "Fire-resistant plastic panels in the central part of the device are resistant to fire and high temperatures.",
      ],
    },
    {
      img: boxImg,
      title: "Functionality",
      description: [
        "The machine is designed for safe filling of gas cylinders.",
        "Equipped with modern control and protection systems, ensuring convenience and reliability in use.",
      ],
    },
    {
      img: windowImg,
      title: "Ease of use:",
      description: [
        "The machine has special cells for cylinders, which makes the refilling process comfortable and convenient for customers.",
        "The armored glass on the cell doors is made from material used in aviation and can withstand strong impacts.",
      ],
    },
    {
      img: cameraImg,
      title: "Monitoring and control systems:",
      description: [
        "The device is equipped with highly durable video surveillance cameras that are resistant to mechanical damage and ensure the safety of users.",
      ],
    },
  ];

  const characterRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (characterRef.current) {
      characterRef.current.scrollTo({
        left: characterRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (characterRef.current) {
      characterRef.current.scrollTo({
        left: characterRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={scss.AboutCharacter}>
      <div className="container">
        <div className={scss.content}>
          <h5>SAFETY AND FUNCTIONALITY</h5>
          <h1>Safety and Functionality of the Gas Cylinder Filling Machine</h1>
          <p>
            The machine is designed for safe and convenient filling of gas
            cylinders. Special ventilation holes prevent gas accumulation, and a
            durable concrete body keeps a possible explosion inside. Fireproof
            panels are resistant to high temperatures, and armored glass
            protects against impacts. The device is equipped with high-strength
            surveillance cameras for additional security.
          </p>
          <div className={scss.CharacterBlcoks} ref={characterRef}>
            <button className={scss.left} onClick={scrollLeft}>
              <MdOutlineChevronLeft />
            </button>
            {data.map((el, idx) => (
              <div className={scss.CharacterBlcok} key={idx}>
                <Image src={el.img} alt="img" />
                <h3>{el.title}</h3>
                <ul>
                  {el.description.map((desc, id) => (
                    <li key={id}>{desc}</li>
                  ))}
                </ul>
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

export default AboutCharacter;
