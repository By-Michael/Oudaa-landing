'use client'

import { Lock, Shield, KeyRound, Layers, Database, Activity } from 'lucide-react'
import Footer from '@/components/sections/footer'

export default function Security() {
  const layers = [
    {
      icon: Lock,
      title: 'Transport & HTTP',
      points: [
        'Security headers (Helmet) on every response; the server never advertises that it runs Express.',
        'CORS is allow-listed to your real frontend origin — never a wildcard, since a wildcard is incompatible with sending an httpOnly session cookie.',
        'Request bodies are capped at 2MB to limit oversized-payload abuse.',
      ],
    },
    {
      icon: Activity,
      title: 'Rate Limiting',
      points: [
        'A general limiter covers the whole API, generous enough that a normal dashboard load (which can fan out into a dozen-plus requests) never trips it.',
        'Login, registration, and password-reset endpoints carry their own stricter limit to blunt credential-stuffing and mail-bombing.',
      ],
    },
    {
      icon: KeyRound,
      title: 'Authentication & Sessions',
      points: [
        'Passwords are hashed, never stored or returned in plaintext.',
        'A short-lived access token travels in the request header; a longer-lived refresh token lives only in an httpOnly cookie your JavaScript can never read.',
        'Changing your password revokes every other active session immediately.',
        'Password-reset links are single-use, short-lived, and only ever exist server-side as a hash — a database copy alone cannot be used to forge one.',
        'The forgot-password endpoint responds identically whether or not an email is registered, so it can\'t be used to check who has an account.',
      ],
    },
    {
      icon: Layers,
      title: 'Authorization & Tenant Isolation',
      points: [
        'Every community is a fully isolated data space. A single piece of middleware resolves which community a request belongs to from the logged-in user\'s own account — never from anything the client sends — and every query is filtered by it.',
        'Role checks (committee vs. resident) sit in front of each route as middleware, so what a role can and can\'t do is visible at a glance rather than buried in application logic.',
      ],
    },
    {
      icon: Shield,
      title: 'Input Validation',
      points: [
        'Every write request is validated against a strict schema before it reaches any business logic — wrong types, missing fields, and out-of-range values are rejected up front with a clear, field-level error.',
      ],
    },
    {
      icon: Database,
      title: 'Data Integrity',
      points: [
        'Payments and expenses are append-only by design — corrections are new, linked records, not edits, so the financial history can never be silently rewritten.',
        'Sensitive changes (bank details, project cancellation) require approval from every committee member, not one person acting alone.',
        'Bank-transfer verification is cross-checked against the actual provider plus a name/amount safeguard layer, never taken purely on a resident\'s word.',
      ],
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
              Security, <span className="text-accent">enforced in layers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oudaa is a system of record for community money — it's built to be a trustworthy
              financial ledger first, not a technology showcase. Every layer below is enforced in
              the running system, not just described here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {layers.map((layer, idx) => {
              const Icon = layer.icon
              return (
                <div
                  key={idx}
                  className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 hover:border-accent transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-background" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{layer.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {layer.points.map((point, pidx) => (
                      <li key={pidx} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="mt-16 bg-card/50 border-2 border-accent/30 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-3">An honest tradeoff, stated plainly</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tenant isolation today is enforced in application code, not at the database level
              (no Postgres row-level security or per-tenant schemas). It is correct as long as
              every query goes through the tenant-scoping layer described above — this is a
              known, deliberate design tradeoff for the current single-application-instance
              architecture, not an oversight, and it's the kind of detail we'd rather tell you
              about than have you discover.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
