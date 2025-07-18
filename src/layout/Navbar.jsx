import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear all localStorage or specific keys as needed
    localStorage.clear();
    // Navigate to home/login page
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid nav-conte">
          <div className="nav-content">
            <div className="nav-bran">
              <img
                height={50}
                width={50}
                src="https://i.ibb.co/KxM9x9Vd/png-clipart-electricity-electric-power-logo-electrical-engineering-energy-saving-and-environmental-p.png"
                alt="Logo"
              />
              <div className="nav-taggle-icon" onClick={toggleSidebar}>
                <a href="#">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="nav-main-icon">
              <a className="bell-icon" href="#">
                <i className="fa-regular fa-bell"></i>
              </a>
              <div className="dropdown profile-elemen">
                <div
                  className="me-2 fw-bold p-1 rounded-4 profile d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="profile-element">
                    <div className="avatar online">
                      <i className="fa-solid user-icon fa-circle-user"></i>
                      <span className="text-dark ms-2"></span>
                    </div>
                  </div>
                </div>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link to="/Admin-Profile" className="dropdown-item">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {/* 👇 Logout Link with clear and redirect */}
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
