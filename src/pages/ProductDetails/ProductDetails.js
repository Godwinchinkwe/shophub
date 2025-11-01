import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiZoomIn, FiX, FiStar } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import ProductCard from "../ProductCard/ProductCard"
import { productsDatabase } from '../../data/productsDatabase';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const product = productsDatabase.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showZoom, setShowZoom] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      if (product.sizes) setSelectedSize(product.sizes[0]);
      if (product.colors) setSelectedColor(product.colors[0]);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  const images = [product.image, product.image, product.image, product.image];
  const relatedProducts = productsDatabase
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 8);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    navigate('/checkout');
  };

  return (
    <div className="product-details-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> / 
          <Link to={`/products?category=${product.category}`}>{product.category}</Link> / 
          <span>{product.name}</span>
        </div>

        <div className="product-details-content">
          <div className="product-gallery">
            <div className="main-image">
              <img src={images[selectedImage]} alt={product.name} />
              <button className="zoom-btn" onClick={() => setShowZoom(true)}>
                <FiZoomIn />
              </button>
            </div>
            <div className="thumbnail-images">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className={selectedImage === idx ? 'active' : ''}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
          </div>

          <div className="product-information">
            <h1>{product.name}</h1>
            <div className="product-meta">
              <div className="rating">
                <FiStar className="star filled" />
                <span>{product.rating}</span>
                <span>({product.reviews} reviews)</span>
              </div>
              <span className={`stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="price-section">
              <span className="price">${product.price.toFixed(2)}</span>
            </div>

            <p className="product-description">{product.description}</p>

            {product.sizes && (
              <div className="size-selector">
                <label>Size:</label>
                <div className="size-options">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={selectedSize === size ? 'active' : ''}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && (
              <div className="color-selector">
                <label>Color:</label>
                <div className="color-options">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={selectedColor === color ? 'active' : ''}
                      onClick={() => setSelectedColor(color)}
                      style={{ background: color.toLowerCase() }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} />
                <button onClick={() => setQuantity(Math.min(10, quantity + 1))}>+</button>
              </div>
            </div>

            <div className="action-buttons">
              <motion.button
                className="btn btn-primary add-to-cart"
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiShoppingCart /> Add to Cart
              </motion.button>
              <motion.button
                className="btn btn-success buy-now"
                onClick={handleBuyNow}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Buy Now
              </motion.button>
              <motion.button
                className={`btn-icon wishlist ${isInWishlist(product.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiHeart />
              </motion.button>
            </div>

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✓ Added to cart!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tab-headers">
            <button
              className={activeTab === 'description' ? 'active' : ''}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={activeTab === 'specifications' ? 'active' : ''}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button
              className={activeTab === 'reviews' ? 'active' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({product.reviews})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="tab-pane">
                <p>{product.description}</p>
              </div>
            )}
            {activeTab === 'specifications' && product.specifications && (
              <div className="tab-pane">
                <table className="specifications-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="spec-label">{key}:</td>
                        <td className="spec-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="tab-pane">
                <div className="reviews-summary">
                  <div className="rating-score">
                    <span className="score">{product.rating}</span>
                    <FiStar className="star" />
                  </div>
                  <p>Based on {product.reviews} reviews</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>Related Products</h2>
            <div className="related-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showZoom && (
          <motion.div
            className="zoom-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowZoom(false)}
          >
            <button className="close-zoom" onClick={() => setShowZoom(false)}>
              <FiX />
            </button>
            <img src={images[selectedImage]} alt={product.name} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;
