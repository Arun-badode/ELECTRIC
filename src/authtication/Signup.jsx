import React from 'react';


const Signup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light px-3">
      <div className="card shadow-lg rounded-4 border-0 w-100" style={{ maxWidth: '900px' }}>
        <div className="row g-0 flex-column flex-md-row">
          {/* Left Side - Form Section */}
          <div className="col-md-6 p-4 p-md-5 bg-white rounded-top rounded-md-start mt-5">
            <h3 className="mb-4 text-primary fw-bold text-center text-md-start">Create Account</h3>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    required
                    placeholder="Enter first name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    required
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  placeholder="Create password"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  required
                  placeholder="Re-enter password"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 rounded-pill">
                Sign Up
              </button>
            </form>

            <p className="mt-4 text-center text-muted">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>

          {/* Right Side - Image Section (Hidden on mobile) */}
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-light rounded-bottom rounded-md-end ">
            <img
              src="https://i.postimg.cc/x1hDCY72/9ec3f58b834b966a8b7e5f399aa44692.jpg"
              alt="Signup Visual"
              className="img-fluid rounded-bottom rounded-md-end"
              style={{ objectFit: 'cover', maxHeight: '100%', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
