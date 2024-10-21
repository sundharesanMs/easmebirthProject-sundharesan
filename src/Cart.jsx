import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>{product.productName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
