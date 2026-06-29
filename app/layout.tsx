// import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter, Stack_Sans_Headline } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'


const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
})

const stackSansHeadline = Stack_Sans_Headline({
  variable: '--font-heading',
  subsets: ['latin'],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Infix Systems — Your Trusted IT Partner',
  description:
    'Infix Systems is a developer and provider of AI-powered software and full-cycle digital solutions, delivering Gen-AI solutions and MVPs for real-world impact.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${stackSansHeadline.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />

        {children}
        {/* {process.env.NODE_ENV === 'production' && <Analytics />} */}
      </body>
    </html>
  )
}
