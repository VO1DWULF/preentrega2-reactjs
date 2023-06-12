import React from 'react';


const Cart = ({ cart }) => {
    return (
      <div>
        <h2>Cart</h2>
        {cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            {/* Add any additional information you want to display */}
          </div>
        ))}
      </div>
    );
  };
  
export default Cart;