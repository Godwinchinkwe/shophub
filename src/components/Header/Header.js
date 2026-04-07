import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';
import { 
  FaShoppingBag, 
  FaShoppingCart, 
  FaHeart, 
  FaSearch,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { getCartCount, wishlistItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 Centralized active checker
  const isActive = (path, queryKey = null, queryValue = null) => {
    if (queryKey && queryValue) {
      return location.pathname === path && new URLSearchParams(location.search).get(queryKey) === queryValue;
    }
    return location.pathname === path && !location.search;
  };

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    scrollToTop();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">

            {/* Logo */}
            <Link onClick={scrollToTop} to="/" className="logo">
              <FaShoppingBag />
              <span>GeeHub</span>
            </Link>

            {/* Search */}
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

            {/* Actions */}
            <div className="header-actions">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="header-action">
                <Link onClick={scrollToTop} to="/account">
                  <FaHeart />
                  {wishlistItems.length > 0 && (
                    <span className="badge">{wishlistItems.length}</span>
                  )}
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="header-action cart-action">
                <Link onClick={scrollToTop} to="/cart">
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

            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={handleNavClick}
              >
                Home
              </Link>
            </li>

            <li>
              <Link 
                to="/products" 
                className={isActive('/products') ? 'active' : ''}
                onClick={handleNavClick}
              >
                All Products
              </Link>
            </li>

            <li>
              <Link 
                to="/products?category=watches" 
                className={isActive('/products', 'category', 'watches') ? 'active' : ''}
                onClick={handleNavClick}
              >
                Wrist Watches
              </Link>
            </li>

            <li>
              <Link 
                to="/products?category=accessories" 
                className={isActive('/products', 'category', 'accessories') ? 'active' : ''}
                onClick={handleNavClick}
              >
                Accessories
              </Link>
            </li>

            <li>
              <Link 
                to="/products?category=home" 
                className={isActive('/products', 'category', 'home') ? 'active' : ''}
                onClick={handleNavClick}
              >
                Home & Living
              </Link>
            </li>

            <li>
              <Link 
                to="/products?category=beauty" 
                className={isActive('/products', 'category', 'beauty') ? 'active' : ''}
                onClick={handleNavClick}
              >
                Beauty
              </Link>
            </li>

            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={handleNavClick}
              >
                About
              </Link>
            </li>

            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={handleNavClick}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </nav>

    </header>
  );
};

export default Header;
