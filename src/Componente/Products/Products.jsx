import React, { useState } from "react";
import {
    FaFilePdf,
    FaFileExcel,
    FaPlusCircle,
    FaEye,
    FaEdit,
    FaTrash,
    FaSearch,
    FaTimes
} from "react-icons/fa";

const Productes = () => {
    // State management
    const [products, setProducts] = useState([
        {
            id: "6877ca89ca34fdc0b3dae5696",
            name: "5-in-1 Multifunctional Pliers Tool Kit for Electrical Work",
            price: "1,499",
            stock: "45",
            category: "Tools",
            sku: "TOOL-5IN1",
            description: "Professional grade pliers set for all electrical work needs",
            createdAt: "2025-07-16"
        },
        {
            id: "6877ca81a34fdc0b3dae56a2",
            name: "Wire Stripper and Crimping Tool for Electronics",
            price: "589",
            stock: "32",
            category: "Tools",
            sku: "WIRE-STRP",
            description: "Precision wire stripper with crimping functionality",
            createdAt: "2025-07-16"
        },
        {
            id: "6877ca2fa35a37fd6c413b4f",
            name: "XBEY 5-in-1 Multifunctional Plier Set with Case",
            price: "349",
            stock: "18",
            category: "Tools",
            sku: "XBEY-PLRS",
            description: "Compact plier set with carrying case for easy storage",
            createdAt: "2025-07-16"
        },
        {
            id: "6877ca78a35a37fd6c413b54",
            name: "Gopendra All-in-1 Multifunctional Stainless Steel Tool",
            price: "588",
            stock: "27",
            category: "Tools",
            sku: "GOP-MULTI",
            description: "Stainless steel construction for durability",
            createdAt: "2025-07-16"
        },
        {
            id: "6877caebd35a37fd6c413b64",
            name: "GM 3060 Extension Board – 10A, 250V with 3 Sockets",
            price: "399",
            stock: "56",
            category: "Electronics",
            sku: "GM-EXTB",
            description: "3 socket extension board with surge protection",
            createdAt: "2025-07-16"
        },
        {
            id: "6877acb3d35a37fd6c413bbc",
            name: "Universal Travel Adapter – International Compatibility",
            price: "582",
            stock: "23",
            category: "Electronics",
            sku: "TRAVEL-ADP",
            description: "Works in over 150 countries worldwide",
            createdAt: "2025-07-16"
        },
        {
            id: "6878d5b4ec8ce45a5b7ba83l",
            name: "Nokia 105 Single SIM Feature Phone",
            price: "656",
            stock: "12",
            category: "Electronics",
            sku: "NK-105",
            description: "Basic feature phone with long battery life",
            createdAt: "2025-07-17"
        }
    ]);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editProduct, setEditProduct] = useState(null);
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        stock: "",
        sku: ""
    });

    // Filter products based on search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({ ...prev, [name]: value }));
    };

    // Add new product
    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProductItem = {
            id: `prod${Math.floor(Math.random() * 1000000)}`,
            name: newProduct.name,
            price: newProduct.price,
            description: newProduct.description,
            category: newProduct.category,
            stock: newProduct.stock,
            sku: newProduct.sku,
            createdAt: new Date().toISOString().split('T')[0]
        };
        setProducts([...products, newProductItem]);
        setNewProduct({
            name: "",
            price: "",
            description: "",
            category: "",
            stock: "",
            sku: ""
        });
        document.getElementById('addProductModal').querySelector('.btn-close').click();
    };

    // Update product
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        setProducts(products.map(product =>
            product.id === editProduct.id ? { ...product, ...editProduct } : product
        ));
        setEditProduct(null);
        document.getElementById('editProductModal').querySelector('.btn-close').click();
    };

    // Delete product
    const handleDeleteProduct = () => {
        setProducts(products.filter(product => product.id !== deleteProduct));
        setDeleteProduct(null);
    };

    return (
        <div className="container-fluid py-4 px-3 px-md-4">
            {/* Header Section */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
                <div>
                    <h2 className="h4 fw-bold mb-3">Product Management</h2>
                    <p className="text-muted mb-0">View and manage all your products</p>
                </div>

                <div className="d-flex align-items-center gap-2 flex-wrap">
                    <button className="btn btn-outline-danger d-flex align-items-center gap-1">
                        <FaFilePdf />
                        <span className="d-none d-md-inline">Export PDF</span>
                    </button>
                    <button className="btn btn-outline-success d-flex align-items-center gap-1">
                        <FaFileExcel />
                        <span className="d-none d-md-inline">Export Excel</span>
                    </button>
                    <button
                        className="btn btn-primary d-flex align-items-center gap-2"
                        data-bs-toggle="modal"
                        data-bs-target="#addProductModal"
                    >
                        <FaPlusCircle />
                        <span>Add Product</span>
                    </button>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="card mb-4 border-0 shadow-sm">
                <div className="card-body p-3">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="input-group">
                                <span className="input-group-text bg-white border-end-0">
                                    <FaSearch className="text-muted" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-start-0"
                                    placeholder="Search by name, ID or SKU..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {searchTerm && (
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={() => setSearchTerm("")}
                                    >
                                        <FaTimes />
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <select className="form-select">
                                <option>All Categories</option>
                                <option>Electronics</option>
                                <option>Tools</option>
                                <option>Accessories</option>
                            </select>
                        </div>
                        <div className="col-md-3 col-6">
                            <select className="form-select">
                                <option>Sort by: Newest</option>
                                <option>Sort by: Oldest</option>
                                <option>Sort by: Price (High to Low)</option>
                                <option>Sort by: Price (Low to High)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Table Section */}
            <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="py-3 ps-4">PRODUCT</th>
                                    <th className="py-3">PRICE</th>
                                    <th className="py-3">STOCK</th>
                                    <th className="py-3">CATEGORY</th>
                                    <th className="py-3">CREATED</th>
                                    <th className="py-3 pe-4 text-end">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                        <tr key={product.id}>
                                            <td className="ps-4">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="bg-light rounded" style={{ width: '50px', height: '50px' }}></div>
                                                    <div>
                                                        <div className="fw-semibold">{product.name}</div>
                                                        <small className="text-muted">ID: {product.id}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>₹{product.price}</td>
                                            <td>
                                                <span className={`badge ${product.stock > 20 ? 'bg-success' : 'bg-warning'} bg-opacity-10 text-success`}>
                                                    {product.stock} in stock
                                                </span>
                                            </td>
                                            <td>{product.category}</td>
                                            <td>{product.createdAt}</td>
                                            <td className="pe-4 text-end">
                                                <div className="d-flex justify-content-end gap-2">
                                                    <button
                                                        className="btn btn-sm btn-outline-secondary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#productDetailModal"
                                                        onClick={() => setSelectedProduct(product)}
                                                        title="View Details"
                                                    >
                                                        <FaEye size={14} />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-outline-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editProductModal"
                                                        onClick={() => setEditProduct({ ...product })}
                                                        title="Edit"
                                                    >
                                                        <FaEdit size={14} />
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-outline-danger"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#deleteProductModal"
                                                        onClick={() => setDeleteProduct(product.id)}
                                                        title="Delete"
                                                    >
                                                        <FaTrash size={14} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-5">
                                            <div className="d-flex flex-column align-items-center justify-content-center">
                                                <FaSearch size={48} className="text-muted mb-3" />
                                                <h5 className="fw-semibold">No products found</h5>
                                                <p className="text-muted">Try adjusting your search or filter criteria</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Pagination Section */}
            {filteredProducts.length > 0 && (
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
                    <div className="mb-3 mb-md-0">
                        <span className="text-muted">
                            Showing <span className="fw-semibold">1</span> to <span className="fw-semibold">{filteredProducts.length}</span> of <span className="fw-semibold">{filteredProducts.length}</span> entries
                        </span>
                    </div>
                    <nav aria-label="Page navigation">
                        <ul className="pagination pagination-sm mb-0">
                            <li className="page-item disabled">
                                <button className="page-link">Previous</button>
                            </li>
                            <li className="page-item active">
                                <button className="page-link">1</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">2</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">3</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}

            {/* Add Product Modal */}
            <div className="modal fade" id="addProductModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 pb-0">
                            <h5 className="modal-title fw-bold">Add New Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body pt-0">
                            <form onSubmit={handleAddProduct}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Product Name <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={newProduct.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Price (₹) <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="price"
                                            value={newProduct.price}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">SKU <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="sku"
                                            value={newProduct.sku}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Category <span className="text-danger">*</span></label>
                                        <select
                                            className="form-select"
                                            name="category"
                                            value={newProduct.category}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Tools">Tools</option>
                                            <option value="Accessories">Accessories</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Stock Quantity <span className="text-danger">*</span></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="stock"
                                            value={newProduct.stock}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-semibold">Description</label>
                                        <textarea
                                            className="form-control"
                                            name="description"
                                            value={newProduct.description}
                                            onChange={handleInputChange}
                                            rows="3"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-semibold">Product Image</label>
                                        <div className="border rounded p-3 text-center">
                                            <div className="d-flex flex-column align-items-center justify-content-center py-4">
                                                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ width: '60px', height: '60px' }}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15V17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19H9C8.44772 19 8 18.5523 8 18C8 17.4477 8.44772 17 9 17H11V15Z" fill="#6C757D" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 3.34315 4.34315 2 6 2H18C19.6569 2 21 3.34315 21 5V13C21 14.6569 19.6569 16 18 16H6C4.34315 16 3 14.6569 3 13V5ZM18 4H6C5.44772 4 5 4.44772 5 5V13C5 13.5523 5.44772 14 6 14H18C18.5523 14 19 13.5523 19 13V5C19 4.44772 18.5523 4 18 4Z" fill="#6C757D" />
                                                    </svg>
                                                </div>
                                                <div className="text-center">
                                                    <p className="mb-1 fw-semibold">Drop your image here or <span className="text-primary">browse</span></p>
                                                    <p className="small text-muted mb-0">JPG, PNG, GIF up to 5MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end gap-3 mt-4 pt-2">
                                    <button type="button" className="btn btn-outline-secondary px-4" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary px-4">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Detail Modal */}
            <div className="modal fade" id="productDetailModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header border-0 pb-0">
                            <h5 className="modal-title fw-bold">Product Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body pt-0">
                            {selectedProduct && (
                                <div className="row">
                                    <div className="col-md-5 mb-4 mb-md-0">
                                        <div className="bg-light rounded-3" style={{ height: '300px' }}></div>
                                    </div>
                                    <div className="col-md-7">
                                        <h4 className="fw-bold mb-3">{selectedProduct.name}</h4>
                                        <div className="d-flex align-items-center gap-3 mb-4">
                                            <div className="d-flex align-items-center gap-1">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 6.5L8 1.5L13 6.5V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V6.5Z" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6 14.5V8.5H10V14.5" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="text-muted">{selectedProduct.category}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M8 4.5V8L10.5 9.5" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="text-muted">Added on {selectedProduct.createdAt}</span>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="fw-bold text-primary mb-2">₹{selectedProduct.price}</h5>
                                            <span className={`badge ${selectedProduct.stock > 20 ? 'bg-success' : 'bg-warning'} bg-opacity-10 text-success`}>
                                                {selectedProduct.stock} in stock
                                            </span>
                                        </div>
                                        <div className="mb-4">
                                            <h6 className="fw-bold mb-2">Description</h6>
                                            <p className="text-muted">{selectedProduct.description || "No description available"}</p>
                                        </div>
                                        <div className="row g-2 mb-4">
                                            <div className="col-6">
                                                <div className="p-3 bg-light rounded-2">
                                                    <div className="small text-muted mb-1">Product ID</div>
                                                    <div className="fw-semibold">{selectedProduct.id}</div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="p-3 bg-light rounded-2">
                                                    <div className="small text-muted mb-1">SKU</div>
                                                    <div className="fw-semibold">{selectedProduct.sku || "N/A"}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <button className="btn btn-outline-primary flex-grow-1">Edit Product</button>
                                            <button className="btn btn-primary flex-grow-1">Add to Inventory</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Product Modal */}
            <div className="modal fade" id="editProductModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 pb-0">
                            <h5 className="modal-title fw-bold">Edit Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setEditProduct(null)}></button>
                        </div>
                        <div className="modal-body pt-0">
                            {editProduct && (
                                <form onSubmit={handleUpdateProduct}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Product Name <span className="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editProduct.name}
                                                onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Price (₹) <span className="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editProduct.price}
                                                onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">SKU <span className="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editProduct.sku || ""}
                                                onChange={(e) => setEditProduct({ ...editProduct, sku: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Category <span className="text-danger">*</span></label>
                                            <select
                                                className="form-select"
                                                value={editProduct.category || ""}
                                                onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}
                                                required
                                            >
                                                <option value="">Select Category</option>
                                                <option value="Electronics">Electronics</option>
                                                <option value="Tools">Tools</option>
                                                <option value="Accessories">Accessories</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Stock Quantity <span className="text-danger">*</span></label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={editProduct.stock || ""}
                                                onChange={(e) => setEditProduct({ ...editProduct, stock: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-semibold">Description</label>
                                            <textarea
                                                className="form-control"
                                                value={editProduct.description || ""}
                                                onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
                                                rows="3"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-semibold">Product Image</label>
                                            <div className="border rounded p-3">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="bg-light rounded" style={{ width: '80px', height: '80px' }}></div>
                                                    <div>
                                                        <button className="btn btn-sm btn-outline-primary me-2">Change</button>
                                                        <button className="btn btn-sm btn-outline-danger">Remove</button>
                                                        <div className="small text-muted mt-2">JPG, PNG, GIF up to 5MB</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end gap-3 mt-4 pt-2">
                                        <button type="button" className="btn btn-outline-secondary px-4" data-bs-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn btn-primary px-4">Save Changes</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Product Modal */}
            <div className="modal fade" id="deleteProductModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-body text-center p-4">
                            <div className="mx-auto mb-3 d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-circle" style={{ width: '80px', height: '80px' }}>
                                <FaTrash size={32} className="text-danger" />
                            </div>
                            <h4 className="fw-bold mb-3">Delete Product</h4>
                            <p className="text-muted mb-4">Are you sure you want to delete this product? This action cannot be undone.</p>
                            <div className="d-flex justify-content-center gap-3">
                                <button className="btn btn-outline-secondary px-4" data-bs-dismiss="modal">Cancel</button>
                                <button
                                    className="btn btn-danger px-4"
                                    data-bs-dismiss="modal"
                                    onClick={handleDeleteProduct}
                                >
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productes;