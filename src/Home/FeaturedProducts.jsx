import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../Utilities/axiosInstance';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/product/getAllProducts");
         console.log(res)
        setProducts(res?.data?.data || []);
      } catch (error) {
        console.error("Product fetch error:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Featured Products</h2>
          <p className="mt-2 text-gray-500 text-sm sm:text-base">
            Top-rated electrical supplies for professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <div
                className="h-56 bg-cover bg-center rounded-t-2xl"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>

              <div className="p-4 flex flex-col flex-grow">
                <div className="d-flex align-items-center mb-2">
                  <span className="badge bg-primary bg-opacity-10 me-auto">
                    {product.category_name}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{product.description}</p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-primary font-bold">{product.price}</span>
                  <Link
                    to={`/productpage/${product.id}`}

                    className="bg-primary text-white px-3 py-1.5 text-sm rounded-full hover:bg-primary/90 transition"
                  >
                    View
                  </Link>
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
