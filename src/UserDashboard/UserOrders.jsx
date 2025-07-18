import React, { useState } from "react";
import { Table } from "react-bootstrap";

const UserOrders = () => {
  const [orders] = useState([
    { id: "#ORD123", date: "2025-07-15", amount: "₹1,500", status: "Delivered" },
    { id: "#ORD124", date: "2025-07-14", amount: "₹850", status: "Shipped" },
  ]);

  return (
    <div>
      <h5 className="mb-3">Recent Orders</h5>
      <Table responsive bordered hover className="rounded-3">
        <thead className="table-light">
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.amount}</td>
              <td>
                <span
                  className={`badge ${
                    order.status === "Delivered" ? "bg-success" : "bg-info text-dark"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserOrders;
