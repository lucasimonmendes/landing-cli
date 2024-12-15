import React from "react";

function Services() {
  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          "Ceremony Music",
          "Reception Entertainment",
          "Custom Compositions",
        ].map((service, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-medium mb-4">{service}</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque justo in eros dignissim, vitae volutpat nunc faucibus.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
