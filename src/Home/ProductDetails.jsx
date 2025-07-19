// RelatedProducts.jsx
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axiosInstance from "../Utilities/axiosInstance";

const RelatedProducts = ({ categoryId, currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const response = await axiosInstance.get(
          `/product/getAllProducts`
        );
console.log(response);

        const allProducts = response.data.data;

        // Filter by categoryId and remove the current product
        const filtered = allProducts.filter(
          (product) => product.categoryId === categoryId && product.id !== currentProductId
        );

        setRelatedProducts(filtered);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    if (categoryId) {
      fetchRelated();
    }
  }, [categoryId, currentProductId]);

  return (
    <div className="mt-5">
      <h4>Related Products</h4>
      <div className="d-flex flex-wrap gap-3">
        {relatedProducts.map((item) => (
          <div key={item.id} className="card" style={{ width: "200px" }}>
            <img
              src={item.image?.[0]}
              alt={item.name}
              className="card-img-top"
              style={{ height: "150px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h6 className="card-title">{item.name}</h6>
              <p className="card-text">₹{item.price}</p>
              <Link to={`/productpage/${item.id}`} className="btn btn-primary btn-sm">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
