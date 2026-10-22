import { Link } from 'react-router-dom'

function ProductCard({ product, onCartChange }) {
  const cartQuantity = product.inCart ?? 0
  const subtotal = product.price * cartQuantity

  return (
    <article className="product-card">
      <Link className="product-image-link" to={`/product/${product.id}`}>
        <img className="product-image" src={product.image} alt={product.name} />
      </Link>
      <div className="product-card-content">
        <div className="product-card-heading">
          <span className="category-tag">{product.category}</span>
          <span className={`product-quantity${product.quantity < 5 ? ' low-stock' : ''}`}>
            {product.quantity < 5 ? 'Low Stock: ' : ''}{product.quantity} in pantry
          </span>
        </div>
        <h2><Link to={`/product/${product.id}`}>{product.name}</Link></h2>
        <div className="product-card-footer">
          <span>₱{product.price.toFixed(2)} each</span>
          <span>Cart subtotal <strong>₱{subtotal.toFixed(2)}</strong></span>
        </div>
        <div className="cart-controls">
          {cartQuantity === 0 ? (
            <button className="add-to-cart" type="button" onClick={() => onCartChange(product.id, 1)}>
              Add to Cart
            </button>
          ) : (
            <span className="in-cart-badge">In Cart</span>
          )}
          <div className="quantity-controls" aria-label={`Cart quantity for ${product.name}`}>
            <button
              type="button"
              aria-label={`Remove one ${product.name}`}
              disabled={cartQuantity === 0}
              onClick={() => onCartChange(product.id, -1)}
            >-</button>
            <span>{cartQuantity}</span>
            <button
              type="button"
              aria-label={`Add one ${product.name}`}
              disabled={cartQuantity >= product.quantity}
              onClick={() => onCartChange(product.id, 1)}
            >+</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard