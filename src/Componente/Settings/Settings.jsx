import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';

const Settings = () => {
  return (
    <div className="p-2">
      <h4 className="mb-4">Account Settings</h4>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h5 className="mb-3">Profile</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Sarah Johnson" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="sarah@example.com" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="+1 123 456 7890" />
            </Form.Group>

            <Button variant="primary">Save Changes</Button>
          </Form>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <h5 className="mb-3">Security</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Change Password</Form.Label>
              <Form.Control type="password" placeholder="New Password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="warning">Update Password</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Settings;
