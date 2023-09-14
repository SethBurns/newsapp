"use client"
import Image from 'next/image'
import { Nav } from './Nav/page'
import { TopArticles } from './Articles/page'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-1">
      <Nav />
      <TopArticles />
      
    </main>
  )
}
