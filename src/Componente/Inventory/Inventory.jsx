import React, { useState } from "react";

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inventory] = useState([
    {
      name: "Wireless Headphones",
      series: "Premium Audio Series",
      sku: "WH-2024-001",
      category: "Electronics",
      stock: 847,
      status: "In Stock",
    },
    {
      name: "Desk Organizer Set",
      series: "Professional Series",
      sku: "DO-2024-015",
      category: "Office Supplies",
      stock: 123,
      status: "Low Stock",
    },
    {
      name: "Ergonomic Mouse",
      series: "Comfort Series",
      sku: "EM-2024-008",
      category: "Electronics",
      stock: 0,
      status: "Out of Stock",
    },
    {
      name: "Premium Notebook Set",
      series: "Executive Series",
      sku: "NB-2024-022",
      category: "Office Supplies",
      stock: 389,
      status: "In Stock",
    },
    {
      name: "Ergonomic Office Chair",
      series: "Comfort Pro Series",
      sku: "EC-2024-045",
      category: "Furniture",
      stock: 52,
      status: "Low Stock",
    },
  ]);

  const statusBadge = (status) => {
    if (status === "In Stock") return "success";
    if (status === "Low Stock") return "warning";
    return "danger";
  };

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">

      {/* Heading & Search */}
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

      {/* Table */}
      <div className="table-responsive bg-white">
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
            {filteredInventory.map((item, idx) => (
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
                <td>{item.category}</td>
                <td>
                  <span className="fw-bold text-dark">{item.stock}</span>
                </td>
                <td>
                  <span
                    className={`badge bg-${statusBadge(item.status)}-subtle text-${statusBadge(
                      item.status
                    )} fw-semibold`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
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
