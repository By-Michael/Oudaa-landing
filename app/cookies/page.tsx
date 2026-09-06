'use client'

import Footer from '@/components/sections/footer'

export default function Cookies() {
  const items = [
    {
      name: 'Session / refresh cookie',
      type: 'Strictly necessary',
      description:
        'An httpOnly, secure cookie that keeps you signed in between visits without exposing your session to JavaScript. It cannot be read by any script running in your browser, including third-party scripts. This cookie is rotated every time your session refreshes and is revoked immediately if you change your password.',
    },
    {
      name: 'Local storage: access token & profile',
      type: 'Strictly necessary (not a cookie)',
      description:
        'Your short-lived access token and a lightweight copy of your name/role are kept in your browser\'s local storage so a page refresh doesn\'t force you to log in again. This is never sent to third parties.',
    },
  ]

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: 2026</p>

          <div className="text-muted-foreground leading-relaxed mb-10">
            <p className="mb-4">
              Oudaa uses a small, fixed set of strictly necessary cookies and local storage items
              to keep the platform working — nothing more. We do not use advertising cookies,
              third-party tracking pixels, or cross-site analytics cookies.
            </p>
          </div>

          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.name} className="bg-card/50 border-2 border-primary/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent">
                    {item.type}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-muted-foreground leading-relaxed">
            <h2 className="text-xl font-semibold text-foreground mb-3">Managing cookies</h2>
            <p>
              Because these cookies are required for you to stay logged in and for the platform to
              function securely, there is no in-app option to disable them individually — blocking
              them in your browser will simply sign you out. You can control cookies generally
              through your browser&apos;s settings.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
