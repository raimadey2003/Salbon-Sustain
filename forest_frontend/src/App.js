// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import OrdersPage from './components/OrdersPage';
import WishlistPage from './components/WishlistPage';
import BuyerDashboard from './components/BuyerDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<BuyerDashboard />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/logout" element={<h2 className="text-center mt-5 text-muted">🔓 Logged out. You can add a login page later.</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
