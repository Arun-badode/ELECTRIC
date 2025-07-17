import React from 'react';


const FeaturedProducts = () => {
  const products = [
    {
      title: 'Digital Multimeter Pro X2000',
      description: 'Professional-grade digital multimeter with auto-ranging',
      price: '$299.99',
      image:
        'https://readdy.ai/api/search-image?query=professional%20digital%20multimeter%20high%20quality%20display%20modern%20design%20clean%20background%20electrical%20testing%20equipment&width=300&height=300&seq=multimeter&orientation=squarish',
    },
    {
      title: 'Premium Copper Wire 12AWG',
      description: '500ft spool, THHN/THWN-2 stranded copper',
      price: '$189.99',
      image:
        'https://readdy.ai/api/search-image?query=industrial%20grade%20copper%20electrical%20wire%20spool%20professional%20electrical%20supply%20clean%20background&width=300&height=300&seq=wire&orientation=squarish',
    },
    {
      title: 'Safety Kit Pro Plus',
      description: 'Complete electrical safety gear set',
      price: '$249.99',
      image:
        'https://readdy.ai/api/search-image?query=professional%20electrical%20safety%20kit%20hard%20hat%20gloves%20goggles%20voltage%20tester%20clean%20background&width=300&height=300&seq=safety-kit&orientation=squarish',
    },
    {
      title: 'Cordless Drill Master 20V',
      description: 'Brushless motor with 2 batteries',
      price: '$399.99',
      image:
        'https://readdy.ai/api/search-image?query=professional%20cordless%20power%20drill%20modern%20design%20battery%20powered%20tool%20clean%20background&width=300&height=300&seq=drill&orientation=squarish',
    },
    {
      title: 'LED Panel Pro 2x2',
      description: '40W commercial grade LED panel',
      price: '$159.99',
      image:
        'https://readdy.ai/api/search-image?query=commercial%20led%20panel%20light%20modern%20slim%20design%20energy%20efficient%20lighting%20clean%20background&width=300&height=300&seq=led-panel&orientation=squarish',
    },
    {
      title: 'Circuit Breaker 100A',
      description: 'Commercial grade main breaker',
      price: '$129.99',
      image:
        'https://readdy.ai/api/search-image?query=professional%20circuit%20breaker%20panel%20modern%20electrical%20equipment%20clean%20background&width=300&height=300&seq=circuit-breaker&orientation=squarish',
    },
    {
      title: 'Pro Crimping Tool Set',
      description: 'Heavy-duty wire crimper kit',
      price: '$89.99',
      image:
        'https://readdy.ai/api/search-image?query=professional%20wire%20crimping%20tool%20heavy%20duty%20electrical%20crimper%20clean%20background&width=300&height=300&seq=crimper&orientation=squarish',
    },
    {
      title: 'Smart WiFi Outlet Pro',
      description: 'WiFi-enabled power monitoring outlet',
      price: '$79.99',
      image:
        'https://readdy.ai/api/search-image?query=smart%20electrical%20outlet%20modern%20design%20wifi%20enabled%20power%20monitoring%20clean%20background&width=300&height=300&seq=smart-outlet&orientation=squarish',
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Featured Products</h2>
          <p className="lead text-muted">
            Top-rated electrical supplies for professionals
          </p>
        </div>
        <div className="row g-4">
          {products.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="card h-100 shadow-lg  border-0" style={{borderRadius:"20px"}}>
                <div
                  className="bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    height: '14rem',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                     borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px'
                  }}
                ></div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-muted small mb-3">{product.description}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-primary">{product.price}</span>
                    <button className="btn btn-primary btn-sm">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
