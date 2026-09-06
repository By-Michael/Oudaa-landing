'use client'

import Footer from '@/components/sections/footer'

export default function DPA() {
  const subprocessors = [
    { name: 'Bank/mobile-money verification provider', purpose: 'Confirms CBE and Telebirr transaction details for self-verified payments' },
    { name: 'OCR service', purpose: 'Extracts text from uploaded payment-confirmation screenshots' },
    { name: 'AI model provider', purpose: 'Powers the support assistant and classifies OCR text to prefill payment forms' },
    { name: 'Transactional email provider', purpose: 'Delivers password-reset and account emails' },
    { name: 'Hosting & database infrastructure', purpose: 'Runs the application and stores all platform data' },
    { name: 'Object storage', purpose: 'Stores uploaded receipts and profile pictures' },
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Data Processing Addendum</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: 2026 · This is a template summary, not a signed legal DPA. Communities requiring a formal, signed DPA should contact us directly.</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Roles</h2>
              <p>
                When your community uses Oudaa, your committee acts as the data controller for
                your residents&apos; personal and financial information, and Oudaa acts as a data
                processor, handling that data only to provide the platform&apos;s functionality
                and only on your community&apos;s instructions (i.e. the actions your committee
                members and residents take in the app).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Subprocessors</h2>
              <p className="mb-4">
                We use the following categories of subprocessor to operate the platform. Each is
                engaged solely for the specific function listed and is bound to use data only for
                that purpose.
              </p>
              <div className="space-y-3">
                {subprocessors.map((sp) => (
                  <div key={sp.name} className="bg-card/50 border-2 border-primary/30 rounded-lg p-4">
                    <p className="text-foreground font-medium text-sm">{sp.name}</p>
                    <p className="text-sm text-muted-foreground">{sp.purpose}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Security measures</h2>
              <p>
                Data is protected with hashed passwords, encrypted transport (HTTPS), tenant
                isolation between communities, role-based access control, and an append-only audit
                log of committee actions. See our{' '}
                <a href="/security" className="text-accent hover:underline">Security</a> page for
                the full breakdown.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. International transfers</h2>
              <p>
                Some subprocessors listed above may process data outside your community&apos;s
                country. Where this applies, data is transferred only as needed to provide the
                specific function described and is not used for any other purpose.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Requesting a signed DPA</h2>
              <p>
                If your organization requires a formal, signed Data Processing Agreement for
                compliance purposes, reach out via the{' '}
                <a href="/contact" className="text-accent hover:underline">contact page</a> and
                we&apos;ll work with you directly.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
