import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row className="gy-4">
          {/* Brand Info */}
          <Col md={3}>
            <img
              src="https://i.postimg.cc/DyqKQj0V/Screenshot-2025-07-17-122021-removebg-preview.png"
              alt="ElectroSupply Logo"
              height="60"
              width="100"
              className="d-inline-block align-top"
            />
            <p className="text-white mt-2">
              Your trusted source for electrical components, tools, and industrial supplies.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon text-white"><FaFacebookF /></a>
              <a href="#" className="social-icon text-white"><FaTwitter /></a>
              <a href="#" className="social-icon text-white"><FaInstagram /></a>
              <a href="#" className="social-icon text-white"><FaPinterestP /></a>
            </div>
          </Col>

          {/* Categories */}
          <Col md={3}>
            <h6 className="fw-bold">Products</h6>
            <ul className="list-unstyled">
              <li>Wires & Cables</li>
              <li>Switchgear</li>
              <li>Tools & Testers</li>
              <li>Lighting Solutions</li>
              <li>Safety Equipment</li>
            </ul>
          </Col>

          {/* Support */}
          <Col md={3}>
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li>Track Order</li>
              <li>Shipping & Returns</li>
              <li>Bulk Inquiries</li>
              <li>Installation Guides</li>
              <li>Contact Support</li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h6 className="fw-bold">Contact</h6>
            <p className="mb-1 text-white">
              <FaMapMarkerAlt className="me-2 text-danger" />
              456 Powerline Blvd, Houston, TX 77001
            </p>
            <p className="mb-1 text-white">
              <FaPhoneAlt className="me-2 text-danger" />
              +1 (800) 987-6543
            </p>
            <p className="mb-3 text-white">
              <FaEnvelope className="me-2 text-danger" />
              support@electrosupply.com
            </p>

            <h6 className="fw-bold">We Accept</h6>
            <div className="d-flex gap-2">
              <img src="https://img.icons8.com/color/36/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/36/mastercard.png" alt="Mastercard" />
              <img src="https://img.icons8.com/color/36/amex.png" alt="Amex" />
              <img src="https://img.icons8.com/color/36/paypal.png" alt="PayPal" />
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />
        <div className="text-center small text-muted">
          © 2025 ElectroSupply. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
