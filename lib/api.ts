export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 },
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    
    const products: Product[] = await response.json()
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export function getCategories(products: Product[]): string[] {
  const categories = new Set(products.map(product => product.category))
  return Array.from(categories).sort()
}



