import React from "react";
import './ProductPage.css';

export default function ProductPage({ product }) {
  return (
    <div className="container">
      <div className="product-card">
        <div className="image-container">
          <img src={product.productImage} alt="Product" className="product-image" />
        </div>
        <div className="product-details">
          <h3 className="product-title">{product.productName}</h3>
          <p className="product-description">Indoor Plant, Low maintenance</p>

          <div className="price-rating-container">
            <h2 className="product-price">
              <span className="discounted-price">₹{product.discountedPrice}</span>
              <span className="original-price">₹{product.originalPrice}</span>
            </h2>
            <div className="product-rating">
              <span>⭐⭐⭐⭐⭐</span> {product.rating}
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-btn btn btn-success">Add to cart</button>
            <button className="buy-rent-btn btn btn-outline-secondary">Buy on Rent</button>
          </div>
        </div>
      </div>
    </div>
    // <div className="product">
    //     <div className="img">
    //         <img src={product.productImage} />  

    //     </div>
    //     <div className="details">
    //         <h3>{product.productName}</h3>
    //         <button className="add-to-cart-btn btn btn-success">view Product</button>
    //     </div>
    // </div>
  );
}
// import React, { useContext } from "react";
// import { CartContext } from './CartContext'; // Import the CartContext
// import './ProductPage.css';

// export default function ProductPage({ product }) {
//   const { addToCart } = useContext(CartContext); // Use the context

//   return (
//     <div className="product">
//       <div className="img">
//         <img src={product.productImage} alt={product.productName} />
//       </div>
//       <div className="details">
//         <h3>{product.productName}</h3>
//         <button 
//           className="add-to-cart-btn btn btn-success" 
//           onClick={() => addToCart(product)} // Add to cart on click
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
