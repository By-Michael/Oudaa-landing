"use client"

import { Building2, Home, Users, Landmark, Briefcase, HeartHandshake } from "lucide-react"

export default function UseCases() {
  const useCases = [
    { icon: Home, title: "HOAs", description: "Homeowner association dues and shared funds" },
    { icon: Building2, title: "Apartment & Condo Committees", description: "Manage building funds and expenses" },
    { icon: Users, title: "Neighborhood Associations", description: "Self-governing residential groups" },
    { icon: HeartHandshake, title: "Clubs & Membership Groups", description: "Member dues and event funding" },
    { icon: Briefcase, title: "Companies", description: "Employee payments and reimbursements" },
    { icon: Landmark, title: "Any Self-Governing Group", description: "A general engine for dues, funds, and approvals" },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Who Oudaa Is For</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Built for community management, designed to serve any membership-based organization</p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-primary/20 rounded-lg overflow-hidden">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="p-8  glassmorphism  transition group text-center border-b  md:border-r last:border-0 border-primary/20 "
              >
                <Icon className="w-12 h-12 text-accent group-hover:text-primary transition mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-slate-400 text-sm">{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
