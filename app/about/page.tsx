'use client'

import { ShieldCheck, ScrollText, Users, Landmark } from 'lucide-react'
import Footer from '@/components/sections/footer'

export default function About() {
  const principles = [
    {
      icon: ScrollText,
      title: 'A verifiable trail, always',
      description:
        'Every payment and expense is recorded so it can be checked later — not remembered or written down by whoever happens to be treasurer that year.',
    },
    {
      icon: Landmark,
      title: 'Verify, don\'t just trust',
      description:
        'A resident saying "I sent it" isn\'t good enough. Bank and mobile-money payments are checked against the provider itself before they count as paid.',
    },
    {
      icon: Users,
      title: 'No single point of failure',
      description:
        'Sensitive changes — bank details, handing off a committee seat — need agreement from the committee, not one person acting alone.',
    },
    {
      icon: ShieldCheck,
      title: 'A record no one can quietly edit',
      description:
        'The audit log is permanent and visible to every committee member. Financial history is corrected by adding to it, never by rewriting it.',
    },
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6">
              About <span className="text-accent">Oudaa</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A system of record for community money, built so residents and committees can
              trust the same numbers.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">The problem</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Community-run funds are typically managed with a mix of physical cash boxes,
              WhatsApp groups, and personal spreadsheets. That creates the same three failure
              modes over and over: no verifiable trail of who paid what and when, bank transfers
              taken on trust with no independent check, and single points of failure where one
              committee member can unilaterally change sensitive records.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Oudaa exists to close those gaps — a single append-only ledger, self-service bank
              verification instead of a typed-in claim, and a multi-party approval workflow for
              anything sensitive enough that one person shouldn&apos;t decide it alone.
            </p>
          </div>

          <h2 className="text-3xl font-semibold mb-8">What we build around</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, idx) => {
              const Icon = principle.icon
              return (
                <div
                  key={idx}
                  className="bg-card/50 border-2 border-primary/30 rounded-xl p-8 hover:border-accent transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{principle.title}</h3>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
