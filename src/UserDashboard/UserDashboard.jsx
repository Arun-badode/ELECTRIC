import React from "react";
import { Tab, Nav, Card } from "react-bootstrap";
import UserProfile from "./UserProfile";
import UserOrders from "./UserOrders";
import './UserDashboard.css'; // Import custom CSS
import CustomNavbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const UserDashboard = () => {
  return (
    <>
    <CustomNavbar/>
    <div className="container py-5 mt-5">
      <Card className="shadow-lg rounded-lg">
        <Card.Body className="p-4">
          <h3 className="text-center mb-4 fw-bold">My Account</h3>
          <Tab.Container defaultActiveKey="profile">
            <Nav className="justify-content-center mb-4 border-bottom pb-2 custom-tabs" variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="profile" className="fw-semibold px-4 text-dark bg-white">
                  👤 Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="orders" className="fw-semibold px-4 text-dark bg-white">
                  🛒 My Orders
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="profile">
                <UserProfile />
              </Tab.Pane>
              <Tab.Pane eventKey="orders">
                <UserOrders />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </div>
    <Footer/>
    </>
  );
};

export default UserDashboard;
