import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { FaHeart, FaUser, FaBox } from 'react-icons/fa';
import ProductCard from '../ProductCard/ProductCard';
import './Account.css';

const Account = () => {
  const { wishlistItems } = useCart();
  const [activeTab, setActiveTab] = useState('wishlist');

  return (
    <div className="account-page">
      <div className="container">
        <h1 className="page-title">My Account</h1>
        
        <div className="account-tabs">
          <button className={activeTab === 'wishlist' ? 'active' : ''} onClick={() => setActiveTab('wishlist')}>
            <FaHeart /> Wishlist
          </button>
          <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
            <FaUser /> Profile
          </button>
          <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>
            <FaBox /> Orders
          </button>
        </div>

        {activeTab === 'wishlist' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {wishlistItems.length === 0 ? (
              <div className="empty-state">
                <FaHeart className="empty-icon" />
                <h3>Your wishlist is empty</h3>
                <p>Add products you love to your wishlist</p>
              </div>
            ) : (
              <div className="products-grid">
                {wishlistItems.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'profile' && (
          <motion.div className="profile-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="profile-card">
              <h3>Profile Information</h3>
              <form className="profile-form">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone" />
                <button type="submit" className="btn btn-primary">Update Profile</button>
              </form>
            </div>
          </motion.div>
        )}

        {activeTab === 'orders' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="empty-state">
              <FaBox className="empty-icon" />
              <h3>No orders yet</h3>
              <p>Start shopping to see your orders here</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Account;
