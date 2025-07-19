import React, { useState, useEffect } from 'react';

const EditProductForm = ({ productData, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    sku: '',
    category: '',
    quantity: '',
    description: '',
    image: null
  });

  useEffect(() => {
    if (productData) {
      setFormData({ ...productData });
    }
  }, [productData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Call the save handler passed as prop
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col">
          <label className='text-start d-block'>Product Name *</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col">
          <label className='text-start d-block'>Price ($) *</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label className='text-start d-block'>SKU *</label>
          <input
            type="text"
            className="form-control"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col">
          <label className='text-start d-block'>Category *</label>
          <select
            className="form-select"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Wires">Wires</option>
            <option value="Breakers">Breakers</option>
            <option value="Panels">Panels</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label className='text-start d-block'>Stock Quantity *</label>
        <input
          type="number"
          className="form-control"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className='text-start d-block'>Description</label>
        <textarea
          className="form-control"
          name="description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="mb-3">
        <label className='text-start d-block'>Product Image</label>
        <input
          type="file"
          className="form-control"
          name="image"
          onChange={handleChange}
        />
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;
