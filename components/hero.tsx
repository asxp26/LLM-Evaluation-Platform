import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-6">
        Compare Multiple LLMs in Real-Time
      </h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Input your prompt once, get responses from three different LLMs
        side-by-side.
      </p>
      <Link href="#llm-comparison">
        <Button size="lg">Try It Now</Button>
      </Link>
    </section>
  );
}
