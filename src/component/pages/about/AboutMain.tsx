"use client";
import Image from "next/image";
import scss from "./AboutMain.module.scss";
import aboutImg from "../../assets/images/about/aboutHistoryImg.jpg";

const AboutMain = () => {
  return (
    <section className={scss.AboutMain}>
      <div className="container">
        <div className={scss.content}>
          <h1>About Tork Mechatronics A.Ş.</h1>
          <h6>
            A leading manufacturer of automatic machines for filling gas
            cylinders with a commitment to precision, safety, and innovation.
          </h6>
          <div className={scss.aboutContent}>
            <div className={scss.aboutStory}>
              <h5>OUR STORY</h5>
              <h1>Leading the Gas Industry Forward</h1>
              <div className={scss.description}>
                <p>
                  Tork Mechatronics A.Ş. is a leading manufacturer of automatic
                  machines for filling gas cylinders. We create reliable,
                  high-precision, and safe systems that ensure efficient and
                  accident-free filling of cylinders of various capacities.
                </p>
                <p>
                  Founded in 2005, we've grown from a small engineering firm to
                  an international player in the gas cylinder automation
                  industry. Our commitment to innovation and safety has made us
                  a trusted partner for companies worldwide.
                </p>
                <p>
                  We specialize in developing comprehensive solutions that
                  optimize the entire gas cylinder filling process, from initial
                  setup to quality control and distribution.
                </p>
              </div>
            </div>
            <Image src={aboutImg} alt="" width={400} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
