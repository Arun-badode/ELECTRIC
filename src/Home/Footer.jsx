import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <img
              src="https://i.postimg.cc/DyqKQj0V/Screenshot-2025-07-17-122021-removebg-preview.png"
              alt="ElectroSupply Logo"
              className="h-12 mb-3"
            />
            <p className="text-sm text-gray-300">
              Your trusted source for electrical components, tools, and industrial supplies.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-primary transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-primary transition"><FaTwitter /></a>
              <a href="#" className="hover:text-primary transition"><FaInstagram /></a>
              <a href="#" className="hover:text-primary transition"><FaPinterestP /></a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h6 className="text-lg font-semibold mb-3">Products</h6>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Wires & Cables</li>
              <li>Switchgear</li>
              <li>Tools & Testers</li>
              <li>Lighting Solutions</li>
              <li>Safety Equipment</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-lg font-semibold mb-3">Support</h6>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Track Order</li>
              <li>Shipping & Returns</li>
              <li>Bulk Inquiries</li>
              <li>Installation Guides</li>
              <li>Contact Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-semibold mb-3">Contact</h6>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                456 Powerline Blvd, Houston, TX 77001
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-red-500" />
                +1 (800) 987-6543
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                support@electrosupply.com
              </p>
            </div>

            <h6 className="text-lg font-semibold mt-6 mb-2">We Accept</h6>
            <div className="flex gap-2">
              <img src="https://img.icons8.com/color/36/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/36/mastercard.png" alt="Mastercard" />
              <img src="https://img.icons8.com/color/36/amex.png" alt="Amex" />
              <img src="https://img.icons8.com/color/36/paypal.png" alt="PayPal" />
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <p className="text-center text-sm text-gray-500">
          © 2025 ElectroSupply. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
