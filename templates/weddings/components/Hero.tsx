import React from "react";
import { Button } from "./ui/button";

import { ChevronRight } from "lucide-react";
function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/placeholder.svg?height=1080&width=1920"
        alt="Elegant wedding ceremony with musicians"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-light mb-6">
          Harmony for Your Special Day
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Elevate your wedding with our premium music services
        </p>
        <Button className="bg-white text-gray-900 hover:bg-gray-100">
          Book a Consultation <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

export default Hero;
