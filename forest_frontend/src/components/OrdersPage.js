import React, { useState } from 'react';
import Footer from './Footer';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const OrdersPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const mockOrders = [
    { id: 101, name: "Sal Leaf Plates", image: "/images/sal-plate.jpg", status: "Delivered" },
    { id: 102, name: "Organic Honey", image: "/images/honey.jpg", status: "Shipped" },
    { id: 103, name: "Bamboo Basket", image: "/images/basket.jpg", status: "Packed" },
  ];

  return (
    <div className="container-fluid">
      <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar visible={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
      <div className="p-4">
        <h4 className="text-success mb-4">🛒 Recent Orders</h4>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {mockOrders.map(order => (
            <div className="col" key={order.id}>
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={order.image} className="img-fluid rounded-start" alt={order.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{order.name}</h5>
                      <p className="card-text">Order #{order.id}</p>
                      <p className="card-text">
                        <small className="text-muted">Status: {order.status}</small>
                      </p>
                    </div>
                  </div>
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

export default OrdersPage;
