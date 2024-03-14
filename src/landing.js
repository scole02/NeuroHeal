import React from 'react';
import { Link } from 'react-router-dom';
//import Alzi_logo from './assets/img/Alzi_logo.png';
// import { BiList } from "react-icons/bi"; // Make sure to install react-icons if you haven't
import HeroImg from './assets/img/Alzi_logo.png'; // Importing the first feature image
import logo from './assets/img/Side-logo2.png'; 
import './assets/css/landing.css'; // Make sure this path is correct


// // import React from 'react';
// const React = require("react")
// import { Link } from "react-router-dom";
// import Alzi_logo from "./assets/img/Alzi_logo.png";
// import Side_logo from "./assets/img/Side_Logo.png";
// import "./assets/css/landing.css"; // Make sure this path is correct

const LandingPage = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 30px',
    margin: '10px',
    backgroundColor: '#00796B', // Use your desired button color here
    color: 'white',
    borderRadius: '50px',
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: 'semi bold',
    cursor: 'pointer'
  };

  const logoStyle = {
    height: '50px', // Adjust the size as needed
    marginLeft: '-10px' // Adjust to move the image to the left
  };
  return (


  <div>
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container d-flex align-items-center justify-content-between">

        {/* <div className="logo">
          <h1><Link to="/"><span>Alzi</span></Link></h1>
        </div> */}

        <div className="logo">
          <h1>
            <Link to="/">
              <img src={logo} alt="Alzi logo" style={logoStyle} />
            </Link>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          {/* <ul>
            <li><Link className="nav-link scrollto active" to="/#hero">Home</Link></li>
            <li><Link className="nav-link scrollto" to="/#about">About</Link></li>
            <li><Link className="nav-link scrollto" to="/#team">Team</Link></li>
            <li><Link className="nav-link scrollto" to="/#pricing">Pricing</Link></li>
            <li><Link className="nav-link scrollto" to="/#contact">Contact</Link></li>
          </ul> */}
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        
      </div>
    </header>


      {/* Hero Section */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-start">
          <div className="row">
            <div className="col-lg-8">
              <h1>Welcome to <span>Alzi</span></h1>
              <h2>Your Alzheimer's care buddy</h2>

              {/* <div className="btns">
                <Link to="#about" className="btn-menu animated fadeInUp scrollto">Learn More</Link>
              </div> */}

              {/* <div className="btns">
                <Link to="/Plog" className="component text-wrapper">I am the Patient...</Link>
              </div>

              <div className="btns">
                <Link to="/Clog" className="component text-wrapper">I am the Caregiver...</Link>
              </div> */}
                    {/* <div className="frame">
                      <button className="component text-wrapper">
                        <Link to="/Plog">I am the Patient...</Link>
                      </button>
                    </div>

                    <div className="component-wrapper">
                      <button className="component text-wrapper">
                        <Link to="/Clog">I am the Caregiver...</Link>
                      </button>
                    </div> */}
                <div className="frame">
        <Link to="/Plog" style={buttonStyle}>I am the Patient...</Link>
      </div>

      <div className="component-wrapper">
        <Link to="/Clog" style={buttonStyle}>I am the Caregiver...</Link>
      </div>
            </div>
            
            <div className="col-lg-4 hero-img">
              <img src={HeroImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>


      <main id="main">
        <section id="about" className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="fade-right">
                <a href="https://www.youtube.com/watch?v=vFegn749s9k" className="glightbox play-btn mb-4"></a>
             </div>
              <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
                <h3>About Alzheimer</h3>
                <p>Amidst the growing prevalence of Alzheimer's disease, affecting an estimated 5.8 million Americans, there is a critical void in the development and implementation of innovative solutions. Alzheimer's takes a profound toll not only on the patient’s directly affected but also on their families and caregivers, who make up the 16.1 million providing support. 
              This neurodegenerative condition poses multifaceted challenges, underscoring the urgent need for interventions and forward-thinking approaches to comprehensively enhance the quality of life for those with Alzheimer's and provide effective support for their caregivers, whose dedication is crucial in navigating the complexities of Alzheimer's care.</p>

              <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                <h4 className="title"><Link to="">Personalized Cognitive Exercises</Link></h4>
                <p className="description">Designs customized mental activities based on the individual's cognitive state...</p>
              </div>

              <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon"><i className="bx bx-chart"></i></div>
                <h4 className="title"><Link to="">Data-driven Health Analytics</Link></h4>
                <p className="description">Utilizes advanced algorithms to monitor patients' behaviors and activities...</p>
              </div>

              <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon"><i className="bx bx-atom"></i></div>
                <h4 className="title"><Link to="">Regular Behaviour Tracking</Link></h4>
                <p className="description">Employs sensors and data analytics to understand and predict the patient's behavioral patterns...</p>
              </div>

              <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                <div className="icon"><i className="bx bx-envelope"></i></div>
                <h4 className="title"><Link to="">Communication Tools</Link></h4>
                <p className="description">Facilitates seamless coordination among caregivers and family members...</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>

    {/* <section id="counts" className="counts">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span className="purecounter">{counts.validateTests}</span>
              <p>Validate Tests</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span className="purecounter">{counts.experts}</span>
              <p>Experts</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span className="purecounter">{counts.hoursOfSupport}</span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span className="purecounter">{counts.hardWorkers}</span>
              <p>Hard Workers</p>
            </div>l
          </div>
        </div>
      </div>
    </section> */}


      {/* Footer */}
      <footer id="footer">
        <div className="container">
          {/* Footer content */}
          <div className="credits">
            Designed by <strong><span>NeuroHeal</span></strong>
          </div>
        </div>
      </footer>
    </div>
  );
};
  

//     <div className="desktop-home-page">
//       <div className="overlap-group">
//         <div className="rectangle" />
//         <img
//           className="alzi-app"
//           alt="Alzi app LOGO"
//           src={Side_logo}
//         />
//       </div>
//       <img
//         className="generated-image"
//         alt="Generated image"
//         src={Alzi_logo} // This should be the path to your image, not the logo again
//       />
//       <div className="frame">
//         <Link to="/Plog" className="component text-wrapper">I am the Patient...</Link>
//       </div>
//       <div className="component-wrapper">
//         <Link to="/Clog" className="component text-wrapper">I am the Caregiver...</Link>
//       </div>
//     </div>
//   );
// };

export default LandingPage;
