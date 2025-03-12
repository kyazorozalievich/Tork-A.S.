"use client";
import Image from "next/image";
import scss from "./MainWelcome.module.scss";

const MainWelcome = () => {
  return (
    <section className={scss.MainWelcome}>
      

      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h2>Automated solutions for filling gas cylinders</h2>
            <p>
              We develop and manufacture high-quality equipment for filling gas
              cylinders, ensuring safety, efficiency and ease of use. Our
              technologies comply with international standards and are used in
              various industries. We ship worldwide, guaranteeing the
              reliability and durability of our products. Modern technologies.
              High reliability. Shipping worldwide.
            </p>
            <div className={scss.btns}>
              <button className={scss.btn__first}>Изучить решения</button>
              <button className={scss.btn__second}>Связаться с нами</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainWelcome;
