import { Link, useParams } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams()

  return (
    <main>
      <p>Product details for item {id} will appear here.</p>
      <Link to="/">Back to pantry</Link>
    </main>
  )
}

export default ProductDetail