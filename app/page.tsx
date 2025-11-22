import { Metadata } from 'next'
import ProductListingPage from '@/components/ProductListingPage'
import { getProducts } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Product Listing Page - Shop Our Collection',
  description: 'Browse our extensive collection of high-quality products. Find the best deals on electronics, clothing, jewelry, and more.',
  openGraph: {
    title: 'Product Listing Page - Shop Our Collection',
    description: 'Browse our extensive collection of high-quality products.',
    type: 'website',
  },
}

export default async function Home() {
  const products = await getProducts()

  return <ProductListingPage products={products} />
}



