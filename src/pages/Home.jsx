import { useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'

function Home({ products, setProducts }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', ...new Set(products.map((product) => product.category))]
  const visibleProducts = activeCategory === 'All'
    ? products
    : products.filter((product) => product.category === activeCategory)

  function changeCartQuantity(productId, change) {
    setProducts((currentProducts) => currentProducts.map((product) => {
      if (product.id !== productId) return product
      const inCart = product.inCart ?? 0
      return { ...product, inCart: Math.max(0, Math.min(product.quantity, inCart + change)) }
    }))
  }

  return (
    <main className="pantry-page">
      <div className="page-intro">
        <p className="eyebrow">THE HOME KITCHEN</p>
        <h1>Your pantry, at a glance.</h1>
        <p>Good ingredients, accounted for.</p>
      </div>
      <div className="catalog-toolbar">
        <h2>Ingredients <span>{visibleProducts.length}</span></h2>
        <div className="category-filter" aria-label="Filter ingredients by category">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? 'category-filter-active' : ''}
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <section className="product-grid" aria-label="Pantry ingredients">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} onCartChange={changeCartQuantity} />
        ))}
      </section>
    </main>
  )
}

export default Home