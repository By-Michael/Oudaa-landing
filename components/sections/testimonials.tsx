"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "We finally have a real record of who paid and when. No more guessing who's behind on dues.",
      author: "Amare Bekele",
      role: "Committee Treasurer, Green Valley Residents",
      stats: "100% payment traceability",
    },
    {
      quote: "The bank verification feature ended the arguments over who actually sent their transfer.",
      author: "Sara Tesfaye",
      role: "Committee Chair, Bole Heights Association",
      stats: "0 disputed payments",
    },
    {
      quote: "Sensitive changes now need more than one signature. That alone was worth switching.",
      author: "Yonas Girma",
      role: "Committee Member, Meskel Flower Estate",
      stats: "Multi-party approvals",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Trusted by Committees</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See why communities choose Oudaa to manage their funds
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-xl glassmorphism glow-border hover:neon-glow transition">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-6 italic">{testimonial.quote}</p>

              {/* Author */}
              <div className="border-t border-slate-700/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-slate-400 mb-2">{testimonial.role}</p>
                <p className="text-sm text-primary font-semibold">{testimonial.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
