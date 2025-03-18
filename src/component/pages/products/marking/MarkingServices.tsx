"use client";
import { FiChevronRight } from "react-icons/fi";
import scss from "./MarkingServices.module.scss";
import { useRouter } from "next/navigation";

const MarkingServices = () => {
  const router = useRouter();

  return (
    <section className={scss.MarkingServices}>
      <div className="container">
        <div className={scss.content}>
          <h2>Related Services</h2>
          <h6>We offer a full range of services for the gas industry</h6>
          <div className={scss.servicesBlocks}>
            <div className={scss.servicesBlock}>
              <h3>Gas Cylinder Filling</h3>
              <p>
                Professional equipment for filling gas cylinders of various
                types and volumes with high accuracy and safety.
              </p>
              <button onClick={() => router.push("/products/filling")}>
                {" "}
                <FiChevronRight /> Learn more
              </button>
            </div>
            <div className={scss.servicesBlock}>
              <h3>Gas Filling Stations</h3>
              <p>
                Modern gas filling stations for commercial and industrial use
                with a wide range of capabilities.
              </p>
              <button onClick={() => router.push("/products/station")}>
                {" "}
                <FiChevronRight /> Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarkingServices;
