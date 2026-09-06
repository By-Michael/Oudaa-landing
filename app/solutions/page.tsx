'use client'

import { Home, Building2, Users2, Briefcase, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'

type Solution = {
  id: string
  icon: LucideIcon
  title: string
  status: string
  description: string
  points: string[]
  image?: string
  imageAlt?: string
}

export default function Solutions() {
  const solutions: Solution[] = [
    {
      id: 'hoas',
      icon: Home,
      title: 'HOAs',
      status: 'Available today',
      image: '/images/communities/gated-community-street.jpg',
      imageAlt: 'A gated residential HOA street lined with houses',
      description:
        'The use case Oudaa is built and battle-tested around. Set up fee schedules for dues and special assessments, let residents self-verify bank and mobile-money payments, track shared funds and capital projects, and give every committee member the same real-time, auditable view of the association\'s money.',
      points: [
        'Resident registry with unit numbers, owner/renter type, and per-resident payment summaries',
        'Bank payment self-verification against CBE and Telebirr',
        'Shared funds, capital projects, and an append-only expense ledger',
        'Committee-wide approval for sensitive changes like bank detail edits',
      ],
    },
    {
      id: 'apartment-committees',
      icon: Building2,
      title: 'Apartment & Condo Committees',
      status: 'Available today',
      image: '/images/communities/apartment-complex-cmc.jpg',
      imageAlt: 'A high-rise apartment complex with landscaped grounds',
      description:
        'The same engine as HOAs, suited to a building-managed committee: monthly dues, maintenance funds, and capital improvement projects (roof, elevator, lobby renovation) all tracked in the same ledger residents and the committee both trust.',
      points: [
        'Track fees per unit rather than per lot',
        'Capital projects fundable jointly from more than one fund',
        'Full audit trail for every committee decision',
      ],
    },
    {
      id: 'clubs',
      icon: Users2,
      title: 'Clubs & Membership Groups',
      status: 'On the roadmap',
      description:
        'The underlying data model — membership, dues, shared funds, approval-based governance — isn\'t specific to residential housing. Extending Oudaa\'s terminology and roles to fit a club or membership organization (members and a board, instead of residents and a committee) is part of our public multi-tenant roadmap.',
      points: [
        'Configurable terminology for roles and groups',
        'Same dues, funds, and approval workflows as the HOA use case',
        'Not yet available as a self-serve template — reach out if this is your use case',
      ],
    },
    {
      id: 'companies',
      icon: Briefcase,
      title: 'Companies',
      status: 'On the roadmap',
      description:
        'A company could configure the same engine for employee-facing shared funds, reimbursements, or committee-style approval workflows. This is part of our longer-term direction toward a fully configurable, multi-tenant platform rather than a fixed HOA tool.',
      points: [
        'Same append-only ledger and multi-party approval model',
        'Terminology and modules configured per organization',
        'Contact us if you want to help shape this template',
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6">
              One engine, <span className="text-accent">built for HOAs first</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oudaa runs on a general engine for dues, shared funds, and approval-based
              governance. Today that engine is built and proven for HOAs and residential
              committees — here&apos;s where it&apos;s headed next.
            </p>
          </div>

          <div className="space-y-8">
            {solutions.map((solution) => {
              const Icon = solution.icon
              const isLive = solution.status === 'Available today'
              return (
                <div
                  key={solution.id}
                  id={solution.id}
                  className="bg-card/50 border-2 border-primary/30 rounded-2xl overflow-hidden scroll-mt-32 hover:border-accent transition-colors"
                >
                  {solution.image && (
                    <div className="relative w-full h-56 md:h-72">
                      <Image
                        src={solution.image}
                        alt={solution.imageAlt ?? solution.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                    </div>
                  )}
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-background" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h2 className="text-2xl font-semibold text-foreground">{solution.title}</h2>
                          <span
                            className={`text-xs font-medium px-3 py-1 rounded-full ${
                              isLive
                                ? 'bg-accent/20 text-accent'
                                : 'bg-muted text-muted-foreground border border-primary/30'
                            }`}
                          >
                            {solution.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{solution.description}</p>
                        <ul className="space-y-1.5">
                          {solution.points.map((point) => (
                            <li key={point} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Don&apos;t see your exact use case yet?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The roadmap items above aren&apos;t live templates yet. Tell us what you&apos;re
              trying to manage and we&apos;ll let you know where it fits.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-full px-8 hover:shadow-lg">
                Get in touch
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
