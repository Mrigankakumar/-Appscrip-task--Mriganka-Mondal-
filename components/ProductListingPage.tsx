'use client'

import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import ProductFilters from './ProductFilters'
import { Product, getCategories } from '@/lib/api'
import styles from './ProductListingPage.module.css'

interface ProductListingPageProps {
  products: Product[]
}

export default function ProductListingPage({ products }: ProductListingPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('price-asc')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = getCategories(products)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      )
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.price - b.price
      } else if (sortBy === 'price-desc') {
        return b.price - a.price
      } else {
        return b.rating.rate - a.rating.rate
      }
    })

    return sorted
  }, [products, selectedCategory, sortBy, searchQuery])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Our Product Collection</h1>
        <p className={styles.subtitle}>Discover amazing products at great prices</p>
      </header>

      <main className={styles.main}>
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <section className={styles.productsSection}>
          <h2 className={styles.sectionTitle}>
            {selectedCategory === 'all' ? 'All Products' : selectedCategory}
            {filteredAndSortedProducts.length > 0 && (
              <span className={styles.productCount}>
                ({filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'product' : 'products'})
              </span>
            )}
          </h2>

          {filteredAndSortedProducts.length > 0 ? (
            <div className={styles.productsGrid}>
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>No products found matching your criteria.</p>
            </div>
          )}
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Product Listing Page',
            description: 'Browse our extensive collection of high-quality products',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: filteredAndSortedProducts.length,
              itemListElement: filteredAndSortedProducts.slice(0, 10).map((product, index) => ({
                '@type': 'Product',
                position: index + 1,
                name: product.title,
                description: product.description,
                image: product.image,
                offers: {
                  '@type': 'Offer',
                  price: product.price,
                  priceCurrency: 'USD',
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: product.rating.rate,
                  reviewCount: product.rating.count,
                },
              })),
            },
          }),
        }}
      />
    </div>
  )
}



