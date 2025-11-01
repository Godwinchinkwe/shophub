import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaShoppingBag,
  FaCreditCard,
  FaShieldAlt,
  FaTruck,
  FaHeadset
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      {/* Features Section */}
      <div className="footer-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <FaTruck className="feature-icon" />
              <div>
                <h4>Free Shipping</h4>
                <p>On orders over $50</p>
              </div>
            </div>
            <div className="feature-item">
              <FaShieldAlt className="feature-icon" />
              <div>
                <h4>Secure Payment</h4>
                <p>100% protected</p>
              </div>
            </div>
            <div className="feature-item">
              <FaCreditCard className="feature-icon" />
              <div>
                <h4>Easy Returns</h4>
                <p>30-day return policy</p>
              </div>
            </div>
            <div className="feature-item">
              <FaHeadset className="feature-icon" />
              <div>
                <h4>24/7 Support</h4>
                <p>Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-column">
              <div className="footer-logo">
                <FaShoppingBag />
                <span>ShopHub</span>
              </div>
              <p className="footer-description">
                Your one-stop online shopping destination for electronics, fashion, 
                home goods, and more. Quality products at great prices.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Shop</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer-column">
              <h3>Categories</h3>
              <ul className="footer-links">
                <li><Link to="/products?category=electronics">Electronics</Link></li>
                <li><Link to="/products?category=fashion">Fashion</Link></li>
                <li><Link to="/products?category=home">Home & Living</Link></li>
                <li><Link to="/products?category=beauty">Beauty</Link></li>
                <li><Link to="/products?category=sports">Sports</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-column">
              <h3>Newsletter</h3>
              <p>Subscribe to get special offers and updates</p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 ShopHub. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/faq">Privacy Policy</Link>
              <Link to="/faq">Terms of Service</Link>
              <Link to="/contact">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
