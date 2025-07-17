import React from "react";
import "remixicon/fonts/remixicon.css";


const testimonials = [
  {
    name: "Michael Rodriguez",
    title: "Licensed Master Electrician",
    feedback:
      "Outstanding quality electrical supplies! I've been using ElectroSupply for all my commercial projects. Their THHN wire and circuit breakers are top-notch, and the bulk pricing saves me thousands on large installations.",
  },
  {
    name: "Sarah Chen",
    title: "Industrial Maintenance Supervisor",
    feedback:
      "Fast delivery and excellent customer service. When I needed specialized testing equipment for a critical project, their technical team helped me choose the right multimeter. Arrived next day as promised!",
  },
  {
    name: "David Thompson",
    title: "Electrical Contractor",
    feedback:
      "Been ordering from ElectroSupply for 3 years now. Their safety equipment is OSHA compliant and their prices beat local suppliers. The online ordering system makes restocking our warehouse effortless.",
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-dark mb-3">
            Our customers tell it better than we do!
          </h1>
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="d-flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-warning me-1"></i>
                  ))}
                </div>
                <p className="text-muted mb-4">{testimonial.feedback}</p>
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-secondary me-3"
                    style={{ width: "48px", height: "48px" }}
                  ></div>
                  <div>
                    <p className="fw-semibold mb-0">{testimonial.name}</p>
                    <p className="text-muted mb-0" style={{ fontSize: "0.875rem" }}>
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
