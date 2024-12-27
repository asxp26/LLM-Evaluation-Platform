'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function LLMComparison() {
  const [prompt, setPrompt] = useState('')
  const [responses, setResponses] = useState({
    llm1: '',
    llm2: '',
    llm3: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would call your API here
    setResponses({
      llm1: `LLM 1 response to: ${prompt}`,
      llm2: `LLM 2 response to: ${prompt}`,
      llm3: `LLM 3 response to: ${prompt}`
    })
  }

  return (
    <section id="llm-comparison" className="w-full max-w-4xl mx-auto py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Compare LLMs</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          className="mb-4"
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(responses).map(([llm, response]) => (
          <Card key={llm}>
            <CardHeader>
              <CardTitle>{llm.toUpperCase()}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{response || 'Response will appear here'}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

