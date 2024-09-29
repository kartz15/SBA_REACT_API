import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ cartCount }) => {
  return (
    <header className="header">
        <Link to="/"><h1>Flipkart</h1></Link> 
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/"><i class="fa-solid fa-shop"></i>Products</Link>
          </li>
          <li>
            <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i>Cart ({cartCount})</Link>
          </li>
          <li>
            <Link to="/contactUs"><i class="fa-solid fa-phone"></i>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
