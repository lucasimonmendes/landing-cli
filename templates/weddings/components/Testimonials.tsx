import React from "react";

function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
        What Couples Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <blockquote className="text-center italic text-xl md:text-2xl mb-6">
          "The music was absolutely perfect. It made our day truly magical and
          unforgettable."
        </blockquote>
        <p className="text-center text-gray-600">— Sarah & Michael</p>
      </div>
    </section>
  );
}

export default Testimonials;
