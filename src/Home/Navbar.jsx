import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaSearch,
  FaBoxOpen,
  FaHome,
  FaPhoneAlt,
} from "react-icons/fa";

const user = {
  name: "John Doe",
  email: "john.doe@email.com",
  phone: "+1 (800) 987-6543",
  address: "456 Powerline Blvd, Houston, TX",
  role: "Customer",
};

const CustomNavbar = () => {
  const [showProfileCard, setShowProfileCard] = useState(false);
  const profileCardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileCardRef.current &&
        !profileCardRef.current.contains(event.target)
      ) {
        setShowProfileCard(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderProfileCard = () => (
    <div
      ref={profileCardRef}
      className="shadow"
      style={{
        position: "absolute",
        top: 60,
        right: 0,
        minWidth: 300,
        zIndex: 1050,
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        border: "1px solid #f0f0f0",
      }}
    >
      <div className="p-4 d-flex flex-column align-items-center text-center">
        <div
          className="rounded-circle text-white d-flex align-items-center justify-content-center mb-3 shadow-sm"
          style={{
            width: 60,
            height: 60,
            fontSize: 26,
            fontWeight: "bold",
            backgroundColor: "#4a90e2",
          }}
        >
          {user.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </div>
        <h5 className="mb-1 fw-bold">{user.name}</h5>
        <p className="text-secondary mb-3 small">{user.role}</p>

        <div className="w-100 mb-2 text-start">
          <small className="text-muted">Email</small>
          <div className="fw-medium text-dark">{user.email}</div>
        </div>
        <div className="w-100 mb-2 text-start">
          <small className="text-muted">Phone</small>
          <div className="fw-medium text-dark">{user.phone}</div>
        </div>
        <div className="w-100 text-start">
          <small className="text-muted">Address</small>
          <div className="fw-medium text-dark">{user.address}</div>
        </div>
      </div>
    </div>
  );

  return (
    <Navbar expand="lg" className="fixed-top shadow-sm py-3 bg-white">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://i.postimg.cc/DyqKQj0V/Screenshot-2025-07-17-122021-removebg-preview.png"
            alt="ElectroSupply Logo"
            height="40"
            width="100"
            className="me-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          {/* Navigation Links */}
          <Nav className="gap-4 mx-auto align-items-center">
            <Button
              variant="link"
              className="text-dark fw-semibold d-flex align-items-center gap-1 text-decoration-none"
              onClick={() => navigate("/")}
            >
              <FaHome /> Home
            </Button>
            <Link to="/electricalproducts">
              <Button className="text-dark fw-semibold d-flex align-items-center gap-1 text-decoration-none">
                <FaBoxOpen /> Products
              </Button>
            </Link>
            <Button
              variant="link"
              className="text-dark fw-semibold d-flex align-items-center gap-1 text-decoration-none"
              onClick={() => navigate("/contact")}
            >
              <FaPhoneAlt /> Contact
            </Button>
          </Nav>

          {/* Search and Profile */}
          <div className="d-flex align-items-center gap-3 position-relative">
            <Form className="d-flex align-items-center">
              <FormControl
                type="search"
                placeholder="Search products"
                className="me-2 px-3 "
                style={{ minWidth: 180 }}
              />
              <Button variant="secondary">
                <FaSearch />
              </Button>
            </Form>

            {/* Profile Icon & Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="link"
                className="text-dark p-0 border-0 shadow-none"
                id="dropdown-profile"
              >
                <FaUserCircle size={24} />
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ backgroundColor: "#fffefc" }}>
                <Dropdown.Item
                  onClick={() => setShowProfileCard((prev) => !prev)}
                >
                  My Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/login">
                  Login
                </Dropdown.Item>
              </Dropdown.Menu>
              {showProfileCard && renderProfileCard()}
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
