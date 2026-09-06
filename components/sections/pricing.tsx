"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small communities getting started",
      features: ["Up to 25 residents", "Dues & payment tracking", "Append-only ledger", "Community support"],
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$29",
      period: "/month",
      description: "For growing HOAs and committees",
      features: [
        "Up to 250 residents",
        "Bank payment verification",
        "Multi-party approvals",
        "Full audit log",
        "Priority support",
        "Capital project tracking",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Unlimited residents, multiple communities",
      features: [
        "Unlimited residents",
        "Multi-community management",
        "Dedicated onboarding",
        "SLA guarantee",
        "Custom terminology & branding",
        "API access",
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Flexible plans that scale with your community</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl transition group cursor-pointer${
                plan.highlighted
                  ? "glassmorphism glow-border neon-glow ring-2 ring-primary/30"
                  : "glassmorphism border-2 border-gray-600 hover:neon-glow"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-semibold text-foreground mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-semibold text-primary">{plan.price}</span>
                {plan.period && <span className="text-slate-400 text-sm">{plan.period}</span>}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full mb-8 rounded-full ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-slate-700 hover:bg-slate-600 text-foreground"
                }`}
              >
                Create Community
              </Button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
