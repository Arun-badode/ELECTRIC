import React, { useEffect, useRef } from 'react';

const categories = [
  {
    title: 'Wires & Cables',
    image:
      'https://readdy.ai/api/search-image?query=high%20quality%20electrical%20wires%20and%20cables%20copper%20conductors%20various%20gauges%20organized%20display%20professional%20electrical%20supplies%20clean%20white%20background%20industrial%20grade&width=400&height=300&seq=wires-cables&orientation=landscape',
  },
  {
    title: 'Safety Equipment',
    image:
      'https://readdy.ai/api/search-image?query=electrical%20safety%20equipment%20hard%20hats%20safety%20glasses%20insulated%20gloves%20voltage%20testers%20lockout%20tagout%20devices%20professional%20safety%20gear%20clean%20white%20background&width=400&height=300&seq=safety-equipment&orientation=landscape',
  },
  {
    title: 'Testing Instruments',
    image:
      'https://readdy.ai/api/search-image?query=professional%20electrical%20testing%20instruments%20digital%20multimeters%20oscilloscopes%20circuit%20analyzers%20voltage%20meters%20professional%20grade%20equipment%20clean%20white%20background&width=400&height=300&seq=testing-instruments&orientation=landscape',
  },
  {
    title: 'Power Tools',
    image:
      'https://readdy.ai/api/search-image?query=professional%20power%20tools%20drill%20drivers%20impact%20wrenches%20wire%20strippers%20electrical%20hand%20tools%20organized%20display%20industrial%20grade%20clean%20white%20background&width=400&height=300&seq=power-tools&orientation=landscape',
  },
  {
    title: 'Lighting Solutions',
    image:
      'https://readdy.ai/api/search-image?query=modern%20LED%20lighting%20solutions%20commercial%20fixtures%20residential%20lights%20smart%20lighting%20systems%20energy%20efficient%20bulbs%20clean%20white%20background%20professional%20display&width=400&height=300&seq=lighting-solutions&orientation=landscape',
  },
  {
    title: 'Switches & Outlets',
    image:
      'https://readdy.ai/api/search-image?query=electrical%20switches%20outlets%20circuit%20breakers%20panels%20electrical%20components%20organized%20display%20professional%20grade%20industrial%20supplies%20clean%20white%20background&width=400&height=300&seq=switches-outlets&orientation=landscape',
  },
];

const Categoriesslider = () => {
  const scrollRef = useRef(null);

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Browse by Categories</h2>

        <div className="overflow-hidden relative" ref={scrollRef}>
          <div className="flex space-x-6 transition-all duration-700 ease-in-out w-max">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <h3 className="text-lg font-semibold mt-4 text-gray-700">{cat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categoriesslider;
