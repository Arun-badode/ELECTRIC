import React from "react";


const SubscribeSection = () => {
  return (
    <section className="py-5 bg-primary text-white text-center">
      <div className="container">
        <h2 className="h2 fw-bold mb-3">
          Subscribe for Exclusive Electrical Deals
        </h2>
        <p className="fs-6 text-light mb-4">
          Get professional updates, inventory alerts, and contractor discounts
          delivered to your inbox
        </p>

        <form className="row g-2 justify-content-center align-items-center mb-3">
          <div className="col-12 col-sm-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control form-control-lg "
              required
            />
          </div>
          <div className="col-12 col-sm-auto">
          <button type="submit" className="btn btn-dark btn-lg">
  Subscribe Now
</button>

          </div>
        </form>

        <p className="text-light small">
          Join 15,000+ electrical professionals getting exclusive deals
        </p>
      </div>
    </section>
  );
};

export default SubscribeSection;
