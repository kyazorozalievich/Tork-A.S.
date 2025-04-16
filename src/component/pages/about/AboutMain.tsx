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
                  Founded in 2019, Tork Mekatronik specializes in custom machine
                  manufacturing, test systems, engineering design, and
                  problem-solving. Our mission is to deliver innovative,
                  high-quality solutions that meet our clients’ unique needs and
                  help them achieve greater efficiency and success.
                </p>
                <p>
                  Custom Machine Manufacturing and Test Systems We design and
                  build custom machinery and test systems tailored to your
                  specific needs. Our skilled engineers and technicians ensure
                  each solution meets the highest standards of quality and
                  performance. We are a trusted partner for leading companies
                  across various industries.
                </p>
                <p>
                  Comprehensive Testing Systems Our testing systems ensure
                  product quality and performance. We offer solutions for
                  functional, endurance, stress, and environmental testing,
                  using advanced technologies for precise and reliable results.
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
