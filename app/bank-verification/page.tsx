'use client'

import { CheckCircle2, AlertTriangle, ScanLine, ListChecks } from 'lucide-react'
import Footer from '@/components/sections/footer'

export default function BankVerification() {
  const steps = [
    {
      title: 'Resident submits a transaction ID',
      description:
        'After paying via CBE or Telebirr, the resident enters the transaction ID (CBE also needs a short reference suffix to disambiguate the match).',
    },
    {
      title: 'Oudaa checks it against the provider',
      description:
        'The transaction is looked up directly against the CBE or Telebirr rail it was sent through — not just accepted on the resident\'s word.',
    },
    {
      title: 'A safeguard layer double-checks the details',
      description:
        'A provider match is treated as strong evidence, not final proof. The payer name and amount are cross-checked against what the resident claimed before anything is marked verified.',
    },
    {
      title: 'Clean matches verify instantly — everything else goes to review',
      description:
        'If the name doesn\'t match closely, the amount is outside tolerance, the payment is above the community\'s configured review threshold, or the response didn\'t have enough detail to check confidently, the payment is held as "Pending Review" with the specific reason flagged for a committee member — instead of silently passing or silently failing.',
    },
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6">
              "I sent it" <span className="text-accent">shouldn't be the proof</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bank transfer and mobile-money payments are usually self-reported and taken on
              trust, or reconciled by hand against a bank statement — which stops scaling past a
              handful of residents. Oudaa verifies them instead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-background font-semibold">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8">
              <ScanLine className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Screenshot parsing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Residents can also upload a screenshot of their payment confirmation. It's read
                with OCR and an AI model extracts the amount, payer name, transaction ID, bank,
                and date to prefill the form — purely a convenience, never used as verification
                on its own.
              </p>
            </div>
            <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8">
              <ListChecks className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Batch review</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Committee members can verify or reject several payments flagged for review in one
                pass instead of one at a time, with the full raw provider response available for
                anyone who wants to see exactly what the bank returned.
              </p>
            </div>
            <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8">
              <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Resident control</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A resident can retract their own payment while it's still pending — no need to
                wait on a committee member to fix a mistaken entry.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-10 flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Stated plainly: </span>
              bank verification here relies on a third-party lookup service, which is a
              single-vendor dependency without bank-level guarantees — that's exactly why the
              name/amount safeguard layer exists as an independent second check, rather than
              trusting a provider match outright. If verification is ever unavailable, this is
              flagged loudly to committee members rather than silently treated as a pass.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
