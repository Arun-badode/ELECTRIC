import React, { useState, useMemo } from "react";
import CustomNavbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import MyOrders from "./MyOrders";
import MyProfile from "./MyProfile";
import { FiUser, FiShoppingBag, FiLogOut } from "react-icons/fi";
import "./UserProfile.css";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Sidebar items config
  const items = useMemo(
    () => [
      { key: "profile", label: "Profile", icon: <FiUser />, sub: "Account" },
      { key: "orders", label: "My Orders", icon: <FiShoppingBag /> },
      { key: "logout", label: "Logout", icon: <FiLogOut />, danger: true },
    ],
    []
  );

  // Compute indicator position (index * itemHeight)
  // Must match --tab-height in CSS (default 48px)
  const activeIndex = items.findIndex((i) => i.key === activeTab);
  const indicatorTop = `calc(${activeIndex} * var(--tab-height) + var(--indicator-offset))`;

  const handleClick = (key) => {
    if (key === "logout") {
      // TODO: plug in your logout logic
      console.log("Logout clicked");
      return;
    }
    setActiveTab(key);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <MyProfile />;
      case "orders":
        return <MyOrders />;
      default:
        return null;
    }
  };

  return (
    <>
      <CustomNavbar />

      <div className="container-fluid px-0">
        {/* Banner */}
        <div className="profile-banner bg-primary text-white py-5 mt-5">
          <div className="container">
            <h2 className="mb-0">My Account</h2>
          </div>
        </div>

        {/* Layout */}
        <div className="container py-5">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 mb-4">
              <aside className="account-card card shadow-sm border-0 rounded-4">
                <div className="card-body p-0">
                  <nav
                    className="account-tab-container"
                    style={{ "--indicator-top": indicatorTop }}
                  >
                    {items.map((item, idx) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => handleClick(item.key)}
                        className={`account-tab-btn ${
                          activeTab === item.key ? "is-active" : ""
                        } ${item.danger ? "is-danger" : ""}`}
                        aria-current={activeTab === item.key ? "page" : undefined}
                      >
                        <span className="account-tab-icon">{item.icon}</span>
                        <span className="account-tab-text">
                          {item.label}
                          {item.sub && (
                            <span className="account-tab-subtext">{item.sub}</span>
                          )}
                        </span>
                      </button>
                    ))}

                    {/* Visual track + indicator */}
                    <span className="account-tab-track" />
                    <span className="account-tab-indicator" />
                  </nav>
                </div>
              </aside>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              <div className="card shadow-sm border-0 rounded-4">
                <div className="card-body p-4">{renderTabContent()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfilePage;
