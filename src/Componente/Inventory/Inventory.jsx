import React, { useEffect, useState } from "react";
import axios from "axios";

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  useEffect(() => {
    const filtered = inventory.filter(item =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInventory(filtered);
  }, [searchTerm, inventory]);

  const fetchInventory = async () => {
    try {
      const response = await axios.get(
        "https://inventory-backend-production-6cb7.up.railway.app/api/product/getAllInventoryProducts"
      );
      setInventory(response.data.data || []);
      setFilteredInventory(response.data.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Calculate status based on stock value
  const getStockStatus = (stock) => {
    if (stock > 20) return { label: "In Stock", badge: "success" };
    if (stock >= 0) return { label: "Low Stock", badge: "warning" };
    return { label: "Out of Stock", badge: "danger" };
  };

  return (
    <div className="p-4">
      <div className="row align-items-center justify-content-between mb-3">
        <div className="col">
          <h2 className="h4 fw-bold mb-3">Inventory</h2>
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control form-control-sm rounded"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-responsive bg-white p-3">
        <table className="table align-middle mb-0">
          <thead className="text-muted small">
            <tr>
              <th>Item Name</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           {filteredInventory.map((item, idx) => {
  const { label, badge } = getStockStatus(item.stockQuantity);

  return (
    <tr key={idx}>
      <td>
        <div className="d-flex align-items-center gap-2">
          <div
            className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-box-seam fs-5"></i>
          </div>
          <div className="fw-semibold">{item.name}</div>
        </div>
      </td>
      <td>{item.sku}</td>
      <td>{item.category_name}</td>
      <td>
        <span className="fw-bold text-dark">{item.stockQuantity}</span>
      </td>
      <td>
        <span
          className={`badge bg-${badge}-subtle text-${badge} fw-semibold`}
        >
          {label}
        </span>
      </td>
    </tr>
  );
})}

          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3 small text-muted">
        <div>
          Showing 1 to {filteredInventory.length} of {filteredInventory.length} results
        </div>
      </div>
    </div>
  );
};

export default Inventory;
