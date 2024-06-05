import React, { useState} from 'react';
import { Link } from 'react-router-dom';
//import "assets/css/Login.css";

export default function LoginP() {



  function handleLoginClick() {
    const halfCircleButtons = document.querySelectorAll('.half-circle-button');
    const login = document.getElementById('plog')
    const logo = document.getElementById('logo')
    const logoCaption = document.querySelector('.landing-page-logo-caption')
    console.log("HELLO")
    console.log(halfCircleButtons)
    login.style.transition = "opacity 0.5s ease-in-out"
    login.style.opacity = '0';
    halfCircleButtons.forEach(button => {
      button.style.opacity = '0.8';
    });
    // wait 0.5s for fade in and then sent tranzition back to width
    setTimeout(() => {
      login.style.display = 'none';
      halfCircleButtons.forEach(button => {
        button.style.transition = 'width 0.3s ease';
      });
      logo.classList.add('expand');
      logoCaption.style.transform = 'translate(0%, 220%)';

    } , 500);
    setTimeout(() => {
      logoCaption.style.opacity = '1';
    }, 1500);
  }

  return (
    <div id="plog" className="container mt-5" style={{ backgroundColor: '#FFF' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Demo Login</h2>
              <form action="/admin/dashboard">
                <div className="form-group">
                  <label htmlFor="username">Username or Email Address</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Link to="/forget-password" className="float-right">Forgot password?</Link>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                      type="button"
                      className="btn btn-primary"
                      id="loginButton"
                      onClick={handleLoginClick}
                    >
                      Login
                  </button>                
                </div>
              </form>
              <footer className="mt-4">
                <p className="text-center">
                  First time? <a>Create an account</a>.
                </p>
                <p className="text-center">
                  <Link to="/">Back to Homepage</Link>.
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
