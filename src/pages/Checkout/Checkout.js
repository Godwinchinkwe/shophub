import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { FaCreditCard, FaLock } from 'react-icons/fa';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        
        <div className="checkout-layout">
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Shipping Information</h3>
                <div className="form-grid">
                  <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
                  <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
                  <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                  <input type="tel" name="phone" placeholder="Phone" required onChange={handleChange} />
                </div>
                <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
                <div className="form-grid">
                  <input type="text" name="city" placeholder="City" required onChange={handleChange} />
                  <input type="text" name="zipCode" placeholder="Zip Code" required onChange={handleChange} />
                </div>
              </div>

              <div className="form-section">
                <h3><FaCreditCard /> Payment Information</h3>
                <input type="text" name="cardNumber" placeholder="Card Number" required onChange={handleChange} />
                <input type="text" name="cardName" placeholder="Name on Card" required onChange={handleChange} />
                <div className="form-grid">
                  <input type="text" name="expiryDate" placeholder="MM/YY" required onChange={handleChange} />
                  <input type="text" name="cvv" placeholder="CVV" required onChange={handleChange} />
                </div>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <FaLock /> Place Order - ${(getCartTotal() * 1.1).toFixed(2)}
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <span>Qty: {item.quantity}</span>
                  </div>
                  <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="summary-totals">
              <div className="summary-row"><span>Subtotal</span><span>${getCartTotal().toFixed(2)}</span></div>
              <div className="summary-row"><span>Shipping</span><span>FREE</span></div>
              <div className="summary-row"><span>Tax</span><span>${(getCartTotal() * 0.1).toFixed(2)}</span></div>
              <div className="summary-divider" />
              <div className="summary-row summary-total"><span>Total</span><span>${(getCartTotal() * 1.1).toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
