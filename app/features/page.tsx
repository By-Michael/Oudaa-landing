'use client'

import {
  Landmark,
  Wallet,
  ScrollText,
  BarChart3,
  ShieldCheck,
  Users,
  Repeat,
  FileStack,
  Bot,
  UserCog,
  Building2,
  Receipt,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'

export default function Features() {
  const featureGroups = [
    {
      icon: Wallet,
      title: 'Dues & Fee Management',
      description:
        'Set up one-time, monthly, quarterly, or yearly fee schedules per community. Every payment can be tagged to the calendar month(s) it covers, so catching a resident up on several unpaid months at once stays a single, traceable entry rather than a guess.',
    },
    {
      icon: Landmark,
      title: 'Bank Payment Self-Verification',
      description:
        'Residents submit a transaction ID for a CBE or Telebirr payment and Oudaa checks it against the provider directly — no more "I sent it, trust me." A safeguard layer cross-checks the payer name and amount before anything is marked verified; borderline matches are routed to a committee member for review instead of silently passing.',
    },
    {
      icon: Receipt,
      title: 'Receipt Scanning & Screenshot Parsing',
      description:
        "Residents can upload a screenshot of their bank or mobile-money confirmation. It's read with OCR and an AI model extracts the amount, payer name, transaction ID, bank, and date to prefill the payment form — a convenience for data entry, never trusted on its own for verification.",
    },
    {
      icon: ScrollText,
      title: 'Funds & Capital Projects',
      description:
        'Track shared funds (Security, Maintenance, Emergency, etc.) and the capital projects they finance. A project can draw its budget jointly from more than one fund, and each fund shows a live balance computed from what has actually been allocated and spent — not a number that can drift out of sync.',
    },
    {
      icon: FileStack,
      title: 'Append-Only Expense Ledger',
      description:
        "There is no edit button on an expense. Correcting one means recording a linked reversal, so the ledger always shows what actually happened, not the cleaned-up version. A narrow 15-minute grace window lets the person who made a genuine typo remove it outright — provided it has no receipts attached and hasn't been reversed.",
    },
    {
      icon: ShieldCheck,
      title: 'Permanent Audit Log',
      description:
        'Every create, update, delete, verify, and reject action a committee member takes is written to an audit log that no one — not even an admin — can edit or delete through the API. Any committee member can view the full history for their community at any time.',
    },
    {
      icon: Users,
      title: 'Multi-Party Approvals',
      description:
        "Sensitive changes — editing the community's payment bank details, cancelling a capital project — go through a committee-wide approval workflow instead of one person acting alone. Every other committee member gets a vote; a single rejection kills the change, and it auto-expires after 24 hours if nobody decides.",
    },
    {
      icon: Repeat,
      title: 'Committee Seat Transfer',
      description:
        "A committee member can hand their seat to a specific resident, but only once every other committee member approves and the chosen resident separately accepts. Either side can reject it at any point before that.",
    },
    {
      icon: UserCog,
      title: 'Committee Auto-Approval',
      description:
        'A committee member can pre-authorize their own vote on a specific, routine type of future change — always with a mandatory expiry, optionally narrowed to only trusted co-admins — so low-stakes approvals stop requiring a manual click every time, without losing the audit trail of how the vote was actually cast.',
    },
    {
      icon: BarChart3,
      title: 'Dashboard & Reports',
      description:
        'A real-time view of balances, outstanding dues, fund health, and recent activity for committee members, plus a per-resident summary showing exactly which fees someone hasn\'t paid.',
    },
    {
      icon: Bot,
      title: 'Ask Oudaa AI',
      description:
        'A built-in support assistant answers day-to-day questions about using the platform. Conversations are ephemeral by default — nothing is saved to your account unless you explicitly choose to keep it.',
    },
    {
      icon: Building2,
      title: 'Role-Based, Tenant-Isolated Access',
      description:
        'Every community is its own isolated data space. Residents see only their own profile, payments, and community information; committee members (ADMIN) manage their community\'s full ledger and governance — never another community\'s.',
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
              Everything a committee needs, <span className="text-accent">in one ledger</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oudaa replaces cash boxes, WhatsApp groups, and personal spreadsheets with a single,
              auditable system for dues, funds, capital projects, and committee governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureGroups.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Want the technical detail?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The full data model, API reference, and security architecture are written up for
              engineers in our documentation.
            </p>
            <Link href="/documentation">
              <Button className="bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-full px-8 hover:shadow-lg">
                Read the documentation
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
