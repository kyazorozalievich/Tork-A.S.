"use client";
import Image from "next/image";
import scss from "./AboutCompany.module.scss";
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

const AboutCompany = () => {
  const dataLogo = [
    {
      logo: arcelik,
    },
    {
      logo: midea,
    },
    {
      logo: pas,
    },
    {
      logo: bauer,
    },
    {
      logo: coko,
    },
    {
      logo: bsh,
    },
    {
      logo: bosch,
    },
    {
      logo: vaillant,
    },
    {
      logo: threeM,
    },
    {
      logo: akplas,
    },
    {
      logo: frimpeks,
    },
    {
      logo: schott,
    },
    {
      logo: spolgas,
    },
  ];

  return (
    <section className={scss.AboutCompany}>
      <div className="container">
        <div className={scss.content}>
          <h5>PARTNERS</h5>
          <h1>Trusted by industry leaders</h1>
          <p>
            is a key factor determining the success of a company, product or
            service. When recognized experts and leading market players express
            confidence in a brand, it not only enhances its reputation, but also
            attracts new clients and partners.
            <br /> <br />
            Industry leaders rely on proven experience, high quality and
            reliability. Their support creates a positive image, strengthens
            competitive advantages and promotes business growth. Companies that
            have won the trust of leaders become benchmarks in their field and
            set standards for the entire industry.
          </p>
          <div className={scss.companyLogo}>
            {dataLogo.map((el, idx) => (
              <Image
                src={el.logo}
                alt="logo"
                width={200}
                height={50}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
