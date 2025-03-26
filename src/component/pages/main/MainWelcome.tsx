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
import torkImg from "@/component/assets/images/about/equipment.jpg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/navigation";

const MainWelcome = () => {
  const router = useRouter();
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
      <div className={scss.mainInfo}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.mainContent}>
              <div className={scss.text}>
                <h1>LPG Gas Cylinder Machine (48+48) – Innovative System</h1>
                <div className={scss.group}>
                  <p>✅ Holds 96 cylinders</p>
                  <p>✅ Fully automated</p>
                  <p>✅ 24/7 support with operator call button</p>
                </div>
                <div className={scss.theme}>
                  <div className={scss.group}>
                    <p>✅ Safety & durability:</p>
                    <ul>
                      <li>Bulletproof chamber</li>
                      <li>Impact-resistant aviation glass</li>
                      <li>Full ventilation</li>
                      <li>Fireproof body</li>
                    </ul>
                  </div>
                  <div className={scss.group}>
                    <p>✅ Owner convenience & control:</p>
                    <ul>
                      <li>QR-coded cylinders</li>
                      <li>Real-time stock tracking</li>
                      <li>Integrated with finance software</li>
                      <li>Remote access & reports</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={scss.image}>
                <Image src={torkImg} alt="" className={scss.imgMain} />
                <p>
                  Reliability, convenience, and digital control –
                  all in one machine.
                </p>
                <div className={scss.btns}>
                  <button
                    className={scss.btn__first}
                    onClick={() => router.push("/products/filling")}
                  >
                    Explore Solutions
                  </button>
                  <button
                    className={scss.btn__second}
                    onClick={() => router.push("/contact")}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.youtube.com/embed/d4gYjrB2ePc?si=wW9pepetiOyF49kN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={scss.video}
            ></iframe>
          </div>
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
