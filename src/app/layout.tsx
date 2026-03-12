import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ķepu SPA | Pet Grooming Salon in Rīga',
  description: 'Premium dog and cat grooming salon in Rīga, Latvia. Professional, personalized grooming with love and care. Located at Kalnciema Iela 89.',
  keywords: 'pet grooming, dog grooming, cat grooming, Rīga, Latvia, Ķepu SPA, suņu frizētava, kaķu frizētava',
  openGraph: {
    title: 'Ķepu SPA | Pet Grooming Salon in Rīga',
    description: 'Premium dog and cat grooming salon in Rīga, Latvia. Professional, personalized grooming with love and care.',
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
