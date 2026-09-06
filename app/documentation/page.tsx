'use client'

import { useState } from 'react'
import Footer from '@/components/sections/footer'

const apiGroups = [
  {
    base: '/api/v1/auth',
    note: 'No auth required for register/login/refresh/logout',
    routes: [
      'POST /register-community — create a community + its first admin',
      'POST /login — email or phone + password',
      'POST /refresh — rotates the refresh token',
      'POST /logout',
      'GET /me',
      'PATCH /change-password',
      'POST /forgot-password',
      'POST /reset-password',
    ],
  },
  {
    base: '/api/v1/residents',
    routes: [
      'GET /me · PATCH /me — resident\'s own profile',
      'POST / · GET / — admin create/list',
      'GET /:id · GET /:id/summary · GET /:id/export',
      'PATCH /:id',
      'POST /:id/deactivate · POST /:id/reactivate',
      'DELETE /:id — blocked by design; use deactivate instead',
    ],
  },
  {
    base: '/api/v1/fees',
    routes: ['POST /', 'GET /', 'GET /:id', 'PATCH /:id', 'DELETE /:id'],
  },
  {
    base: '/api/v1/payments',
    routes: [
      'POST / · GET / · GET /:id',
      'POST /:id/self-verify — cross-check against CBE/Telebirr',
      'POST /parse-screenshot — OCR + AI prefill, never trusted for verification',
      'DELETE /:id/retract — resident withdraws their own pending payment',
      'PATCH /:id/verify · PATCH /:id/reject — admin review',
      'POST /batch-verify — bulk verify/reject',
    ],
  },
  {
    base: '/api/v1/payment-methods',
    routes: ['GET /', 'POST /', 'PATCH /:id', 'DELETE /:id'],
  },
  {
    base: '/api/v1/funds',
    routes: [
      'POST / · GET / · GET /summaries',
      'GET /:id · GET /:id/summary — live balance, allocated minus spent',
      'PATCH /:id · DELETE /:id',
    ],
  },
  {
    base: '/api/v1/projects',
    routes: ['POST /', 'GET /', 'GET /:id', 'PATCH /:id', 'POST /:id/cancel'],
  },
  {
    base: '/api/v1/expenses',
    routes: [
      'POST / · GET / · GET /:id',
      'POST /:id/reverse — append-only correction',
      'DELETE /:id — only within a 15-minute grace window, no receipts, not reversed',
      'GET /:expenseId/receipts',
    ],
  },
  {
    base: '/api/v1/receipts',
    routes: ['PATCH /:id/verify', 'DELETE /:id'],
  },
  {
    base: '/api/v1/committee-transfers',
    routes: [
      'POST / · GET /mine',
      'PATCH /:id/committee-response',
      'PATCH /:id/recipient-response',
      'DELETE /:id — withdraw a request',
    ],
  },
  {
    base: '/api/v1/pending-changes',
    routes: ['GET /mine', 'PATCH /:id/respond', 'DELETE /:id'],
  },
  {
    base: '/api/v1/committee-auto-approvals',
    routes: ['GET /', 'PUT / — create or update a standing auto-approval rule'],
  },
  {
    base: '/api/v1/dashboard',
    routes: ['GET /admin', 'GET /resident'],
  },
  {
    base: '/api/v1/reports',
    routes: ['GET /collections', 'GET /expenses', 'GET /summary', 'GET /dashboard-summary'],
  },
  {
    base: '/api/v1/audit-logs',
    note: 'No PATCH/PUT/DELETE route exists for this resource, by design',
    routes: ['GET / — full history for the caller\'s community'],
  },
  {
    base: '/api/v1/communities',
    routes: ['GET /me/current', 'PATCH /me/current'],
  },
  {
    base: '/api/v1/users',
    routes: [
      'PATCH /me/preferences',
      'POST /me/avatar',
      'DELETE /me/avatar',
    ],
  },
  {
    base: '/api/v1/support',
    routes: [
      'GET /faqs · GET /ai-status',
      'POST /chat — Ask Oudaa AI',
      'GET /chat/sessions · GET /chat/sessions/:id',
      'POST /chat/sessions — opt-in save · DELETE /chat/sessions/:id',
    ],
  },
]

