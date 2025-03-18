"use client";
import { GiCheckMark } from "react-icons/gi";
import scss from "./FillingEquipment.module.scss";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/navigation";


const FillingEquipment = () => {
  const router = useRouter();
  const equipmentData = [
    {
      img: "https://i.pinimg.com/736x/25/17/c4/2517c461dcbe739112a4af887fc89c4a.jpg",
      title: "Stationary Filling Complexes",
      description:
        "Fully automated systems for filling gas cylinders with high productivity and compliance with all safety standards.",
      icon: <GiCheckMark />,
      character1: "Productivity up to 200 cylinders per hour",
      character2: "Automatic filling control",
      character3: "Electronic accounting system",
    },
    {
      img: "https://i.pinimg.com/736x/25/17/c4/2517c461dcbe739112a4af887fc89c4a.jpg",
      title: "Mobile Filling Stations",
      description:
        "Compact and efficient solutions for mobile filling of gas cylinders anywhere with all safety standards in mind.",
      icon: <GiCheckMark />,
      character1: "Mobility and compactness",
      character2: "Quick setup and launch",
      character3: "High filling accuracy",
    },
  ];
  return (
    <section className={scss.FillingEquipment}>
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
