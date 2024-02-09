import React from 'react';
import { Link } from 'react-router-dom';
//import "assets/css/Login.css";

export default function LoginP() {
  function ButtonLink({ to, children }) {
    return <Link to={to}>
              <button className="btn btn-primary btn-block">{children}
              </button>
           </Link>;
  } 
  return (
    <div className="container mt-5" style={{ backgroundColor: '#E0F1EF' }}>
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
                <ButtonLink to="/Chatbot">Login</ButtonLink>
                </div>
              </form>
              <footer className="mt-4">
                <p className="text-center">
                  First time? <Link to="/register">Create an account</Link>.
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
