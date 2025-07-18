import React from "react";

const SubscribeSection = () => {
  return (
    <section className="py-10 bg-primary text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Subscribe for Exclusive Electrical Deals
        </h2>
        <p className="text-white/80 text-base sm:text-lg mb-6">
          Get professional updates, inventory alerts, and contractor discounts
          delivered to your inbox
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto px-4 py-3 rounded-full text-black text-sm text-dark focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Subscribe Now
          </button>
        </form>

        <p className="text-white/60 text-sm">
          Join 15,000+ electrical professionals getting exclusive deals
        </p>
      </div>
    </section>
  );
};

export default SubscribeSection;
