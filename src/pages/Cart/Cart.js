
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaShoppingCart,
} from 'react-icons/fa';

import { useCart } from '../../context/CartContext';
import './Cart.css';

const WHATSAPP_NUMBER = '2348064318819';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart,
  } = useCart();

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const subtotal = getCartTotal();
  

  const handleQuantityChange = (id, newQty) => {
    updateQuantity(id, newQty);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (!cartItems.length) return;
    setShowCheckoutModal(true);
  };

  const generateWhatsAppMessage = () => {
    let message = `Hello, I would like to place an order✅✅.%0A%0A`;

    message += `*Customer Details*:%0A`;
    message += `Name: ${customerData.name}%0A`;
    message += `Phone: ${customerData.phone}%0A`;
    message += `Address: ${customerData.address}%0A%0A`;

    message += `*Order Items*:%0A`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}%0A`;
      message += `Qty: ${item.quantity}%0A`;
       message += `Product Image: ${window.location.origin}${item.image}%0A`;
      message += `Unit Price: ₦${Number(item.price).toLocaleString()}%0A`;
      message += `Subtotal: ₦${Number(item.price * item.quantity).toLocaleString()}%0A%0A`;
    });

      message += `-----------------------------------%0A`;
  message += `*PAYMENT SUMMARY*%0A`;
  // message += `Subtotal: ₦${Number(totalAmount).toLocaleString()}%0A`;
  message += `Delivery: Based on Location%0A`;
  message += `*TOTAL: ₦${Number(subtotal).toLocaleString()}*%0A%0A`;

  // FOOTER
  message += `Thank you for shopping with us! 🙏`;

    // message += `Total Amount: ₦${Number(subtotal).toLocaleString()}`;
    

    return message;
  };

  const handleWhatsAppOrder = () => {
    const { name, phone, address } = customerData;

    if (!name || !phone || !address) {
      alert('Please fill in all customer details.');
      return;
    }
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`;

    window.open(whatsappUrl, '_blank');

    clearCart();
    setShowCheckoutModal(false);

    setCustomerData({
      name: '',
      phone: '',
      address: '',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!cartItems.length) {
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
                  <p>₦{Number(item.price).toLocaleString()}</p>
                </div>

                <div className="cart-item-quantity">
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                    <FaPlus />
                  </button>
                </div>

                <div className="cart-item-total">
                  ₦{Number(item.price * item.quantity).toLocaleString()}
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
              <span>₦{Number(subtotal).toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>FREE</span>
            </div>

            <div className="summary-divider" />

            <div className="summary-row summary-total">
              <span>Total</span>
              <span>₦{Number(subtotal).toLocaleString()}</span>
            </div>

            <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
              Proceed to Order
            </button>

            <Link onClick={scrollToTop} to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {showCheckoutModal && (
            <motion.div
              className="payment-options-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCheckoutModal(false)}
            >
              <motion.div
                className="payment-options-modal"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="payment-modal-header">
                  <h2>Complete Your Order</h2>
                  <button onClick={() => setShowCheckoutModal(false)}>×</button>
                </div>
                <div className="checkout-form">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={customerData.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={customerData.phone}
                      onChange={handleInputChange}
                    />
                    <textarea
                      name="address"
                      placeholder="Delivery Address"
                      value={customerData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                

                <button
                  className="btn btn-primary proceed-payment-btn"
                  onClick={handleWhatsAppOrder}
                >
                  Send Order to WhatsApp
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cart;
