import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Product Listing Page - Shop Our Collection',
  description: 'Browse our extensive collection of high-quality products. Find the best deals on electronics, clothing, jewelry, and more.',
  keywords: 'products, shopping, ecommerce, deals, electronics, clothing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



