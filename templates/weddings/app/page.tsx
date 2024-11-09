"use client";

import { useState } from "react";
import { ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Add actual audio playing logic here
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
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

      {/* Services Overview */}
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
                scelerisque justo in eros dignissim, vitae volutpat nunc
                faucibus.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Featured Performances */}
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

      {/* Curated Playlists */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
          Curated Playlists
        </h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="Playlist cover"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-medium mb-2">Wedding Classics</h3>
            <p className="text-gray-600 mb-4">
              A timeless collection of wedding favorites
            </p>
            <Button
              className="w-full flex items-center justify-center"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 h-4 w-4" /> Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> Listen Now
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact/Booking CTA */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-6">
          Ready to Create Your Perfect Wedding Soundtrack?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's discuss how we can make your special day unforgettable.
        </p>
        <Button className="bg-gray-900 text-white hover:bg-gray-800">
          Book Your Free Consultation <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-6 md:px-20 text-center text-gray-600">
        <p>&copy; 2023 Your Wedding Music Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}
