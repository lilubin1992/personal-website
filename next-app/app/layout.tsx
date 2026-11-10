import type { Metadata } from "next"
import { DM_Sans, Instrument_Serif } from "next/font/google"

import "./globals.css"

const displayFont = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
})

const sansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Anais Rocha — Photographer",
  description:
    "Anais Rocha is a photographer based in Lisbon, making quiet, honest images for people, places, and stories.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
