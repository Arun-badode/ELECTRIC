import React, { useState } from "react";
import CustomNavbar from "../Navbar";
import Footer from "../Footer";
import MyOrders from "./MyOrders";
import MyProfile from "./MyProfile";
import { FiUser, FiShoppingBag, FiHeart, FiSettings, FiLogOut } from "react-icons/fi";
import "./UserProfile.css"

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

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
        {/* Profile Banner */}
        <div className="profile-banner bg-primary text-white py-4">
          <div className="container">
            <h2 className="mb-0">My Account</h2>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 mb-4">
              <div className="card shadow-sm rounded-lg border-0">
                <div className="card-body p-0">
                  <div className="list-group list-group-flush">
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`list-group-item list-group-item-action border-0 d-flex align-items-center ${
                        activeTab === "profile" ? "active bg-light-primary" : ""
                      }`}
                    >
                      <FiUser className="me-2" />
                      Profile
                    </button>
                    <button
                      onClick={() => setActiveTab("orders")}
                      className={`list-group-item list-group-item-action border-0 d-flex align-items-center ${
                        activeTab === "orders" ? "active bg-light-primary" : ""
                      }`}
                    >
                      <FiShoppingBag className="me-2" />
                      My Orders
                    </button>
                    <button className="list-group-item list-group-item-action border-0 d-flex align-items-center text-danger">
                      <FiLogOut className="me-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              <div className="card shadow-sm rounded-lg border-0">
                <div className="card-body p-4">
                  {renderTabContent()}
                </div>
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