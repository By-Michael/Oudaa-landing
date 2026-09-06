"use client"

import { CheckCircle2, BookLock, Users2, FileClock } from "lucide-react"

export default function Solution() {
  const features = [
    {
      title: "Self-Verified Bank Payments",
      description: "Residents submit a transaction ID and Oudaa cross-checks it against the actual bank or mobile-money provider",
      icon: CheckCircle2,
    },
    {
      title: "Append-Only Ledger",
      description: "One permanent, non-editable Payment/Expense ledger per community, visible to residents and committee alike",
      icon: BookLock,
    },
    {
      title: "Multi-Party Approvals",
      description: "Sensitive edits and committee seat transfers require sign-off from more than one person",
      icon: Users2,
    },
    {
      title: "Full Audit Log",
      description: "A permanent record of every meaningful action taken in a community, visible to every committee member",
      icon: FileClock,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">
            One Platform. Complete Transparency.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything a committee needs to manage community funds, simplified.
          </p>
        </div>

        {/* Solution Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-primary/10 p-8 rounded-xl glassmorphism border border-primary/20 hover:border-accent transition group">
                <Icon className="w-10 h-10 text-primary group-hover:text-accent transition mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
