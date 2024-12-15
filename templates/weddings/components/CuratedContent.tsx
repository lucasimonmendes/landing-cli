import React from "react";
import { Button } from "./ui/button";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

function CuratedContent() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Add actual audio playing logic here
  };

  return (
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
  );
}

export default CuratedContent;
