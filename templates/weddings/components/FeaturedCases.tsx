import React from "react";

function FeaturedCases() {
  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
        Featured Performances
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((img, index) => (
          <img
            key={index}
            src={`/placeholder.svg?height=400&width=400`}
            alt={`Featured performance ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCases;
