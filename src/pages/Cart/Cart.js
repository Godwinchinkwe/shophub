// import React from 'react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
// import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiCreditCard, FiDollarSign, FiCopy, FiCheck } from 'react-icons/fi';


import { FiShoppingBag, FiCreditCard, FiDollarSign, FiCopy, FiCheck } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const { cart = {},cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart() || {}
  // const { cart = [], removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart() || {};

  const navigate = useNavigate();
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [copiedAccount, setCopiedAccount] = useState(false);


  const shippingFee = cart.length > 0 ? 15.00 : 0;
  const subtotal = getCartTotal();
  const total = subtotal + shippingFee;

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="container">
          <FaShoppingCart className="empty-icon" />
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

   const handleCheckout = () => {
    if (cart.length === 0) return;
    setShowPaymentOptions(true);
  };

   const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

   const handleCopyAccount = () => {
    navigator.clipboard.writeText('1234567890');
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

    const handleProceedPayment = () => {
    if (selectedPayment === 'card') {
      navigate('/checkout');
    } else if (selectedPayment === 'bank') {
      // In a real app, this would redirect to order confirmation
      alert('Please make your bank transfer to the account number provided. Once payment is confirmed, your order will be processed.');
    }
  };

    const bankInfo = {
    accountName: "Godwin Odinakachi Chinkwe",
    accountNumber: "8064318819",
    bankName: "Paycom ",
    routingNumber: "987654321"
  };

   if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <motion.div 
            className="empty-cart"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiShoppingBag className="empty-cart-icon" />
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <motion.button
              className="btn btn-primary"
              onClick={() => navigate('/products')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue Shopping
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }




































  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>
        
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="cart-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img src={item.image} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>

                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <FaPlus />
                  </button>
                </div>

                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            
            <div className="summary-row">
              <span>Tax</span>
              <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
            </div>
            
            <div className="summary-divider" />
            
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
            </div>

            <button
              className="btn btn-primary checkout-btn"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>

            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>






         <AnimatePresence>
          {showPaymentOptions && (
            <motion.div
              className="payment-options-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPaymentOptions(false)}
            >
              <motion.div
                className="payment-options-modal"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="payment-modal-header">
                  <h2>Select Payment Method</h2>
                  <button 
                    className="close-modal-btn"
                    onClick={() => setShowPaymentOptions(false)}
                  >
                    ×
                  </button>
                </div>

                <div className="payment-methods">
                  {/* Credit/Debit Card Option */}
                  <motion.div
                    className={`payment-method-card ${selectedPayment === 'card' ? 'selected' : ''}`}
                    onClick={() => handlePaymentSelect('card')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="payment-method-icon">
                      <FiCreditCard />
                    </div>
                    <div className="payment-method-content">
                      <h3>Credit / Debit Card</h3>
                      <p>Pay securely with your card</p>
                    </div>
                    <div className="payment-method-radio">
                      <input
                        type="radio"
                        name="payment"
                        checked={selectedPayment === 'card'}
                        onChange={() => handlePaymentSelect('card')}
                      />
                    </div>
                  </motion.div>

                  {/* Bank Transfer Option */}
                  <motion.div
                    className={`payment-method-card ${selectedPayment === 'bank' ? 'selected' : ''}`}
                    onClick={() => handlePaymentSelect('bank')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="payment-method-icon">
                      <FiDollarSign />
                    </div>
                    <div className="payment-method-content">
                      <h3>Bank Transfer</h3>
                      <p>Transfer directly to our bank account</p>
                    </div>
                    <div className="payment-method-radio">
                      <input
                        type="radio"
                        name="payment"
                        checked={selectedPayment === 'bank'}
                        onChange={() => handlePaymentSelect('bank')}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Bank Transfer Details */}
                <AnimatePresence>
                  {selectedPayment === 'bank' && (
                    <motion.div
                      className="bank-transfer-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bank-info-card">
                        <h4>Bank Account Details</h4>
                        
                        <div className="bank-info-row">
                          <span className="bank-label">Account Name:</span>
                          <span className="bank-value">{bankInfo.accountName}</span>
                        </div>

                        <div className="bank-info-row">
                          <span className="bank-label">Account Number:</span>
                          <div className="bank-value-copy">
                            <span className="bank-value">{bankInfo.accountNumber}</span>
                            <motion.button
                              className="copy-btn"
                              onClick={handleCopyAccount}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {copiedAccount ? <FiCheck /> : <FiCopy />}
                            </motion.button>
                          </div>
                        </div>

                        <div className="bank-info-row">
                          <span className="bank-label">Bank Name:</span>
                          <span className="bank-value">{bankInfo.bankName}</span>
                        </div>

                        <div className="bank-info-row">
                          <span className="bank-label">Routing Number:</span>
                          <span className="bank-value">{bankInfo.routingNumber}</span>
                        </div>

                        <div className="bank-info-row amount-row">
                          <span className="bank-label">Amount to Transfer:</span>
                          <span className="bank-value amount">${total.toFixed(2)}</span>
                        </div>

                        <div className="bank-transfer-note">
                          <p><strong>Important:</strong> Please include your order reference in the transfer description. You will receive a confirmation email with your order details.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                      <motion.button
                  className={`btn btn-primary proceed-payment-btn ${!selectedPayment ? 'disabled' : ''}`}
                  onClick={handleProceedPayment}
                  disabled={!selectedPayment}
                  whileHover={selectedPayment ? { scale: 1.02 } : {}}
                  whileTap={selectedPayment ? { scale: 0.98 } : {}}
                >
                  {selectedPayment === 'card' ? 'Proceed to Payment' : 'Confirm Bank Transfer'}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cart;


