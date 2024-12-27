"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">About ModelMania</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-4">
          ModelMania is a powerful tool that allows you to compare responses
          from multiple Large Language Models side-by-side.
        </p>
        {isExpanded && (
          <>
            <p className="mb-4">
              Our platform supports various LLMs, giving you insights into how
              different models interpret and respond to the same prompt.
            </p>
            <p className="mb-4">
              Whether you are a researcher, developer, or just curious about AI,
              ModelMania provides a unique opportunity to explore the
              capabilities and differences of various language models.
            </p>
          </>
        )}
        <Button onClick={() => setIsExpanded(!isExpanded)} variant="link">
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </div>
    </section>
  );
}
