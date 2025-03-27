"use client";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import scss from "./AboutGalery.module.scss";
import Image from "next/image";
import { useRef } from "react";
import photo from "../../assets/images/about/galery.jpg";
import photo2 from "../../assets/images/about/galery2.jpg";
import photo3 from "../../assets/images/about/galery3.jpg";
import photo4 from "../../assets/images/about/galery4.jpg";
import photo5 from "../../assets/images/about/galery5.jpg";
import photo6 from "../../assets/images/about/galery6.jpg";

const AboutGalery = () => {
  const galeryData = [photo, photo2, photo3, photo4, photo5, photo6];

  const characterRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (characterRef.current) {
      characterRef.current.scrollTo({
        left: characterRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (characterRef.current) {
      characterRef.current.scrollTo({
        left: characterRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className={scss.AboutGalery}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.CharacterBlcoks} ref={characterRef}>
            <button className={scss.left} onClick={scrollLeft}>
              <MdOutlineChevronLeft />
            </button>
            {galeryData.map((img, idx) => (
              <Image src={img} alt="img" key={idx} />
            ))}
            <button className={scss.right} onClick={scrollRight}>
              <MdOutlineChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGalery;
