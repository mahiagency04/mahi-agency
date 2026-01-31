import React from "react";
import contact from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={contact.Contact}>
      
      <p>
        📞 Phone No:{" "}
        <a href="tel:9519197798" className={contact.link}>
          9519197798
        </a>
      </p>

      <p>
        📧 Email:{" "}
        <a
          href="mailto:mahiagency04@gmail.com"
          className={contact.link}
        >
          mahiagency04@gmail.com
        </a>
      </p>

    </div>
  );
};

export default Contact;
