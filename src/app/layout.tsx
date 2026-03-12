import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ķepu SPA | Dzīvnieku frizētava Rīgā',
  description: 'Profesionāla suņu un kaķu frizētava Rīgā. Rūpīga, individuāla kopšana ar mīlestību un gādību. Adrese: Kalnciema iela 89.',
  keywords: 'dzīvnieku frizētava, suņu frizētava, kaķu frizētava, Rīga, Latvija, Ķepu SPA, mājdzīvnieku kopšana',
  openGraph: {
    title: 'Ķepu SPA | Dzīvnieku frizētava Rīgā',
    description: 'Profesionāla suņu un kaķu frizētava Rīgā. Rūpīga, individuāla kopšana ar mīlestību un gādību.',
    url: 'https://kepu-spa.vercel.app',
    siteName: 'Ķepu SPA',
    locale: 'lv_LV',
    type: 'website',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐾</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lv">
      <body>{children}</body>
    </html>
  )
}
