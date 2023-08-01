import '../styles/globals.css'
import { Press_Start_2P, Open_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'

const press2p = Press_Start_2P(
  { 
    weight: '400',
    variable: '--font-press2p',
    preload: false
  }
)

const open_sans = Open_Sans(
  {
    weight:['300', '500'],
    variable: '--font-open',
    subsets: ['latin'],
    display: 'swap',
  }
)

export default function App({ Component, pageProps }: AppProps) {
  return <div className={`${press2p.variable} font-press2p ${open_sans.variable} font-open`}>
    <Component {...pageProps} />
  </div>
}
