import React from "react";
import "./App.css";

const ContactCard = ({ email, picture, name }) => {
  return (
    <div className="contact-card">
      <img src={picture} alt={`${name.first} ${name.last}`} />
      <div className="contact-info">
        <h4>{`${name.first} ${name.last}`}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ContactCard;
