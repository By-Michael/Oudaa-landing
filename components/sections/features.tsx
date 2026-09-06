"use client"

import { Landmark, Wallet, ShieldCheck, BarChart3, ScrollText, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Landmark,
      title: "Bank Payment Verification",
      description: "Cross-checks resident payments against CBE and Telebirr in real time, with a name/amount safeguard layer",
    },
    {
      icon: Wallet,
      title: "Dues & Fee Management",
      description: "Collect, track, and reconcile resident dues in one place",
    },
    {
      icon: ScrollText,
      title: "Shared Funds & Projects",
      description: "Track capital projects, jointly funded across more than one fund",
    },
    {
      icon: BarChart3,
      title: "Committee Dashboard",
      description: "Real-time insight into balances, dues, and expenses",
    },
    {
      icon: ShieldCheck,
      title: "Append-Only Audit Log",
      description: "A permanent, tamper-proof record of every action taken",
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Separate ADMIN (committee) and RESIDENT permissions, scoped to each community",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Core Features</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything your committee needs in one unified platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="p-8 rounded-xl glassmorphism glow-border hover:border-accent transition group">
                <Icon className="w-10 h-10 text-primary group-hover:text-accent transition mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
