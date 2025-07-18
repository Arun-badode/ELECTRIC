import React, { useState } from "react";
import CustomNavbar from "../Navbar";
import Footer from "../Footer";
import MyOrders from "./MyOrders";
import MyProfile from "./MyProfile";
import { FiUser, FiShoppingBag, FiHeart, FiSettings, FiLogOut } from "react-icons/fi";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <MyProfile />;
      case "orders":
        return <MyOrders />;
      // case "wishlist":
      //   return <Wishlist />;
      // case "settings":
      //   return <ProfileSetting />;
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
                    {/* <button
                      onClick={() => setActiveTab("wishlist")}
                      className={`list-group-item list-group-item-action border-0 d-flex align-items-center ${
                        activeTab === "wishlist" ? "active bg-light-primary" : ""
                      }`}
                    >
                      <FiHeart className="me-2" />
                      Wishlist
                    </button>
                    <button
                      onClick={() => setActiveTab("settings")}
                      className={`list-group-item list-group-item-action border-0 d-flex align-items-center ${
                        activeTab === "settings" ? "active bg-light-primary" : ""
                      }`}
                    >
                      <FiSettings className="me-2" />
                      Settings
                    </button> */}
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

      <style jsx>{`
        .profile-banner {
          background: linear-gradient(90deg, #2874f0 0%, #1a5bb9 100%);
        }
        
        .bg-light-primary {
          background-color: rgba(40, 116, 240, 0.1) !important;
          color: #2874f0 !important;
          font-weight: 500;
        }
        
        .list-group-item.active {
          border-left: 3px solid #2874f0;
        }
        
        .list-group-item {
          padding: 12px 20px;
          transition: all 0.3s ease;
        }
        
        .list-group-item:hover {
          background-color: #f8f9fa;
        }
        
        .card {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .rounded-lg {
          border-radius: 12px !important;
        }
      `}</style>
    </>
  );
};

export default ProfilePage;