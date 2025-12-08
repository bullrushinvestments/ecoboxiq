import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoBoxIQ',
  description: 'EcoBoxIQ provides personalized sustainable subscription boxes for businesses and individuals, curated using AI to optimize eco-friendliness and customer satisfaction.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoBoxIQ</h1>
      <p className="mt-4 text-lg">EcoBoxIQ provides personalized sustainable subscription boxes for businesses and individuals, curated using AI to optimize eco-friendliness and customer satisfaction.</p>
    </main>
  )
}
