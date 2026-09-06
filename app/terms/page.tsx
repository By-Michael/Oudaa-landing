'use client'

import Footer from '@/components/sections/footer'

export default function Terms() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: 2026 · This is a template and should be reviewed by legal counsel before use in a live commercial product.</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Using Oudaa</h2>
              <p>
                Oudaa is a platform for managing a residential community&apos;s dues, shared
                funds, capital projects, expenses, and committee governance. A community
                registers on the platform and is run day-to-day by its committee (ADMIN users) on
                behalf of its residents. By using Oudaa, your community and its users agree to
                these terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Accounts &amp; roles</h2>
              <p>
                Each user has one of two roles: committee member (ADMIN) or resident. Committee
                members are responsible for the accuracy of records they enter on behalf of
                residents, including manually recorded cash payments. You are responsible for
                keeping your login credentials confidential and for all activity under your
                account.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Financial records are append-only</h2>
              <p>
                Payments and expenses recorded in Oudaa cannot be silently edited or deleted.
                Corrections are made by recording a new, linked entry rather than altering the
                original — this is a core design property of the platform, not a limitation of
                your account. A narrow exception exists for a committee member to remove a
                self-recorded expense within a short window after creating it, under specific
                conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Bank verification is not a guarantee</h2>
              <p>
                Oudaa cross-checks bank and mobile-money payments against third-party providers
                (currently CBE and Telebirr) plus an internal safeguard check. This significantly
                reduces, but does not eliminate, the risk of a fraudulent or mismatched payment
                claim. Oudaa and its verification provider are not a bank and do not guarantee the
                accuracy of any third-party verification result; committee members should review
                flagged payments before treating them as final.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Acceptable use</h2>
              <p>
                You agree not to use Oudaa to submit fraudulent payment claims, to misuse the
                platform to misrepresent a community&apos;s finances, or to attempt to access data
                belonging to a community you are not a member of.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Availability &amp; changes</h2>
              <p>
                We aim to keep Oudaa available and reliable but do not guarantee uninterrupted
                service. Features described on this site, including items marked as roadmap or
                planned, may change before release. We may update these terms from time to time;
                continued use of the platform after an update constitutes acceptance of the
                revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of liability</h2>
              <p>
                Oudaa is provided on an &quot;as is&quot; basis. To the fullest extent permitted by
                law, Oudaa is not liable for indirect, incidental, or consequential damages
                arising from use of the platform, including losses related to a third-party
                verification provider&apos;s availability or accuracy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact</h2>
              <p>
                Questions about these terms can be sent via our{' '}
                <a href="/contact" className="text-accent hover:underline">contact page</a>.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
