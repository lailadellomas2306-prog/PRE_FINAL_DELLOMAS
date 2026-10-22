import ProductCard from '../components/ProductCard.jsx'

function Home({ products }) {
  return (
    <main className="pantry-page">
      <div className="page-intro">
        <p className="eyebrow">THE HOME KITCHEN</p>
        <h1>Your pantry, at a glance.</h1>
        <p>Good ingredients, accounted for.</p>
      </div>
      <section className="product-grid" aria-label="Pantry ingredients">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </section>
    </main>
  )
}

export default Home