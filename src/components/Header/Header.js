import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';
import { 
  FaShoppingBag, 
  FaShoppingCart, 
  FaHeart, 
  FaUser, 
  FaSearch,
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { getCartCount, wishlistItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <span><FaPhone /> +2348064318819</span>
              <span><FaEnvelope /> Devodinakachi@gmail.com</span>
            </div>
            <div className="top-bar-right">
              <Link to="/account"><FaUser /> My Account</Link>
              <Link to="/faq">Help</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <FaShoppingBag />
              <span>GeeHub</span>
            </Link>

            {/* Search Bar */}
            <form className="search-bar" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>

            {/* Header Actions */}
            <div className="header-actions">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="header-action"
              >
                <Link to="/account">
                  <FaHeart />
                  {wishlistItems.length > 0 && (
                    <span className="badge">{wishlistItems.length}</span>
                  )}
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="header-action cart-action"
              >
                <Link to="/cart">
                  <FaShoppingCart />
                  {getCartCount() > 0 && (
                    <span className="badge">{getCartCount()}</span>
                  )}
                </Link>
              </motion.div>

              <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="container">
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>All Products</Link></li>
            <li><Link to="/products?category=electronics" onClick={() => setIsMobileMenuOpen(false)}>Electronics</Link></li>
            <li><Link to="/products?category=fashion" onClick={() => setIsMobileMenuOpen(false)}>Fashion</Link></li>
            <li><Link to="/products?category=home" onClick={() => setIsMobileMenuOpen(false)}>Home & Living</Link></li>
            <li><Link to="/products?category=beauty" onClick={() => setIsMobileMenuOpen(false)}>Beauty</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
