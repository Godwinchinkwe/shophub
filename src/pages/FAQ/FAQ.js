import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './FAQ.css';

const faqData = [
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers.' },
  { q: 'How long does shipping take?', a: 'Standard shipping takes 3-5 business days. Express shipping is available.' },
  { q: 'What is your return policy?', a: 'We offer a 30-day return policy for all items in original condition.' },
  { q: 'Do you ship internationally?', a: 'Yes, we ship to over 50 countries worldwide.' },
  { q: 'How can I track my order?', a: 'You will receive a tracking number via email once your order ships.' },
  { q: 'Are there any shipping fees?', a: 'Free shipping on orders over $50. Standard rates apply otherwise.' },
  { q: 'How do I create an account?', a: 'Click on "My Account" and follow the registration process.' },
  { q: 'Can I cancel my order?', a: 'You can cancel within 24 hours of placing your order.' }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="faq-page">
      <div className="container">
        <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Frequently Asked Questions
        </motion.h1>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <button className="faq-question" onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                <span>{faq.q}</span>
                <FaChevronDown className={activeIndex === index ? 'rotate' : ''} />
              </button>
              {activeIndex === index && (
                <motion.div className="faq-answer" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
