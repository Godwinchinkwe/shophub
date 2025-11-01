import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Contact Us
        </motion.h1>

        <div className="contact-layout">
          <motion.div className="contact-info" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2>Get in Touch</h2>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            
            <div className="info-items">
              <div className="info-item"><FaPhone /><div><h4>Phone</h4><p>+1 (555) 123-4567</p></div></div>
              <div className="info-item"><FaEnvelope /><div><h4>Email</h4><p>support@shophub.com</p></div></div>
              <div className="info-item"><FaMapMarkerAlt /><div><h4>Address</h4><p>123 Shopping St, NY 10001</p></div></div>
              <div className="info-item"><FaClock /><div><h4>Hours</h4><p>Mon-Fri: 9AM-6PM</p></div></div>
            </div>
          </motion.div>

          <motion.div className="contact-form-container" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            {submitted && <div className="success-message">Message sent successfully!</div>}
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required />
              <textarea placeholder="Your Message" rows="6" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
