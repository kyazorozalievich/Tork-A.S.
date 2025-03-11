"use client";
import dynamic from "next/dynamic";
import scss from "./ContactMap.module.scss";

const ContactMap = () => {
  const DynamicMap = dynamic(() => import("./Map"), { ssr: false });
  return (
    <section className={scss.ContactMap}>
      <div className="container">
        <div className={scss.content}>
          <h5>OUR LOCATION</h5>
          <h1>Visit Our Company</h1>
          <h6>Come see our facilities and meet our team in person.</h6>
          <DynamicMap />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
