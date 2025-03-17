import React from "react";
import ContactMain from "./ContactMain";
import ContactMap from "./ContactMap";

const ContactPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,70,140,0.07279408345369398) 0%, rgba(0,70,140,0.07279408345369398) 100%)",
      }}
    >
      <ContactMain />
      <ContactMap />
    </div>
  );
};

export default ContactPage;
