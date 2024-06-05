import React from 'react';
import { Link } from 'react-router-dom';
//import Alzi_logo from './assets/img/Alzi_logo.png';
// import { BiList } from "react-icons/bi"; // Make sure to install react-icons if you haven't
import logo from './assets/img/alzi_logo.jpg'; // Importing the first feature image
import './landing.css'; // Make sure this path is correct
import LoginForm from './loginForm';
import LoginP from './PPage/PLog';
import BubbleButtons from 'bubbleButtons';

// // import React from 'react';
// const React = require("react")
// import { Link } from "react-router-dom";
// import Alzi_logo from "./assets/img/Alzi_logo.png";
// import Side_logo from "./assets/img/Side_Logo.png";
// import "./assets/css/landing.css"; // Make sure this path is correct

const LandingPage = () => {
  // const scrollToAbout = () => {
  //   const aboutSection = document.getElementById("about");
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  return (
  
    <div>
      <div className="logo-container">
        <img id="logo" src={logo} alt="logo" className="landing-page-logo" />
        <text className="landing-page-logo-caption"> Voice for Care, Alzi Understands</text>
      </div>
      <LoginP />
      <BubbleButtons />
    </div>
  );
};

export default LandingPage;
