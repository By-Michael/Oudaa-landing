"use client"

import { AlertTriangle, TrendingDown, Zap } from "lucide-react"

export default function Problem() {
  const problems = [
    {
      stat: "No verifiable trail of payments",
      description: "Payment status is whatever the treasurer remembers or wrote down",
      icon: TrendingDown,
    },
    {
      stat: "\"I sent it, trust me\"",
      description: "Bank transfers are self-reported with no independent verification",
      icon: AlertTriangle,
    },
    {
      stat: "One person, unchecked control",
      description: "A single committee member can change bank details, fees, or hand off their seat with no oversight",
      icon: Zap,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">The Problem With Cash Boxes & Spreadsheets</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Community-run funds are still managed with cash boxes, WhatsApp groups, and personal spreadsheets.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl glassmorphism glow-border hover:border-accent  transition group"
              >
                <Icon className="w-8 h-8 text-primary group-hover:text-accent transition mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">{problem.stat}</h3>
                <p className="text-slate-400">{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
