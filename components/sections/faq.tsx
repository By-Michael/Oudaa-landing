"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Is my community's money safe with Oudaa?",
      answer:
        "Every payment and expense lives in a single append-only ledger — nothing can be silently edited or deleted. Sensitive changes, like bank details or fee amounts, require multi-party approval from more than one committee member.",
    },
    {
      question: "How does Oudaa verify bank payments?",
      answer:
        "Residents submit a transaction ID when they pay by bank transfer or mobile money, and Oudaa cross-checks it directly against the provider — CBE, Telebirr, Dashen, Bank of Abyssinia, CBE Birr, or M-Pesa — instead of trusting a typed-in claim.",
    },
    {
      question: "Can more than one committee member review sensitive changes?",
      answer:
        "Yes. Oudaa's PendingChange workflow and committee-seat-transfer flow both require sign-off from more than one committee member, so no single person can act alone on high-stakes changes.",
    },
    {
      question: "Who can see what?",
      answer:
        "ADMIN users (committee members) manage residents, fees, funds, projects, and expenses for their community. RESIDENT users see only their own payment history and outstanding balance. Every community's data is fully isolated from every other community's.",
    },
    {
      question: "Is Oudaa only for HOAs?",
      answer:
        "Community/HOA management is the first template. The underlying engine is built to serve any membership-based organization — companies, clubs, and other self-governing groups — with configurable roles and terminology.",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Common Questions</h2>
          <p className="text-lg text-slate-400">Quick answers about Oudaa</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg glassmorphism glow-border overflow-hidden"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/20 transition cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-slate-700/50 text-slate-400 pt-6">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
