import React, { useEffect, useRef, useState } from 'react';
import axiosInstance from '../Utilities/axiosInstance';


const Categoriesslider = () => {
  const [categories, setCategories] = useState([]); // ✅ Initialize as array
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get('/category/getAllCategories');
        
        setCategories(res.data.data || []);
      } catch (error) {
        console.error('Category fetch error:', error);
      }
    };
    fetchCategories();
  }, []);

   

  useEffect(() => {
    const container = scrollRef.current;
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % categories.length;
      const scrollAmount = container.clientWidth;
      container.scrollTo({
        left: scrollAmount * index,
        behavior: 'smooth',
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-4">
          Browse by Categories
        </h2>

        <div className="overflow-hidden relative" ref={scrollRef}>
          <div className="flex mb-4 space-x-6 transition-all duration-700 ease-in-out w-max">
            {categories.length > 0 ? (
              categories.map((cat, index) => (
                <div
                  key={index}
                  className="min-w-[250px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  <h3 className="text-lg font-semibold mt-4 text-gray-700">
                    {cat.name}
                  </h3>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Loading categories...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categoriesslider;
