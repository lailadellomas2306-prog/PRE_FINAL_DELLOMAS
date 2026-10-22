import { useState } from 'react'

const emptyForm = {
  name: '',
  category: '',
  price: '',
  quantity: '',
  image: '',
  description: '',
  specification: '',
  rating: '',
}

function AddProductForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    if (Object.values(form).some((value) => !value.trim())) {
      setMessage('Please complete every field before adding an ingredient.')
      return
    }

    const name = form.name.trim()
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    onAdd({
      id: `${slug}-${Date.now()}`,
      name,
      category: form.category,
      price: Number(form.price),
      quantity: Number(form.quantity),
      inCart: 0,
      image: form.image.trim(),
      description: form.description.trim(),
      specification: form.specification.trim(),
      rating: Number(form.rating),
    })
    setForm(emptyForm)
    setMessage(`${name} was added to your pantry.`)
  }

  return (
    <section className="add-product-section" aria-labelledby="add-product-title">
      <div className="section-heading">
        <p className="eyebrow">PANTRY NOTES</p>
        <h2 id="add-product-title">Add an ingredient</h2>
      </div>
      <form className="product-form" onSubmit={handleSubmit}>
        <label>
          Ingredient name
          <input name="name" value={form.name} onChange={updateField} required />
        </label>
        <label>
          Category
          <select name="category" value={form.category} onChange={updateField} required>
            <option value="" disabled>Select a category</option>
            <option>Produce</option>
            <option>Dairy</option>
            <option>Bakery</option>
            <option>Pantry</option>
          </select>
        </label>
        <label>
          Price per item
          <input name="price" type="number" min="0.01" step="0.01" value={form.price} onChange={updateField} required />
        </label>
        <label>
          Quantity in pantry
          <input name="quantity" type="number" min="0" step="1" value={form.quantity} onChange={updateField} required />
        </label>
        <label className="form-wide">
          Image URL
          <input name="image" type="url" value={form.image} onChange={updateField} required />
        </label>
        <label className="form-wide">
          Description
          <textarea name="description" rows="3" value={form.description} onChange={updateField} required />
        </label>
        <label className="form-wide">
          Specification
          <input name="specification" value={form.specification} onChange={updateField} required />
        </label>
        <label>
          Rating (0 to 5)
          <input name="rating" type="number" min="0" max="5" step="0.1" value={form.rating} onChange={updateField} required />
        </label>
        <div className="form-submit">
          <button className="add-to-cart" type="submit">Add to pantry</button>
          <p role="status" aria-live="polite">{message}</p>
        </div>
      </form>
    </section>
  )
}

export default AddProductForm