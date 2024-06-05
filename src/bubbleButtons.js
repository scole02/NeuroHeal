import './landing.css'; 
import React from 'react';
import { Link } from 'react-router-dom';


function ButtonLink({ to, children, className }) {
    return <Link to={to}>
              <button className={className}>{children}
              </button>
           </Link>;
  }
const BubbleButtons = () => {
  
    return (
    <div>
        {/* <button className="half-circle-button left">
          <span>Patient Chatbot</span>
        </button> */}
        <ButtonLink to="/Chatbot" className="half-circle-button left" children="Patient Chatbot"/>
        <ButtonLink to="/admin/Dashboard" className="half-circle-button right" children="Caregiver Dashboard"/>
    </div>
    );
  };

export default BubbleButtons;