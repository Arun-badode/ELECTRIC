import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Support = () => {
  return (
    <div className="p-3">
      <h2 className="h4 fw-bold mb-3">Support & Help</h2>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h5 className="mb-3">Submit a Ticket</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Issue subject" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Issue Description</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Describe your issue in detail" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select>
                <option>Technical Issue</option>
                <option>Billing</option>
                <option>Account Access</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary">Submit</Button>
          </Form>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <h5 className="mb-3">Contact Support</h5>
          <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
          <p>Phone: +1 800 123 4567</p>
          <p>Live Chat: Available Mon–Fri, 9 AM – 6 PM</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Support;
