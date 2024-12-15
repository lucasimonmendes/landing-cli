import React from "react";
import Button from "./Button";
import Image from "next/image";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Image src="/placeholder.svg" alt="Logo" width={40} height={40} />
        <div className="space-x-6">
          <a
            href="#features"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Features
          </a>
          <a
            href="#design"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Design
          </a>
          <Button primary>Buy Now</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
