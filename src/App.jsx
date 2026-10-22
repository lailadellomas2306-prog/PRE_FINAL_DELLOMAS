import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { initialProducts } from './data/products.js'
import './App.css'

function App() {
  const [products, setProducts] = useState(initialProducts)

  function addProduct(product) {
    setProducts((currentProducts) => [...currentProducts, product])
  }

  return (
    <BrowserRouter>
      <header className="site-header">
        <Link to="/" className="brand">Pantry Manager</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home products={products} setProducts={setProducts} onAddProduct={addProduct} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
