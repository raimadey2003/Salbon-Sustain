// File: src/components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ visible, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-light border-start p-3 position-fixed top-0 end-0 vh-100 ${visible ? '' : 'd-none'}`} style={{ width: '200px', zIndex: 1000 }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="text-success mb-0">🏠 Dashboard</h6>
        <button className="btn btn-sm btn-outline-danger" onClick={toggleSidebar}>✖</button>
      </div>
      <ul className="list-unstyled">
        <li><button className="btn btn-link w-100 text-start" onClick={() => navigate('/')}>🏡 Home</button></li>
        <li><button className="btn btn-link w-100 text-start" onClick={() => navigate('/orders')}>🛒 Orders</button></li>
        <li><button className="btn btn-link w-100 text-start" onClick={() => navigate('/wishlist')}>❤️ Wishlist</button></li>
        <li><button className="btn btn-link w-100 text-start" onClick={() => navigate('/logout')}>🔓 Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;