"use client";
import scss from "./MainWelcome.module.scss";
import arcelik from "@/component/assets/images/logo/company-arcelik.png";
import midea from "@/component/assets/images/logo/company-midea.png";
import pas from "@/component/assets/images/logo/company-pas.png";
import bauer from "@/component/assets/images/logo/company-bauer.avif";
import coko from "@/component/assets/images/logo/company-coko.svg";
import bsh from "@/component/assets/images/logo/company-bsh.svg";
import bosch from "@/component/assets/images/logo/company-bosch.png";
import vaillant from "@/component/assets/images/logo/company-vaillant.png";
import threeM from "@/component/assets/images/logo/company-3M.png";
import akplas from "@/component/assets/images/logo/company-akplas.png";
import frimpeks from "@/component/assets/images/logo/company-frimpeks.png";
import schott from "@/component/assets/images/logo/company-schott.svg";
import spolgas from "@/component/assets/images/logo/company-spolgas.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MainWelcome = () => {
  const logos = [
    arcelik,
    midea,
    pas,
    bauer,
    coko,
    bsh,
    bosch,
    vaillant,
    threeM,
    akplas,
    frimpeks,
    schott,
    spolgas,
  ];

  return (
    <section className={scss.MainWelcome}>
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
      <div className={scss.scrollLogo}>
        <Marquee speed={50} gradient={false}>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Company logo"
              className={scss.logo}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MainWelcome;
