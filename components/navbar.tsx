"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"
import ThemeToggle from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href))

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.png"
              alt="Oudaa logo"
              width={140}
              height={40}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-normal text-lg hidden lg:inline px-3 py-2 rounded-full transition-colors active:bg-primary/20 active:text-primary",
                      isActive(link.href)
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-foreground hover:text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Section: Search & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Input */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 bg-background/50 border-2 border-gray-600 rounded-full text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:bg-background transition-all w-48 "
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-accent pointer-events-none" />
            </div>

            {/* CTA Button */}
            <Link href="/join">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full px-6  hover:shadow-lg  transition-all"
              >
                <Users className="w-4 h-4" />
                Create Community
              </Button>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card/50 backdrop-blur-md border-t border-primary/30 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-2 text-sm font-medium transition-colors rounded-lg active:bg-primary/20 active:text-primary",
                  isActive(link.href)
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-foreground hover:text-accent hover:bg-primary/10",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 space-y-2">
              <input
                type="text"
                placeholder="SEARCH"
                className="w-full px-4 py-2 bg-background/50 border-2 border-accent rounded-full text-sm text-foreground placeholder-muted-foreground focus:outline-none"
              />
              <Link href="/join" className="w-full">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-accent text-background font-semibold  rounded-full"
                >
                  Create Community
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
