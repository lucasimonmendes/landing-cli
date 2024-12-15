import React from "react";
import Section from "./Section";
import Button from "./Button";

function CallToAction() {
  return (
    <Section className="bg-gray-900 text-white text-center">
      <div className="container mx-auto px-6 space-y-8">
        <h2 className="text-4xl font-bold">Ready to Experience the Future?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Join millions of satisfied users and elevate your mobile experience
          today.
        </p>
        <Button primary>Buy Now</Button>
      </div>
    </Section>
  );
}

export default CallToAction;
