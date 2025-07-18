import React, { useState } from "react";
import CustomNavbar from "../Navbar";
import Footer from "../Footer";
import ProfileSetting from "./ProfileSetting";

const Wishlist = () => {
     const wishlistItems = [
    {
      id: "WL12345",
      product: "Smart Watch",
      price: "₹2,999",
      image: "https://via.placeholder.com/60",
    },
    {
      id: "WL12346",
      product: "Bluetooth Speaker",
      price: "₹1,799",
      image: "https://via.placeholder.com/60",
    },
  ];
  return (
    <>
          <div className="card shadow-sm rounded">
            <div className="card-body">
              <h4 className="mb-3">My Wishlist</h4>
              {wishlistItems.length > 0 ? (
                <div className="row">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="col-md-6 mb-3">
                      <div className="card p-3">
                        <div className="d-flex">
                          <img
                            src={item.image}
                            alt={item.product}
                            className="me-3"
                            style={{ width: "60px", height: "60px" }}
                          />
                          <div>
                            <h6>{item.product}</h6>
                            <p className="text-danger fw-bold">{item.price}</p>
                            <div className="d-flex">
                              <button className="btn btn-sm btn-outline-danger me-2">
                                Remove
                              </button>
                              <button className="btn btn-sm btn-primary">
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <img
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/empty-wishlist_160x160.png"
                    alt="Empty wishlist"
                    style={{ width: "150px" }}
                  />
                  <h5 className="mt-3">Empty Wishlist</h5>
                  <p className="text-muted">
                    You have no items in your wishlist. Start adding!
                  </p>
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              )}
            </div>
          </div>
    </>
  )
}

export default Wishlist
