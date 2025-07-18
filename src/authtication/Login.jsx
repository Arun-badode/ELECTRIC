import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    let isValid = true;
    
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }
    
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }
    
    if (isValid) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Login successful!');
      }, 1500);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-vh-100 d-flex">
      {/* Left Section - Login Form */}
      <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-4 p-md-5">
        <div className="w-100" style={{ maxWidth: '400px' }}>
          {/* Logo */}
          <div className="mb-5 text-center text-lg-start">
            <h1 className="text-primary fw-bold" style={{ fontFamily: 'Pacifico, cursive', fontSize: '2rem' }}>
              ElectroSupply
            </h1>
          </div>

          {/* Login Form */}
          <div>
            <div className="mb-4">
              <h2 className="fw-bold mb-2" style={{ fontSize: '1.75rem' }}>Welcome Back</h2>
              <p className="text-muted">Sign in to your account to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="mb-3">
              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope text-muted"></i>
                  </span>
                  <input
                    type="email"
                    id="email"
                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {emailError && <div className="invalid-feedback d-block">{emailError}</div>}
              </div>

              {/* Password Field */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock text-muted"></i>
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="input-group-text bg-transparent border-start-0"
                    onClick={togglePasswordVisibility}
                  >
                    <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} text-muted`}></i>
                  </button>
                </div>
                {passwordError && <div className="invalid-feedback d-block">{passwordError}</div>}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-check-input"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember" className="form-check-label">Remember me</label>
                </div>
                <a href="#" className="text-decoration-none text-primary">Forgot password?</a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 py-2 mb-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>

              {/* Divider */}
              <div className="position-relative my-4">
                <div className="border-top"></div>
                <div className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted">
                  Or continue with
                </div>
              </div>

              {/* Social Login */}
              <div className="row g-2 mb-3">
                <div className="col-6">
                  <button type="button" className="btn btn-outline-secondary w-100">
                    <i className="bi bi-google text-danger me-2"></i>
                    Google
                  </button>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-outline-secondary w-100">
                    <i className="bi bi-facebook text-primary me-2"></i>
                    Facebook
                  </button>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-muted">
                  Don't have an account?{' '}
                  <a href="#" className="text-primary text-decoration-none fw-medium">Sign up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="d-none d-lg-flex col-lg-6 position-relative bg-primary">
        <div
          className="w-100 h-100 position-absolute bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=Professional%20electrical%20workshop%20with%20modern%20tools%2C%20multimeters%2C%20wire%20strippers%2C%20electrical%20panels%2C%20and%20industrial%20equipment%20arranged%20on%20a%20clean%20workbench%2C%20bright%20lighting%2C%20professional%20atmosphere%2C%20high-tech%20electrical%20testing%20instruments%2C%20clean%20white%20background%20with%20blue%20and%20orange%20accents%2C%20modern%20industrial%20design&width=800&height=1024&seq=login-electrical-1&orientation=portrait')",
            opacity: 0.9
          }}
        ></div>
        <div className="position-absolute w-100 h-100 bg-gradient-to-r from-transparent to-black-20"></div>
        <div className="position-relative p-5 d-flex align-items-center">
          <div>
            <h3 className="text-white fw-bold mb-3" style={{ fontSize: '1.75rem' }}>Power Up Your Projects</h3>
            <p className="text-white mb-4" style={{ opacity: 0.9 }}>
              Access professional-grade electrical supplies and tools trusted by industry experts worldwide.
            </p>
            <div className="d-flex gap-4">
              <div className="d-flex align-items-center">
                <i className="bi bi-shield-check text-warning me-2"></i>
                <span className="text-white" style={{ opacity: 0.9 }}>Certified Quality</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-truck text-warning me-2"></i>
                <span className="text-white" style={{ opacity: 0.9 }}>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;