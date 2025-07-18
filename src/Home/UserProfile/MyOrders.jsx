import React, { useState } from "react";
import CustomNavbar from "../Navbar";
import Footer from "../Footer";

const MyOrders = () => {
     const [activeTab, setActiveTab] = useState("profile");
    const orders = [
    {
      id: "ORD12345",
      product: "Wireless Earbuds",
      date: "15 July 2025",
      status: "Delivered",
      price: "₹1,499",
    },
    {
      id: "ORD12346",
      product: "Smartphone Case",
      date: "10 July 2025",
      status: "Shipped",
      price: "₹499",
    },
    {
      id: "ORD12347",
      product: "Gaming Mouse",
      date: "05 July 2025",
      status: "Cancelled",
      price: "₹1,299",
    },
  ];

  return (
    
    <>
          <div className="card shadow-sm rounded">
            <div className="card-body">
              <h4 className="mb-3">My Orders</h4>
              {orders.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td>{order.id}</td>
                          <td>{order.product}</td>
                          <td>{order.date}</td>
                          <td>
                            <span
                              className={`badge ${order.status === "Delivered"
                                ? "bg-success"
                                : order.status === "Shipped"
                                  ? "bg-info"
                                  : "bg-danger"
                                }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td>{order.price}</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-4">
                  <img
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/emptyOrders_f13d28.png"
                    alt="No orders"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mt-3">You haven't placed any orders yet!</h5>
                  <p className="text-muted">
                    Order section is empty. After placing order, you can track
                    them from here.
                  </p>
                  <button className="btn btn-primary">Continue Shopping</button>
                </div>
              )}
            </div>
          </div>
    </>
  )
}

export default MyOrders
