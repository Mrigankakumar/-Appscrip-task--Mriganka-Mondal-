import styles from './ProductFilters.module.css'

interface ProductFiltersProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  sortBy: 'price-asc' | 'price-desc' | 'rating'
  onSortChange: (sort: 'price-asc' | 'price-desc' | 'rating') => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange,
}: ProductFiltersProps) {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
          aria-label="Search products"
        />
      </div>

      <div className={styles.filtersRow}>
        <div className={styles.filterGroup}>
          <label htmlFor="category-filter" className={styles.filterLabel}>
            Category:
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className={styles.filterSelect}
            aria-label="Filter by category"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="sort-filter" className={styles.filterLabel}>
            Sort by:
          </label>
          <select
            id="sort-filter"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as 'price-asc' | 'price-desc' | 'rating')}
            className={styles.filterSelect}
            aria-label="Sort products"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </div>
  )
}



