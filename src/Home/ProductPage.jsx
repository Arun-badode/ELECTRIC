import React, { useState } from 'react';
import Footer from './Footer';
import CustomNavbar from './Navbar';


const ProductPage = () => {
  const product = {
    title: "Professional Single Pole Circuit Breaker",
    model: "CB-SP-20A-240V",
    sku: "ESB-2024-001",
    price: 24.99,
    originalPrice: 29.99,
    inStock: true,
    stockQuantity: 25,
    shippingInfo: "Free shipping on orders $75+",
    returnPolicy: "30-day returns",
    mainImage: "https://readdy.ai/api/search-image?query=professional%20industrial%20circuit%20breaker%20electrical%20switch%20device%20on%20clean%20white%20background%2C%20product%20photography%2C%20high%20quality%2C%20detailed%20view%2C%20modern%20electrical%20equipment&width=600&height=600&seq=main_product&orientation=squarish",
    thumbnails: [
      {
        id: 1,
        src: "https://readdy.ai/api/search-image?query=circuit%20breaker%20front%20view%20on%20white%20background%2C%20electrical%20component%2C%20professional%20product%20photo&width=100&height=100&seq=thumb1&orientation=squarish",
        alt: "Front view"
      },
      {
        id: 2,
        src: "https://readdy.ai/api/search-image?query=circuit%20breaker%20side%20view%20on%20white%20background%2C%20electrical%20component%2C%20professional%20product%20photo&width=100&height=100&seq=thumb2&orientation=squarish",
        alt: "Side view"
      }
    ],
    features: [
      "UL Listed for safety and reliability",
      "10,000 AIC interrupting capacity",
      "Thermal-magnetic trip mechanism",
      "Easy plug-in installation",
      "Compact 1-inch width design"
    ],
    certifications: [
      "UL Listed and CSA Certified",
      "10-Year Manufacturer Warranty",
      "10,000 AIC Interrupting Capacity"
    ],
    description: "This professional-grade single pole circuit breaker is designed for residential and commercial electrical applications. Engineered with precision and built to last, it provides reliable overcurrent protection for your electrical circuits."
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.mainImage);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(value > 0 ? value : 1);
  };

  return (
    <>
    <CustomNavbar />
    <div className="">
      <div className="p-4">
        <div className="row g-4">
          {/* Product Images */}
          <div className="col-lg-6">
            <div className="position-relative mb-4">
              <img
                src={selectedImage}
                alt={product.title}
                className="img-fluid rounded bg-light object-contain"
                style={{ height: '400px', width: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className="d-flex flex-wrap gap-3">
              {product.thumbnails.map(thumb => (
                <div
                  key={thumb.id}
                  className={`border rounded ${selectedImage === thumb.src ? 'border-primary border-2' : 'border-light'}`}
                  onClick={() => setSelectedImage(thumb.src)}
                  style={{ width: '80px', height: '80px', cursor: 'pointer' }}
                >
                  <img
                    src={thumb.src}
                    alt={thumb.alt}
                    className="img-fluid h-100 w-100 p-2 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="col-lg-6">
            <h1 className="fw-bold mb-2">{product.title}</h1>
            <p className="text-muted mb-3">Model: {product.model} | SKU: {product.sku}</p>

            <div className="mb-4">
              <span className="fs-3 fw-bold text-primary">${product.price.toFixed(2)}</span>
              <p className="text-muted small mb-0">Price includes VAT. {product.shippingInfo}</p>
            </div>

            <div className="bg-light border rounded p-3 mb-4">
              <div className="mb-2 fw-semibold text-dark">Certifications:</div>
              <ul className="small ps-3 mb-0">
                {product.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <label className="form-label">Quantity</label>
              <div className="d-flex align-items-center gap-3">
                <div className="d-flex align-items-center border rounded">
                  <button className="btn btn-outline-secondary border-0 rounded-0" onClick={decreaseQuantity}>
                    <i className="bi bi-dash"></i>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    className="form-control text-center border-0 shadow-none"
                    style={{ width: '60px' }}
                  />
                  <button className="btn btn-outline-secondary border-0 rounded-0" onClick={increaseQuantity}>
                    <i className="bi bi-plus"></i>
                  </button>
                </div>
                <span className="text-muted small">{product.stockQuantity} available</span>
              </div>
            </div>

            <div className="d-grid gap-3 mb-4">
              <button className="btn btn-primary py-3 fw-medium">
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
              <button className="btn btn-outline-primary py-3 fw-medium">
                Buy Now
              </button>
            </div>

            <div className="d-flex justify-content-between small text-muted pt-3 border-top">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-truck"></i>
                <span>{product.shippingInfo}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-arrow-counterclockwise"></i>
                <span>{product.returnPolicy}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        <div className="mt-5">
          <h3 className="fw-bold mb-3">Product Description</h3>
          <p className="text-muted">{product.description}</p>

          <h4 className="fw-semibold mt-4 mb-3">Key Features</h4>
          <ul className="list-unstyled">
            {product.features.map((feature, index) => (
              <li key={index} className="mb-2 d-flex align-items-start">
                <i className="bi bi-check2 text-success me-2 mt-1"></i>
                <span className="text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductPage;
