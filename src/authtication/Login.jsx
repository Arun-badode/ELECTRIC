import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light px-3">
      <div className="card shadow-lg rounded-4 border-0 w-100" style={{ maxWidth: '900px' }}>
        <div className="row g-0 flex-column flex-md-row">
          {/* Form Section */}
          <div className="col-md-6 p-4 p-md-5 bg-white rounded-top rounded-md-start mt-5">
            <h3 className="mb-4 text-primary fw-bold text-center text-md-start">Welcome Back</h3>
            <form>
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
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label" htmlFor="remember">Remember me</label>
              </div>

           <Link to="/dashboard">
              <button type="submit" className="btn btn-primary w-100 rounded-pill">
                Login
              </button>
           </Link>
            </form>

            <p className="mt-4 text-center text-muted">
              Don't have an account? <a href="/signup">Register</a>
            </p>
          </div>

          {/* Image Section (Hidden on mobile) */}
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-light rounded-bottom rounded-md-end">
            <img
              src="https://i.postimg.cc/x1hDCY72/9ec3f58b834b966a8b7e5f399aa44692.jpg"
              alt="Login Visual"
              className="img-fluid rounded-bottom rounded-md-end"
              style={{ objectFit: 'cover', maxHeight: '100%', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
