'use client'

import { Newspaper } from 'lucide-react'
import Footer from '@/components/sections/footer'

export default function Blog() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Blog</h1>
          <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-10 mt-10">
            <Newspaper className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Coming soon</h2>
            <p className="text-muted-foreground leading-relaxed">
              We&apos;re focused on the product right now. Writeups on community fund management,
              product updates, and what we&apos;re learning from committees using Oudaa will land
              here.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
