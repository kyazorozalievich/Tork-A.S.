"use client";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import scss from "./MarkingMandatory.module.scss";
import { useRef } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const MarkingMandatory = () => {
  const data = [
    {
      title: "Registration Number",
      description:
        "Unique cylinder number assigned during registration and entered in the registry",
    },
    {
      title: "Cylinder Weight",
      description:
        "Weight of the empty cylinder in kilograms including the weight of the valve and cap",
    },
    {
      title: "Manufacturing Date",
      description: "Year and month of cylinder manufacture (e.g., 05.2023)",
    },
    {
      title: "Next Inspection Date",
      description:
        "Date of the next technical condition inspection of the cylinder",
    },
    {
      title: "Working Pressure",
      description:
        "Maximum allowable pressure in the cylinder during normal operation",
    },
    {
      title: "Cylinder Volume",
      description: "Internal volume of the cylinder in liters",
    },
    {
      title: "QC Stamp",
      description: "Stamp of the manufacturer's quality control department",
    },
    {
      title: "Gas Type",
      description:
        "Information about the type of gas for which the cylinder is intended",
    },
    {
      title: "Conformity Mark",
      description:
        "Marking of compliance with standards and safety requirements",
    },
  ];

  const mandatoryRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (mandatoryRef.current) {
      mandatoryRef.current.scrollTo({
        left: mandatoryRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (mandatoryRef.current) {
      mandatoryRef.current.scrollTo({
        left: mandatoryRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={scss.MarkingMandatory}>
      <div className="container">
        <div className={scss.content}>
          <h2>Mandatory Marking Elements</h2>
          <h6>
            According to regulatory requirements, each gas cylinder must contain
            the following marking elements
          </h6>
          <div className={scss.mandatoryContent}>
            <div className={scss.mandatoryBlocks} ref={mandatoryRef}>
              <button className={scss.left} onClick={scrollLeft}>
                <MdOutlineChevronLeft />
              </button>
              {data.map((el, idx) => (
                <div className={scss.mandatoryBlock} key={idx}>
                  <h2>{idx + 1}</h2>
                  <div className={scss.blockText}>
                    <h3>{el.title}</h3>
                    <h5>{el.description}</h5>
                  </div>
                </div>
              ))}
              <button className={scss.right} onClick={scrollRight}>
                <MdOutlineChevronRight />
              </button>
            </div>
            <hr />
            <h6>
              <span>
                <AiOutlineExclamationCircle />
              </span>
              Our specialists are always ready to consult you on all issues
              related to gas cylinder marking and help choose the optimal
              solution for your needs.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarkingMandatory;
