import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaSearch,
  FaBoxOpen,
  FaHome,
  FaPhoneAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
  const navigate = useNavigate();

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

  return (
    <Navbar expand="lg" className="fixed-top bg-white shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://i.postimg.cc/DyqKQj0V/Screenshot-2025-07-17-122021-removebg-preview.png"
            alt="Logo"
            height="60"
            width="100"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="gap-3 mx-auto">
            <Button
              variant="link"
              className="text-dark fw-semibold d-flex align-items-center gap-1 text-decoration-none"
              onClick={() => navigate("/")}
            >
              <FaHome /> Home
            </Button>

            <Link to="/electricalproducts" className="text-decoration-none">
              <Button
                variant="link"
                className="text-dark fw-semibold d-flex align-items-center gap-1 text-decoration-none"
              >
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

          <div className="d-flex align-items-center gap-3 position-relative">
            <Form className="d-flex align-items-center">
              <FormControl
                type="search"
                placeholder="Search products"
                className="me-2"
                style={{ minWidth: 200 }}
              />
              <Button variant="secondary">
                <FaSearch />
              </Button>
            </Form>

            {/* Cart Icon */}
            <div
              style={{ cursor: "pointer", position: "relative" }}
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart size={24} />
              {/* Example Badge */}
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                2
              </span>
            </div>

            {/* Profile Icon */}
            <div
              className="position-relative"
              style={{ cursor: "pointer" }}
              onClick={() => setShowProfileCard((prev) => !prev)}
            >
              <FaUserCircle size={28} />
              <AnimatePresence>
                {showProfileCard && (
                  <motion.div
                    ref={profileCardRef}
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="shadow position-absolute end-0 mt-2"
                    style={{
                      minWidth: 280,
                      zIndex: 1050,
                      backgroundColor: "#ffffff",
                      borderRadius: "16px",
                      border: "1px solid #f0f0f0",
                      overflow: "hidden",
                    }}
                  >
                    {/* Profile content... */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
