import React, { useState } from 'react';


const AddProduct = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    sku: '',
    category: '',
    quantity: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Submitted:', form);
    // You can send `form` data to backend here
  };

  return (
    <div className="p-5">
      {/* Page Heading */}
      <div className="mb-4 text-center text-md-start">
        <h2 className="fw-bold">Add New Products</h2>
      </div>

      <div className="card shadow-sm p-4">
        <h4 className="mb-4">Add New Product</h4>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">
                Product Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Price (₹) <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">
                SKU <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="sku"
                value={form.sku}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Category <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
                <option value="Clothing">Clothing</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Stock Quantity <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              value={form.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="form-label">Product Image</label>
            <div
              className="border rounded p-4 text-center"
              style={{ minHeight: '150px' }}
            >
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="form-control"
              />
              <div className="text-muted mt-2">
                JPG, PNG, GIF up to 5MB
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end gap-2">
            <button type="button" className="btn btn-outline-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
