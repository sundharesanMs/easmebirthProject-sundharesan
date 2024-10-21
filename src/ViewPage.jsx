import React, { useState } from 'react'; 
import data from './assets/products.json';
import ProductPage from './ProductPage';
import './ViewPage.css';

export default function ViewPage() {
 
  const [products] = useState(data);

  return (
    <>
      <div className='product-container'>
      <div className="filter-header">
          <h4>Filter</h4>
          <button className="clear-btn">CLEAR ALL</button>
        </div>

        <div className="filter-item">
          <h5>Type of Plants</h5>
          {/* Add filter options here */}
        </div>

        <div className="filter-item">
          <h5>Price</h5>
          {/* Add filter options here */}
        </div>

        <div className="filter-item">
          <h5>Nursery</h5>
          {/* Add filter options here */}
        </div>

        <div className="sort-bar">
          <span>300 products</span>
          <select className="sort-dropdown">
            <option value="default">SORT BY</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
        {products.map((product) => (
          <div key={product.id}> {/* Correct key usage */}
            <ProductPage product={product} />
          </div> // Close this div correctly
        ))} {/* Close the map function properly */}
        
    
      </div>
    </>
  );
}

