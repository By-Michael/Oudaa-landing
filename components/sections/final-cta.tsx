"use client"

import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-3xl"></div>

        <div className="relative z-10 p-12 md:p-16 rounded-2xl bg-accent/10 text-center space-y-6">
          <div className="flex justify-center">
            <Users className="w-12 h-12 text-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow leading-14">
            Bring Transparency To Your Community's Funds
          </h2>

          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Stop trusting cash boxes and spreadsheets. Get your community set up on Oudaa in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold "
            >
              Create Community
            </Button>
            <Button
              size="lg"
              className="border border-foreground hover:bg-foreground hover:text-background  text-foreground bg-transparent cursor-pointer"
            >
              Talk to Us
            </Button>
          </div>

          <p className="text-sm text-slate-400">No credit card required. Set up your community in minutes.</p>
        </div>
      </div>
    </section>
  )
}
