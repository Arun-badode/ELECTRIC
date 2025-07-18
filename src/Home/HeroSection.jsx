import React, { useEffect, useState } from "react";

const bannerImages = [
  "https://i.postimg.cc/zB3QWKSL/0e9c812f40bdac4af33d736255c38afa-1.jpg",
  "https://i.postimg.cc/x1hDCY72/electric-supply-banner.jpg",
  "https://i.postimg.cc/nzXQnGVW/futuristic-electric-banner.jpg"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-center p-4 sm:p-8">
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
            <button className="mt-5 px-6 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-lg transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {bannerImages.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-yellow-400" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
