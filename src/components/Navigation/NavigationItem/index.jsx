import React from "react";
import "./styles.css";

const NavigationItem = ({ image, label }) => {
  <div className="navigation-button">
    <img src={image} alt="navImage" width={20} height={20} />
    <p className="button-name">{label}</p>
  </div>;
};

export default NavigationItem;
