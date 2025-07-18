import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const images = [
    'https://i.postimg.cc/zB3QWKSL/0e9c812f40bdac4af33d736255c38afa-1.jpg',
    'https://i.postimg.cc/x1hDCY72/9ec3f58b834b966a8b7e5f399aa44692.jpg',
    'https://i.postimg.cc/zB3QWKSL/0e9c812f40bdac4af33d736255c38afa-1.jpg',
    'https://i.postimg.cc/x1hDCY72/9ec3f58b834b966a8b7e5f399aa44692.jpg',
    'https://i.postimg.cc/zB3QWKSL/0e9c812f40bdac4af33d736255c38afa-1.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 mt-5">
      <div className="card shadow-lg border-0 overflow-hidden rounded-[20px] relative">
        <section className="relative overflow-hidden w-full">
          <div className="relative w-full min-h-screen lg:min-h-[60vh]">

            <div className="absolute inset-0">
              <div className="relative h-full bg-gradient-to-r from-blue-600 to-primary">
                {/* Background Effects */}
                <div className="absolute inset-0">
                  <div
                    className="w-full h-full"
                    style={{
                      background:
                        'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 90%)',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'20\\' viewBox=\\'0 0 100 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z\\' fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E') repeat",
                    }}
                  />
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-center gap-6 py-10">
                  
                  {/* Left (Text) */}
                  <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-4">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Professional</span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Trusted Tools</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                      POWER YOUR PROJECTS
                    </h1>

                    <h2 className="text-base sm:text-lg text-yellow-400">
                      Electrical Tools & Equipment
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                      <button className="bg-white text-primary px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
                        Explore
                      </button>
                      <button className="bg-white/10 text-white border border-white/30 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
                        Get Quote
                      </button>
                    </div>

                    <p className="text-white/70 text-xs">
                      ✔️ Genuine Products • 30-Day Returns • 1 Year Warranty
                    </p>
                  </div>

                  {/* Right (Image) */}
                  <div className="w-full lg:w-[500px] h-[250px] sm:h-[300px] md:h-[340px] relative flex items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={images[currentIndex]}
                        alt="Tool"
                        className="w-full h-full object-cover transition-all duration-700"
                      />
                      <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                      >
                        <i className="ri-arrow-left-s-line text-xl" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                      >
                        <i className="ri-arrow-right-s-line text-xl" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
