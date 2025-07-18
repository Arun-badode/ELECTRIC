import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Aman Patidar",
    email: "aman@example.com",
    phone: "1234567890",
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert("Profile Updated!");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    alert("Password Changed!");
  };

  return (
    <Row>
      <Col md={6}>
        <h5 className="mb-3">Profile Information</h5>
        <Form onSubmit={handleProfileUpdate}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              placeholder="Enter your phone"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Update Profile
          </Button>
        </Form>
      </Col>

      <Col md={6}>
        <h5 className="mb-3">Change Password</h5>
        <Form onSubmit={handlePasswordChange}>
          <Form.Group className="mb-3">
            <Form.Label>Old Password</Form.Label>
            <Form.Control type="password" placeholder="Enter old password" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Enter new password" required />
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100">
            Change Password
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default UserProfile;
