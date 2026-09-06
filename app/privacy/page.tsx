'use client'

import Footer from '@/components/sections/footer'

export default function Privacy() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: 2026 · This is a template and should be reviewed by legal counsel before use in a live commercial product.</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. What we collect</h2>
              <p className="mb-3">When you use Oudaa, we collect and store, scoped to your community:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Account information: full name, email address, and a hashed password. We never store or transmit your password in plain text.</li>
                <li>Resident profile details, where applicable: unit number, phone number, ID number, address, and owner/renter status.</li>
                <li>Financial records: payments, fees, funds, projects, and expenses tied to your community, including transaction references and payer names you or your committee enter.</li>
                <li>Uploaded receipts and payment-confirmation screenshots, and, where used, an optional profile picture.</li>
                <li>Support conversations with our AI assistant, only if you explicitly choose to save one.</li>
                <li>Standard technical data such as IP address and request logs, used for rate limiting and security.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How we use it</h2>
              <p>
                Your data is used to operate the platform: authenticating you, recording and
                verifying payments, computing fund and community balances, generating reports and
                dashboards for your committee, and maintaining the audit log that every committee
                member can view. We do not sell personal data, and we do not use it for
                advertising.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Bank &amp; payment verification</h2>
              <p>
                When you self-verify a bank or mobile-money payment, the transaction identifier
                and related details you submit are sent to a third-party verification provider to
                confirm the transaction against CBE or Telebirr. The raw response from that
                lookup is stored so a committee member can review it later. If you upload a
                payment screenshot instead, it is processed by an OCR service and an AI model
                solely to extract the amount, payer name, transaction ID, bank, and date to
                pre-fill your payment form.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Support assistant</h2>
              <p>
                Our in-app support assistant is powered by a third-party AI model provider.
                Conversations are not saved to your account unless you explicitly choose to save
                them; unsaved conversations exist only for the duration of your session.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies &amp; local storage</h2>
              <p>
                We use a small number of strictly necessary cookies and browser storage items to
                keep you signed in. See our{' '}
                <a href="/cookies" className="text-accent hover:underline">Cookie Policy</a> for
                details. We do not use third-party advertising or tracking cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Data retention</h2>
              <p>
                Financial records (payments, expenses, audit log entries) are retained
                indefinitely by design — they are append-only and form the permanent record your
                community relies on. Account data is retained for as long as your account or
                community exists. Residents are deactivated rather than deleted, so historical
                payment records tied to them remain intact.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Data sharing</h2>
              <p>
                We share data only with the service providers necessary to run the platform (bank
                verification, OCR, AI processing, transactional email, and hosting/database
                infrastructure), each solely for the purpose of providing that specific function,
                and with your community&apos;s own committee members as required for the platform
                to function (e.g. a committee member reviewing a flagged payment).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Your rights</h2>
              <p>
                You can request a copy of your data, ask us to correct inaccurate information, or
                ask about deleting your account, subject to our need to preserve financial
                records your community depends on. Contact us via the{' '}
                <a href="/contact" className="text-accent hover:underline">contact page</a> for
                any request.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
