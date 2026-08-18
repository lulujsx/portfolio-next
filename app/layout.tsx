import type { Metadata } from 'next'
import { Press_Start_2P, Open_Sans } from 'next/font/google'
import './globals.css'

const press2p = Press_Start_2P({
  weight: '400',
  variable: '--font-press2p',
  preload: false
})

const open_sans = Open_Sans({
  weight: ['300', '500'],
  variable: '--font-open',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luana Vallejos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${press2p.variable} font-press2p ${open_sans.variable} font-open`}>
        {children}
      </body>
    </html>
  )
}
