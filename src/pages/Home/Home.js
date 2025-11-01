import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import ProductCard from '../ProductCard/ProductCard';
import { productsDatabase, categories } from '../../data/productsDatabase';
import './Home.css';

const Home = () => {
  const featuredProducts = productsDatabase
    .filter(p => p.badge === 'bestseller' || p.badge === 'new')
    .slice(0, 8);

  return (
    <div className="home-page">
      <div className="container">
        {/* Hero Slider */}
        <HeroSlider />

       
    

        {/* Featured Products */}
        <section className="featured-section">
          <div className="section-header">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured Products
            </motion.h2>
            <Link to="/products" className="btn btn-outline">
              View All Products
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </section>

         {/* Categories Section */}
            <section className="categories-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Shop by Category
          </motion.h2>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="promo-section">
          <div className="promo-grid">
            <motion.div
              className="promo-card promo-large"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="promo-content">
                <span className="promo-label">Special Offer</span>
                <h3>Electronics Sale</h3>
                <p>Save up to 40% on selected electronics</p>
                <Link to="/products?category=electronics" className="btn btn-primary">
                  Shop Electronics
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="promo-card promo-small"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="promo-content">
                <span className="promo-label">New</span>
                <h3>Fashion Collection</h3>
                <p>Latest trends in fashion</p>
                <Link to="/products?category=fashion" className="btn btn-outline">
                  Discover
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="promo-card promo-small"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="promo-content">
                <span className="promo-label">Hot</span>
                <h3>Home Essentials</h3>
                <p>Upgrade your living space</p>
                <Link to="/products?category=home" className="btn btn-outline">
                  Shop Now
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
