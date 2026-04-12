import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaWhatsapp } from 'react-icons/fa';
import './Checkout.css';

const WHATSAPP_NUMBER = '2348064318819';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const directPurchase = location.state?.directPurchase;

  const itemsToCheckout = directPurchase
    ? [
        {
          ...directPurchase.product,
          quantity: directPurchase.quantity,
          selectedSize: directPurchase.selectedSize,
          selectedColor: directPurchase.selectedColor,
        },
      ]
    : cartItems;

  const totalAmount = directPurchase
    ? directPurchase.product.price * directPurchase.quantity
    : getCartTotal();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, phone, address, city } = formData;

    if (!fullName || !phone || !address || !city) {
      alert('Please fill all required fields.');
      return;
    }

    let message = `Hello, I would like to place an order.%0A%0A`;
    message += `Customer Details:%0A`;
    message += `Name: ${fullName}%0A`;
    message += `Phone: ${phone}%0A`;
    message += `Address: ${address}, ${city}%0A%0A`;
    message += `Order Items:%0A`;

    itemsToCheckout.forEach((item, index) => {
      message += `${index + 1}. ${item.name}%0A`;
      message += `Qty: ${item.quantity}%0A`;
      if (item.selectedSize) message += `Size: ${item.selectedSize}%0A`;
      if (item.selectedColor) message += `Color: ${item.selectedColor}%0A`;
      // message += `Product Image: ${window.location.origin}${item.image}%0A`;
      message += `Price: ₦${Number(item.price).toLocaleString()}%0A`;
      message += `Subtotal: ₦${Number(item.price * item.quantity).toLocaleString()}%0A%0A`;
      // if (item.image) {
      // message += `Product Image: ${window.location.origin}${item.image}%0A`;
      // }
       message += `%0A`;
    });
      // PAYMENT SUMMARY
  message += `------------------------------------%0A`;
  message += `*PAYMENT SUMMARY*%0A`;
  // message += `Subtotal: ₦${Number(totalAmount).toLocaleString()}%0A`;
  message += `Delivery: FREE%0A`;
  message += `*TOTAL: ₦${Number(totalAmount).toLocaleString()}*%0A%0A`;

  // FOOTER
  message += `Thank you for shopping with us! 🙏`;

    // message += `Total Amount: ₦${Number(totalAmount).toLocaleString()}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(whatsappUrl, '_blank');

    if (!directPurchase) {
      clearCart();
    }

    // navigate('/');
    setTimeout(() => {
   navigate('/');
}, 1500);
  };

  if (!itemsToCheckout.length) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">Complete Your Order</h1>

        <div className="checkout-layout">
          <div className="checkout-form-section">
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-section">
                <h3>Customer Information</h3>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Delivery Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <FaWhatsapp /> Send Order to WhatsApp
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>

            <div className="summary-items">
              {itemsToCheckout.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />

                  <div>
                    <p>{item.name}</p>
                    <span>Qty: {item.quantity}</span>
                  </div>

                  <span className="item-price">
                    ₦{Number(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₦{Number(totalAmount).toLocaleString()}</span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>Based on Location</span>
              </div>

              <div className="summary-divider" />

              <div className="summary-row summary-total">
                <span>Total</span>
                <span>₦{Number(totalAmount).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
