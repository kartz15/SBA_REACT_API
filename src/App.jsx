// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import ProductList from './components/ProductList';
// import ShoppingCart from './components/ShoppingCart';
// import './App.css';
// import Footer from './components/Footer';


// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter(item => item.id !== id));
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header cartCount={cart.length} />
//         <Routes>
//           <Route 
//             path="/" 
//             element={<ProductList addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />} 
//           />
//           <Route 
//             path="/cart" 
//             element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} 
//           />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import ImageCarousel from './components/ImageCarousel';
import ContactUs from './components/ContactUs';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]);
  const [productImages, setProductImages] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const randomImages = data.map(product => product.image); 
      setProductImages(randomImages);
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="App">
      <div className='marquee'> 
        <p>We’ve lowered prices on thousands of items storewide!</p>
      </div>
        <Header cartCount={cart.length} />
        <ImageCarousel images={productImages} /> 
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/contactUs" element={<ContactUs/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
