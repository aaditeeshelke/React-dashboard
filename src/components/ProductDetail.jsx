import React from 'react';
import './ProductDetail.css'; // Import the custom CSS file

function ProductDetail() {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', imageUrl: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', imageUrl: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', imageUrl: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Description of Product 3' },
    { id: 4, name: 'Product 4', imageUrl: 'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Description of Product 4' },
    { id: 5, name: 'Product 5', imageUrl: 'https://images.unsplash.com/photo-1619603364904-c0498317e145?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Description of Product 5' },
    { id: 6, name: 'Product 6', imageUrl: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Description of Product 6' },
    // Add more dummy data as needed
  ];

  return (
    <div className="container">
      <h1>Products </h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
