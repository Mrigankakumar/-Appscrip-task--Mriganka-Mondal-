import Image from 'next/image'
import { Product } from '@/lib/api'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={`${product.title} - ${product.category} product`}
          width={300}
          height={300}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.rating}>
          <span className={styles.stars}>
            {'★'.repeat(Math.round(product.rating.rate))}
            {'☆'.repeat(5 - Math.round(product.rating.rate))}
          </span>
          <span className={styles.ratingText}>
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
        </div>
      </div>
    </article>
  )
}

