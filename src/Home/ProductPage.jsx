import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import CustomNavbar from './Navbar';
import axiosInstance from '../Utilities/axiosInstance';
import { useParams } from 'react-router-dom';
import RelatedProducts from './ProductDetails';
import { toast } from "react-toastify";

const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(value > 0 ? value : 1);
  };

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const res = await axiosInstance.get(`/product/getProductById/${id}`);
        const data = res.data?.data;
        setProduct(data);
        if (data?.image?.length > 0) {
          setSelectedImage(data.image[0]);
        }
      } catch (error) {
        console.error('Error fetching product by ID:', error);
      }
    };

    fetchProductById();
  }, [id]);

  if (!product) return <div className="text-center p-5">Loading...</div>;

  const addtocart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    if (!userId) {
      toast.error("Please login first!");
      return;
    }

    try {
      const response = await axiosInstance.post("/cart/addToCart", {
        userId: parseInt(userId),
        productId: product.id,
        price: parseFloat(product.price),
        quantity: quantity.toString(),
      });

      if (response.data.success) {
        toast.success("Product added to cart!");
      } else {
        toast.error("Failed to add to cart.");
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      toast.error("Something went wrong while adding to cart.");
    }
  };

  return (
    <>
      <CustomNavbar />
      <div className="bg-white">
        <div className="p-5 mt-5 py-5">
          <div className="row g-4">
            {/* Product Images */}
            <div className="col-lg-6">
              <div className="position-relative mb-4">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="img-fluid rounded bg-light object-contain"
                  style={{
                    height: '400px',
                    width: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="d-flex flex-wrap gap-3">
                {product?.image?.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`border rounded ${selectedImage === imgSrc
                        ? 'border-primary border-2'
                        : 'border-light'
                      }`}
                    onClick={() => setSelectedImage(imgSrc)}
                    style={{
                      width: '80px',
                      height: '80px',
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`Product Thumbnail ${index + 1}`}
                      className="img-fluid h-100 w-100 p-2 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="col-lg-6">
              <h1 className="fw-bold mb-2">{product.name}</h1>
              <p className="text-muted mb-3">SKU: {product.sku}</p>

              <div className="mb-4">
                <span className="fs-3 fw-bold text-primary">
                  ${parseFloat(product.price).toFixed(2)}
                </span>
                <p className="text-muted small mb-0">
                  Price includes VAT. Free shipping on orders $75+
                </p>
              </div>

              <div className="mb-4">
                <label className="form-label">Quantity</label>
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center border rounded">
                    <button
                      className="btn btn-outline-secondary border-0 rounded-0"
                      onClick={decreaseQuantity}
                    >
                      <i className="bi bi-dash"></i>
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                      className="form-control text-center border-0 shadow-none"
                      style={{ width: '60px' }}
                    />
                    <button
                      className="btn btn-outline-secondary border-0 rounded-0"
                      onClick={increaseQuantity}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                  <span className="text-muted small">
                    {product.stockQuantity} available
                  </span>
                </div>
              </div>

              <div className="d-grid gap-3 mb-4">
                <button className="btn btn-primary py-3 fw-medium" onClick={addtocart}>
                  Add to Cart - ${(parseFloat(product.price) * quantity).toFixed(2)}
                </button>
              </div>

              <div className="d-flex justify-content-between small text-muted pt-3 border-top">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-truck"></i>
                  <span>Free shipping on orders $75+</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-arrow-counterclockwise"></i>
                  <span>30-day returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className='mt-5'>
            <RelatedProducts
              categoryId={product.categoryId}
              currentProductId={product.id}
            />
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
