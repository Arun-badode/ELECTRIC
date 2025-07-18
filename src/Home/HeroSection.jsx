import React from 'react';

const HeroSection = () => {
  return (
    <div className="p-5 p-md-5 mt-5">
      <div
        className="card shadow-lg border-0 overflow-hidden"
        style={{ borderRadius: '20px', position: 'relative',}}
      >
        {/* Tailwind Modern Hero Section Inside Bootstrap Card */}
        <section className="relative overflow-hidden w-100">
          <div id="hero-slider" className="relative w-full min-h-[600px] max-h-[800px]">
            <div className="slide absolute inset-0 opacity-100 transition-opacity duration-1000 ease-in-out">
              <div className="relative h-full bg-gradient-to-r from-blue-600 to-primary">
                <div className="absolute inset-0">
                  <div
                    className="w-full h-full"
                    style={{
                      background:
                        'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 90%)',
                    }}
                  ></div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'20\\' viewBox=\\'0 0 100 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z\\' fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E') repeat",
                    }}
                  ></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="slide-in">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm">
                          Professional Grade
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm">
                          Industry Standard
                        </div>
                      </div>
                      <h1 className="text-7xl font-bold text-white mb-4 leading-tight">
                        POWER YOUR<br />PROJECTS
                      </h1>
                      <h2 className="text-3xl font-semibold text-yellow-400 mb-8">
                        Professional Electrical Tools & Equipment
                      </h2>
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                          <div className="text-2xl font-bold text-white mb-1">25K+</div>
                          <div className="text-white/80 text-sm">Products</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                          <div className="text-2xl font-bold text-white mb-1">100%</div>
                          <div className="text-white/80 text-sm">Genuine</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                          <div className="text-2xl font-bold text-white mb-1">24/7</div>
                          <div className="text-white/80 text-sm">Support</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-4">
                          <button className="group bg-white text-primary px-8 py-4 rounded-button text-lg font-semibold whitespace-nowrap hover:scale-105 transform transition-all shadow-lg hover:shadow-xl flex items-center">
                            Explore Products
                            <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                          </button>
                          <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-button text-lg font-semibold whitespace-nowrap hover:scale-105 transform transition-all shadow-lg hover:shadow-xl flex items-center">
                            Request Quote
                            <i className="ri-file-list-3-line ml-2"></i>
                          </button>
                        </div>
                        <p className="text-white/80 text-sm flex items-center gap-2">
                          <i className="ri-shield-check-line"></i>
                          100% Genuine Products | 30-Day Returns | 1 Year Warranty
                        </p>
                      </div>
                    </div>
                    <div className="relative hidden lg:block">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20electrical%20tools%20and%20equipment%20display%20with%20multimeter%20circuit%20tester%20power%20tools%20and%20safety%20gear%20arranged%20on%20modern%20clean%20background%20with%20dramatic%20lighting&width=800&height=800&seq=electrical-tools&orientation=squarish"
                        alt="Electrical Tools Sale"
                        className="rounded-2xl shadow-2xl"
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-4 rounded-xl">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-yellow-400 font-bold text-xl">Premium</div>
                            <div className="text-white text-sm">Power Tools</div>
                          </div>
                          <div className="text-center">
                            <div className="text-yellow-400 font-bold text-xl">Certified</div>
                            <div className="text-white text-sm">Safety Gear</div>
                          </div>
                          <div className="text-center">
                            <div className="text-yellow-400 font-bold text-xl">Advanced</div>
                            <div className="text-white text-sm">Testing Tools</div>
                          </div>
                        </div>
                      </div>
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
