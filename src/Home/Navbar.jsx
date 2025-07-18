import React, { useState, useRef, useEffect } from "react";
import { Navbar, Container, Button, Nav, Form, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";



const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar className="fixed-top bg-white shadow-sm px-3 py-2">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://i.postimg.cc/DyqKQj0V/Screenshot-2025-07-17-122021-removebg-preview.png"
              alt="Logo"
              height="60"
              width="100"
            />
          </Navbar.Brand>

          {/* Desktop Nav Links */}
          <Nav className="gap-4 d-none d-lg-flex align-items-center">
            {["/", "/electricalproducts", "/contact"].map((path, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={path}
                className="fw-bold"
                style={{ transition: "color 0.3s", color: 'black' }}
              >
                {path === "/" ? "Home" : path === "/electricalproducts" ? "Products" : "Contact"}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex align-items-center gap-3">
            {/* Search Bar for Desktop */}
            <div
              className="group"
              style={{ position: "relative", display: "inline-block" }}
            >
              {/* Search Icon */}
              <svg
                className="icon"
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  fill: "#555",
                }}
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                </g>
              </svg>

              {/* Search Input */}
              <input
                type="search"
                className="input"
                placeholder="Search"
                aria-label="Search"
                style={{
                  paddingLeft: "35px",
                  height: "40px",
                  borderRadius: "20px",
                  border: "1px solid #ccc",
                  width: "250px",
                }}
              />
            </div>

            <div
              style={{ cursor: "pointer", position: "relative" }}
              onClick={() => navigate("/shoppingcart")}
            >
              <div class="card-button">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                  <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                  <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                </svg>
              </div>
            </div>

            <div
              size={24}
              style={{ cursor: "pointer" }}
              onClick={() => setProfileOpen(!profileOpen)}
              className="d-none d-lg-block"
            >
              <div class="card-button">
                <svg class="w-16 h-16" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linejoin="round" stroke-linecap="round"></path>
                </svg>
              </div>

              <div />
              {profileOpen && (
                <div
                  ref={profileRef}
                  className="position-absolute end-0 bg-white shadow rounded p-3 mt-4"
                  style={{ width: "200px", zIndex: 999 }}
                >

                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="w-100 mt-2"
                    onClick={() => navigate("/profilepage")}
                  >
                    My Profile
                  </Button>

                  <Button
                    variant="outline-success"
                    size="sm"
                    className="w-100 mt-2"
                    onClick={() => navigate("/logout")}
                  >
                    Login
                  </Button>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <div onClick={() => setMenuOpen(!menuOpen)} className="d-lg-none">
                <FaBars size={24} />
              </div>
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="position-fixed top-0 end-0 bg-white shadow-lg d-lg-none"
            style={{
              width: "80%",
              height: "100vh",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-3 w-100">
                <FaTimes
                  size={24}
                  onClick={() => setMenuOpen(false)}
                  style={{ cursor: "pointer", position: "absolute", top: 15, right: 15 }}
                />
              </div>

              {/* Profile Details */}
              <div className="text-center mb-4">
                <div
                  className="rounded-circle mx-auto mb-2 d-flex justify-content-center align-items-center"
                  style={{
                    width: 60,
                    height: 60,
                    background: "#4a90e2",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 26,
                  }}
                >
                  JD
                </div>
                <h6 className="fw-bold mb-0">John Doe</h6>
                <small className="text-muted">Customer</small>
              </div>
              <hr />
              <ul className="list-unstyled text-center mt-3">
                <li
                  className="fw-bold mb-3"
                  onClick={() => {
                    navigate("/");
                    setMenuOpen(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </li>
                <li
                  className="fw-bold mb-3"
                  onClick={() => {
                    navigate("/electricalproducts");
                    setMenuOpen(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Products
                </li>
                <li
                  className="fw-normal mb-3"
                  onClick={() => {
                    navigate("/contact");
                    setMenuOpen(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Hover Styling */}
      <style>{`
        .nav-link:hover, .btn-link:hover {
          color: #0d6efd !important;
        }
      `}</style>
    </>
  );
};

export default CustomNavbar;
