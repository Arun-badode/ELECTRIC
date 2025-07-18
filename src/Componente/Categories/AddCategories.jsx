import React, { useState } from 'react';


const AddCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddCategory = (e) => {
    e.preventDefault();

    if (!categoryName || !categoryImage) {
      alert('Please fill all fields');
      return;
    }

    const newCategory = {
      id: categories.length + 1,
      name: categoryName,
      image: URL.createObjectURL(categoryImage),
    };

    setCategories([...categories, newCategory]);
    setCategoryName('');
    setCategoryImage(null);
    setShowModal(false); // close modal
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
      {categories.length === 0 ? (
        <p className="text-muted">No categories added yet.</p>
      ) : (
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
              {categories.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.id}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Bootstrap Modal */}
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
