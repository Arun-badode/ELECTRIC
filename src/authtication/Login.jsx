import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../authtication/Login"


const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <main>
        <div className="login-container">
          <h1 className="fw-bold">ProcXa-AI</h1>
          <p className="text-start text-secondary mb-5">Welcome!</p>

          {!showSignUp ? (
            // Login Form
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder="Email"
                  required=""
                  style={{ color: "#578e7e" }}
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="password"
                  className="form-control p-3"
                  placeholder="Password"
                  required=""
                  style={{ color: "#578e7e" }}
                />
              </div>
              <div className="d-flex justify-content-end mb-4">
                <a href="#" className="text-decoration-none text-secondary">
                  Forgot Password?
                </a>
              </div>
              <div className="d-flex">
                <Link style={{ color: "white" }} to="/dashboard">
                  <button
                    type="submit"
                    className="px-4 py-2 ms-1 btn-primary shadow">
                    Login
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="px-4 py-2 ms-4 btn-outline-primary">
                  Sign Up
                </button>
              </div>
            </form>
          ) : (
            // Sign-Up Form
            <form className="signup-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  placeholder="Email *"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Phone Number *"
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <select className="form-input">
                  <option value="" disabled selected>
                    Gender *
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  placeholder="City *"
                  className="form-input "
                />
              </div>
              <div className="form-row ">
                <input
                  type="text"
                  placeholder="State *"
                  className="form-input "
                />
                <input
                  type="text"
                  placeholder="Country *"
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <select className="form-input">
                  <option value="" disabled selected>
                    User Type *
                  </option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
                <input
                  type="password"
                  placeholder="Password *"
                  className="form-input"
                />
              </div>
              <div className="form-row ">
                <input
                  type="password"
                  placeholder="Confirm Password *"
                  className="form-input"
                />
              </div>
              <div className="d-flex">
                <button
                  type="submit"
                  className="px-4 py-2 ms-1 btn-primary shadow" style={{border:'none'}}>
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="px-4 py-2 ms-4 "style={{border:'2px solid #578e7e', color:'#578e7e'}}>
                   Login
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
};

export default Login;
