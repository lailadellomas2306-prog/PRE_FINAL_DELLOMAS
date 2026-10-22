import { Link, useParams } from 'react-router-dom'

function ProductDetail({ products }) {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)

  if (!product) {
    return (
      <main className="detail-page">
        <p>That ingredient isn't in this pantry.</p>
        <Link to="/">Back to pantry</Link>
      </main>
    )
  }

  return (
    <main className="detail-page">
      <Link className="back-link" to="/">Back to pantry</Link>
      <article className="product-detail">
        <img src={product.image} alt={product.name} />
        <div className="product-detail-copy">
          <span className="category-tag">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="detail-price">${product.price.toFixed(2)} <span>per item</span></p>
          <p>{product.description}</p>
          <dl>
            <div><dt>Specification</dt><dd>{product.specification}</dd></div>
            <div><dt>Rating</dt><dd>{product.rating.toFixed(1)} / 5</dd></div>
            <div><dt>In the pantry</dt><dd>{product.quantity}</dd></div>
          </dl>
        </div>
      </article>
    </main>
  )
}

export default ProductDetail