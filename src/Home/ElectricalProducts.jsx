
import React, { useState } from "react";
import Footer from './Footer';
import CustomNavbar from './Navbar';
import { Link } from "react-router-dom";
import { Range } from "react-range";

const ElectricalProducts = () => {
  const [values, setValues] = useState([50, 500]);
  // Product data in a const array
  const products = [
    {
      id: 1,
      name: "Digital Multimeter Pro X2000",
      category: "Testing Equipment",
      price: 299.99,
     
      rating: 4.9,
      description: "Professional-grade digital multimeter with auto-ranging and data logging capabilities",
      image: "https://readdy.ai/api/search-image?query=professional%20digital%20multimeter%20high%20quality%20display%20modern%20design%20clean%20background%20electrical%20testing%20equipment%20detailed%20product%20shot&width=300&height=300&seq=multimeter-pro&orientation=squarish"
    },
    {
      id: 2,
      name: "Premium Copper Wire 12AWG",
      category: "Wires & Cables",
      price: 189.99,
    
      rating: 4.8,
      description: "500ft spool, THHN/THWN-2 stranded copper wire for professional installations",
      image: "https://readdy.ai/api/search-image?query=industrial%20grade%20copper%20electrical%20wire%20spool%20professional%20electrical%20supply%20clean%20background%20detailed%20product%20photography&width=300&height=300&seq=wire-pro&orientation=squarish"
    },
   
   
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi bi-star${i <= Math.floor(rating) ? '-fill' : ''} text-warning me-1`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <>
      <CustomNavbar />
      <div className="bg-light ">
        <div className="">

          <div
            className="d-flex flex-column justify-content-center align-items-center mt-4"
            style={{
              minHeight: "60vh",
              background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
              padding: "60px 20px",
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                {/* Left Side - Text */}
                <div className="col-md-6 text-white text-start mt-5">
                  <h1 className="display-4 fw-bold ">
                    Professional Electrical Products
                  </h1>
                  <p className="lead text-light" style={{ maxWidth: "500px" }}>
                    Browse our extensive collection of high-quality electrical supplies designed to meet both residential and industrial needs.
                  </p>
                  <button className="btn btn-primary btn-lg mt-4">Shop Now</button>
                </div>

                {/* Right Side - Image */}
                <div className="col-md-6 text-center">
                  <img
                    src="https://i.ibb.co/B5qYJ8md/image.png"
                    alt="Electrical Products"
                    className="img-fluid"
                    style={{ maxHeight: "350px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 p-4">
            {/* Filter Sidebar */}
            <div className="col-lg-3">
              <div className="card shadow-sm" style={{ borderRadius: '20px' }}>
                <div className="card-body">
                  <h2 className="h4 fw-semibold mb-4">Filter Products</h2>

                  {/* Categories */}
                  <div className="mb-4">
                    <h3 className="h6 fw-semibold mb-3">Categories</h3>
                    {['Wires & Cables', 'Safety Equipment', 'Testing Instruments', 'Power Tools', 'Lighting Solutions', 'Switches & Outlets'].map((category, index) => (
                      <div className="form-check mb-2" key={index}>
                        <input className="form-check-input" type="checkbox" id={`category${index}`} />
                        <label className="form-check-label ms-2" htmlFor={`category${index}`}>{category}</label>
                      </div>
                    ))}
                  </div>

                  {/* Price Range */}
                  <div className="mb-4">
                    <h3 className="h6 fw-semibold mb-3">Price Range</h3>
                    <Range
                      step={10}
                      min={0}
                      max={1000}
                      values={values}
                      onChange={(newValues) => setValues(newValues)}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: "6px",
                            background: "linear-gradient(to right, #ddd, #ddd)",
                            borderRadius: "4px",
                            margin: "20px 0",
                          }}
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: "20px",
                            width: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#0d6efd",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                          }}
                        />
                      )}
                    />
                    <div className="d-flex justify-content-between small mt-2">
                      <span>${values[0]}</span>
                      <span>${values[1]}</span>
                    </div>
                  </div>


                  <button className="btn btn-primary w-100 fw-semibold">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="col-lg-9">
              {/* Search and Sort */}
              <div className="row mb-4 g-3">
                <div className="col-md-8">
                  <div className="input-group">
                    <span className="input-group-text bg-white rounded-pill me-2">
                      <i className="bi bi-search text-muted"></i>
                    </span>
                    <input type="text" className="form-control py-2 rounded-pill" placeholder="Search products..." />
                  </div>
                </div>
                <div className="col-md-4">
                  <select className="form-select rounded-pill">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>

              {/* Products */}
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {products.map(product => (
                  <div className="col" key={product.id}>
                    <div className="card h-100 shadow-sm hover-shadow transition-all" style={{ borderRadius: "20px" }}>
                      <div
                        className="card-img-top"
                        style={{
                          height: '14rem',
                          backgroundImage: `url('${product.image}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          borderTopLeftRadius: '20px',
                          borderTopRightRadius: '20px'
                        }}
                      ></div>
                      <div className="card-body d-flex flex-column">
                        <div className="d-flex align-items-center mb-2">
                          <span className="badge bg-primary bg-opacity-10 me-auto">
                            {product.category}
                          </span>
                         
                        </div>
                        <h5 className="card-title fw-semibold mb-2">{product.name}</h5>
                        <p className="card-text text-muted small mb-3 flex-grow-1">
                          {product.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <span className="fw-bold text-primary">${product.price.toFixed(2)}</span>
                          
                          </div>
                          <Link to="/productpage" className="btn btn-primary btn-sm">
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination with primary color */}
              <nav className="d-flex justify-content-end mt-5">
                <ul className="pagination pagination-primary">
                  <li className="page-item">
                    <button className="page-link">Previous</button>
                  </li>
                  <li className="page-item active">
                    <button className="page-link">1</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">2</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">3</button>
                  </li>
                  <li className="page-item disabled">
                    <button className="page-link">...</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">8</button>
                  </li>
                  <li className="page-item">
                    <button className="page-link">Next</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>

        {/* Custom CSS for primary pagination */}
        <style>{`
        .pagination-primary .page-item.active .page-link {
          background-color: #0d6efd;
          border-color: #0d6efd;
        }
        .pagination-primary .page-link {
          color: #0d6efd;
        }
        .pagination-primary .page-item:hover .page-link {
          background-color: #e9ecef;
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
};

export default ElectricalProducts;