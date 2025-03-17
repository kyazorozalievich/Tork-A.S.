"use client";
import { GiCheckMark } from "react-icons/gi";
import scss from "./MarkingCylinder.module.scss";
import Image from "next/image";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const MarkingCylinder = () => {
  return (
    <section className={scss.MarkingCylinder}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.markingText}>
            <h2>Why Cylinder Marking is Important</h2>
            <h6>
              Proper marking of gas cylinders is not only a regulatory
              requirement but also an important tool for ensuring safety,
              accounting, and efficient management of gas cylinder circulation.
            </h6>
            <div className={scss.textBlock}>
              <h4>
                <span>
                  <GiCheckMark />
                </span>
                Safety
              </h4>
              <p>
                Marking contains critical information about the gas type,
                maximum pressure, and other data necessary for safe handling of
                the cylinder.
              </p>
            </div>
            <div className={scss.textBlock}>
              <h4>
                <span>
                  <GiCheckMark />
                </span>
                Accounting and Control
              </h4>
              <p>
                Unique marking allows accurate accounting and control of each
                cylinder, tracking its movement and service history.
              </p>
            </div>
            <div className={scss.textBlock}>
              <h4>
                <span>
                  <GiCheckMark />
                </span>
                Regulatory Compliance
              </h4>
              <p>
                Proper cylinder marking is a mandatory requirement of regulatory
                documents and safety standards.
              </p>
            </div>
            <div className={scss.textBlock}>
              <h4>
                <span>
                  <GiCheckMark />
                </span>
                Error Prevention
              </h4>
              <p>
                Clear marking helps avoid errors in filling, transportation, and
                use of gas cylinders.
              </p>
            </div>
          </div>
          <div className={scss.markingImg}>
            <Image
              src="https://i.pinimg.com/736x/ff/9b/e4/ff9be402b5c8e2c4515ab2b2a9bbecc2.jpg"
              alt=""
              width={300}
              height={200}
            /> 
            <div className={scss.markingInfo}>
              <h6>
                <span>
                  <AiOutlineExclamationCircle />
                </span>
                According to regulatory requirements, each gas cylinder must
                have clear and durable marking with basic information about the
                cylinder and its contents.
              </h6>
              <h6>
                Missing or damaged marking can lead to serious consequences,
                including a ban on cylinder operation and administrative fines.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarkingCylinder;
