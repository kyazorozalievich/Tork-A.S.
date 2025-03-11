import React from "react";
import ContactMain from "./ContactMain";
import ContactMap from "./ContactMap";

const ContactPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient( 180deg,rgba(13, 113, 162, 0.20444674451811973) 0%, rgba(13, 113, 162, 0.08679968569459029) 35%, rgba(13, 113, 162, 0.09) 100%  )",
      }}
    >
      <ContactMain />
      <ContactMap />
    </div>
  );
};

export default ContactPage;
