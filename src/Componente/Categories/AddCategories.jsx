import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const API_BASE = 'https://hrb5wx2v-6500.inc1.devtunnels.ms/api/category';

  // Fetch all categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${API_BASE}/getAllCategories`);
      setCategories(res.data?.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();

    if (!categoryName || !categoryImage) {
      alert('Please fill all fields');
      return;
    }

    const formData = new FormData();
    formData.append('name', categoryName);
    formData.append('image', categoryImage);

    try {
      await axios.post(`${API_BASE}/createCategory`, formData);
      setShowModal(false);
      setCategoryName('');
      setCategoryImage(null);
      fetchCategories(); // Refresh list
    } catch (err) {
      console.error('Error creating category:', err);
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0 fw-bold">Categories</h3>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add Category
        </button>
      </div>

      {/* Category Table */}
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center text-muted">
                  No Category Found
                </td>
              </tr>
            ) : (
              categories.map((cat, index) => (
                <tr key={cat._id || index}>
                  <td>{index + 1}</td>
                  <td>{cat.name}</td>
                  <td>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      className="rounded"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <form onSubmit={handleAddCategory}>
                <div className="modal-header">
                  <h5 className="modal-title">Add New Category</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Category Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        placeholder="Enter category name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Category Image</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setCategoryImage(e.target.files[0])}
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal Backdrop */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default AddCategories;
