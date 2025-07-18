import React from "react";

import "remixicon/fonts/remixicon.css"; // Make sure Remix Icon CDN or npm package is included

const FeatureHighlights = () => {
  return (
    <section className="bg-white">
      <div className="p-4">
        <div className="row text-center g-4">
          <div className="col-md-6 col-lg-3">
            <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "64px", height: "64px" }}>
              <i className="ri-truck-line text-white fs-4"></i>
            </div>
            <h5 className="fw-semibold text-dark mb-2">Free Shipping</h5>
            <p className="text-muted small">On bulk orders over $500</p>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "64px", height: "64px" }}>
              <i className="ri-shield-check-line text-white fs-4"></i>
            </div>
            <h5 className="fw-semibold text-dark mb-2">Money Back Guarantee</h5>
            <p className="text-muted small">30-day return policy</p>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "64px", height: "64px" }}>
              <i className="ri-customer-service-2-line text-white fs-4"></i>
            </div>
            <h5 className="fw-semibold text-dark mb-2">24/7 Technical Support</h5>
            <p className="text-muted small">Expert electrician assistance</p>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "64px", height: "64px" }}>
              <i className="ri-secure-payment-line text-white fs-4"></i>
            </div>
            <h5 className="fw-semibold text-dark mb-2">Secure Payment</h5>
            <p className="text-muted small">SSL encrypted transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
