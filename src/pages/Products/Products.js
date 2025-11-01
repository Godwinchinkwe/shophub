import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../ProductCard/ProductCard';
import { productsDatabase, categories } from '../../data/productsDatabase';
import { FaFilter, FaTimes } from 'react-icons/fa';
import './Products.css';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(productsDatabase);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let products = [...productsDatabase];
    
    // Category filter from URL
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
      products = products.filter(p => p.category === category);
    }
    
    // Search filter from URL
    const search = searchParams.get('search');
    if (search) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Sale filter from URL
    const sale = searchParams.get('sale');
    if (sale === 'true') {
      products = products.filter(p => p.badge === 'sale');
    }
    
    // New filter from URL
    const newFilter = searchParams.get('filter');
    if (newFilter === 'new') {
      products = products.filter(p => p.badge === 'new');
    }
    
    // Apply price range
    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    
    setFilteredProducts(products);
  }, [searchParams, selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    let products = category === 'all' ? productsDatabase : productsDatabase.filter(p => p.category === category);
    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    setFilteredProducts(products);
  };

  return (
    <div className="products-page">
      <div className="container">
        <div className="products-layout">
          {/* Filters Sidebar */}
          <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
            <div className="filters-header">
              <h3>Filters</h3>
              <button className="close-filters" onClick={() => setShowFilters(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <h4>Categories</h4>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'all'}
                    onChange={() => handleCategoryChange('all')}
                  />
                  <span>All Products</span>
                </label>
                {categories.map(cat => (
                  <label key={cat.id} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.id}
                      onChange={() => handleCategoryChange(cat.id)}
                    />
                    <span>{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="filter-group">
              <h4>Price Range</h4>
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                />
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-content">
            <div className="products-header">
              <h1>{filteredProducts.length} Products</h1>
              <div className="products-controls">
                <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                  <FaFilter /> Filters
                </button>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A-Z</option>
                </select>
              </div>
            </div>

            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
