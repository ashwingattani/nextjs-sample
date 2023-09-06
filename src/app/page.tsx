import type { Route } from 'next';
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        NextJS Sample - Configuring NextJs
      </div>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </main>
  )
}
