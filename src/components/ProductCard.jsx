import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const subtotal = product.price * product.quantity

  return (
    <article className="product-card">
      <Link className="product-image-link" to={`/product/${product.id}`}>
        <img className="product-image" src={product.image} alt={product.name} />
      </Link>
      <div className="product-card-content">
        <div className="product-card-heading">
          <span className="category-tag">{product.category}</span>
          <span className="product-quantity">{product.quantity} in pantry</span>
        </div>
        <h2><Link to={`/product/${product.id}`}>{product.name}</Link></h2>
        <div className="product-card-footer">
          <span>${product.price.toFixed(2)} each</span>
          <span>Stock value <strong>${subtotal.toFixed(2)}</strong></span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard