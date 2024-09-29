import React, { useState } from 'react';

const ProductCard = ({ product, addToCart, isInCart, removeFromCart }) => {
  const [addedMessage, setAddedMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
      {addedMessage && <p>Added to Cart!</p>}
    </div>
  );
};

export default ProductCard;
