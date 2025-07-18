import React from 'react';

import Footer from './Footer';
import CustomNavbar from './Navbar';

const ElectricalProducts = () => {
  // Product data in a const array
  const products = [
    {
      id: 1,
      name: "Digital Multimeter Pro X2000",
      category: "Testing Equipment",
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.9,
      description: "Professional-grade digital multimeter with auto-ranging and data logging capabilities",
      image: "https://readdy.ai/api/search-image?query=professional%20digital%20multimeter%20high%20quality%20display%20modern%20design%20clean%20background%20electrical%20testing%20equipment%20detailed%20product%20shot&width=300&height=300&seq=multimeter-pro&orientation=squarish"
    },
    {
      id: 2,
      name: "Premium Copper Wire 12AWG",
      category: "Wires & Cables",
      price: 189.99,
      originalPrice: 219.99,
      rating: 4.8,
      description: "500ft spool, THHN/THWN-2 stranded copper wire for professional installations",
      image: "https://readdy.ai/api/search-image?query=industrial%20grade%20copper%20electrical%20wire%20spool%20professional%20electrical%20supply%20clean%20background%20detailed%20product%20photography&width=300&height=300&seq=wire-pro&orientation=squarish"
    },
    {
      id: 3,
      name: "Safety Kit Pro Plus",
      category: "Safety Equipment",
      price: 249.99,
      originalPrice: 299.99,
      rating: 4.7,
      description: "Complete electrical safety gear set with OSHA-approved equipment",
      image: "https://readdy.ai/api/search-image?query=professional%20electrical%20safety%20kit%20hard%20hat%20gloves%20goggles%20voltage%20tester%20clean%20background%20detailed%20product%20photography&width=300&height=300&seq=safety-kit-pro&orientation=squarish"
    },
    {
      id: 4,
      name: "Cordless Drill Master 20V",
      category: "Power Tools",
      price: 399.99,
      originalPrice: 449.99,
      rating: 4.8,
      description: "Professional-grade cordless drill with brushless motor and dual batteries",
      image: "https://readdy.ai/api/search-image?query=professional%20cordless%20power%20drill%20modern%20design%20battery%20powered%20tool%20clean%20background%20detailed%20product%20photography&width=300&height=300&seq=drill-pro&orientation=squarish"
    },
    {
      id: 5,
      name: "LED Panel Pro 2x2",
      category: "Lighting",
      price: 159.99,
      originalPrice: 189.99,
      rating: 4.6,
      description: "Commercial-grade LED panel with energy-efficient technology",
      image: "https://readdy.ai/api/search-image?query=commercial%20led%20panel%20light%20modern%20slim%20design%20energy%20efficient%20lighting%20clean%20background%20detailed%20product%20photography&width=300&height=300&seq=led-panel-pro&orientation=squarish"
    },
    {
      id: 6,
      name: "Circuit Breaker 100A",
      category: "Circuit Protection",
      price: 129.99,
      originalPrice: 149.99,
      rating: 4.9,
      description: "Commercial-grade main circuit breaker with advanced protection",
      image: "https://readdy.ai/api/search-image?query=professional%20circuit%20breaker%20panel%20modern%20electrical%20equipment%20clean%20background%20detailed%20product%20photography&width=300&height=300&seq=circuit-breaker-pro&orientation=squarish"
    },
    {
      id: 7,
      name: "Pro Crimping Tool Set",
      category: "Hand Tools",
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.7,
      description: "Heavy-duty wire crimper kit with multiple die sizes",
      image: "https://readdy.ai/api/search-image?query=professional%20wire%20crimping%20tool%20heavy%20duty%20electrical%20crimper%20clean%20background%20detailed%20product%20photography&width=300&height=300&seq=crimper-pro&orientation=squarish"
    },
    {
      id: 8,
      name: "Smart WiFi Outlet Pro",
      category: "Smart Devices",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.8,
      description: "WiFi-enabled power monitoring outlet with app control",
      image: "https://readdy.ai/api/search-image?query=smart%20electrical%20outlet%20modern%20design%20wifi%20enabled%20power%20monitoring%20clean%20background%20detailed%20product%20photography&width=300&height=300&seq=smart-outlet-pro&orientation=squarish"
    },
    {
      id: 9,
      name: "Hydraulic Conduit Bender",
      category: "Specialty Tools",
      price: 449.99,
      originalPrice: 499.99,
      rating: 4.9,
      description: "Professional-grade hydraulic conduit bending system",
      image: "https://readdy.ai/api/search-image?query=professional%20electrical%20conduit%20bender%20hydraulic%20powered%20precision%20bending%20tool%20clean%20background%20detailed%20product%20photography&width=300&height=300&seq=conduit-bender-pro&orientation=squarish"
    }
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
    <CustomNavbar/>
    <div className="bg-light ">
      <div className=" p-4">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark mt-5 py-4">
            Professional Electrical Products
          </h1>
          <p className="lead text-muted">
            Browse our extensive collection of high-quality electrical supplies
          </p>
        </div>
        
        <div className="row g-4">
          {/* Filter Sidebar */}
          <div className="col-lg-3">
            <div className="card shadow-sm" style={{ borderRadius:'20px'}}>
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
                  {['Under $50', '$50 - $100', '$100 - $200', '$200 - $500', 'Over $500'].map((price, index) => (
                    <div className="form-check mb-2" key={index}>
                      <input className="form-check-input" type="radio" name="price" id={`price${index}`} />
                      <label className="form-check-label ms-2" htmlFor={`price${index}`}>{price}</label>
                    </div>
                  ))}
                </div>
                
                {/* Brands */}
                <div className="mb-4">
                  <h3 className="h6 fw-semibold mb-3">Brands</h3>
                  {['ElectroTech', 'PowerMaster', 'SafeGuard Pro', 'LightKing', 'WirePro'].map((brand, index) => (
                    <div className="form-check mb-2" key={index}>
                      <input className="form-check-input" type="checkbox" id={`brand${index}`} />
                      <label className="form-check-label ms-2" htmlFor={`brand${index}`}>{brand}</label>
                    </div>
                  ))}
                </div>
                
                {/* Ratings */}
                <div className="mb-4">
                  <h3 className="h6 fw-semibold mb-3">Ratings</h3>
                  {[5, 4, 3].map((rating, index) => (
                    <div className="form-check mb-2" key={index}>
                      <input className="form-check-input" type="radio" name="rating" id={`rating${index}`} />
                      <label className="form-check-label ms-2 d-flex align-items-center" htmlFor={`rating${index}`}>
                        {renderStars(rating)}
                        <span className="ms-1">& up</span>
                      </label>
                    </div>
                  ))}
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
                  <option>Best Rated</option>
                </select>
              </div>
            </div>
            
            {/* Products */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {products.map(product => (
                <div className="col" key={product.id}>
                  <div className="card h-100 shadow-sm hover-shadow transition-all" style={{borderRadius:"20px"}}>
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
                        <div className="d-flex align-items-center">
                          <i className="bi bi-star-fill text-warning me-1"></i>
                          <small className="text-muted">{product.rating}</small>
                        </div>
                      </div>
                      <h5 className="card-title fw-semibold mb-2">{product.name}</h5>
                      <p className="card-text text-muted small mb-3 flex-grow-1">
                        {product.description}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="fw-bold text-primary">${product.price.toFixed(2)}</span>
                          <small className="text-decoration-line-through text-muted ms-2">
                            ${product.originalPrice.toFixed(2)}
                          </small>
                        </div>
                        <button className="btn btn-primary btn-sm">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination with primary color */}
            <nav className="d-flex justify-content-center mt-5">
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
    <Footer/>
    </>
  );
};

export default ElectricalProducts;