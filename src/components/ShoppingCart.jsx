// import React from 'react';

// const ShoppingCart = ({ cart, removeFromCart }) => {
//   return (
//     <div className="shopping-cart">
//       <h2>Your Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.title} />
//               <div className="item-details">
//                 <h3>{item.title}</h3>
//                 <p>Price: ${item.price}</p>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       {cart.length > 0 && <div className="cart-total">Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</div>}

//       <button className="checkout-button">Proceed to Checkout</button>

//     </div>
//   );
// };

// export default ShoppingCart;

// import React from 'react';

// const ShoppingCart = ({ cart, removeFromCart, updateQuantity }) => {
//   return (
//     <div className="shopping-cart">
//       <h2>Your Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.title} />
//               <div className="item-details">
//                 <h3>{item.title}</h3>
//                 <p>Price: ${item.price}</p>
//                 <input
//                   type="number"
//                   min="1"
//                   value={item.quantity}
//                   onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
//                 />
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       {cart.length > 0 && (
//         <div className="cart-total">
//           Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
//         </div>
//       )}
//       {cart.length > 0 && <button className="checkout-button">Proceed to Checkout</button>}
//     </div>
//   );
// };

// export default ShoppingCart;

// import React from 'react';

// const ShoppingCart = ({ cart, removeFromCart, updateQuantity }) => {
//   return (
//     <div className="shopping-cart">
//       <h2>Your Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.title} />
//               <div className="item-details">
//                 <h3>{item.title}</h3>
//                 <p>Price: ${item.price}</p>
//                 <input
//                   type="number"
//                   min="1"
//                   value={item.quantity}
//                   onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
//                 />
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       {cart.length > 0 && (
//         <div className="cart-total">
//           Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
//         </div>
//       )}
//       {cart.length > 0 && <button className="checkout-button">Proceed to Checkout</button>}
//     </div>
//   );
// };

// export default ShoppingCart;

import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2> <br/>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button> {/* Pass item.id here */}
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </div>
      )}
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default ShoppingCart;
