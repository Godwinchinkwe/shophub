import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaLaptop, 
  FaTshirt, 
  FaHome, 
  FaSpa, 
  FaDumbbell, 
  FaBook, 
  FaGamepad, 
  FaLeaf 
} from 'react-icons/fa';
import './CategoryCard.css';

const iconMap = {
  FaLaptop: FaLaptop,
  FaTshirt: FaTshirt,
  FaHome: FaHome,
  FaSpa: FaSpa,
  FaDumbbell: FaDumbbell,
  FaBook: FaBook,
  FaGamepad: FaGamepad,
  FaLeaf: FaLeaf
};

const CategoryCard = ({ category }) => {
  const IconComponent = iconMap[category.icon];

  return (
    <Link to={`/products?category=${category.id}`} className="category-card-link">
      <motion.div
        className="category-card"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="category-icon">
          {IconComponent && <IconComponent />}
        </div>
        <h3 className="category-name">{category.name}</h3>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
