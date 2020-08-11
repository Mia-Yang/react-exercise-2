import React from 'react';
import shopping_cart from '../assets/shopping_cart.png';
import '../components/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Store</h1>
        <div className="counts">
          <img src={shopping_cart} alt="shoping-cart"></img>
          <div className="num">1</div>
        </div>
      </div>
    );
  }
}
export default Header;
