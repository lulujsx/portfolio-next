import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrains = JetBrains_Mono({
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luana Vallejos — Front End & Mobile Developer',
  description:
    'Front End & Mobile Developer building user-facing web and mobile applications with React, Next.js and Flutter.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jetbrains.variable} bg-bg font-mono text-fg antialiased`}>{children}</body>
    </html>
  )
}
