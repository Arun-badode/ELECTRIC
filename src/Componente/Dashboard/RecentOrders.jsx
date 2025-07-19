import React from "react";

const RecentOrders = () => {
  const orders = [
    {
      id: "#ORD-2024-0892",
      customer: "John Smith",
      items: "3 Products",
      status: "Processing",
      statusClass: "warning",
      date: "Dec 15, 2024"
    },
    {
      id: "#ORD-2024-0891",
      customer: "Acme Corp",
      items: "5 Products",
      status: "Completed",
      statusClass: "success",
      date: "Dec 15, 2024"
    },
    {
      id: "#ORD-2024-0890",
      customer: "Jane Doe",
      items: "2 Products",
      status: "Shipped",
      statusClass: "primary",
      date: "Dec 14, 2024"
    }
  ];

  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Recent Orders</h5>
        <a href="#" className="btn btn-sm btn-outline-primary">View All</a>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td><strong>{order.id}</strong></td>
                  <td>{order.customer}</td>
                  <td>{order.items}</td>
                  <td>
                    <span className={`badge bg-${order.statusClass}-subtle text-${order.statusClass}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;