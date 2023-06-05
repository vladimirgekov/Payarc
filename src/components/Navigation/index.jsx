import React, { useState } from "react";
import logo from "../../images/Group 3111.svg";
import dashboard from "../../images/dashboard.svg";
import my from "../../images/my.svg";
import about from "../../images/about.svg";
import payarc from "../../images/payarc.svg";
import industry from "../../images/industry.svg";
import marketing from "../../images/marketing.svg";
import forms from "../../images/forms.svg";
import tools from "../../images/tools.svg";
import search from "../../images/search.svg";
import jd from "../../images/jd.svg";
import NavigationItem from "./NavigationItem";
import "./styles.css";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [applyDropdown, setApplyDropdown] = useState(false);
  const [merchantsDropdown, setMerchantsDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const toggleNavigationHandler = () => {
    setToggleNavigation(!toggleNavigation);
  };

  return (
    <div className={`navigation-style ${toggleNavigation ? "collapsed" : ""}`}>
      <div
        className="navigation-header"
        role="button"
        tabIndex="0"
        onClick={toggleNavigationHandler}
      >
        <img src={logo} alt="logo" width={40} height={40} />
        <i className={`fa ${toggleNavigation ? "" : "fa-angle-left"}`}></i>
      </div>
      <div className="navigation-main">
        <div className="navigation-button">
          <img src={dashboard} alt="dashboard" width={20} height={20} />
          <p className="button-name">Dashboard</p>
        </div>
        <div
          className="navigation-button"
          role="button"
          tabIndex="0"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="dropdown-button">
            <img src={my} alt="my" width={20} height={20} />
            <p className="button-name">My Payarc</p>
          </div>
          <i className={`fa ${toggleNavigation ? "" : "fa-angle-down"}`}></i>
        </div>
        {isDropdownOpen && (
          <div className="dropdown">
            <div className="dropdown-option">Overview</div>

            <div
              className="dropdown-option"
              role="button"
              tabIndex="0"
              onClick={() => setApplyDropdown(!applyDropdown)}
            >
              <p className="dropdown-name">Apply App</p>
              <i className="fa fa-angle-down"></i>
            </div>
            {applyDropdown && (
              <div className="additional-dropdown">
                <p className="additional-option">Applications</p>
                <p className="additional-option">Pricing Templates</p>
                <p className="additional-option">Reports</p>
                <p className="additional-option">User Maintenance</p>
                <p className="additional-option">Settings</p>
              </div>
            )}

            <div className="dropdown-option">My Residuals</div>

            <div
              className="dropdown-option"
              role="button"
              tabIndex="0"
              onClick={() => setMerchantsDropdown(!merchantsDropdown)}
            >
              <p className="dropdown-name">My Merchants</p>
              <i className="fa fa-angle-down"></i>
            </div>
            {merchantsDropdown && (
              <div className="additional-dropdown">
                <p className="additional-option">Live Merchants</p>
                <p className="additional-option">Batch Deposits & Reports</p>
                <p className="additional-option">Chargebacks</p>
                <p className="additional-option">ACH Returns</p>
                <p className="additional-option">ACH Returns</p>
              </div>
            )}

            <div
              className="dropdown-option"
              role="button"
              tabIndex="0"
              onClick={() => setResourcesDropdown(!resourcesDropdown)}
            >
              <p className="dropdown-name">Resources</p>
              <i className="fa fa-angle-down"></i>
            </div>
            {resourcesDropdown && (
              <div className="additional-dropdown">
                <p className="additional-option">Resources</p>
                <p className="additional-option">API Keys</p>
              </div>
            )}
          </div>
        )}
        <NavigationItem image={about} label="About Payarc" />
        <div className="navigation-button">
          <img src={payarc} alt="payarc" width={20} height={20} />
          <p className="button-name">Payarc Training</p>
        </div>
        <div className="navigation-button">
          <img src={industry} alt="industry" width={20} height={20} />
          <p className="button-name">Industry Training</p>
        </div>
        <div className="navigation-button">
          <img src={marketing} alt="marketing" width={20} height={20} />
          <p className="button-name">Marketing Materials</p>
        </div>
        <div className="navigation-button">
          <img src={forms} alt="request" width={20} height={20} />
          <p className="button-name">Marketing Request Form</p>
        </div>
        <div className="navigation-button">
          <img src={tools} alt="tools" width={20} height={20} />
          <p className="button-name">Access to tools</p>
        </div>
      </div>
      <div className="navigation-footer">
        <div className="navigation-button">
          <img src={search} alt="search" width={20} height={20} />
          <p className="button-name">Search</p>
        </div>
        <div className="profile-button">
          <img src={jd} alt="jd" width={32} height={32} />
          <p className="profile-name">John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
