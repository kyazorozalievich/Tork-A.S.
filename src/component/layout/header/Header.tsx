"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import england from "../../assets/images/header/flag-England.webp";
import germany from "../../assets/images/header/flag-Germany.png";
import france from "../../assets/images/header/flag-France.png";
import italy from "../../assets/images/header/flag-Italy.webp";
import arabic from "../../assets/images/header/flag-Arabic.png";
import spain from "../../assets/images/header/flag-Spain.png";

const Header = () => {
  const [modalCLick, setModalClick] = useState(false);
  const [languageCLick, setlanguageClick] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  setTimeout(() => {
    if (modalCLick) {
      setModalClick(false);
    }
    if (languageCLick) {
      setlanguageClick(false);
    }
  }, 1000);

  const products = [
    {
      title: "Gas cylinder refills",
      href: "/products/refills",
    },
    {
      title: "Gas filling station",
      href: "/products/station",
    },
    {
      title: "Marking of cylinders.",
      href: "/products/marking",
    },
  ];

  const countries = [
    {
      icon: england,
      title: "English",
    },
    {
      icon: germany,
      title: "Germany",
    },
    {
      icon: france,
      title: "France",
    },
    {
      icon: italy,
      title: "Italy",
    },
    {
      icon: arabic,
      title: "Arabic",
    },
    {
      icon: spain,
      title: "Spain",
    },
  ];

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1 onClick={() => router.push("/")}>
            TORK<span> A.Ş.</span>
          </h1>
          <div className={scss.nav}>
            <Link
              href="/"
              className={pathname === "/" ? scss.active : scss.link}
            >
              Home
            </Link>
            <div className={scss.product}>
              <a className={scss.link}>
                Products <FaAngleDown />
              </a>
              {!modalCLick && (
                <div className={scss.modal}>
                  {products?.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      onClick={() => setModalClick(true)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about"
              className={pathname === "/about" ? scss.active : scss.link}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? scss.active : scss.link}
            >
              Contact
            </Link>
            <div className={scss.translation}>
              <button>
                <TbWorld />
                Language
              </button>
              {!languageCLick && (
                <div className={scss.languagesModal}>
                  {countries.map((el, idx) => (
                    <div
                      className={scss.country}
                      key={idx}
                      onClick={() => setlanguageClick(true)}
                    >
                      <Image src={el.icon} alt="" width={20} height={10} />
                      <h4>{el.title}</h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
