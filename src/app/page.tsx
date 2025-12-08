import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoFunds',
  description: 'A personal finance app that helps users track and optimize their spending on sustainable products and services, while rewarding them for eco-friendly choices through partnerships with ethical brands.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoFunds</h1>
      <p className="mt-4 text-lg">A personal finance app that helps users track and optimize their spending on sustainable products and services, while rewarding them for eco-friendly choices through partnerships with ethical brands.</p>
    </main>
  )
}
