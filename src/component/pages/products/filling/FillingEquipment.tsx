"use client";
import { GiCheckMark } from "react-icons/gi";
import scss from "./FillingEquipment.module.scss";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import eqType1Img from "../../../assets/images/product/cylinder/equipmentType1.jpg";
import eqType2Img from "../../../assets/images/product/cylinder/equipmentType2.jpg";

const FillingEquipment = () => {
  const router = useRouter();
  const equipmentData = [
    {
      img: eqType1Img,
      title: "Carousel Vending Machine (up to 96 cylinders)",
      description: "Ideal for high-demand locations with large sales volume",
      icon: <GiCheckMark />,
      features: [
        "Capacity: Up to 96 cylinders",
        "Mechanism: Vertical rotating carousel system",
        "Cylinder Types: Supports various sizes (standard and industrial)",
        "Monitoring: Automated tracking system with QR codes",
        "Safety: Secured access, surveillance cameras, automatic system lock in case of malfunction",
        "Interface: Touchscreen display with multilingual support",
        "Installation: Recommended for industrial zones, residential complexes, and high-traffic fuel stations",
      ],
      benefits: [
        "High storage density – maximum capacity with minimal footprint",
        "Fast dispensing and automatic reloading",
        "Perfect for urban areas and retail chains",
      ],
      character1: "Productivity up to 200 cylinders per hour",
      character2: "Automatic filling control",
      character3: "Electronic accounting system",
    },
    {
      img: eqType2Img,
      title: "Standard Vending Machine (up to 39 cylinders)",
      description: "Compact solution for urban and rural areas.",
      icon: <GiCheckMark />,
      features: [
        "Capacity: Up to 39 cylinders",
        "Mechanism: Static storage with front dispensing system",
        "Cylinder Types: Standard domestic LPG cylinders",
        "Monitoring: Cloud-based system shows inventory and usage data",
        "Safety: Reinforced structure, gas leak sensors, integrated cameras",
        "Interface: Simple control panel with contactless payment option",
        "Installation: Perfect for small shops, villages, campsites, fuel stations, and remote areas",
      ],
      benefits: [
        "Compact size – fits in space-limited environments",
        "Low power consumption",
        "Cost-effective solution for starting sales or serving moderate demand locations",
      ],
      character1: "Mobility and compactness",
      character2: "Quick setup and launch",
      character3: "High filling accuracy",
    },
  ];
  return (
    <section className={scss.FillingEquipment}>
      <div className="container">
        <div className={scss.content}>
          <h2>
            Innovative vending machine for selling various types of LPG
            cylinders — the perfect solution for remote areas without access
            to gas pipelines
          </h2>
          <h6>
            We produce a full range of equipment for working with gas cylinders
            and servicing gas stations
          </h6>
          <div className={scss.equipmentsBlocks}>
            {equipmentData.map((el, idx) => (
              <div className={scss.equipmentBlock} key={idx}>
                <Image src={el.img} alt="img" width={1000} height={1000} />
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <h4>Key Features</h4>
                {el.features.map((text, id) => (
                  <a key={id}>
                    <span>{el.icon}</span>
                    {text}
                  </a>
                ))}
                <h4>Benefits</h4>
                {el.benefits.map((text, id) => (
                  <a key={id}>
                    <span>{el.icon}</span>
                    {text}
                  </a>
                ))}
                <button onClick={() => router.push("/contact")}>
                  <FiChevronRight />
                  Get in touch{" "}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FillingEquipment;
