import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

function CallToAction() {
  return (
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
  );
}

export default CallToAction;
