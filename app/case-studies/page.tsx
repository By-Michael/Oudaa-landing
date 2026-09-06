'use client'

import Link from 'next/link'
import { FileBarChart } from 'lucide-react'
import Footer from '@/components/sections/footer'

export default function CaseStudies() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Case Studies</h1>
          <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-10 mt-10">
            <FileBarChart className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Coming soon</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We&apos;d rather publish real results from communities using Oudaa than write
              hypothetical ones. As committees go live on the platform, their stories (with
              permission) will be featured here.
            </p>
            <Link href="/features" className="text-accent hover:underline font-medium">
              See what Oudaa does today →
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
