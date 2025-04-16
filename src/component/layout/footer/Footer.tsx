"use client";
import Link from "next/link";
import scss from "./Footer.module.scss";
import { useRouter } from "next/navigation";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.tork}>
            <Image src={logo} alt="" />
            <p>
              Leading manufacturer of automatic machines for filling gas
              cylinders.
            </p>
            <div className={scss.icons}>
              <Link
                href="https://www.linkedin.com/company/torkascom/"
                target="_blank"
                className={scss.linkedin}
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://www.youtube.com/@torkascom"
                target="_blank"
                className={scss.youtube}
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://www.instagram.com/torkas_mekatronik?igsh=MWx1MnUzdnQ2OGltNQ%3D%3D&utm_source=qr"
                target="_blank"
                className={scss.instagram}
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className={scss.products}>
            <h6>Products</h6>
            <Link href="/products/filling">LPG cylinder vending machine.</Link>
            <Link href="/products/station">Gas filling station</Link>
          </div>
          <div className={scss.company}>
            <h6>Company</h6>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/reference">Reference</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={scss.contact}>
            <h6>Contact</h6>
            <Link href="https://www.google.com/maps/place/TORK+MEKATRON%C4%B0K+A.%C5%9E./@41.2211855,27.9158235,17z/data=!3m1!4b1!4m6!3m5!1s0x14b4df443e63b8db:0x9643806ad20288db!8m2!3d41.2211855!4d27.9183984!16s%2Fg%2F11j5cb5g5s?hl=ru&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D">
              Adsress: Velikoy OSB 2. Cd. No: 2/4-F
            </Link>
            <Link href="mailto:gulia@torkas.com">email: gulia@torkas.com</Link>
            <Link href="https://wa.me/905444077787">
              phone: +90 544 407 77 87
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className={scss.footer}>
        <h6>Copyright © 2025 — TORK MECHATRONICS A.Ş. All Rights Reserved</h6>
      </div>
    </section>
  );
};

export default Footer;
