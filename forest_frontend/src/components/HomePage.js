// File: src/components/HomePage.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

const HomePage = () => {
  const [filter, setFilter] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [products] = useState([
    { id: 1, name: "Sal Leaf Plates", category: "Leaf", image: "/images/sal-plate.jpg", price: "₹150", description: "Eco-friendly disposable plates." },
    { id: 2, name: "Organic Honey", category: "Honey", image: "/images/honey.jpg", price: "₹450", description: "Pure and raw honey from Sal forest." },
    { id: 3, name: "Bamboo Basket", category: "Bamboo", image: "/images/basket.jpg", price: "₹250", description: "Handwoven basket using local bamboo." },
    { id: 4, name: "Neem Wood Comb", category: "Wood", image: "/images/comb.jpg", price: "₹100", description: "Natural wood comb for healthy hair." }
  ]);

  const [viewProduct, setViewProduct] = useState(null);

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const item = cart.find(p => p.id === id);
    if (item.quantity > 1) {
      setCart(cart.map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p));
    } else {
      setCart(cart.filter(p => p.id !== id));
    }
  };

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="container-fluid">
      <Topbar toggleSidebar={toggleSidebar} />
      <Sidebar visible={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="mt-4">
        <div className="row align-items-center">
          <div className="col-md-3">
            <select className="form-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All Products</option>
              <option value="Leaf">Leaf Products</option>
              <option value="Honey">Honey</option>
              <option value="Bamboo">Bamboo</option>
              <option value="Wood">Wood Items</option>
            </select>
          </div>
        </div>

        <div className="row mt-3 row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {filteredProducts.map(product => {
            const cartItem = cart.find(item => item.id === product.id);
            return (
              <div className="col" key={product.id}>
                <div className="card h-100">
                  <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: '160px' }}>
                    <div>
                      <h5 className="card-title">{product.name}</h5>
                      <p>{product.price}</p>
                      <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setViewProduct(product)}>View</button>

                      {cartItem ? (
                        <div className="d-inline-flex align-items-center gap-2">
                          <button className="btn btn-danger btn-sm px-2" onClick={() => removeFromCart(product.id)}>-</button>
                          <span className="fw-bold">{cartItem.quantity}</span>
                          <button className="btn btn-success btn-sm px-2" onClick={() => addToCart(product)}>+</button>
                        </div>
                      ) : (
                        <button className="btn btn-success btn-sm me-2" onClick={() => addToCart(product)}>Add to Cart</button>
                      )}
                    </div>

                    <div className="mt-2">
                      {wishlist.find(item => item.id === product.id) ? (
                        <button className="btn btn-danger btn-sm" onClick={() => removeFromWishlist(product.id)}>❤️ Remove</button>
                      ) : (
                        <button className="btn btn-warning btn-sm" onClick={() => addToWishlist(product)}>❤️ Wishlist</button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {viewProduct && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content border-success">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">{viewProduct.name}</h5>
                <button type="button" className="btn-close" onClick={() => setViewProduct(null)}></button>
              </div>
              <div className="modal-body" style={{ backgroundColor: '#f0fff0' }}>
                <img src={viewProduct.image} alt={viewProduct.name} className="img-fluid mb-3 border border-success rounded" />
                <p className="text-muted">{viewProduct.description}</p>
                <p className="text-success fw-bold">Price: {viewProduct.price}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline-success" onClick={() => setViewProduct(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;