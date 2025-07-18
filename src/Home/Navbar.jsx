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
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search products"
                className="me-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="secondary">
                <FaSearch />
              </Button>
            </Form>
            <div
              style={{ cursor: "pointer", position: "relative" }}
              onClick={() => navigate("/shoppingcart")}
            >
              <FaShoppingCart size={22} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
              </span>
            </div>

            <FaUserCircle
              size={24}
              style={{ cursor: "pointer" }}
              onClick={() => setProfileOpen(!profileOpen)}
              className="d-none d-lg-block"
            />

           {profileOpen && (
  <div
    ref={profileRef}
    className="position-absolute end-0 bg-white shadow rounded p-3"
    style={{ width: "200px", zIndex: 999, marginTop: '210px' }}
  >
    <h6 className="fw-bold mb-2">John Doe</h6>
    <p className="mb-1">john.doe@email.com</p>
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
