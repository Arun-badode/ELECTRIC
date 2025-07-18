import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BaseUrl from '../Utilities/BaseUrl';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`${BaseUrl}/user/login`, {
      email: formData.email,
      password: formData.password,
    });

    const { token, role } = response.data.data;

    // Save token and role to localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('user', JSON.stringify(response.data.data));

    toast.success('Login successful!', {
      position: 'top-center',
    });

    // Redirect based on role
    setTimeout(() => {
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    }, 1500);
  } catch (error) {
    toast.error(error.response?.data?.message || 'Login failed', {
      position: 'top-center',
    });
  }
};

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light px-3 ">
      <ToastContainer />
      <div className="card shadow-lg rounded-4 border-0 w-100" style={{ maxWidth: '900px' }}>
        <div className="row g-0 flex-column flex-md-row">
          <div className="col-md-6 p-4 p-md-5 bg-white rounded-top rounded-md-start mt-5">
            <h3 className="mb-4 text-primary fw-bold text-center text-md-start">Welcome Back</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label" htmlFor="remember">Remember me</label>
              </div>

              <button type="submit" className="btn btn-primary w-100 rounded-pill">
                Login
              </button>
            </form>

            <p className="mt-4 text-center text-muted">
              Don't have an account? <a href="/signup">Register</a>
            </p>
          </div>

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
