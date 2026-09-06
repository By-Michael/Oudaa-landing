'use client'

import React, { useState } from 'react'
import { Send, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Footer from '@/components/sections/footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    community: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire this up to a real inbox / CRM / form endpoint once one exists.
    setSubmitted(true)
  }

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6">
              Get in <span className="text-accent">touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Questions about Oudaa for your HOA, committee, or another use case? Send us a
              message and we&apos;ll get back to you.
            </p>
          </div>

          <div className="bg-card/50 border-2 border-primary/30 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Message received</h2>
                <p className="text-muted-foreground">
                  Thanks for reaching out — we&apos;ll follow up as soon as we can.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="jane@community.org"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="community" className="block text-sm text-foreground mb-2">
                    Community / Organization
                  </label>
                  <input
                    type="text"
                    id="community"
                    name="community"
                    value={formData.community}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Greenwood HOA"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border-2 border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your community and what you're looking for..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-full py-3 hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
