import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "fa-solid fa-gauge" },
    { name: "Categories", path: "/categories", icon: "fa-solid fa-gauge" },
    { name: "All Products", path: "/products", icon: "fa-solid fa-boxes-stacked" },
    // { name: "Create Products", path: "/create-product", icon: "fa-solid fa-plus-square" },
    { name: "All Orders", path: "/orders", icon: "fa-solid fa-cart-shopping" },
    { name: "All Users", path: "/users", icon: "fa-solid fa-users" },
    { name: "Add Banner", path: "/bannermanager", icon: "fa-solid fa-image" },
    { name: "Inventory", path: "/inventory", icon: "fa-solid fa-warehouse" },
    { name: "Report Analytics", path: "/reportanalytics", icon: "fa-solid fa-chart-line" },
    { name: "Support", path: "/support", icon: "fa-solid fa-headset" },
    { name: "Setting", path: "/settings", icon: "fa-solid fa-gear" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className={`menu-item ${isActive(item.path) ? "active" : ""}`}>
              <div
                className="menu-link menu-i"
                onClick={() => navigate(item.path)}
              >
                <i className={item.icon}></i>
                <span className="menu-text">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
