// File: src/components/BuyerDashboard.js
import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const BuyerDashboard = () => {
  return (
    <div className="container-fluid">
      <Topbar toggleSidebar={() => {}} />
      <Sidebar visible={true} toggleSidebar={() => {}} />
      <div className="p-4">
        <h2 className="text-success">Welcome to Your Dashboard</h2>
        <p>More personalized content and orders can go here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerDashboard;
