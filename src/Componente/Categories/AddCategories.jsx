import React, { useState } from 'react';


const Categories = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (category.trim() === '') return;
    setCategories([...categories, category]);
    setCategory('');
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center text-dark fw-bold">Add Categories</h3>
      
      <form className="mb-4" onSubmit={handleAddCategory}>
        <div className="row g-3 align-items-center">
          <div className="col-md-10">
            <input
              type="text"
              className="form-control py-2 rounded-sm"
              placeholder="Enter category name"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2 text-md-start text-center">
            <button type="submit" className="btn btn-primary w-100 py-2 rounded-sm">Add</button>
          </div>
        </div>
      </form>

      <div className="table-responsive ">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Category Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="2" className="text-muted">No categories added yet.</td>
              </tr>
            ) : (
              categories.map((cat, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{cat}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
