"use client";
import { FiChevronRight } from "react-icons/fi";
import scss from "./StationServices.module.scss";
import { useRouter } from "next/navigation";

const StationServices = () => {
  const router = useRouter();
  return (
    <section className={scss.StationServices}>
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
              <h3>Cylinder Marking</h3>
              <p>
                Modern gas cylinder marking systems for identification,
                accounting, and movement control.
              </p>
              <button onClick={() => router.push("/products/marking")}>
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

export default StationServices;
