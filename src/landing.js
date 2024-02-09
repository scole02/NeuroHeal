import React from "react";
import { Link } from "react-router-dom";
import Alzi_logo from "./assets/img/Alzi_logo.png";
import Side_logo from "./assets/img/Side_Logo.png";
import "./assets/css/landing.css"; // Make sure this path is correct

const LandingPage = () => {
  return (
    <div className="desktop-home-page">
      <div className="overlap-group">
        <div className="rectangle" />
        <img
          className="alzi-app"
          alt="Alzi app LOGO"
          src={Side_logo}
        />
      </div>
      <img
        className="generated-image"
        alt="Generated image"
        src={Alzi_logo} // This should be the path to your image, not the logo again
      />
      <div className="frame">
        <Link to="/Plog" className="component text-wrapper">I am the Patient...</Link>
      </div>
      <div className="component-wrapper">
        <Link to="/Clog" className="component text-wrapper">I am the Caregiver...</Link>
      </div>
    </div>
  );
};

export default LandingPage;