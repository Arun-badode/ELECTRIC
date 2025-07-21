import React, { useEffect, useState } from "react";
import axiosInstance from "../Utilities/axiosInstance";

const HeroSection = () => {
  const [bannerImages, setBannerImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axiosInstance.get(`/banner/getAllBanners`);
        if (response.data.success) {
          const images = response.data.data.map(b => b.image[0]);
          setBannerImages(images);
        }
      } catch (error) {
        console.error("Failed to fetch banners:", error);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [bannerImages.length]);

  if (bannerImages.length === 0) return null;

  return (
    <>
      <style>
        {`
          .hero-banner-wrapper {
            max-width: 1920px;
            height: 60vh;
          }

          @media (max-width: 768px) {
            .hero-banner-wrapper {
            
              height: 30vh;
            }
          }

          @media (max-width: 576px) {
            .hero-banner-wrapper {
              height: 30vh;
            }
          }
        `}
      </style>

      <div className="container-fluid d-flex justify-content-center py-4 px-sm-4">
        <div className="position-relative w-100 hero-banner-wrapper" >
          <div
            id="heroCarousel"
            className="carousel slide h-100"
            
            data-bs-ride="carousel"
          >
            <div className="carousel-inner h-100 rounded-4 shadow-lg overflow-hidden" style={{ borderRadius: "20px" }}>
              {bannerImages.map((img, index) => (
                <div
                  className={`carousel-item h-100 ${index === currentIndex ? "active" : ""}`}
                  key={index}
                >
                  <img
                    src={img}
                    className="d-block w-100 h-100"
                    alt={`Slide ${index}`}
                    style={{ objectFit: "cover", transition: "all 1s ease-in-out" }}
                  />
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="carousel-indicators position-absolute bottom-0 mb-3">
              {bannerImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={i === currentIndex ? "active" : ""}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: i === currentIndex ? "#0d6efd" : "#ffffff",
                    border: "1px solid #ccc",
                    margin: "0 4px"
                  }}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
