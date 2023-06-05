import React from "react";
import logo from "../../images/Group 3111.svg";
import Box from "../Box";
import "./styles.css";

const MainPart = () => (
  <div className="container">
    <div className="container-info">
      <img src={logo} alt="logo" width={220} height={220} />
      <div className="main-box">
        <p className="title">Payarc Overview</p>
        <p className="subtitle">
          We are a technology-driven company built for businesses. We know the
          challenges of starting and managing a business, so we embarked on a
          journey to provide smart and simple payment processing tools and
          products. Backed by a team of world-class experts and innovative
          technology, we are committed to helping businesses of all sizes get
          started, optimize revenue streams, and bridge the gap between online
          merchants and payment solutions.
        </p>
        <p className="subtitle">
          We are dedicated to empowering businesses to improve their
          organization – one payment at a time.For more information, visit
          &nbsp;
          <a href="https://payarc.com" target="_blank" rel="noreferrer">
            https://payarc.com/.
          </a>
        </p>
      </div>
    </div>
    <div className="container-boxes">
      <Box
        title="Payarc Terminals"
        subtitle="Ever wondered about those mysterious NABU fees on your statement?"
        buttonLabel="Enter"
        onClick={() => {
          return;
        }}
      />
      <Box
        title="Payarc + Curv"
        subtitle="Ever wondered about those mysterious NABU fees on your statement?"
        buttonLabel="Enter"
        onClick={() => {
          return;
        }}
      />
      <Box
        title="Payarc Banks"
        subtitle="Ever wondered about those mysterious NABU fees on your statement?"
        buttonLabel="Enter"
        onClick={() => {
          return;
        }}
      />
    </div>
  </div>
);

export default MainPart;
