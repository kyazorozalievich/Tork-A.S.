"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import england from "../../assets/images/header/flag-England.webp";
import germany from "../../assets/images/header/flag-Germany.png";
import france from "../../assets/images/header/flag-France.png";
import italy from "../../assets/images/header/flag-Italy.webp";
import arabic from "../../assets/images/header/flag-Arabic.png";
import spain from "../../assets/images/header/flag-Spain.png";
import logo from "../../assets/images/logo.png";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { RiMenu3Fill, RiWhatsappLine } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import Script from "next/script";

const Header = () => {
  const [languageCLick, setlanguageClick] = useState(false);
  const [languageBurger, setLanguageBurger] = useState(false);
  const [modalCLick, setModalClick] = useState(false);
  const [modalBurger, setModalBurger] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [burger, setBurger] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
      title: "Gas cylinder filling",
      href: "/products/filling",
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
        setBurger(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  <Script
    src="https://maps.api.2gis.ru/2.0/loader.js"
    strategy="lazyOnload"
    onLoad={() => console.log("2GIS API loaded")}
  />;
  useEffect(() => {
    const initMap = () => {
      if ((window as any).DG) {
        console.log("2GIS API is ready");
      }
    };

    if (typeof window !== "undefined") {
      if ((window as any).DG) {
        initMap();
      } else {
        window.addEventListener("load", initMap);
      }
    }

    return () => {
      window.removeEventListener("load", initMap);
    };
  }, []);

  return (
    <>
      <header
        className={`${scss.Header} ${isVisible ? scss.visible : scss.hidden}`}
      >
        <div className={scss.contact}>
          <div className="container">
            <div className={scss.contactData}>
              <Link
                href="https://www.google.com/maps/place/TORK+MEKATRON%C4%B0K+A.%C5%9E./@41.2211855,27.9158235,17z/data=!3m1!4b1!4m6!3m5!1s0x14b4df443e63b8db:0x9643806ad20288db!8m2!3d41.2211855!4d27.9183984!16s%2Fg%2F11j5cb5g5s?hl=ru&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <span>
                  <MdOutlineLocationOn />
                </span>{" "}
                Velikoy OSB 2. Cd. No: 2/4-F
              </Link>
              <Link href="https://wa.me/905444077787" target="_blank">
                <span>
                  <RiWhatsappLine />
                </span>
                +90 544 407 77 87
              </Link>
              <Link href="tel:+902822555500" target="_blank">
                <span>
                  <LuPhone />
                </span>{" "}
                +90 282 255 55 00
              </Link>
              <Link href="mailto:gulia@torkas.com" target="_blank">
                <span>
                  <MdOutlineMail />
                </span>{" "}
                gulia@torkas.com
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={scss.content}>
            <span onClick={() => router.push("/")}>
              <Image src={logo} alt="" className={scss.logo} />
            </span>
            <div className={scss.nav}>
              <Link
                href="/"
                className={pathname === "/" ? scss.active : scss.link}
              >
                Home
              </Link>
              <div className={scss.product}>
                <a
                  className={
                    pathname === "/products/filling"
                      ? scss.active
                      : pathname === "/products/station"
                      ? scss.active
                      : pathname === "/products/marking"
                      ? scss.active
                      : scss.link
                  }
                >
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
                  <FaAngleDown />
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
            <div className={scss.burgerMenu}>
              <button onClick={() => setBurger(true)}>
                <RiMenu3Fill />
              </button>
              {burger && (
                <div className={scss.burgerBlock}>
                  <Link
                    href="/"
                    className={pathname === "/" ? scss.active : scss.link}
                    onClick={() => setBurger(false)}
                  >
                    Home
                  </Link>
                  <div className={scss.product}>
                    <a
                      className={scss.link}
                      onClick={() => setModalBurger(!modalBurger)}
                    >
                      Products <FaAngleDown />
                    </a>
                    {!modalBurger && (
                      <div className={scss.modal}>
                        {products?.map((item, index) => (
                          <Link
                            href={item.href}
                            key={index}
                            onClick={() => {
                              setModalBurger(true), setBurger(false);
                            }}
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
                    onClick={() => setBurger(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className={
                      pathname === "/contact" ? scss.active : scss.link
                    }
                    onClick={() => setBurger(false)}
                  >
                    Contact
                  </Link>
                  <div className={scss.translation}>
                    <button onClick={() => setLanguageBurger(!languageBurger)}>
                      <span>
                        <TbWorld />
                      </span>
                      Language
                      <FaAngleDown />
                    </button>
                    {!languageBurger && (
                      <div className={scss.languagesModal}>
                        {countries.map((el, idx) => (
                          <div
                            className={scss.country}
                            key={idx}
                            onClick={() => {
                              setlanguageClick(true), setBurger(false);
                            }}
                          >
                            <Image
                              src={el.icon}
                              alt=""
                              width={20}
                              height={10}
                            />
                            <h4>{el.title}</h4>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button onClick={() => setBurger(false)}>
                    Close <IoClose />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className={scss.contactList}>
        <Link
          href="https://www.google.com/maps/place/TORK+MEKATRON%C4%B0K+A.%C5%9E./@41.2211855,27.9158235,17z/data=!3m1!4b1!4m6!3m5!1s0x14b4df443e63b8db:0x9643806ad20288db!8m2!3d41.2211855!4d27.9183984!16s%2Fg%2F11j5cb5g5s?hl=ru&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <GrMapLocation />
        </Link>
        <Link href="https://wa.me/905444077787" target="_blank">
          <RiWhatsappLine />
        </Link>
        <Link href="tel:+902822555500" target="_blank">
          <LuPhone />
        </Link>
        <Link href="mailto:gulia@torkas.com" target="_blank">
          <MdOutlineMail />
        </Link>
      </div>
    </>
  );
};

export default Header;
