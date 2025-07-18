import React, { useState, useEffect } from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import { Link } from "react-router-dom";
const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 'item1',
            name: '12 AWG Copper Wire',
            description: 'THHN/THWN-2 Solid Copper Conductor',
            details: '500 ft Spool | Red Insulation',
            price: 24.99,
            originalPrice: 29.99,
            quantity: 2,
            image: 'https://readdy.ai/api/search-image?query=Professional%20electrical%20wire%20cable%2012%20AWG%20copper%20conductor%20high%20quality%20industrial%20grade%20white%20background%20product%20photography%20clean%20minimal%20detailed%20view&width=120&height=120&seq=cartitem1&orientation=squarish'
        },
        {
            id: 'item2',
            name: 'Safety Hard Hat',
            description: 'ANSI Z89.1 Type I Class E',
            details: 'White | Adjustable Suspension',
            price: 39.99,
            quantity: 1,
            image: 'https://readdy.ai/api/search-image?query=Professional%20electrical%20safety%20hard%20hat%20helmet%20ANSI%20approved%20industrial%20protection%20gear%20white%20background%20product%20photography%20clean%20minimal%20detailed%20view&width=120&height=120&seq=cartitem2&orientation=squarish'
        },
        {
            id: 'item3',
            name: 'Digital Multimeter',
            description: 'True RMS AC/DC Voltage Current',
            details: '600V CAT III Safety Rating',
            price: 89.99,
            originalPrice: 109.99,
            quantity: 1,
            image: 'https://readdy.ai/api/search-image?query=Professional%20electrical%20digital%20multimeter%20testing%20instrument%20LCD%20display%20industrial%20measurement%20tool%20white%20background%20product%20photography%20clean%20minimal%20detailed%20view&width=120&height=120&seq=cartitem3&orientation=squarish'
        }
    ]);

    const [shippingOption, setShippingOption] = useState('0');
    const [couponCode, setCouponCode] = useState('');
    const [couponMessage, setCouponMessage] = useState('');
    const [couponApplied, setCouponApplied] = useState(false);
    const [couponDiscount, setCouponDiscount] = useState(0);

    const validCoupons = {
        'SAVE10': { discount: 0.1, type: 'percentage', message: '10% discount applied!' },
        'WELCOME20': { discount: 20, type: 'fixed', message: '$20 off applied!' },
        'ELECTRICIAN15': { discount: 0.15, type: 'percentage', message: '15% electrician discount applied!' }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const calculateTax = () => {
        return calculateSubtotal() * 0.08;
    };

    const calculateShipping = () => {
        return parseFloat(shippingOption);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const shipping = calculateShipping();
        const tax = calculateTax();
        let total = subtotal + shipping + tax;

        if (couponApplied) {
            if (validCoupons[couponCode].type === 'percentage') {
                total -= subtotal * validCoupons[couponCode].discount;
            } else {
                total -= validCoupons[couponCode].discount;
            }
        }

        return total;
    };

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) return;

        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const applyCoupon = () => {
        const code = couponCode.trim().toUpperCase();

        if (validCoupons[code]) {
            setCouponMessage(validCoupons[code].message);
            setCouponApplied(true);
            setCouponDiscount(validCoupons[code].discount);
        } else if (code) {
            setCouponMessage('Invalid coupon code. Please try again.');
            setCouponApplied(false);
        } else {
            setCouponMessage('');
            setCouponApplied(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            applyCoupon();
        }
    };

    return (
        <>
            <CustomNavbar />
            <div className="p-5 mt-5 py-5">
                {/* Page Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="h2">Shopping Cart</h1>
                    <Link to="/electricalproducts" className="btn btn-link text-decoration-none">
                        <i className="bi bi-arrow-left me-2"></i>
                        Continue Shopping
                    </Link>
                </div>

                <div className="row">
                    {/* Cart Items */}
                    <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="card shadow-sm mb-4">
                            <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
                                <h2 className="h5 mb-0">Cart Items ({cartItems.length})</h2>
                                {cartItems.length > 0 && (
                                    <button className="btn btn-sm btn-outline-danger" onClick={clearCart}>
                                        Clear All
                                    </button>
                                )}
                            </div>
                            <div className="card-body">
                                {cartItems.length === 0 ? (
                                    <div className="text-center py-5">
                                        <i className="bi bi-cart-x fs-1 text-muted"></i>
                                        <p className="mt-3">Your cart is empty</p>
                                        <a href="#" className="btn btn-primary mt-3">
                                            Continue Shopping
                                        </a>
                                    </div>
                                ) : (
                                    <div className="list-group list-group-flush">
                                        {cartItems.map(item => (
                                            <div key={item.id} className="list-group-item py-4">
                                                <div className="row align-items-center">
                                                    <div className="col-md-2 mb-3 mb-md-0">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="img-fluid rounded"
                                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                    <div className="col-md-5 mb-3 mb-md-0">
                                                        <h3 className="h6 mb-1">{item.name}</h3>
                                                        <p className="small text-muted mb-1">{item.description}</p>
                                                        <p className="small text-muted mb-0">{item.details}</p>
                                                        <div className="mt-2">
                                                            <span className="fw-bold">${item.price.toFixed(2)}</span>
                                                            {item.originalPrice && (
                                                                <span className="text-muted text-decoration-line-through ms-2">
                                                                    ${item.originalPrice.toFixed(2)}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <button
                                                                    className="btn btn-outline-secondary btn-sm"
                                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                                >
                                                                    <i className="bi bi-dash"></i>
                                                                </button>
                                                                <input
                                                                    type="number"
                                                                    min="1"
                                                                    value={item.quantity}
                                                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                                                    className="form-control form-control-sm text-center mx-2"
                                                                    style={{ width: '60px' }}
                                                                />
                                                                <button
                                                                    className="btn btn-outline-secondary btn-sm"
                                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                                >
                                                                    <i className="bi bi-plus"></i>
                                                                </button>
                                                            </div>
                                                            <div className="text-end">
                                                                <div className="fw-bold">
                                                                    ${(item.price * item.quantity).toFixed(2)}
                                                                </div>
                                                                <button
                                                                    className="btn btn-link text-danger p-0 small"
                                                                    onClick={() => removeItem(item.id)}
                                                                >
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="col-lg-4">
                        <div className="card shadow-sm sticky-top" style={{ top: '20px' }}>
                            <div className="card-header bg-white py-3">
                                <h2 className="h5 mb-0">Order Summary</h2>
                            </div>
                            <div className="card-body">
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Subtotal</span>
                                        <span className="fw-bold">${calculateSubtotal().toFixed(2)}</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className="text-muted">Shipping</span>
                                        <div className="text-end">
                                            <select
                                                className="form-select form-select-sm mb-1"
                                                value={shippingOption}
                                                onChange={(e) => setShippingOption(e.target.value)}
                                            >
                                                <option value="0">Free Shipping (5-7 days)</option>
                                                <option value="9.99">Standard ($9.99, 3-5 days)</option>
                                                <option value="19.99">Express ($19.99, 1-2 days)</option>
                                            </select>
                                            <span className="small fw-bold">
                                                {shippingOption === '0' ? 'Free' : `$${parseFloat(shippingOption).toFixed(2)}`}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Tax</span>
                                        <span className="fw-bold">${calculateTax().toFixed(2)}</span>
                                    </div>
                                    {couponApplied && (
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-muted">Discount</span>
                                            <span className="fw-bold text-success">
                                                -${validCoupons[couponCode].type === 'percentage'
                                                    ? (calculateSubtotal() * couponDiscount).toFixed(2)
                                                    : couponDiscount.toFixed(2)}
                                            </span>
                                        </div>
                                    )}
                                    <div className="border-top pt-3 mt-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">Total</span>
                                            <span className="h4 fw-bold">${calculateTotal().toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label small">Coupon Code</label>
                                    <div className="input-group mb-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter coupon code"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                        />
                                        <button
                                            className="btn btn-dark"
                                            type="button"
                                            onClick={applyCoupon}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    {couponMessage && (
                                        <div className={`small ${couponApplied ? 'text-success' : 'text-danger'}`}>
                                            {couponMessage}
                                        </div>
                                    )}
                                </div>

                                <button className="btn btn-primary w-100 py-2 mb-3">
                                    Proceed to Checkout
                                </button>

                                <div className="text-center">
                                    <p className="small text-muted mb-2">Secure checkout powered by</p>
                                    <div className="d-flex justify-content-center gap-3 text-muted">
                                        <i className="bi bi-credit-card fs-5"></i>
                                        <i className="bi bi-paypal fs-5"></i>
                                        <i className="bi bi-apple fs-5"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ShoppingCart;