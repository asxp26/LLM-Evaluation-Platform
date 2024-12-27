import Hero from '@/components/hero'
import About from '@/components/about'
import LLMComparison from '@/components/llm-comparison'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <LLMComparison />
      <About />
    </main>
  )
}

