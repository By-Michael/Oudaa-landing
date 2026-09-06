"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Security", href: "/security" },
    { label: "Bank Verification", href: "/bank-verification" },
  ],
  Solutions: [
    { label: "HOAs", href: "/solutions#hoas" },
    { label: "Apartment & Condo Committees", href: "/solutions#apartment-committees" },
    { label: "Clubs & Membership Groups", href: "/solutions#clubs" },
    { label: "Companies", href: "/solutions#companies" },
  ],
  Resources: [
    { label: "Documentation", href: "/documentation" },
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "API Reference", href: "/documentation#api-reference" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Press", href: "/press" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
    { label: "DPA", href: "/dpa" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div className="space-y-4" key={section}>
              <h4 className="font-semibold text-foreground">{section}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Oudaa logo"
              width={120}
              height={32}
              className="h-7 w-auto object-contain"
            />
          </Link>

          {/* Copyright */}
          <p className="text-sm text-slate-500">© 2026 Oudaa. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-primary transition" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
