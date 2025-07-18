import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "https://i.postimg.cc/zB3QWKSL/0e9c812f40bdac4af33d736255c38afa-1.jpg",
    "https://i.postimg.cc/x1hDCY72/9ec3f58b834b966a8b7e5f399aa44692.jpg",
    "https://i.postimg.cc/zB3QWKSL/0e9c812f40bdac4af33d736255c38afa-1.jpg",
    "https://i.postimg.cc/x1hDCY72/9ec3f58b834b966a8b7e5f399aa44692.jpg",
    "https://i.postimg.cc/zB3QWKSL/0e9c812f40bdac4af33d736255c38afa-1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative sm:h-[70vh] md:h-[70vh] overflow-hidden rounded-lg">
      {/* Slider Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10"
      >
        <i className="ri-arrow-left-s-line text-2xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10"
      >
        <i className="ri-arrow-right-s-line text-2xl" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
