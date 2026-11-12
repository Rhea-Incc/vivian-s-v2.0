import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { RevealObserver } from '@/components/site/reveal-observer'
import { ConciergeLink } from '@/components/site/concierge-link'
import { JsonLd } from '@/components/site/json-ld'
import { site } from '@/lib/content/site'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Handcrafted Solid Wood Furniture Rooted in African Heritage`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | ${site.statement}`,
    description: site.description,
    images: [{ url: '/images/hero-living.jpg', alt: 'A calm living room furnished in walnut and cream' }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/images/logo.png', apple: '/images/logo.png' },
}

export const viewport: Viewport = {
  themeColor: '#39271F',
  colorScheme: 'light',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="eyebrow sr-only z-[60] bg-walnut px-5 py-3 text-limestone focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ConciergeLink />
        <RevealObserver />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FurnitureStore',
            name: site.name,
            url: site.url,
            logo: `${site.url}${site.logo.src}`,
            slogan: site.statement,
            description: site.description,
          }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
