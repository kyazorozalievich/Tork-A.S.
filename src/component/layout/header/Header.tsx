"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const links = [
    { title: "Home", href: "/" },
    {
      title: "Products",
      href: "/products",
      icon: <FaAngleDown />,
      content: [
        "Gas cylinder refills",
        "Gas filling station",
        "Marking of cylinders.",
      ],
    },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            TORK<span> A.Ş.</span>
          </h1>
          <div className={scss.nav}>
            {links.map((el, idx) => (
              <div className={scss.link} key={idx}>
                <Link key={idx} href={el.href}>
                  {el.title}
                  {el.icon}
                </Link>
                <div className={scss.modal}>
                  {el.content?.map((item) => (
                    <h4>{item}</h4>
                  ))}
                </div>
              </div>
            ))}

            <button>Click</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
