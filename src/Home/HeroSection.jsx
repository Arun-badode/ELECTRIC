import React from 'react';

const HeroSection = () => {
  return (
    <div id='home' style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'url(https://i.postimg.cc/dV5f75fr/electric-supply-ecomm.jpg) center/cover no-repeat',
          zIndex: 1,
        }}
      ></div>

      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 2,
        }}
      ></div>

      {/* Content */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh', position: 'relative', zIndex: 3 }}
      >
        <div className="container px-3">
          <h1 className="fw-bold mb-4 display-5">
            Power Up Your Projects with Top-Quality Electrical Supplies
          </h1>

          {/* Responsive Input + Buttons */}
          <div className="row justify-content-center g-2">
            <div className="col-12 col-md-6">
              <input
                type="text"
                className="form-control py-3"
                placeholder="Search for Electric products, categories..."
              />
            </div>
            <div className="col-6 col-md-auto">
              <button className="btn btn-danger w-100 py-3">Search</button>
            </div>
            <div className="col-6 col-md-auto">
              <button className="btn btn-light text-dark w-100 py-3">All Products</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;