export default function Documentation() {
  const [openGroup, setOpenGroup] = useState<number | null>(0)

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Architecture, data model, and API reference for engineers evaluating or building on
              Oudaa.
            </p>
          </div>

          {/* Overview */}
          <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Oudaa is a multi-tenant SaaS application that lets residential communities — HOAs,
              apartment or condo committees, and similar self-governing residential groups —
              manage dues collection, shared funds, capital projects, expenses, and committee
              governance in one place. Each community self-registers, gets its own isolated data
              space, and is run day-to-day by an elected or appointed committee on behalf of its
              residents.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The underlying model isn&apos;t specific to residential communities — it&apos;s a
              general engine for membership dues, shared funds, and approval-based governance
              that could just as easily serve clubs or other member-based organizations. See{' '}
              <a href="/solutions" className="text-accent hover:underline">
                Solutions
              </a>{' '}
              for where that&apos;s headed.
            </p>
          </div>

          {/* Architecture */}
          <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. System Architecture</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Oudaa is a conventional three-tier web application: a React single-page app talks to
              a stateless Express REST API over HTTPS, which is the sole owner of a PostgreSQL
              database accessed through Prisma. There is no server-side rendering and no direct
              database access from the client.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <span className="text-foreground font-medium">Multi-tenancy: </span>
              enforced at the application layer, not the infrastructure layer. All communities
              share one database and one running API instance; a Community record is the tenant
              root, every tenant-scoped table carries a community reference, and a single
              middleware resolves which community a request belongs to from the logged-in user —
              never from anything the client supplies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Request lifecycle: </span>
              security headers → CORS → body parsing → rate limiting → authenticate (verify JWT) →
              resolve tenant → authorize (role check) → validate request schema → controller →
              Prisma → PostgreSQL.
            </p>
          </div>

          {/* Data model */}
          <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Model Highlights</h2>
            <ul className="space-y-3">
              {[
                ['Money is always Decimal, never Float', 'every monetary column uses Postgres numeric, avoiding the rounding error floats accumulate across thousands of payments.'],
                ['A payment target is exactly one of three', 'a fee, a project, or a fund — never a generic polymorphic reference, so foreign-key integrity and cascades keep working natively.'],
                ['Expenses are append-only', 'corrections are new, linked reversal rows, not edits — with a narrow 15-minute hard-delete window for genuine mistakes.'],
                ['Residents are deactivated, never deleted', 'a resident who moves out keeps their real payment history intact; there is no delete endpoint for residents.'],
                ['A project can be jointly funded', 'budget for one capital project can be split across more than one fund via an allocation table that must sum to the project budget.'],
              ].map(([title, body]) => (
                <li key={title} className="text-sm">
                  <span className="text-foreground font-medium">{title}: </span>
                  <span className="text-muted-foreground">{body}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth */}
          <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Authentication &amp; Authorization</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• A short-lived JWT access token is returned in the response body and sent as a bearer token on every request.</li>
              <li>• A 7-day refresh token is set as an httpOnly cookie; refreshing rotates it, so a leaked token is only useful once.</li>
              <li>• Login accepts either an email or a phone number in the same field.</li>
              <li>• Role-based access control with two roles — ADMIN (committee) and RESIDENT — checked per-route.</li>
            </ul>
          </div>

          {/* API reference */}
          <div id="api-reference" className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8 mb-8 scroll-mt-32">
            <h2 className="text-2xl font-semibold mb-2">6. API Reference</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Base URL: <code className="text-accent">/api/v1</code>. Every response follows{' '}
              <code className="text-accent">{'{ success, data?, message?, details? }'}</code>.
              Validation failures return 422 with field-level errors. All routes require{' '}
              <code className="text-accent">Authorization: Bearer &lt;token&gt;</code> except
              registration, login, refresh, and logout.
            </p>
            <div className="space-y-2">
              {apiGroups.map((group, idx) => (
                <div key={group.base} className="border border-primary/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenGroup(openGroup === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-background/40 hover:bg-background/70 transition-colors text-left"
                  >
                    <code className="text-sm text-foreground font-medium">{group.base}</code>
                    <span className="text-accent text-xs">{openGroup === idx ? '−' : '+'}</span>
                  </button>
                  {openGroup === idx && (
                    <div className="px-4 py-4 space-y-2 bg-background/20">
                      {group.note && (
                        <p className="text-xs text-accent mb-2">{group.note}</p>
                      )}
                      {group.routes.map((route) => (
                        <p key={route} className="text-sm text-muted-foreground font-mono">
                          {route}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Known limitations */}
          <div className="bg-card/50 border-2 border-accent/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Known Limitations</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Stated plainly, the way we&apos;d want it stated to us:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Tenant isolation is application-layer, not database-level (no Postgres row-level security) — correct as long as every query is properly scoped.</li>
              <li>• Bank verification depends on a single third-party lookup provider without bank-level guarantees, which is why an independent safeguard layer exists on top of it.</li>
              <li>• Uploaded receipts are written to local disk by default; a production deployment behind multiple instances should use object storage instead.</li>
            </ul>
          </div>

          <div className="text-center text-muted-foreground text-sm">
            Looking for something more specific? See{' '}
            <a href="/features" className="text-accent hover:underline">Features</a>,{' '}
            <a href="/security" className="text-accent hover:underline">Security</a>, or{' '}
            <a href="/bank-verification" className="text-accent hover:underline">Bank Verification</a>.
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
