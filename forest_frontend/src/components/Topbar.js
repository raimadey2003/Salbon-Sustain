// File: src/components/Topbar.js
import React from 'react';

const Topbar = ({ toggleSidebar }) => (
  <nav className="navbar navbar-light bg-success text-white px-3 d-flex justify-content-between">
    <h4 className="text-white mb-0">🌿 Salbon Sustain</h4>
    <button className="btn btn-outline-light" onClick={toggleSidebar}>☰</button>
  </nav>
);

export default Topbar;