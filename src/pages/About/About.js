import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaAward, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    { icon: <FaRocket />, title: 'Fast Delivery', desc: 'Quick delivery to your doorstep' },
    { icon: <FaUsers />, title: 'Customer First', desc: 'Your satisfaction is our priority' },
    { icon: <FaAward />, title: 'Quality Products', desc: 'Only the best for our customers' },
    { icon: <FaHeart />, title: 'Trusted Brand', desc: 'Loved by thousands of customers' }
  ];

  return (
    <div className="about-page">
      <div className="container">
        <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          About GeeLuxe
        </motion.h1>
        
        <motion.div className="about-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="about-text">
            <h2>Your Trusted Online Shopping Destination</h2>
            <p>Welcome to GeeLuxe, where quality meets convenience. Since our founding, we've been committed to providing our customers with the best products at competitive prices.</p>
            <p>We offer a wide range of products across multiple categories including Luxury Wrist Watches, Accessories, fashion, home goods, and more. Our mission is to make online shopping easy, enjoyable, and accessible for everyone.</p>
            <p>With Hundreds of satisfied customers Nationwide, we continue to grow and improve our services every day. Thank you for choosing GeeLuxe as your preferred shopping destination.</p>
          </div>
          
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800" alt="About Us" />
          </div>
        </motion.div>

        <div className="features-section">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div key={index} className="feature-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
