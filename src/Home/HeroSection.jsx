import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroSection = () => {
  const [bannerImages, setBannerImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔽 Fetch banners from API on mount
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get("https://hrb5wx2v-6500.inc1.devtunnels.ms/api/banner/getAllBanners");
        if (response.data.success) {
          const images = response.data.data.map(b => b.image[0]); // get first image of each banner
          setBannerImages(images);
        }
      } catch (error) {
        console.error("Failed to fetch banners:", error);
      }
    };

    fetchBanners();
  }, []);

  // 🔁 Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [bannerImages.length]);

  // ✅ Don't render until images are loaded
  if (bannerImages.length === 0) return null;

  return (
    <div className="w-full flex justify-center sm:p-8">
      <div className="relative w-full max-w-8xl h-[60vh] sm:h-[50vh] rounded-2xl overflow-hidden shadow-xl">
        {/* Image Carousel */}
        <img
          src={bannerImages[currentIndex]}
          alt="Banner"
          className="w-full h-full object-cover transition-all duration-1000"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-2xl">
          <div className="text-center text-white px-4 md:px-10">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider mb-3 drop-shadow-lg">
              Powering the Future of Electricity
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Shop high-quality electrical supplies, tools, meters, and more from trusted brands.
            </p>
            <button className="mt-5 px-6 py-2 rounded-full bg-primary font-semibold shadow-lg transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {bannerImages.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === currentIndex ? "bg-primary" : "bg-white"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
