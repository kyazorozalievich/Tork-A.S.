"use client";
import Image from "next/image";
import scss from "./MarkingEquipment.module.scss";
import { FiChevronRight } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { useRouter } from "next/navigation";

const MarkingEquipment = () => {
  const router = useRouter();
  const equipmentData = [
    {
      img: "https://i.pinimg.com/736x/25/17/c4/2517c461dcbe739112a4af887fc89c4a.jpg",
      title: "Laser Markers",
      description:
        "High-precision laser systems for applying indelible markings to metal surfaces of gas cylinders.",
      icon: <GiCheckMark />,
      character1: "High precision and clarity",
      character2: "Durability of marking",
      character3: "Ability to apply QR and barcodes",
      character4: "Integration with accounting systems",
    },
    {
      img: "https://i.pinimg.com/736x/25/17/c4/2517c461dcbe739112a4af887fc89c4a.jpg",
      title: "RFID Marking Systems",
      description:
        "Modern radio frequency identification systems for automated accounting and control of gas cylinder movement.",
      icon: <GiCheckMark />,
      character1: "Automatic identification",
      character2: "Extended information storage",
      character3: "High data reading speed",
      character4: "Protection against counterfeiting",
    },
  ];
  return (
    <section className={scss.MarkingEquipment}>
      <div className="container">
        <div className={scss.content}>
          <h2>Modern Equipment for Gas Industry</h2>
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
                <a>
                  <span>{el.icon}</span>
                  {el.character1}
                </a>
                <a>
                  <span>{el.icon}</span>
                  {el.character2}
                </a>
                <a>
                  <span>{el.icon}</span>
                  {el.character3}
                </a>
                <a>
                  <span>{el.icon}</span>
                  {el.character4}
                </a>
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

export default MarkingEquipment;
