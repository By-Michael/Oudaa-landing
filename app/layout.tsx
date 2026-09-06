import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oudaa - Community Fund Management, Made Transparent",
  description:
    "Oudaa helps HOAs, residential communities, and member organizations manage dues, shared funds, capital projects, and committee governance in one transparent, auditable platform.",
 
   icons: {
    icon: [
      { url: "./favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "./favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "./apple-touch-icon.png",
  },
  manifest: "./site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
