import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { FaShoppingCart, FaHeart, FaStar, FaRegHeart } from 'react-icons/fa';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const navigate = useNavigate();
  const inWishlist = isInWishlist(product.id);

  // const handleAddToCart = () => {
  //   addToCart(product);
  // };

  const handleAddToCart = (e) => {
   e.stopPropagation();
     addToCart(product);
   };

  // const handleWishlistToggle = () => {
  //   if (inWishlist) {
  //     removeFromWishlist(product.id);
  //   } else {
  //     addToWishlist(product);
  //   }
  // };

  const handleWishlistToggle = (e) => {
 e.stopPropagation();
     if (inWishlist) {
       removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star half" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star" />);
    }

    return stars;
  };

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
       onClick={() => navigate(`/product/${product.id}`)}
 style={{ cursor: 'pointer' }}
>
      
      {/* Product Image */}
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        
        {/* Badges */}
        <div className="product-badges">
          {product.badge === 'sale' && discount > 0 && (
            <span className="badge badge-sale">-{discount}%</span>
          )}
          {product.badge === 'new' && <span className="badge badge-new">New</span>}
          {product.badge === 'bestseller' && <span className="badge badge-bestseller">Bestseller</span>}
        </div>

        {/* Quick Actions */}
        <div className="product-quick-actions">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`quick-action-btn ${inWishlist ? 'active' : ''}`}
            onClick={handleWishlistToggle}
          >
            {inWishlist ? <FaHeart /> : <FaRegHeart />}
          </motion.button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">{renderStars(product.rating)}</div>
          <span className="reviews-count">({product.reviews})</span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <div className="product-price">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="old-price">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <FaShoppingCart /> Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
