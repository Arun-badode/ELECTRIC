import React, { useState } from "react";    
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ collapsed , menuItemClick}) => {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Tracks the open submenu
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu((prev) => (prev === menuName ? null : menuName));
  };

   // Function to check if a path is active
   const isActive = (path) => {
    return location.pathname === path;
  };

    // Function to check if any of the submenu items are active
    const isSubmenuActive = (paths) => {
      return paths.some((path) => location.pathname.startsWith(path));
    };

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {/* Dashboard Section */}
          <li className={`menu-item ${isActive("/aaa") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/kkk");} } >
              <i class="fa-solid fa-boxes-stacked"></i>
              <span className="menu-text">Dashboard</span>
            </div>
          </li>
           <li className={`menu-item ${isActive("/aaa") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/kkk"); menuItemClick();} } >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">All Products</span>
            </div>
          </li>
           <li className={`menu-item ${isActive("/aaa") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/kkk"); menuItemClick();} } >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Create Products</span>
            </div>
          </li>
           <li className={`menu-item ${isActive("/aaa") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/kkk"); menuItemClick();} } >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">All Orders</span>
            </div>
          </li>
           <li className={`menu-item ${isActive("/aaa") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/kkk"); menuItemClick();} } >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">All Users</span>
            </div>
          </li>
           <li className={`menu-item ${isActive("/aaa") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/kkk"); menuItemClick();} } >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Add Banner</span>
            </div>
          </li>
           <li className={`menu-item ${isActive("/aaa") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/kkk"); menuItemClick();} } >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Inventory</span>
            </div>
          </li>
           <li className={`menu-item ${isActive("/aaa") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/kkk"); menuItemClick();} } >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Report Analytics</span>
            </div>
          </li>
           <li className={`menu-item ${isActive("/aaa") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/kkk"); menuItemClick();} } >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Support</span>
            </div>
          </li>
           <li className={`menu-item ${isActive("/aaa") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/kkk"); menuItemClick();} } >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Setting</span>
            </div>
          </li>
           <li className={`menu-item ${isActive("/aaa") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/kkk"); menuItemClick();} } >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
