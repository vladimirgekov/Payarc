import React from "react";
import "./styles.css";

const Box = ({ title, subtitle, buttonLabel, onClick }) => {
  return (
    <div className="container-box">
      <h2 className="box-title">{title}</h2>
      <p className="box-subtitle">{subtitle}</p>
      <button className="button" onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default Box;
