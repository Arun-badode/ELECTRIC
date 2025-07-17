import React, { useState } from "react";
import InventoryModal from "./InventoryModal";

const Inventory = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [modalMode, setModalMode] = useState("add");
  const [inventory, setInventory] = useState([
    {
      name: "Wireless Headphones",
      series: "Premium Audio Series",
      sku: "WH-2024-001",
      category: "Electronics",
      stock: 847,
      price: "$249.99",
      warehouse: "Main Warehouse",
      status: "In Stock",
      image: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
    },
    {
      name: "Desk Organizer Set",
      series: "Professional Series",
      sku: "DO-2024-015",
      category: "Office Supplies",
      stock: 123,
      price: "$49.99",
      warehouse: "East Coast",
      status: "Low Stock",
      image: "https://cdn-icons-png.flaticon.com/512/3422/3422567.png",
    },
    {
      name: "Ergonomic Mouse",
      series: "Comfort Series",
      sku: "EM-2024-008",
      category: "Electronics",
      stock: 0,
      price: "$79.99",
      warehouse: "West Coast",
      status: "Out of Stock",
      image: "https://cdn-icons-png.flaticon.com/512/3524/3524659.png",
    },
    {
      name: "Premium Notebook Set",
      series: "Executive Series",
      sku: "NB-2024-022",
      category: "Office Supplies",
      stock: 389,
      price: "$34.99",
      warehouse: "Main Warehouse",
      status: "In Stock",
      image: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
    },
    {
      name: "Ergonomic Office Chair",
      series: "Comfort Pro Series",
      sku: "EC-2024-045",
      category: "Furniture",
      stock: 52,
      price: "$299.99",
      warehouse: "East Coast",
      status: "Low Stock",
      image: "https://cdn-icons-png.flaticon.com/512/5787/5787079.png",
    },
  ]);

  const statusBadge = (status) => {
    if (status === "In Stock") return "success";
    if (status === "Low Stock") return "warning";
    return "danger";
  };

  const handleAddItem = () => {
    setModalMode("add");
    setCurrentItem(null);
    setModalOpen(true);
  };

  const handleEditItem = (item) => {
    setModalMode("edit");
    setCurrentItem(item);
    setModalOpen(true);
  };

  const handleDeleteItem = (sku) => {
    setInventory(inventory.filter(item => item.sku !== sku));
  };

  const handleSaveItem = (newItem, originalItem) => {
    if (modalMode === "add") {
      setInventory([...inventory, newItem]);
    } else {
      setInventory(inventory.map(item =>
        item.sku === originalItem.sku ? newItem : item
      ));
    }
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-4">
      <InventoryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        item={currentItem}
        mode={modalMode}
        onSave={handleSaveItem}
      />

      <div className="row align-items-center mb-3 gy-2">
        <div className="row align-items-center justify-content-between mb-3">
          {/* Left Side: Heading */}
          <div className="col">
            <h2 className="h4 fw-bold mb-3">Inventory</h2>
          </div>

          {/* Right Side: Buttons */}
          <div className="col-auto">
            <div className="d-flex flex-wrap">
              <button className="btn btn-primary" onClick={handleAddItem}>
                <i className="bi bi-plus-lg text-white" /> Add New Item
              </button>
            </div>
          </div>
        </div>


        {/* Right Side: Filters */}
        <div className="col-12 col-md d-flex flex-wrap gap-2 justify-content-md-end">
          <button className="btn btn-outline-secondary">
            <i className="bi bi-upload" /> Export
          </button>
          <div className="d-flex flex-wrap gap-2">
            <div className="input-group input-group-sm w-auto">
              <select className="form-select">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Office Supplies</option>
                <option>Furniture</option>
              </select>
            </div>

            <div className="input-group input-group-sm w-auto">
              <select className="form-select">
                <option>All Warehouses</option>
                <option>Main Warehouse</option>
                <option>East Coast</option>
                <option>West Coast</option>
              </select>
            </div>
          </div>

        </div>
      </div>


      <div className="table-responsive bg-white">
        <table className="table align-middle mb-0">
          <thead className="text-muted small">
            <tr>
              <th>Item Name</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Warehouse</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    {/* ICON instead of image */}
                    <div
                      className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className="bi bi-box-seam fs-5"></i>
                    </div>

                    <div>
                      <div className="fw-semibold">{item.name}</div>
                      <div className="small text-muted">{item.series}</div>
                    </div>
                  </div>
                </td>
                <td>{item.sku}</td>
                <td>{item.category}</td>
                <td>
                  <span className="fw-bold text-dark">{item.stock}</span>
                </td>
                <td>{item.price}</td>
                <td>{item.warehouse}</td>
                <td>
                  <span
                    className={`badge bg-${statusBadge(item.status)}-subtle text-${statusBadge(
                      item.status
                    )} fw-semibold`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>
                  <i
                    className="bi bi-pencil-square text-primary me-2 cursor-pointer"
                    role="button"
                    onClick={() => handleEditItem(item)}
                  ></i>
                  <i
                    className="bi bi-trash text-danger cursor-pointer"
                    role="button"
                    onClick={() => handleDeleteItem(item.sku)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3 small text-muted">
        <div>Showing 1 to {inventory.length} of {inventory.length} results</div>
        <nav>
          <ul className="pagination pagination-sm mb-0">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item active">
              <a className="page-link">1</a>
            </li>
            <li className="page-item">
              <a className="page-link">2</a>
            </li>
            <li className="page-item">
              <a className="page-link">3</a>
            </li>
            <li className="page-item">
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Inventory;