"use client";
import { useEffect, useState } from "react";
import scss from "./MainWelcome.module.scss";

const MainWelcome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className={`${scss.MainWelcome} ${isVisible ? scss.show : ""}`}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>
              Automated machines <br /> for Gas Cylinder Refilling
            </h1>
            <p>
              We develop and manufacture high-quality equipment for gas cylinder
              refilling, ensuring safety, efficiency, and ease of use. Our
              technologies comply with global standards and are used across
              various industries. We provide worldwide delivery, guaranteeing
              the reliability and durability of our products.
            </p>
            <div className={scss.btns}>
              <button className={scss.btn__first}>Explore Solutions</button>
              <button className={scss.btn__second}>Contact Us</button>
            </div>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d4gYjrB2ePc?si=wW9pepetiOyF49kN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={scss.video}
            
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MainWelcome;
