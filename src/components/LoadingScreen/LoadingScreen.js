import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

/**
 * LoadingScreen Component
 * Displays an animated loading screen with hotel icon
 */
const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader">
        <div className="loader-icon">🏨</div>
        <div className="loader-text"><h1>Geehub Shopping Plaza</h1></div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
