import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
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
          </div>

          {/* Right Section: Notification & Profile */}
          <div className="d-flex align-items-center gap-3">
            <a className="text-dark position-relative fs-5" href="#">
              <i className="fa-regular fa-bell"></i>
              {/* Optional notification badge */}
              {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span> */}
            </a>

            <div className="dropdown">
              <div
                className="d-flex align-items-center rounded-4 px-2 py-1 profile"
                style={{ cursor: "pointer" }}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-circle-user fs-4 text-dark me-2"></i>
                <span className="fw-semibold text-dark d-none d-sm-block">Admin</span>
              </div>

              <ul className="dropdown-menu dropdown-menu-end shadow-sm mt-2">
                <li>
                  <Link to="/Admin-Profile" className="dropdown-item">
                    My Profile
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
