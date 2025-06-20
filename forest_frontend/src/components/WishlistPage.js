// File: src/components/WishlistPage.js
import React, { useState } from 'react';
import Footer from './Footer';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const WishlistPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const wishlistItems = [
    { id: 1, name: "Neem Wood Comb", image: "/images/comb.jpg", price: "₹100" },
    { id: 2, name: "Organic Honey", image: "/images/honey.jpg", price: "₹450" },
  ];

  return (
    <div className="container-fluid">
      <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar visible={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />

      <div className="p-4">
        <h4 className="text-success mb-4">❤️ Wishlist</h4>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {wishlistItems.map(item => (
            <div className="col" key={item.id}>
              <div className="card border-warning h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-success">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WishlistPage;
