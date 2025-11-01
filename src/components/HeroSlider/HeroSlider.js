import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    title: 'Summer Sale',
    subtitle: 'Up to 50% Off',
    description: 'Discover amazing deals on electronics, fashion, and more',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200',
    cta: 'Shop Now',
    link: '/products?sale=true'
  },
  {
    id: 2,
    title: 'New Arrivals',
    subtitle: 'Latest Products',
    description: 'Check out the newest additions to our collection',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
    cta: 'Explore New',
    link: '/products?filter=new'
  },
  {
    id: 3,
    title: 'Electronics Sale',
    subtitle: 'Gadgets & More',
    description: 'Amazing prices on the latest tech and electronics',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200',
    cta: 'Shop Electronics',
    link: '/products?category=electronics'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="hero-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-slide-image">
            <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
          </div>
          
          <div className="hero-slide-content">
            <div className="container">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="hero-title">{slides[currentSlide].title}</h1>
                <h2 className="hero-subtitle">{slides[currentSlide].subtitle}</h2>
                <p className="hero-description">{slides[currentSlide].description}</p>
                <Link to={slides[currentSlide].link} className="btn btn-primary hero-cta">
                  {slides[currentSlide].cta}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <button className="hero-nav hero-prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="hero-nav hero-next" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
